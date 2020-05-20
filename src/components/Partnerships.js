import React from 'react';

import SiteNavbar from './SiteNavbar';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Partnerships = () => {
	return (
		<div className="apply">
			<SiteNavbar />
			<Container fluid className="body" style={{ paddingTop: '15vh' }}>
				<Row>
					<Col xs={12} className="text-center title-col">
						<h1 className="header">Giving Back</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center title-col">
						<p style={{ color: 'black', padding: '10vh 10% 10vh 10%' }}>
							As a UC Berkeley-based web organization, students will have the
							opportunity to partner with various clubs on campus. By creating
							websites for these organizations, we aim to provide our students
							with meaningful experiences and preparation for industry-level
							development.
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Partnerships;
