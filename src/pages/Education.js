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
	let GraphicVersion = Graphic;
	if (matchMedia('(max-width: 992px)').matches) {
		GraphicVersion = GraphicMobile;
	}
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
						<p className="subtitle">
							In our Education Branch, we offer students the unique opportunity
							to gain a comprehensive web development education in both
							frontend, UI/UX design, and backend. Students will receive
							interactive lessons taught by experienced Berkeley students as
							well as hands-on project experiences. Students will be learning
							alongside a small cohort of other club members, meaning lessons
							will be highly personalized to each individual.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center" style={{ padding: '0' }}>
						<img
							src={GraphicVersion}
							alt="WDB Education Graphic"
							style={{ width: '100%' }}
							draggable="false"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Education;
