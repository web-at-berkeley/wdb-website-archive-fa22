import React from 'react';

import SiteNavbar from '../components/SiteNavbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Overlay from '../img/projects/overlay.png';
import OverlayRotated from '../img/projects/overlay-rotated.png';

import Resource19 from '../img/projects/resource19.png';
import GroTech from '../img/projects/grotech.png';
import Frio from '../img/projects/frio.png';
import Formula from '../img/projects/formula.png';
import Tbf from '../img/projects/tbf.png';
import Cloud from '../img/projects/cloud.png';
import Ansari from '../img/projects/ansari.png';
import Netic from '../img/projects/netic.png';
import TitanRig from '../img/projects/titanrig.png';
import Carepath from '../img/projects/carepath.png';

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
							Our work encompasses all facets of web development, from frontend
							to backend to everything in between. We have worked with a wide
							range of clients, including startups, nonprofits, and student
							organizations.
							<br />
							<br />
							We do pro-bono work for Berkeley campus organizations. For
							external clients, we will work with you to negotiate fair and
							transparent pricing schemes for your specific needs.
						</p>
						<Contact />
						<hr></hr>
						<h1 className="project-header">Past Projects</h1>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} xl={6} className="partner">
						<a
							href="https://www.netic.health/"
							title="Netic Health"
							className="screenshot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Netic}
								alt="Netic Health"
								className="screenshot selectDisable"
								draggable="false"
							/>

							<div class="overlay">
								<img
									src={Overlay}
									alt="overlay"
									className="overlay-image selectDisable"
									draggable="false"
								/>
							</div>
							<div className="text-overlay">
								<h3 className="overlay-header">Netic Health</h3>
								<p className="overlay-text">
									Built with React Native and AWS Amplify
								</p>
							</div>
						</a>
						<div className="description-container">
							<h3 className="description-header">Netic Health</h3>
							<p className="description-text">
								Built with React Native and AWS Amplify
							</p>
						</div>
					</Col>
					<Col xs={12} xl={6} className="partner">
						<a
							href="https://www.titanrig.com/"
							title="Titan Rig"
							className="screenshot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={TitanRig}
								alt="Titan Rig"
								className="screenshot selectDisable"
								draggable="false"
							/>

							<div class="overlay overlay-rotated">
								<img
									src={OverlayRotated}
									alt="overlay"
									className="overlay-image-rotated selectDisable"
									draggable="false"
								/>
							</div>
							<div className="text-overlay text-overlay-rotated">
								<p className="overlay-text overlay-text-rotated">
									worked with AWS and Python
								</p>
								<h3 className="overlay-header overlay-header-rotated">
									Titan Rig
								</h3>
							</div>
						</a>
						<div className="description-container">
							<h3 className="description-header">Titan Rig</h3>
							<p className="description-text">
								Worked with AWS (EC2, API Gateway, DynamoDB, Redshift, and
								Lambda) and Python
							</p>
						</div>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} xl={6} className="partner">
						<a
							href="https://resource19.org/"
							title="Resource-19"
							className="screenshot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Resource19}
								alt="resource 19"
								className="screenshot selectDisable"
								draggable="false"
							/>

							<div class="overlay">
								<img
									src={Overlay}
									alt="overlay"
									className="overlay-image selectDisable"
									draggable="false"
								/>
							</div>
							<div className="text-overlay">
								<h3 className="overlay-header">Resource 19</h3>
								<p className="overlay-text">
									Built using React, JQuery, Bootstrap, Sass, and Firebase
								</p>
							</div>
						</a>
						<div className="description-container">
							<h3 className="description-header">Resource 19</h3>
							<p className="description-text">
								Built using React, JQuery, Bootstrap, Sass, and Firebase
							</p>
						</div>
					</Col>
					<Col xs={12} xl={6} className="partner">
						<a
							href="https://www.ocf.berkeley.edu/~grotech/"
							title="GroTech @ Berkeley"
							className="screenshot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={GroTech}
								alt="grotech"
								className="screenshot selectDisable"
								draggable="false"
							/>

							<div class="overlay overlay-rotated">
								<img
									src={OverlayRotated}
									alt="overlay"
									className="overlay-image-rotated selectDisable"
									draggable="false"
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
						</a>
						<div className="description-container">
							<h3 className="description-header">Grotech @ Berkeley</h3>
							<p className="description-text">Built using HTML, CSS, and PHP</p>
						</div>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} xl={6} className="partner">
						<a
							href="https://devpost.com/software/frio"
							title="Frio"
							className="screenshot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Frio}
								alt="frio"
								className="screenshot selectDisable"
								draggable="false"
							/>

							<div class="overlay overlay-rotated">
								<img
									src={Overlay}
									alt="overlay"
									className="overlay-image-rotated selectDisable"
									draggable="false"
								/>
							</div>
							<div className="text-overlay text-overlay-rotated">
								<p className="overlay-text overlay-text-rotated">
									BUILT USING JS, FLASK, AND SQLITE3
								</p>
								<h3 className="overlay-header overlay-header-rotated selectDisable">
									FRIO
								</h3>
							</div>
						</a>
						<div className="description-container">
							<h3 className="description-header">Frio</h3>
							<p className="description-text">
								Built using Javascript, Flask, and SQLite3
							</p>
						</div>
					</Col>
					<Col xs={12} xl={6} className="partner">
						<a
							href="https://ev.berkeley.edu/"
							title="Formula Electric at Berkeley"
							className="screenshot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Formula}
								alt="formula"
								className="screenshot selectDisable"
								draggable="false"
							/>
							<div class="overlay">
								<img
									src={OverlayRotated}
									alt="overlay"
									className="overlay-image selectDisable"
									draggable="false"
								/>
							</div>
							<div className="text-overlay">
								<h3 className="overlay-header formula-header">
									FORMULA ELECTRIC AT BERKELEY
								</h3>
								<p className="overlay-text">BUILT USING REACT AND BOOTSTRAP</p>
							</div>
						</a>
						<div className="description-container">
							<h3 className="description-header">
								Formula Electric at Berkeley
							</h3>
							<p className="description-text">
								Built using React and Bootstrap
							</p>
						</div>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} xl={6} className="partner">
						<a
							href="https://cloudatcal.org/"
							title="Formula Electric at Berkeley"
							className="screenshot"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={Cloud}
								alt="formula"
								className="screenshot selectDisable"
								draggable="false"
							/>
							<div class="overlay">
								<img
									src={OverlayRotated}
									alt="overlay"
									className="overlay-image selectDisable"
									draggable="false"
								/>
							</div>
							<div className="text-overlay">
								<h3 className="overlay-header formula-header">
									Cloud At Berkeley
								</h3>
								<p className="overlay-text">BUILT USING REACT</p>
							</div>
						</a>
						<div className="description-container">
							<h3 className="description-header">Cloud at Berkeley</h3>
							<p className="description-text">Built using React</p>
						</div>
					</Col>
				</Row>
				<h1 className="project-header">In Progress</h1>
				<Row className="align-items-center">
					<Col xs={12} xl={6} className="partner">
						<img
							src={Tbf}
							alt="TBF"
							className="screenshot selectDisable"
							draggable="false"
						/>

						<div class="overlay overlay-rotated">
							<img
								src={Overlay}
								alt="overlay"
								className="overlay-image-rotated selectDisable"
								draggable="false"
							/>
						</div>
						<div className="text-overlay text-overlay-rotated">
							<p className="overlay-text overlay-text-rotated">
								BUILT USING REACT AND BOOTSTRAP
							</p>
							<h3 className="overlay-header overlay-header-rotated selectDisable">
								THE BERKELEY FORUM
							</h3>
						</div>
						<div className="description-container">
							<h3 className="description-header">The Berkeley Forum</h3>
							<p className="description-text">
								Built using React and Bootstrap
							</p>
						</div>
					</Col>
					<Col xs={12} xl={6} className="partner">
						<img
							src={Ansari}
							alt="frio"
							className="screenshot selectDisable"
							draggable="false"
						/>

						<div class="overlay overlay-rotated">
							<img
								src={Overlay}
								alt="overlay"
								className="overlay-image-rotated selectDisable"
								draggable="false"
							/>
						</div>
						<div className="text-overlay text-overlay-rotated">
							<p className="overlay-text overlay-text-rotated">
								Built with AWS and React
							</p>
							<h3 className="overlay-header overlay-header-rotated selectDisable">
								ANSARI MATH
							</h3>
						</div>
						<div className="description-container">
							<h3 className="description-header">Ansari Math</h3>
							<p className="description-text">
								Built using AWS, Node, Express, and React
							</p>
						</div>
					</Col>
				</Row>
				<Row className="align-items-center">
					<Col xs={12} xl={6} className="partner">
						<img
							src={Carepath}
							alt="Carepath"
							className="screenshot selectDisable"
							draggable="false"
						/>

						<div class="overlay overlay-rotated">
							<img
								src={Overlay}
								alt="overlay"
								className="overlay-image-rotated selectDisable"
								draggable="false"
							/>
						</div>
						<div className="text-overlay text-overlay-rotated">
							<p className="overlay-text overlay-text-rotated">
								BUILT USING REACT AND BOOTSTRAP
							</p>
							<h3 className="overlay-header overlay-header-rotated selectDisable">
								CAREPATH
							</h3>
						</div>
						<div className="description-container">
							<h3 className="description-header">Carepath</h3>
							<p className="description-text">
								Built using React and Bootstrap
							</p>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Projects;