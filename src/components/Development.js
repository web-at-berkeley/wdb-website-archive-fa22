import React from 'react';

import SiteNavbar from './SiteNavbar';
import Contact from './Contact';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RightNav from '../img/right-nav.png';
import Blobs from '../img/about/development/blobs.png';
import Carepath from '../img/about/development/carepath.png';
import Resource19 from '../img/about/development/resource19.png';

const Development = () => {
	return (
		<div className="education development">
			<SiteNavbar logo="false" />
			<img src={Blobs} alt="blobs" className="blobs" />
			<Container fluid className="body">
				<img src={RightNav} alt="right nav" className="right-nav" />
				<Row>
					<Col xs={12} className="text-center">
						<h1 className="header">
							<span style={{ textShadow: 'none' }}>Education With </span>
							Application.
						</h1>
					</Col>
				</Row>

				<Row>
					<Col xs={12} className="text-center">
						<p className="subtitle">
							In our Development branch, we connect experienced web developers
							to Bay Area startups. Students will partake in the software
							engineering lifecycle, leading the design, build, and deployment
							stages of the client's website.
						</p>
						<Contact />
						<hr style={{ width: '60%', borderTop: '2px solid #5F60FF' }} />
					</Col>
				</Row>

				<Row>
					<Col xs={12} className="text-center">
						<h3 className="sub-subtitle">Our Projects</h3>
					</Col>
				</Row>

				<Row>
					<Col xs={12} className="text-center">
						<a
							href="https://resource19.org/"
							title="Resource-19"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={Resource19} alt="resource 19" className="client-logo" />
						</a>
						<p className="client-description">
							In response to the unfolding COVID-19 crisis, Web Development at
							Berkeley aided a team of UC Berkeley students in building a
							platform to get resources to those on the frontline of the
							pandemic. WDB played a role in the UI/UX Design, frontend
							engineering, and backend infrastructure setup.
						</p>
					</Col>
				</Row>

				<Row>
					<Col xs={12} className="text-center">
						<img src={Carepath} alt="Carepath" className="client-logo" />
						<p className="client-description bottom-description">
							Carepath is a moderated online platform founded at Stanford where
							parents with children with mental health disorders can find a
							community to share their stories and find resources. Web
							Development at Berkeley is currently helping in the frontend
							engineering and design of their mobile and desktop platforms.
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Development;
