import React from 'react';

import leadership from './data/leadership';
import developers from './data/developers';
import designers from './data/designers';
import Profile from '../../../components/profile';
import Header from '../../../components/header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Side1 from './img/side-1.png';
import Side2 from './img/side-2.png';
// import Side3 from './img/side-3.png';

import styles from '../style.module.scss';

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
				<h4 className={styles['divider-header']}>Leadership</h4>
				<Row lg="5" sm="3" xs="2">
					{leadership.map((data, i) => (
						<Profile data={data} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Product Developers</h4>
				<Row lg="5" sm="3" xs="2">
					{developers.map((data, i) => (
						<Profile data={data} k ey={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Product Designers</h4>
				<Row lg="5" sm="3" xs="2">
					{designers.map((data, i) => (
						<Profile data={data} key={i} />
					))}
				</Row>
			</Container>
		</main>
	);
};

export default Members;
