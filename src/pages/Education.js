import React from 'react';
import { SiteNavbar } from '../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Graphic from '../img/about/education/graphic.png';
import GraphicMobile from '../img/about/education/graphic-mobile.png';
import RightNav from '../img/right-nav.png';

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
							Education
							<span style={{ textShadow: 'none' }}> With Application.</span>
						</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center">
						<p className="edu-subtitle">
							In our Education Branch, we offer students the unique opportunity
							to gain a comprehensive web development education in both
							frontend, UI/UX design, and backend. Students will receive
							interactive lessons taught by experienced Berkeley students as
							well as hands-on project experiences. Students will be learning
							alongside a small cohort of other club members, meaning lessons
							will be highly personalized to each individual.
						</p>
						<p className="edu-subtitle">
							All students go through our "basic stack", which consists of 3.5
							weeks of HTML, CSS, JavaScript, and basic networking protocols.
							From these students choose a specialization in frontend or backend
							(mostly for logistical purposes, all materials and lectures from
							both branches are open to all students). The frontend track covers
							React.js, UI/UX design, along with other miscellaneous frontend
							technologies such as SASS and Typescript. The backend track covers
							Node.js, Django, AWS, MongoDB, and PostgreSQL. We aim to offer a
							full-stack education, so both tracks contain 3 lessons pulled from
							the other track.
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
							src={GraphicMobile}
							alt="WDB Education Graphic"
							style={{ width: '100%' }}
							draggable="false"
							className="graphic graphic-mobile"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Education;
