import React from 'react';

import SiteNavbar from './SiteNavbar';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Education = () => {
	return (
		<div className="apply">
			<SiteNavbar />
			<Container fluid className="body" style={{ paddingTop: '15vh' }}>
				<Row>
					<Col xs={12} className="text-center title-col">
						<h1 className="header">
							Education
							<span style={{ textShadow: 'none' }}> With Application.</span>
						</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center title-col">
						<p style={{ color: 'black', padding: '10vh 10% 10vh 10%' }}>
							In our Education track, we offer students the unique opportunity
							to gain a comprehensive web development education in both frontend
							and backend. Students will receive interactive lessons taught by
							Berkeley students experienced in Web Development. Students will be
							learning alongside a small cohort of other club members, meaning
							lessons will be highly personalized to each individual.
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Education;
