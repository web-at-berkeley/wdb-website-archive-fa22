import React from 'react';
import { SiteNavbar, Footer } from '../../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Graphic from './img/edu-graphic.png';
import RightNav from '../../img/right-nav.png';
import CourseStaff from './img/course-staff.png';
import CourseStaffMobile from './img/course-staff-mobile.png';

import './css/AboutPages.scss';

const Education = () => {
	return (
		<div className="about-page education">
			<SiteNavbar />
			<Container fluid className="body">
				<img
					src={RightNav}
					alt="right nav"
					className="right-nav"
					draggable="false"
				/>
				<Row>
					<Col xs={12} className="text-center">
						<h1 className="header">
							Intro to Full Stack DeCal
							<span style={{ textShadow: 'none' }}></span>
						</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center">
						<p className="edu-subtitle">
							This DeCal is a 3-unit course meant to give students of all levels
							of experience a chance to experience full stack development. The
							course is highly hands-on, as we believe doing is the best way to
							learn any new skill. You will complete several course projects
							including a final full-stack web application project where you can
							build anything you wish with the skills you’ve learned!
						</p>
						<p className="edu-subtitle">
							We also offer a variety of public workshops and give back to the
							community through providing all of our education lectures through
							our{' '}
							<a href="https://www.youtube.com/channel/UCGpukPda1pJ8Ei20e02oR0w?view_as=subscriber">
								Youtube
							</a>
							.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center" style={{ padding: '0' }}>
						<img
							src={Graphic}
							alt="WDB Education Graphic"
							style={{ width: '100%' }}
							draggable="false"
							className="graphic graphic-desktop"
						/>
						<img
							src={Graphic}
							alt="WDB Education Graphic"
							style={{ width: '100%' }}
							draggable="false"
							className="graphic graphic-mobile"
						/>
						<img
							src={CourseStaff}
							alt="WDB Course Staff"
							style={{ width: '100%' }}
							draggable="false"
							className="graphic graphic-desktop"
						/>
						<img
							src={CourseStaffMobile}
							alt="WDB Course Staff"
							style={{ width: '100%', marginTop: '80px' }}
							draggable="false"
							className="graphic graphic-mobile"
						/>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Education;
