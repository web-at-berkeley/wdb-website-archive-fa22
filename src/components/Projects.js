import React from 'react';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Formula from '../img/projects/formula.png';
import Resource19 from '../img/projects/resource19.png';
import Cloud from '../img/projects/cloud.png';
import Stac from '../img/projects/stac.png';

import '../css/Projects.css';

const Projects = () => {
	return (
		<div className="projects">
			<SiteNavbar />
			<Container fluid className="body">
				<Row className="align-items-center">
					<Col xs={12} sm={6}>
						<a
							href="https://ev.berkeley.edu/"
							title="Formula Electric at Berkeley"
						>
							<img src={Formula} alt="formula" className="partner" />
						</a>
					</Col>
					<Col xs={12} sm={6}>
						<a href="https://resource19.org/" title="Resource-19">
							<img src={Resource19} alt="resource 19" className="partner" />
						</a>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} sm={6}>
						<img src={Cloud} alt="cloud" className="partner" />
					</Col>
					<Col xs={12} sm={6}>
						<a
							href="https://stac.berkeley.edu/"
							title="Space Technologies at California"
						>
							<img src={Stac} alt="stac" className="partner" />
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Projects;
