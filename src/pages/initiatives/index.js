import React from 'react';

import initiatives from './constants/Initiatives';
import Header from '../../components/header';
import Button from '../../components/button';

import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Frame from './img/frame.png';

import styles from './style.module.scss';

const Initiatives = () => {
	return (
		<main>
			<Header
				title="our initiatives"
				subtitle="shaping the WDB member experience"
				description="Web Development at Berkeley’s initiatives cater to student developers and designers of all levels, starting from beginners, to experienced developers and designers who want hands on experience. Whether you’ve had years of experience as a full-stack developer, or have zero programming experience, WDB has an initiative for you."
			/>
			<img src={Frame} alt="" className={styles['frame']} />

			<Container>
				<div className={styles['content']}>
					<Row lg="3" med="1" sm="1">
						{initiatives.map(({ title, description, image, link }) => (
							<div className={styles['initiative']}>
								<img src={image} alt={title} />
								<div>
									<h3>{title}</h3>
									<p className={styles['description']}>{description}</p>
								</div>
								<Link to={`/${link}`}>
									<Button text="Learn More" variant="light" />
								</Link>
							</div>
						))}
					</Row>
				</div>
			</Container>

			<div className={styles['header-wrapper']}>
				<Header
					subheader
					title="Interested in Joining Us?"
					description="Applications to join Web Development at Berkeley open in August 2021 for the Fall 2021 semester! Check back here or on our “Join Us” page to fill out our application! We welcome all experience levels and encourage you to apply to learn new skills and hone your existing ones!"
					buttonText="Apply Here"
					linkTo="/join"
				/>
			</div>
		</main>
	);
};

export default Initiatives;
