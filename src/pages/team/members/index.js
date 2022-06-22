import React from 'react';

import executives from './data/exec';
import developers from './data/developers';
import designers from './data/designers';
import coursestaff from './data/coursestaff';
import designteam from './data/desteam';
import Product from './data/product';
import counselors from './data/counselors';
import external from './data/external';

import met from './data/met';
import Profile from '../../../components/profile';
import Header from '../../../components/header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Side1 from './img/side-1.png';
import Side2 from './img/side-2.png';
// import Side3 from './img/side-3.png';

import styles from '../style.module.scss';

const Members = () => {
	const compareNames = (a, b) => {
		return a.name.localeCompare(b.name);
	};
	developers.sort(compareNames);
	designers.sort(compareNames);
	coursestaff.sort(compareNames);
	met.sort(compareNames);
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
					{executives.map((data, i) => (
						<Profile data={data} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Design Team</h4>
				<Row lg="5" sm="3" xs="2">
					{designteam.map((data, i) => (
						<Profile data={data} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Product Managers</h4>
				<Row lg="5" sm="3" xs="2">
					{Product.map((data, i) => (
						<Profile data={data} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Bootcamp Counselors</h4>
				<Row lg="5" sm="3" xs="2">
					{counselors.map((data, i) => (
						<Profile data={data} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>External</h4>
				<Row lg="5" sm="3" xs="2">
					{external.map((data, i) => (
						<Profile data={data} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Member Experience Team</h4>
				<Row lg="5" sm="3" xs="2">
					{met.map((data, i) => (
						<Profile data={data} key={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Course Staff</h4>
				<Row lg="5" sm="3" xs="2">
					{coursestaff.map((data, i) => (
						<Profile data={data} k ey={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Developers</h4>
				<Row lg="5" sm="3" xs="2">
					{developers.map((data, i) => (
						<Profile data={data} k ey={i} />
					))}
				</Row>

				<h4 className={styles['divider-header']}>Designers</h4>
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
