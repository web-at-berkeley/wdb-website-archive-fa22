import clientProjects from './data/client';
import nonprofitProjects from './data/nonprofit';
// import studentProjects from './data/student';
import Header from '../../components/Header';
import Project from '../../components/ProjectCard';

import Container from 'react-bootstrap/Container';

import styles from './style.module.scss';

const Projects = () => {
	const currentProjects = clientProjects.filter(
		(project) => project.semester === 'Fall 2022'
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
				<div className={styles['group']}>
					{currentProjects.map((project, ind) => (
						<Project project={project} key={ind} />
					))}
				</div>
				<h3 className={styles['header']}>Industry Clients</h3>
				<div className={styles['group']}>
					{clientProjects
						.filter((project) => project.semester !== 'Fall 2022')
						.map((project, ind) => (
							<Project project={project} key={ind} />
						))}
				</div>
				<h3 className={styles['header']}>Nonprofit Clients</h3>
				<div className={styles['group']}>
					{nonprofitProjects
						.filter((project) => project.semester !== 'Fall 2021')
						.map((project, ind) => (
							<Project project={project} key={ind} />
						))}
				</div>
			</Container>
		</main>
	);
};

export default Projects;
