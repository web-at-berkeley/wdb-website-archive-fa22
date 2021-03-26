import React from 'react';
import { SiteNavbar, Footer } from '../../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Graphic from './img/edu-graphic.png';
import RightNav from '../../img/right-nav.png';

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
							to gain a comprehensive web dev education in both UI/UX Design and
							Full-Stack Development. Students will receive interactive lessons
							taught by experienced Berkeley students as well as hands-on
							projects. At the end of the semester, students will build a full
							stack project of their choosing with a team.
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
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Education;
