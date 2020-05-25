import React from 'react';

import LandingNavbar from './LandingNavbar';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import LandingDesign from '../img/landing/landing-design.png';
import LandingDesignMobile from '../img/landing/landing-design-mobile.png';

import '../css/Landing.css';

const Landing = () => {
	const large = matchMedia('(max-width: 992px)');
	let LandingGraphic = LandingDesign;
	if (large.matches) {
		LandingGraphic = LandingDesignMobile;
	}
	return (
		<div className="landing">
			<LandingNavbar />
			<Container fluid className="align-items-center">
				<Row>
					<Col xs={12} lg={6} className="text">
						<h1 className="landing-text">
							Web Development
							<br />
							at Berkeley
						</h1>
						<a href="/about" className="landing-link">
							<Button className="landing-button">
								<p className="button-text">Learn More</p>
							</Button>
						</a>
					</Col>
					<Col xs={12} lg={6} className="image">
						<img
							src={LandingGraphic}
							alt="landing design"
							className="landing-design selectDisable"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Landing;
