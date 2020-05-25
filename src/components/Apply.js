import React from 'react';

import SiteNavbar from './SiteNavbar';
import SiteNavbarMobile from './mobile/SiteNavbarMobile';
import Footer from './Footer';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LongArrow from '../img/apply/long-arrow.png';
import Arrowhead from '../img/apply/arrowhead.png';
import ToggleArrow from '../img/apply/toggle-arrow.png';
import TeacherArrow from '../img/apply/teacher-arrow.png';
import StudentArrow from '../img/apply/student-arrow.png';
import DeveloperArrow from '../img/apply/developer-arrow.png';

import '../css/Apply.css';

const Apply = () => {
	const large = matchMedia('(max-width: 992px)');
	let Navbar = SiteNavbar;
	if (large.matches) {
		Navbar = SiteNavbarMobile;
	}
	return (
		<div className="apply">
			<Navbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="text-center title-col">
						<h1 className="header">Join The Team.</h1>
					</Col>
				</Row>
				<Row className="long-arrow-top">
					<Col xs={2} className="text-center">
						<p className="timeline-text">
							you are
							<br />
							here
						</p>
						<img src={Arrowhead} alt="arrowhead" />
					</Col>
					<Col xs={8} className="text-center">
						<h2 className="secondary-header">WHAT WE’RE LOOKING FOR</h2>
					</Col>
					<Col xs={2} className="text-center">
						<p className="timeline-text">
							Fall
							<br />
							2020
						</p>
						<img src={Arrowhead} alt="arrowhead" />
					</Col>
				</Row>
				<Row className="long-arrow-row">
					<img src={LongArrow} alt="long-arrow" className="long-arrow" />
				</Row>

				<Row className="long-arrow-bottom">
					<Col xs={2} className="text-center"></Col>
					<Col xs={8} className="text-center">
						<p className="descriptive-text">
							We are currently looking for both frontend and backend teachers,
							as well as Project managers. If you wish to be a part of our
							educational branch or development team, check back in fall 2020!
						</p>
					</Col>
					<Col xs={2} className="text-center">
						<p className="recruitment-text">
							start of
							<br />
							recruitment
						</p>
					</Col>
				</Row>

				<Row className="toggle-row">
					<Col xs={12} lg={4}>
						<img
							src={TeacherArrow}
							alt="teacher-arrow"
							className="teacher-arrow"
						/>
						<Accordion>
							<Card>
								<Accordion.Toggle
									as={Card.Header}
									eventKey="0"
									className="toggle"
								>
									<div className="toggle-top">
										<img
											src={ToggleArrow}
											alt="toggle-arrow"
											className="toggle-arrow"
										/>
										<h3 className="role">Teacher</h3>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>Hello! I'm the body</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
					<Col xs={12} lg={4}>
						<img
							src={StudentArrow}
							alt="student-arrow"
							className="student-arrow"
						/>
						<Accordion>
							<Card>
								<Accordion.Toggle
									as={Card.Header}
									eventKey="0"
									className="toggle"
								>
									<div className="toggle-top">
										<img
											src={ToggleArrow}
											alt="toggle-arrow"
											className="toggle-arrow"
										/>
										<h3 className="role">Student</h3>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>Hello! I'm the body</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
					<Col xs={12} lg={4}>
						<img
							src={DeveloperArrow}
							alt="developer-arrow"
							className="developer-arrow"
						/>
						<Accordion>
							<Card>
								<Accordion.Toggle
									as={Card.Header}
									eventKey="0"
									className="toggle"
								>
									<div className="toggle-top">
										<img
											src={ToggleArrow}
											alt="toggle-arrow"
											className="toggle-arrow"
										/>
										<h3 className="role">Developer</h3>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>Hello! I'm the body</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Apply;
