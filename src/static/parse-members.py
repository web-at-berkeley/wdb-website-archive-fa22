import csv
import datetime
import json
import uuid
import requests
import re

'''
TO UPDATE TEAM PAGE:
- export a csv from the roster AirTable with old and current members, put it into roster.csv
- must have these columns Name,First Name,Last Name,Nickname,Photo,Berkeley Email,LinkedIn,Personal Website,SP24 Role,Method of Leaving
- run this script which generates members.json as well as downloads photos to src/assets/pfps
- go and manually re save any photos with HEIC to jpeg

'''


def extract_url_and_filetype(text):
    # Regular expression pattern to extract the file type
    filetype_pattern = r'\.\w+'

    # Regular expression pattern to extract URL
    url_pattern = r'https?://[^\s]+'

    # Find file type
    filetypes = re.findall(filetype_pattern, text)
    # Remove the dot at the beginning
    filetype = filetypes[0][1:] if filetypes else None

    # Find URL
    urls = re.findall(url_pattern, text)
    url = urls[0] if urls else None

    return filetype, url


def download_image(image_url, image_name):
    # Send a GET request to the image URL
    if not image_url:
        return
    response = requests.get(image_url)

    # Check if the request was successful
    if response.status_code == 200:
        # Write the image to a file
        with open("../assets/pfps/" + image_name, 'wb') as file:
            file.write(response.content)
        # print(f"Image downloaded: {image_name}")
    else:
        print(f"Failed to download image: {image_name}")


ROLE_COL_NAME = "SP24 Role"
LINKEDIN_COL_NAME = "LinkedIn"
WEBSITE_COL_NAME = "Personal Website"
METHOD_OF_LEAVE_COL_NAME = "Method of Leaving"
EMAIL_COL_NAME = "Berkeley Email"
PHOTO_COL_NAME = "Photo"

# 1. Parse raw CSV into JSON for all members (including alumni)
(
    roleColIndex,
    linkedInColIndex,
    websiteColIndex,
    emailColIndex,
    methodOfLeavingColIndex,
    photoIndex,
) = (-1, -1, -1, -1, -1, -1)
columns = []
data = {}
with open("roster.csv", encoding="utf8") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=",")
    parsedHeader = False

    for row in csv_reader:
        if not parsedHeader:
            columns = row
            roleColIndex = row.index(ROLE_COL_NAME)
            linkedInColIndex = row.index(LINKEDIN_COL_NAME)
            websiteColIndex = row.index(WEBSITE_COL_NAME)
            emailColIndex = row.index(EMAIL_COL_NAME)
            methodOfLeavingColIndex = row.index(METHOD_OF_LEAVE_COL_NAME)
            photoIndex = row.index(PHOTO_COL_NAME)
            parsedHeader = True
        else:
            firstName = "".join(row[1].strip().split(" "))
            lastName = "".join(row[2].strip().split(" "))
            nickname = row[3].strip()
            methodOfLeaving = row[methodOfLeavingColIndex].strip()

            # Create an index in the case of duplicate names
            index = 0
            for key, existingMember in data.items():
                if (
                    existingMember["firstName"] == firstName
                    and existingMember["lastName"] == lastName
                ):
                    index += 1

            # Skip the current member if they were removed from the club (left and didnt graduate)
            if methodOfLeaving != "" and (
                "Graduated" not in methodOfLeaving and "Personal Choice" not in methodOfLeaving
            ):
                continue
            photo = row[photoIndex]
            file_type, url = extract_url_and_filetype(row[photoIndex])
            download_image(url, "{fN}-{lN}-{ind}.{file_type}".format(
                fN=firstName.lower(), lN=lastName.lower(), ind=index, file_type=file_type
            ))

            # Key users based on a UUIDpyt
            data[str(uuid.uuid4())] = {
                "firstName": firstName,
                "lastName": lastName,
                "nickname": nickname,
                "image": "{fN}-{lN}-{ind}.{file_type}".format(
                    fN=firstName.lower(), lN=lastName.lower(), ind=index, file_type=(file_type if file_type != "heic" and file_type != "HEIC" and file_type != "pdf" else "jpeg")
                ),
                "roles": row[roleColIndex].split(","),
                "linkedIn": row[linkedInColIndex],
                "website": row[websiteColIndex],
                "email": row[emailColIndex],
            }

# 2. Organize Teams and create lists with references to members[] object (uuids)
teams = {
    "seniorAdvisors": [],
    "alumni": [],
    "execMembers": [],
    "productManagers": [],
    "industryMembers": [],
    "bootcampMembers": [],
    "courseStaff": [],
    "memExperienceTeam": [],
    "designTeam": [],
    "externalTeam": [],
}
for key, member in data.items():
    for i in range(0, len(member["roles"])):
        role = member["roles"][i]
        if role == "Senior Advisor":
            if key not in teams["seniorAdvisors"]:
                teams["seniorAdvisors"].append(key)
        elif role == "[Industry] Product Manager":
            if key not in teams["productManagers"]:
                teams["productManagers"].append(key)
        elif "[Exec]" in role:
            if key not in teams["execMembers"]:
                teams["execMembers"].append(key)
        elif "[Industry]" in role:
            if key not in teams["industryMembers"]:
                # Not PMs because they were handled in an earlier case
                teams["industryMembers"].append(key)
        elif "[DeCal]" in role or "[Decal]" in role:
            if key not in teams["courseStaff"]:
                teams["courseStaff"].append(key)
        elif "[Bootcamp]" in role:
            if key not in teams["bootcampMembers"]:
                teams["bootcampMembers"].append(key)
        elif "[Design Team]" in role:
            if key not in teams["designTeam"]:
                teams["designTeam"].append(key)
        elif "[External Team]" in role:
            if role and key not in teams["externalTeam"]:
                teams["externalTeam"].append(key)
        elif "[MET]" in role:
            if key not in teams["memExperienceTeam"]:
                teams["memExperienceTeam"].append(key)
        else:
            if key not in teams["alumni"]:
                teams["alumni"].append(key)


# 3. Write data to the respective JSON files
print("Successfully Parsed {count}".format(count=len(data)))
with open("members.json", "w") as f:
    finalizedData = {
        "allMembers": data,
        "teams": teams,
    }
    json.dump(finalizedData, f, ensure_ascii=False, indent=2)
