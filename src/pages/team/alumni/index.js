import React from 'react';

import alum from './data/alumni';
import advisors from './data/advisors';
import Profile from '../../../components/profile';
import Header from '../../../components/header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Blobs from './img/blobs.png';

import styles from '../style.module.scss';

const Alumni = () => {
	return (
		<main>
			<Header title="Our alumni" subtitle="we <3 our alumni!">
				<h1>Alumni</h1>
			</Header>
			<Container className={styles['container']}>
				<h4 className={styles['divider-header']}>UC Berkeley Graduates</h4>
				<Row lg="5" sm="3" xs="2">
					{alum.map((data, i) => (
						<Profile data={data} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Senior Advisors</h4>
				<Row lg="5" sm="3" xs="2">
					{advisors.map((data, i) => (
						<Profile data={data} k ey={i} />
					))}
				</Row>
			</Container>
		</main>
	);
};

export default Alumni;
