import React from 'react';

import LandingNavbar from '../components/LandingNavbar';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import LandingDesign from '../img/landing/landing-design.png';
import LandingDesignMobile from '../img/landing/landing-design-mobile.png';
import MetaImage from '../img/meta-image.png';

import '../css/Landing.scss';

const Landing = () => {
	return (
		<div className="landing">
			<LandingNavbar />
			<img
				src={MetaImage}
				alt="meta"
				className="selectDisable"
				style={{ display: 'none' }}
			/>
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
							src={LandingDesign}
							alt="landing design"
							className="landing-design large-graphic selectDisable"
						/>
						<img
							src={LandingDesignMobile}
							alt="landing design"
							className="landing-design small-graphic selectDisable"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Landing;
