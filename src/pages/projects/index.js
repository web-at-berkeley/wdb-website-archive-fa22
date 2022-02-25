import React from 'react';

import clientProjects from './data/client';
import nonprofitProjects from './data/nonprofit';
// import studentProjects from './data/student';
import Header from '../../components/header';
import Project from '../../components/project';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './style.module.scss';

const Projects = () => {
	const currentProjects = clientProjects
		.filter((project) => project.semester === 'Fall 2021')
		.concat(
			nonprofitProjects.filter((project) => project.semester === 'Fall 2021')
		);

	return (
		<main>
			<Header
				title="Our work"
				subtitle="Projects completed for various clients"
				description="Our work encompasses all facets of web design and development, 
				including full-stack web app development, web design, and cloud-based services. 
				We have worked with a wide range of clients, including startups, nonprofits, and student
				organizations. We do pro-bono work for Berkeley campus organizations. For
				external clients, we will work with you to negotiate fair and
				transparent pricing schemes for your specific needs."
			/>
			<Container className={styles['container']}>
				<h3 className={styles['header']}>Current Clients</h3>
				<Row>
					{currentProjects.map((project) => (
						<Project project={project} />
					))}
				</Row>
				<h3 className={styles['header']}>Industry Clients</h3>
				<Row>
					{clientProjects
						.filter((project) => project.semester !== 'Fall 2021')
						.map((project) => (
							<Project project={project} />
						))}
				</Row>
				<h3 className={styles['header']}>Nonprofit Clients</h3>
				<Row>
					{nonprofitProjects
						.filter((project) => project.semester !== 'Fall 2021')
						.map((project) => (
							<Project project={project} />
						))}
				</Row>
				{/* <h3 className={styles['header']}>Student Projects</h3>
				<Row>
					{studentProjects.map((project) => (
						<Project project={project} />
					))}
				</Row> */}
			</Container>
		</main>
	);
};

export default Projects;
