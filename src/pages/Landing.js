import React from 'react';
import { Link } from '@reach/router';

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
			<img src={MetaImage} alt="WDB Landing Page" style={{ display: 'none' }} />
			<Container fluid className="align-items-center">
				<Row>
					<Col xs={12} lg={6} className="text-col">
						<h1>
							Web Development
							<br />
							at Berkeley
						</h1>
						<Link to="/about" className="landing-link">
							<Button className="landing-button">
								<p>Learn More</p>
							</Button>
						</Link>
					</Col>
					<Col xs={12} lg={6} className="image-col">
						<img
							src={LandingDesign}
							alt="Web Development at Berkeley"
							className="landing-design large-graphic"
						/>
						<img
							src={LandingDesignMobile}
							alt="Web Development at Berkeley"
							className="landing-design small-graphic"
						/>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Landing;
