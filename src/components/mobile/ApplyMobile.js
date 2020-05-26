import React from 'react';

import SiteNavbarMobile from '../mobile/SiteNavbarMobile';
import Footer from '../Footer';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LongArrow from '../../img/apply/long-arrow.png';
import Arrowhead from '../../img/apply/arrowhead.png';
import ToggleArrow from '../../img/apply/toggle-arrow.png';
// import TeacherArrow from '../../img/apply/teacher-arrow.png';
// import StudentArrow from '../../img/apply/student-arrow.png';
// import DeveloperArrow from '../../img/apply/developer-arrow.png';

import '../../css/Apply.css';

const Apply = () => {
	let openedTeacher = false;
	let openedStudent = false;
	let openedDeveloper = false;
	const openTeacher = () => {
		document.getElementById('toggle-arrow-teacher').style.transition = '0.5s';
		if (!openedTeacher) {
			document.getElementById('toggle-arrow-teacher').style.transform =
				'rotate(90deg)';
			openedTeacher = true;
		} else {
			document.getElementById('toggle-arrow-teacher').style.transform =
				'rotate(0)';
			openedTeacher = false;
		}
	};
	const openStudent = () => {
		document.getElementById('toggle-arrow-student').style.transition = '0.5s';
		if (!openedStudent) {
			document.getElementById('toggle-arrow-student').style.transform =
				'rotate(90deg)';
			openedStudent = true;
		} else {
			document.getElementById('toggle-arrow-student').style.transform =
				'rotate(0)';
			openedStudent = false;
		}
	};
	const openDeveloper = () => {
		document.getElementById('toggle-arrow-developer').style.transition = '0.5s';
		if (!openedDeveloper) {
			document.getElementById('toggle-arrow-developer').style.transform =
				'rotate(90deg)';
			openedDeveloper = true;
		} else {
			document.getElementById('toggle-arrow-developer').style.transform =
				'rotate(0)';
			openedDeveloper = false;
		}
	};

	return (
		<div className="apply">
			<SiteNavbarMobile />
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
					<img src={LongArrow} alt="long-arrow" className="long-arrow" />
				</Row>

				<Row className="justify-content-between">
					<Col xs={4} className="text-center">
						<img src={Arrowhead} alt="arrowhead" className="arrowhead" />
						<p className="timeline-text">
							you are
							<br />
							here
						</p>
					</Col>
					<Col xs={4} className="text-center">
						<img src={Arrowhead} alt="arrowhead" className="arrowhead" />
						<p className="timeline-text">
							Fall
							<br />
							2020
						</p>
					</Col>
				</Row>

				<Row className="toggle-row">
					<Col xs={12} lg={4}>
						{/* <img
							src={TeacherArrow}
							alt="teacher-arrow"
							className="teacher-arrow"
						/> */}
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
											className="toggle-arrow"
											id="toggle-arrow-teacher"
										/>
										<h3 className="role">Teacher</h3>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										We're currently looking for 2 frontend teachers and 1
										backend teacher. For both positions, basic knowledge of
										HTML, CSS, and Javascript is required. For frontend teachers
										specifically, knowledge of React and some cSS
										frameworks/pre-processors is a plus. For backend teachers,
										knowledge of Django, Node.js, and some AWS is a plus. If
										interested, please send an email to webatberkeley@gmail.com
										with what position you're interested in, a description of
										your teaching ability/ experience, as well as your
										familiarity with the aforementioned technologies, and of
										course, go bears!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
					<Col xs={12} lg={4}>
						{/* <img
							src={StudentArrow}
							alt="student-arrow"
							className="student-arrow"
						/> */}
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
											className="toggle-arrow"
											id="toggle-arrow-student"
										/>
										<h3 className="role">Student</h3>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										Hey There! If you're looking to become a student, be on the
										lookout for our application when it opens in the beginning
										of the 2020-2021 school year. No prior web development
										experience is required, instead what we look for is a strong
										work ethic, passion for technology, and a desire to learn
										web development. We look forward to meeting you all in the
										Fall!
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
					<Col xs={12} lg={4}>
						{/* <img
							src={DeveloperArrow}
							alt="developer-arrow"
							className="developer-arrow"
						/> */}
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
											className="toggle-arrow"
											id="toggle-arrow-developer"
										/>
										<h3 className="role">Developer</h3>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										For prospective developers, applications will open in the
										fall, with our application process consisting of the written
										application, a behavioral interview along with a technical
										interview, and a social round. The purpose of the technical
										interview will be to ensure that you are able to perform at
										the level required by an external client, because the work
										done by developers will be used in the real world by many
										many people. We will give applicants the choice between a
										frontend or backend focus and tailor the interview
										accordingly. Once you are accepted into the developer track,
										you will have the oppertunity to interface with local bay
										area startups in developing cutting-edge web apps and sites
										for them, gaining invaluable indutry experience and exposure
										to the world of tech.
									</Card.Body>
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
