import {
	bootcampMembers,
	courseStaff,
	designTeam,
	execMembers,
	industryMembers,
	memExperienceTeam,
	productManagers,
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

const filterRoles = (member: Member, prefix: string) => {
	return {
		...member,
		roles: member.roles.filter((r) => r.includes(prefix)).map(removePrefix),
	};
};

const alphabeticalRoleSort = (a: Member, b: Member) => {
	const aRoles = a.roles.join('');
	const bRoles = b.roles.join('');
	return aRoles.localeCompare(bRoles) || b.firstName.localeCompare(a.firstName);
};

execMembers.sort(alphabeticalRoleSort);
industryMembers.sort(alphabeticalRoleSort);

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
				<Row lg="5" sm="3" xs="2">
					{industryMembers.map((data, i) => (
						<MemberCard member={filterRoles(data, '[Industry]')} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Course Staff</h4>
				<Row lg="5" sm="3" xs="2">
					{courseStaff.map((data, i) => (
						<MemberCard member={filterRoles(data, '[DeCal]')} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Product Bootcamp</h4>
				<Row lg="5" sm="3" xs="2">
					{bootcampMembers.map((data, i) => (
						<MemberCard member={filterRoles(data, '[Bootcamp]')} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Member Experience Team</h4>
				<Row lg="5" sm="3" xs="2">
					{memExperienceTeam.map((data, i) => (
						<MemberCard member={filterRoles(data, '[MET]')} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Design Team</h4>
				<Row lg="5" sm="3" xs="2">
					{designTeam.map((data, i) => (
						<MemberCard member={filterRoles(data, '[Design Team]')} key={i} />
					))}
				</Row>

				{/* <h4 className={styles['divider-header']}>External Team</h4>
				<Row lg="5" sm="3" xs="2">
					{externalTeam.map((data, i) => (
						<MemberCard member={filterRoles(data, '[External Team]')} key={i} />
					))}
				</Row> */}
			</Container>
		</main>
	);
};

export default Members;
