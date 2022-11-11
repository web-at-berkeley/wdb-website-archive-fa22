import csv
import json
import uuid
import datetime

ROLE_COL_NAME = "FA22 Role(s)"
LINKEDIN_COL_NAME = "LinkedIn"
WEBSITE_COL_NAME = "Personal Website"
METHOD_OF_LEAVE_COL_NAME = "Method of Leaving"
EMAIL_COL_NAME = "Berkeley Email"

# 1. Parse raw CSV into JSON for all members (including alumni)
roleColIndex, linkedInColIndex, websiteColIndex, birthdayColIndex, emailColIndex, methodOfLeavingColIndex = -1, -1, -1, -1, -1, -1
columns = []
data = {}
with open('roster.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    parsedHeader = False

    for row in csv_reader:
        if not parsedHeader:
            columns = row
            roleColIndex = row.index(ROLE_COL_NAME)
            linkedInColIndex = row.index(LINKEDIN_COL_NAME)
            websiteColIndex = row.index(WEBSITE_COL_NAME)
            emailColIndex = row.index(EMAIL_COL_NAME)
            methodOfLeavingColIndex = row.index(METHOD_OF_LEAVE_COL_NAME)
            parsedHeader = True
        else:
            firstName = "".join(row[1].strip().split(" "))
            lastName = "".join(row[2].strip().split(" "))
            nickname = row[3].strip()
            birthday = row[birthdayColIndex].strip()
            methodOfLeaving = row[methodOfLeavingColIndex].strip()

            # Create an index in the case of duplicate names
            index = 0
            for key, existingMember in data.items():
              if existingMember["firstName"] == firstName and existingMember["lastName"] == lastName:
                index += 1

            # Skip the current member if they were removed from the club (left and didnt graduate)
            if methodOfLeaving != "" and (methodOfLeaving != "Graduated" or methodOfLeaving != "Personal Choice"):
              continue

            # Key users based on a UUID
            data[str(uuid.uuid4())] = {
              "firstName": firstName,
              "lastName": lastName,
              "nickname": nickname,
              "image": "{fN}-{lN}-{ind}.jpg".format(fN = firstName.lower(), lN=lastName.lower(), ind=index),
              "roles": row[roleColIndex].split(","),
              "linkedIn": row[linkedInColIndex],
              "website": row[websiteColIndex],
              "email": row[emailColIndex]
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
    elif "[DeCal]" in role:
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
print("Successfully Parsed {count}".format(count = len(data)))
with open('members.json', 'w') as f:
  finalizedData = {
    "allMembers": data,
    "teams": teams,
  }
  json.dump(finalizedData, f, ensure_ascii=False, indent=2)
