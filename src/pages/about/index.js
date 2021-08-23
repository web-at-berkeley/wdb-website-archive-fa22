import React from 'react';

import values from './constants/Values';
import Header from '../../components/header';
import Showcase from '../../components/showcase';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Frame from './img/frame.png';
import Blobs from './img/blobs.png';
import Team from './img/team.png';
import HackSC from './img/hacksc.png';
import HackSCFlowers from './img/hacksc-flowers.png';
import Startups from './img/startups.png';
import Destinations from './img/destinations.png';

import styles from './style.module.scss';

const About = () => {
	return (
		<main>
			<img src={Frame} alt="" className={styles['frame']} />
			<Header
				title="About us"
				subtitle="Who we are and what we do"
				description="Web Development @ Berkeley (WDB) is UC Berkeley’s Premier Web Design and Development organization. We’re a group of students focusing on building the web development and design community."
			/>
			<Container className={styles['container']}>
				<img src={Team} alt="Our WDB Team" className={styles['team']} />

				<div className={styles['culture']}>
					<h3 className={styles['title']}>Our values and culture</h3>
					<div className={styles['values']}>
						<Row lg="3" med="1" sm="1" xs="1">
							{values.map(({ title, description, image }) => (
								<div className={styles['col']}>
									<img src={image} alt="inclusion & acceptance" />
									<h6>{title}</h6>
									<p>{description}</p>
								</div>
							))}
						</Row>
					</div>
				</div>

				<div className={styles['blob-container']}>
					<img src={Blobs} alt="" className={styles['blobs']} />
					<div className={styles['roots']}>
						<img
							src={HackSCFlowers}
							alt="HackSC"
							className={styles['flowers']}
						/>
						<div className={styles['story']}>
							<img
								src={HackSC}
								alt="WDB Founding Team"
								className={styles['usc']}
							/>
							<div className={styles['text']}>
								<h3>Our Roots</h3>
								<p>
									WDB was born out of one sleepless weekend at a hackathon at
									USC. Our organization continuously seeks to capture the
									essence and energy of a hackathon, a place where people of all
									backgrounds go to code, learn, and help one another, all while
									building something they’re passionate for.
								</p>
							</div>
						</div>
					</div>

					<div className={styles['showcase']}>
						<Showcase title="Built by our entrepreneurs" image={Startups} />
					</div>

					<div className={styles['showcase']}>
						<Showcase title="Our Destinations" image={Destinations} />
					</div>
				</div>
			</Container>
		</main>
	);
};

export default About;
