import React from 'react';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AboutTitle from '../img/about-title.png';
import Wires1 from '../img/background-wires-1.png';
import Wires2 from '../img/background-wires-2.png';
import Wires3 from '../img/background-wires-3.png';

import '../css/About.css';

const About = () => {
	return (
		<div className="about">
			<SiteNavbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="text-center">
						<img src={AboutTitle} alt="about title" />
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={12} sm={11} md={10} className="text-center">
						<p className="subtitle">
							Est. in Spring 2020, Web Development at Berkeley aims to increase
							awareness of web development education and technologies within the
							Berkeley community, centralizing the scattered web education
							opportunities and resources offered by current campus
							organizations.
						</p>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col xs={12} sm={11} md={10} className="text-center">
						<p className="sub-subtitle">Get a glimpse of what we offer:</p>
					</Col>
				</Row>
				<Row className="justify-content-around">
					<Col xs={12} sm={3} className="text-center relative-container">
						<img src={Wires1} alt="wires 1" className="wires" />
						<div className="content-box">
							<h3 className="subject-header">Education</h3>
							<p className="subject-text">
								In our Education track, we offer students the unique opportunity
								to gain a comprehensive web development education in both
								frontend and backend. Students will receive interactive lessons
								taught by Berkeley students experienced in Web Development.
							</p>
						</div>
					</Col>
					<Col xs={12} sm={3} className="text-center  relative-container">
						<img src={Wires2} alt="wires 2" className="wires" />
						<div className="content-box">
							<h3 className="subject-header">Development</h3>
							<p className="subject-text">
								In our Development branch, we connect experienced web developers
								to Bay Area startups. Students will partake in the software
								engineering lifecycle, leading the design, build, and deployment
								stages of the client's website.
							</p>
						</div>
					</Col>
					<Col xs={12} sm={3} className="text-center  relative-container">
						<img src={Wires3} alt="wires 3" className="wires" />
						<div className="content-box">
							<h3 className="subject-header">Partnerships</h3>
							<p className="subject-text">
								As a UC Berkeley-based organization, students will have the
								opportunity to partner with clubs on campus and companies around
								the Bay. By creating websites for these organizations, we aim to
								provide our club developers with industry-level experience in
								web development.
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;
