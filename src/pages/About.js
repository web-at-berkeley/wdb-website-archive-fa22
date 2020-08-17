import React from 'react';
import { navigate } from '@reach/router';

import SiteNavbar from '../components/SiteNavbar';
import Footer from '../components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Line1 from '../img/about/line-1.png';
import Line2 from '../img/about/line-2.png';
import LeftRings from '../img/about/leftrings.png';
import RightRings from '../img/about/rightrings.png';

import '../css/About.css';

const About = () => {
	return (
		<div className="about">
			<SiteNavbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="text-center">
						<h1 className="header">What We're all about.</h1>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={12} sm={11} className="text-center">
						<p className="subtitle">
							Web Development at Berkeley aims to increase awareness of web
							development education and technologies within the Berkeley
							community, centralizing the scattered web education opportunities
							and resources offered by current campus organizations.
						</p>
						<img
							src={Line1}
							alt="line"
							className="line-1 selectDisable"
							draggable="false"
						/>
						<img
							src={Line2}
							alt="line"
							className="line-2 selectDisable"
							draggable="false"
						/>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={12} sm={11} md={10} className="text-center">
						<p className="sub-subtitle">Get a glimpse of what we offer:</p>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={12} md={4} className="relative-container left-container">
						<div
							className="inner-container"
							onClick={() => navigate('/about/education')}
							title="Education"
						>
							<h3 className="subject-header">Education</h3>
							<p className="subject-text">
								With Berkeley's scattered web development education
								opportunities, it can be difficult to know where to start
								pursuing this knowledge. Web Developers of Berkeley is the place
								for students to master these skills and web developers to apply
								their knowledge.
							</p>
						</div>
						<img
							src={LeftRings}
							alt="left rings"
							className="left-rings selectDisable"
							draggable="false"
						/>
					</Col>

					<Col xs={12} md={4} className="relative-container right-container">
						<div
							className="inner-container"
							onClick={() => navigate('/about/development')}
							title="Development"
						>
							<h3 className="subject-header">Development</h3>
							<p className="subject-text">
								Learning has its true payoff when given the chance to apply
								one’s knowledge in the real world. We provide opportunities to
								develop for real startups in the Bay Area, where students will
								experience every step of the software development process.
							</p>
						</div>
						<img
							src={RightRings}
							alt="right rings"
							className="right-rings selectDisable"
							draggable="false"
						/>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col
						xs={12}
						md={9}
						className="relative-container partner-container"
						onClick={() => navigate('/about/partnerships')}
						title="Partnerships"
					>
						<h3 className="subject-header">partnerships</h3>
						<p className="subject-text">
							As a member of the Berkeley tech community, part of our mission is
							to provide web development services to fellow UC Berkeley
							organizations and associated non-profits, giving back to the
							community and prioritizing tech for social good.
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default About;
