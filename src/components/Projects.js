import React from 'react';

import SiteNavbar from './SiteNavbar';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Overlay from '../img/projects/overlay.png';
import OverlayRotated from '../img/projects/overlay-rotated.png';
import Resource19 from '../img/projects/resource19.jpg';
import GroTech from '../img/projects/grotech.jpg';
import Frio from '../img/projects/frio.jpg';
import Formula from '../img/projects/formula.jpg';

import '../css/Projects.css';

const Projects = () => {
	return (
		<div className="projects">
			<SiteNavbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="text-center title-col">
						<h1 className="header">Our Work.</h1>
						<p className="subtitle">
							Our work is 100% pro-bono and for the benefit of the Berkeley
							campus community.
						</p>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} xl={6} className="partner">
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
						<div className="text-overlay">
							<h3 className="overlay-header">RESOURCE 19</h3>
							<p className="overlay-text">
								BUILT USING REACT, JQUERY, BOOTSTRAP, SASS, AND FIREBASE
							</p>
						</div>
					</Col>
					<Col xs={12} xl={6} className="partner">
						<a href="/" title="GroTech @ Berkeley" className="screenshot">
							<img src={GroTech} alt="grotech" className="screenshot" />
						</a>
						<div class="overlay overlay-rotated">
							<img
								src={OverlayRotated}
								alt="overlay"
								className="overlay-image-rotated"
								style={{ bottom: '33.5%' }}
							/>
						</div>
						<div className="text-overlay text-overlay-rotated">
							<p className="overlay-text overlay-text-rotated">
								BUILT USING HTML, CSS, AND PHP
							</p>
							<h3 className="overlay-header overlay-header-rotated">
								GROTECH @BERKELEY
							</h3>
						</div>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} xl={6} className="partner">
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
						<div className="text-overlay text-overlay-rotated">
							<p className="overlay-text overlay-text-rotated">
								BUILT USING JS, FLASK, AND SQLITE3
							</p>
							<h3 className="overlay-header overlay-header-rotated">FRIO</h3>
						</div>
					</Col>
					<Col xs={12} xl={6} className="partner">
						<a
							href="https://ev.berkeley.edu/"
							title="Formula Electric at Berkeley"
							className="screenshot"
						>
							<img src={Formula} alt="formula" className="screenshot" />
						</a>
						<div class="overlay">
							<img
								src={OverlayRotated}
								alt="overlay"
								className="overlay-image"
								style={{ top: '33.5%' }}
							/>
						</div>
						<div className="text-overlay">
							<h3 className="overlay-header formula-header">
								FORMULA ELECTRIC AT BERKELEY
							</h3>
							<p className="overlay-text">BUILT USING REACT AND BOOTSTRAP</p>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Projects;
