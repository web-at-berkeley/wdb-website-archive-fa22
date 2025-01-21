import {
	bootcampMembers,
	courseStaff,
	designTeam,
	execMembers,
	industryDevelopers,
	industryDesigners,
	memExperienceTeam,
	productManagers,
	seniorAdvisors,
} from '../../../static/members';

import Header from '../../../components/Header';
import MemberCard from '../../../components/MemberCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Side1 from './img/side-1.png';
import Side2 from './img/side-2.png';
// import Side3 from './img/side-3.png';

import { Member } from '../../../models/Member';
import styles from '../style.module.scss';

const removePrefix = (role: string) => {
	return role
		.replace(/\[(Industry)|(Exec)|(DeCal)\]/, '')
		.replace(/\[|\]/g, '');
};

const filterRoles = (member: Member | undefined, prefix: string) => {
	if (!member?.roles) {
		console.warn('Member or member roles is undefined:', member);
		return {
			firstName: 'Unknown',
			lastName: '',
			roles: [],
			image: '',
			nickname: '',
		};
	}
	return {
		...member,
		roles: member.roles.filter((r) => r.includes(prefix)).map(removePrefix),
	};
};

const alphabeticalRoleSort = (a: Member, b: Member) => {
	const aRoles = a.roles.join('');
	const bRoles = b.roles.join('');
	return aRoles.localeCompare(bRoles) || a.firstName.localeCompare(b.firstName);
};

const execSort = (a: Member, b: Member) => {
	// Define the priority of the roles
	const rolePriority: { [role: string]: number } = {
		'[Exec] President': 1,
		'[Exec] VP Internal': 2,
		'[Exec] VP External': 3,
	};

	// Get the highest priority role for each member or default to a high number
	const aMaxRole = a.roles.map((role) => rolePriority[role] || 1000).sort()[0];
	const bMaxRole = b.roles.map((role) => rolePriority[role] || 1000).sort()[0];

	// Compare based on role priority
	if (aMaxRole !== bMaxRole) {
		return aMaxRole - bMaxRole;
	}

	// If roles are the same, sort alphabetically by role
	const aRoles = a.roles.join('');
	const bRoles = b.roles.join('');
	const roleComparison = aRoles.localeCompare(bRoles);
	if (roleComparison !== 0) {
		return roleComparison;
	}

	// If there is still a tie, sort by first name
	return a.firstName.localeCompare(b.firstName);
};

execMembers.sort(execSort);
industryDevelopers.sort(alphabeticalRoleSort);
industryDesigners.sort(alphabeticalRoleSort);
productManagers.sort(alphabeticalRoleSort);

const Members = () => {
	return (
		<main>
			<Header
				title="Meet the team"
				subtitle="Students with a passion for building."
			/>
			<img src={Side1} alt="" className={styles['side-1']} />
			<img src={Side2} alt="" className={styles['side-2']} />
			{/* <img src={Side3} alt="" className={styles['side-3']} /> */}
			<Container className={styles['container']}>
				<h4 className={styles['divider-header']}>Exec</h4>
				<Row lg="5" sm="3" xs="2">
					{execMembers.map((data, i) => (
						<MemberCard member={filterRoles(data, '[Exec]')} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Product Managers</h4>
				<Row lg="5" sm="3" xs="2">
					{productManagers.map((data, i) => (
						<MemberCard member={filterRoles(data, '[Industry]')} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Industry Branch</h4>
				<h4 className={styles['sub-header']}>Developers</h4>

				<Row lg="5" sm="3" xs="2">
					{industryDevelopers.map((data, i) => (
						<MemberCard
							member={filterRoles(data, '[Industry] Developer')}
							key={i}
						/>
					))}
				</Row>

				<h4 className={styles['sub-header']}>Designers</h4>

				<Row lg="5" sm="3" xs="2">
					{industryDesigners.map((data, i) => (
						<MemberCard
							member={filterRoles(data, '[Industry] Designer')}
							key={i}
						/>
					))}
				</Row>

				<h4 className={styles['divider-header']}>Supplementary Roles</h4>

				<h4 className={styles['sub-header']}>Course Staff</h4>
				<Row lg="5" sm="3" xs="2">
					{courseStaff.map((data, i) => (
						<MemberCard member={filterRoles(data, '[DeCal]')} key={i} />
					))}
				</Row>

				{/* <h4 className={styles['divider-header']}>Product Bootcamp</h4>
				<Row lg="5" sm="3" xs="2">
					{bootcampMembers.map((data, i) => (
						<MemberCard member={filterRoles(data, '[Bootcamp]')} key={i} />
					))}
				</Row> */}
				<h4 className={styles['sub-header']}>Design Team</h4>
				<Row lg="5" sm="3" xs="2">
					{designTeam.map((data, i) => (
						<MemberCard member={filterRoles(data, '[Design Team]')} key={i} />
					))}
				</Row>
				<h4 className={styles['sub-header']}>Member Experience Team</h4>
				<Row lg="5" sm="3" xs="2">
					{memExperienceTeam.map((data, i) => (
						<MemberCard member={filterRoles(data, '[MET]')} key={i} />
					))}
				</Row>
				<h4 className={styles['sub-header']}>Senior Advisors</h4>
				<Row lg="5" sm="3" xs="2">
					{seniorAdvisors.map((data, i) => (
						<MemberCard
							member={filterRoles(data, '[Senior Advisor]')}
							key={i}
						/>
					))}
				</Row>
			</Container>
		</main>
	);
};

export default Members;
