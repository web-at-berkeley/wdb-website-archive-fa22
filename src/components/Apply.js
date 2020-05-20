import React from 'react';

import SiteNavbar from './SiteNavbar';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import LongArrow from '../img/apply/long-arrow.png';

import '../css/Apply.css';

const Apply = () => {
	return (
		<div className="apply">
			<SiteNavbar />
			<Container fluid className="body" style={{ paddingTop: '15vh' }}>
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
					</Col>
				</Row>
				<Row className="long-arrow-row">
					<img src={LongArrow} alt="long-arrow" className="long-arrow" />
				</Row>
				<Row>
					<Col xs={12} className="text-center title-col">
						<h3 style={{ color: 'black', padding: '10vh 10% 10vh 10%' }}>
							We are currently looking for both frontend and backend teachers,
							as well as Project managers. If you wish to be a part of our
							educational branch or development team, check back in fall 2020!
						</h3>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Apply;
