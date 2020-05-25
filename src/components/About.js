import React from 'react';
import { navigate } from '@reach/router';

import SiteNavbar from './SiteNavbar';
import SiteNavbarMobile from './mobile/SiteNavbarMobile';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Line1 from '../img/about/line-1.png';
import Line2 from '../img/about/line-2.png';
// import Wires1 from '../img/about/background-wires-1.png';
// import Wires2 from '../img/about/background-wires-2.png';
// import Wires3 from '../img/about/background-wires-3.png';

import '../css/About.css';

const About = () => {
	const large = matchMedia('(max-width: 992px)');
	let Navbar = SiteNavbar;
	if (large.matches) {
		Navbar = SiteNavbarMobile;
	}
	return (
		<div className="about">
			<Navbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="text-center">
						<h1 className="header">What We're all about.</h1>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={12} sm={11} className="text-center">
						<p className="subtitle">
							Est. in Spring 2020, Web Development at Berkeley aims to increase
							awareness of web development education and technologies within the
							Berkeley community, centralizing the scattered web education
							opportunities and resources offered by current campus
							organizations.
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
					<Col
						xs={12}
						md={5}
						className="text-center relative-container left-container"
					>
						<div
							className="content-box"
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
					</Col>
					<Col
						xs={12}
						md={5}
						className="text-center relative-container right-container"
					>
						<div
							className="content-box"
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
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={12} md={10} className="text-center relative-container">
						<div
							className="content-box partner-box"
							onClick={() => navigate('/about/partnerships')}
							title="Partnerships"
						>
							<h3 className="subject-header">partnerships</h3>
							<p className="subject-text">
								As a member of the Berkeley tech community, part of our mission
								is to provide web development services to fellow UC Berkeley
								organizations and associated non-profits, giving back to the
								community and prioritizing tech for social good.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default About;
