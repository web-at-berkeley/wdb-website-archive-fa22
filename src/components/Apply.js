import React from 'react';

import SiteNavbar from './SiteNavbar';
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
	let openedTeacher = false;
	let openedStudent = false;
	let openedDeveloper = false;
	let openedTeacherMobile = false;
	let openedStudentMobile = false;
	let openedDeveloperMobile = false;
	function rotate(arrowName, arrowVariable) {
		document.getElementById(arrowName).style.transition = '0.5s';
		if (!arrowVariable) {
			document.getElementById(arrowName).style.transform = 'rotate(90deg)';
			arrowVariable = true;
		} else {
			document.getElementById(arrowName).style.transform = 'rotate(0)';
			arrowVariable = false;
		}
	}
	const openTeacher = () => {
		rotate('toggle-arrow-teacher', openedTeacher);
		openedTeacher = !openedTeacher;
	};
	const openStudent = () => {
		rotate('toggle-arrow-student', openedStudent);
		openedStudent = !openedStudent;
	};
	const openDeveloper = () => {
		rotate('toggle-arrow-developer', openedDeveloper);
		openedDeveloper = !openedDeveloper;
	};
	const openTeacherMobile = () => {
		rotate('toggle-arrow-teacher-mobile', openedTeacherMobile);
		openedTeacherMobile = !openedTeacherMobile;
	};
	const openStudentMobile = () => {
		rotate('toggle-arrow-student-mobile', openedStudentMobile);
		openedStudentMobile = !openedStudentMobile;
	};
	const openDeveloperMobile = () => {
		rotate('toggle-arrow-developer-mobile', openedDeveloperMobile);
		openedDeveloperMobile = !openedDeveloperMobile;
	};
	return (
		<div>
			<div className="apply">
				<SiteNavbar />
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
							<img
								src={Arrowhead}
								alt="arrowhead"
								className="arrowhead selectDisable"
								draggable="false"
							/>
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
							<img
								src={Arrowhead}
								alt="arrowhead"
								className="arrowhead selectDisable"
								draggable="false"
							/>
						</Col>
					</Row>
					<Row className="long-arrow-row">
						<img
							src={LongArrow}
							alt="long-arrow"
							className="long-arrow selectDisable"
							draggable="false"
						/>
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
								className="teacher-arrow selectDisable"
								draggable="false"
							/>
							<Accordion>
								<Card onClick={openTeacher}>
									<Accordion.Toggle
										as={Card.Header}
										eventKey="0"
										className="toggle"
									>
										<div className="toggle-top">
											<img
												src={ToggleArrow}
												alt="toggle-arrow"
												className="toggle-arrow selectDisable"
												draggable="false"
												id="toggle-arrow-teacher"
											/>
											<h3 className="role">Teacher</h3>
										</div>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											<p className="role-text">
												We're currently looking for two frontend teachers and
												one backend teacher. For both positions, basic knowledge
												of HTML, CSS, and Javascript is required. For frontend
												teachers specifically, knowledge of React and some CSS
												frameworks/pre-processors is a plus. For backend
												teachers, knowledge of Django, Node.js, and some AWS is
												a plus. Prior experience in teaching is a major plus,
												but can also be shown through passion. If interested,
												please send an email to webatberkeley@gmail.com with
												what position you're interested in, a description of
												your teaching ability/experience, as well as your
												familiarity with the aforementioned technologies.
											</p>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Col>
						<Col xs={12} lg={4}>
							<img
								src={StudentArrow}
								alt="student-arrow"
								className="student-arrow selectDisable"
								draggable="false"
							/>
							<Accordion>
								<Card onClick={openStudent}>
									<Accordion.Toggle
										as={Card.Header}
										eventKey="0"
										className="toggle"
									>
										<div className="toggle-top">
											<img
												src={ToggleArrow}
												alt="toggle-arrow"
												className="toggle-arrow selectDisable"
												draggable="false"
												id="toggle-arrow-student"
											/>
											<h3 className="role">Student</h3>
										</div>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											<p className="role-text">
												Hey there! If you're looking to become a student, be on
												the lookout for our application when it opens in the
												beginning of the 2020-2021 school year. No prior web
												development experience is required, instead what we look
												for is a strong work ethic, passion for technology, and
												a desire to learn web development. We look forward to
												meeting you all in the Fall!
											</p>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Col>
						<Col xs={12} lg={4}>
							<img
								src={DeveloperArrow}
								alt="developer-arrow"
								className="developer-arrow selectDisable"
								draggable="false"
							/>
							<Accordion>
								<Card onClick={openDeveloper}>
									<Accordion.Toggle
										as={Card.Header}
										eventKey="0"
										className="toggle"
									>
										<div className="toggle-top">
											<img
												src={ToggleArrow}
												alt="toggle-arrow"
												className="toggle-arrow selectDisable"
												draggable="false"
												id="toggle-arrow-developer"
											/>
											<h3 className="role">Developer</h3>
										</div>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											<p className="role-text">
												For prospective developers, applications will open in
												the Fall, with our application process consisting of the
												written application, a behavioral and technical
												interview, and a social round. The purpose of the
												technical interview will be to ensure that applicants
												are able to perform at the level required by an external
												client, because the work done by developers will be used
												in the real world by many many people. We will give
												applicants the choice between a frontend or backend
												focus and tailor the interview accordingly. Once
												applicants are accepted into the developer track, they
												will have the opportunity to interface with local Bay
												Area startups in developing cutting-edge web apps and
												sites for them, gaining invaluable industry experience
												and exposure to the world of tech.
											</p>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>

			<div className="apply apply-mobile">
				<SiteNavbar />
				<Container fluid className="body">
					<Row>
						<Col xs={12} className="text-center title-col">
							<h1 className="header">Join The Team.</h1>
						</Col>
					</Row>
					<Row className="long-arrow-top">
						<Col xs={12} className="text-center">
							<h2 className="secondary-header">WHAT WE’RE LOOKING FOR</h2>
						</Col>
					</Row>
					<Row className="long-arrow-row">
						<img
							src={LongArrow}
							alt="long-arrow"
							className="long-arrow selectDisable"
							draggable="false"
						/>
					</Row>

					<Row className="justify-content-between">
						<Col xs={4} className="text-center">
							<img
								src={Arrowhead}
								alt="arrowhead"
								className="arrowhead selectDisable"
								draggable="false"
							/>
							<p className="timeline-text">
								you are
								<br />
								here
							</p>
						</Col>
						<Col xs={4} className="text-center">
							<img
								src={Arrowhead}
								alt="arrowhead"
								className="arrowhead selectDisable"
								draggable="false"
							/>
							<p className="timeline-text">
								Fall
								<br />
								2020
							</p>
						</Col>
					</Row>

					<Row className="toggle-row">
						<Col xs={12} lg={4}>
							<Accordion>
								<Card onClick={openTeacherMobile}>
									<Accordion.Toggle
										as={Card.Header}
										eventKey="0"
										className="toggle"
									>
										<div className="toggle-top">
											<img
												src={ToggleArrow}
												alt="toggle-arrow"
												className="toggle-arrow selectDisable"
												draggable="false"
												id="toggle-arrow-teacher-mobile"
											/>
											<h3 className="role">Teacher</h3>
										</div>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											We're currently looking for 2 frontend teachers and 1
											backend teacher. For both positions, basic knowledge of
											HTML, CSS, and Javascript is required. For frontend
											teachers specifically, knowledge of React and some CSS
											frameworks/pre-processors is a plus. For backend teachers,
											knowledge of Django, Node.js, and some AWS is a plus. If
											interested, please send an email to
											webatberkeley@gmail.com with what position you're
											interested in, a description of your teaching ability/
											experience, as well as your familiarity with the
											aforementioned technologies.
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Col>
						<Col xs={12} lg={4}>
							<Accordion>
								<Card onClick={openStudentMobile}>
									<Accordion.Toggle
										as={Card.Header}
										eventKey="0"
										className="toggle"
									>
										<div className="toggle-top">
											<img
												src={ToggleArrow}
												alt="toggle-arrow"
												className="toggle-arrow selectDisable"
												draggable="false"
												id="toggle-arrow-student-mobile"
											/>
											<h3 className="role">Student</h3>
										</div>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											Hey There! If you're looking to become a student, be on
											the lookout for our application when it opens in the
											beginning of the 2020-2021 school year. No prior web
											development experience is required, instead what we look
											for is a strong work ethic, passion for technology, and a
											desire to learn web development. We look forward to
											meeting you all in the Fall!
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Col>
						<Col xs={12} lg={4}>
							<Accordion>
								<Card onClick={openDeveloperMobile}>
									<Accordion.Toggle
										as={Card.Header}
										eventKey="0"
										className="toggle"
									>
										<div className="toggle-top">
											<img
												src={ToggleArrow}
												alt="toggle-arrow"
												className="toggle-arrow selectDisable"
												draggable="false"
												id="toggle-arrow-developer-mobile"
											/>
											<h3 className="role">Developer</h3>
										</div>
									</Accordion.Toggle>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											For prospective developers, applications will open in the
											fall, with our application process consisting of the
											written application, a behavioral interview along with a
											technical interview, and a social round. The purpose of
											the technical interview will be to ensure that you are
											able to perform at the level required by an external
											client, because the work done by developers will be used
											in the real world by many many people. We will give
											applicants the choice between a frontend or backend focus
											and tailor the interview accordingly. Once you are
											accepted into the developer track, you will have the
											oppertunity to interface with local bay area startups in
											developing cutting-edge web apps and sites for them,
											gaining invaluable indutry experience and exposure to the
											world of tech.
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		</div>
	);
};

export default Apply;
