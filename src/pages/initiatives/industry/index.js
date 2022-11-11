import React from 'react';

import roles from './constants/Roles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Clients from './img/clients.png';
import RoleBlobs from './img/role-blobs.png';
import ClientBlobs from './img/client-blobs.png';

import styles from './style.module.scss';

const Industry = () => {
	return (
		<main>
			<Header
				title="industry"
				subtitle="building the next generation of Developers & Designers"
				description="In our development initiative, we allow experienced developers to gain hands-on experience working with industry clients. Students will partake in the software engineering lifecycle, leading the design, build, and deployment stages of the client's website."
			/>
			<Container className={styles['container']}>
				<div className={styles['roles']}>
					<h3>who we are</h3>
					<div className={styles['row']}>
						<img src={RoleBlobs} alt="" className={styles['blobs']} />

						<Row lg="3" med="1" sm="1">
							{roles.map((role) => (
								<div className={styles['role']}>
									<img src={role.image} alt={role.title} />
									<h6>{role.title}</h6>
									<p>{role.description}</p>
								</div>
							))}
						</Row>
					</div>
				</div>

				<div className={styles['clients']}>
					<img src={ClientBlobs} alt="" className={styles['blobs']} />
					<h3 className={styles['title']}>who we work with</h3>
					<p className={styles['subtitle']}>
						Our partners, clients, and sponsors come from a wide array of
						industries.
					</p>
					<div className={styles['graphic']}>
						<img src={Clients} alt="Clients and partners" />
					</div>
					<Link to="/work-with-us" className={styles['work-button']}>
						<Button text="work with us" />
					</Link>
				</div>
			</Container>
		</main>
	);
};

export default Industry;
