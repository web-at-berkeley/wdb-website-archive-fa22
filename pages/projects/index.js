import React from 'react';
import {
	PastProjects,
	CurrentProjects,
	StudentProjects,
} from '../../data/projects';
import { SiteNavbar, Footer, Contact, Project } from '../../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {
	return (
		<div className="projects">
			<SiteNavbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="title-col">
						<h1 className="header">Our Work.</h1>
						<p className="subtitle">
							Our work encompasses all facets of web development, from frontend
							to backend to everything in between. We have worked with a wide
							range of clients, including startups, nonprofits, and student
							organizations.
						</p>
						<p className="subtitle">
							We do pro-bono work for Berkeley campus organizations. For
							external clients, we will work with you to negotiate fair and
							transparent pricing schemes for your specific needs.
						</p>
						<Contact />
					</Col>
				</Row>
				<h3 className="project-header">Current Projects</h3>
				<Row>
					{CurrentProjects.map((project) => (
						<Project project={project} />
					))}
				</Row>
				<h3 className="project-header">Past Projects</h3>
				<Row>
					{PastProjects.map((project) => (
						<Project project={project} />
					))}
				</Row>
				<h3 className="project-header">Student Projects</h3>
				<Row>
					{StudentProjects.map((project) => (
						<Project project={project} />
					))}
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Projects;
