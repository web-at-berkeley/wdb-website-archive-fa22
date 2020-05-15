import React from 'react';

import SiteNavbar from './SiteNavbar';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjectsTitle from '../img/projects/projects-title.png';
import Overlay from '../img/projects/overlay.png';
import Resource19 from '../img/projects/resource19.png';
import GroTech from '../img/projects/grotech.png';
import Frio from '../img/projects/frio.png';
import Formula from '../img/projects/formula.png';

import '../css/Projects.css';

const Projects = () => {
	return (
		<div className="projects">
			<SiteNavbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="text-center title-col">
						<img src={ProjectsTitle} alt="projects title" draggable="false" />
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} sm={6} className="partner">
						<a
							href="https://resource19.org/"
							title="Resource-19"
							className="screenshot"
						>
							<img src={Resource19} alt="resource 19" className="screenshot" />
						</a>
						<div class="overlay">
							<img src={Overlay} alt="overlay" className="overlay-image" />
						</div>
					</Col>
					<Col xs={12} sm={6} className="partner">
						<a href="/" title="GroTech @ Berkeley" className="screenshot">
							<img src={GroTech} alt="grotech" className="screenshot" />
						</a>
						<div class="overlay overlay-rotated">
							<img
								src={Overlay}
								alt="overlay"
								className="overlay-image-rotated"
							/>
						</div>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} sm={6} className="partner">
						<a
							href="https://devpost.com/software/frio"
							title="Frio"
							className="screenshot"
						>
							<img src={Frio} alt="frio" className="screenshot" />
						</a>
						<div class="overlay overlay-rotated">
							<img
								src={Overlay}
								alt="overlay"
								className="overlay-image-rotated"
							/>
						</div>
					</Col>
					<Col xs={12} sm={6} className="partner">
						<a
							href="https://ev.berkeley.edu/"
							title="Formula Electric at Berkeley"
							className="screenshot"
						>
							<img src={Formula} alt="formula" className="screenshot" />
						</a>
						<div class="overlay">
							<img src={Overlay} alt="overlay" className="overlay-image" />
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Projects;
