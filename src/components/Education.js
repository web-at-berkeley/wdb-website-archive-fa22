import React from 'react';

import SiteNavbar from './SiteNavbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Graphic from '../img/about/education/graphic.png';
import RightNav from '../img/right-nav.png';

import '../css/Education.css';

const Education = () => {
	return (
		<div className="education">
			<SiteNavbar logo="false" />
			<Container fluid className="body">
				<img src={RightNav} alt="right nav" className="right-nav" />
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
							In our Education track, we offer students the unique opportunity
							to gain a comprehensive web development education in both frontend
							and backend. Students will receive interactive lessons taught by
							Berkeley students experienced in Web Development. Students will be
							learning alongside a small cohort of other club members, meaning
							lessons will be highly personalized to each individual.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center" style={{ padding: '0' }}>
						<img src={Graphic} alt="graphic" style={{ width: '100%' }} />
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Education;
