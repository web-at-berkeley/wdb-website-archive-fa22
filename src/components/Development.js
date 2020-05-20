import React from 'react';

import SiteNavbar from './SiteNavbar';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Development = () => {
	return (
		<div className="apply">
			<SiteNavbar />
			<Container fluid className="body" style={{ paddingTop: '15vh' }}>
				<Row>
					<Col xs={12} className="text-center title-col">
						<h1 className="header">
							<span style={{ textShadow: 'none' }}>Education With </span>
							Application.
						</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center title-col">
						<p style={{ color: 'black', padding: '10vh 10% 10vh 10%' }}>
							In our Development branch, we connect experienced web developers
							to Bay Area startups. Students will partake in the software
							engineering lifecycle, leading the design, build, and deployment
							stages of the client's website.
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Development;
