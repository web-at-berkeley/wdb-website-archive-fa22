import { Member } from '../models/Member';
import memberData from './members.json';

const memberList: { [key: string]: Member } = memberData.allMembers;
const seniorAdvisors = memberData.teams['seniorAdvisors'].map(
	(id) => memberList[id]
);
const execMembers = memberData.teams['execMembers'].map((id) => memberList[id]);
const productManagers = memberData.teams['productManagers'].map(
	(id) => memberList[id]
);
const industryDevelopers = memberData.teams['industryDevelopers'].map(
	(id) => memberList[id]
);
const industryDesigners = memberData.teams['industryDesigners'].map(
	(id) => memberList[id]
);
const bootcampMembers = memberData.teams['bootcampMembers'].map(
	(id) => memberList[id]
);
const courseStaff = memberData.teams['courseStaff'].map((id) => memberList[id]);
const memExperienceTeam = memberData.teams['memExperienceTeam'].map(
	(id) => memberList[id]
);
const designTeam = memberData.teams['designTeam'].map((id) => memberList[id]);
const alumni = memberData.teams['alumni'].map((id) => memberList[id]);
export {
	seniorAdvisors,
	execMembers,
	productManagers,
	industryDevelopers,
	industryDesigners,
	bootcampMembers,
	courseStaff,
	memExperienceTeam,
	designTeam,
	alumni,
};

export default memberList;
