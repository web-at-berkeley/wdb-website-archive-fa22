import React from 'react';
import Header from '../../../components/Header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import styles from '../style.module.scss';
import { alumni, seniorAdvisors } from '../../../static/members';
import MemberCard from '../../../components/MemberCard';

const Alumni = () => {
	return (
		<main>
			<Header title="Our alumni" subtitle="we <3 our alumni!">
				<h1>Alumni</h1>
			</Header>
			<Container className={styles['container']}>
				<h4 className={styles['divider-header']}>UC Berkeley Graduates</h4>
				<Row lg="5" sm="3" xs="2">
					{alumni.map((data, i) => (
						<MemberCard member={data} key={i} />
					))}
				</Row>
			</Container>
		</main>
	);
};

export default Alumni;
