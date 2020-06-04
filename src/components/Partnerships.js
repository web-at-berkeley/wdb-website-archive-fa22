import React from 'react';

import SiteNavbar from './SiteNavbar';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RightNav from '../img/right-nav.png';
import Blobs from '../img/about/partnerships/blobs.png';
import Grotech from '../img/about/partnerships/grotech.png';
import Formula from '../img/about/partnerships/formula.png';
import Cloud from '../img/about/partnerships/cloud.png';

const Partnerships = () => {
	return (
		<div className="partnerships education">
			<SiteNavbar logo="false" />
			<Container fluid className="body">
				<img src={RightNav} alt="right nav" className="right-nav" />
				<img src={Blobs} alt="blobs" className="blobs" />
				<Row>
					<Col xs={12} className="text-center">
						<h1 className="header">Giving Back</h1>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="text-center">
						<p className="subtitle">
							As a UC Berkeley-based web organization, students will have the
							opportunity to partner with various clubs on campus. By creating
							websites for these organizations, we aim to provide our students
							with meaningful experiences and preparation for industry-level
							development.
						</p>
						<hr style={{ width: '60%', borderTop: '2px solid #5F60FF' }} />
					</Col>
				</Row>

				<Row>
					<Col xs={12} className="text-center">
						<h3 className="sub-subtitle">Our Partners</h3>
					</Col>
				</Row>

				<Row className="justify-content-center">
					<Col xs={12} md={4} lg={3} className="text-center">
						<a href="http://cloudatcal.org/" title="Cloud at Cal">
							<img src={Cloud} alt="cloud" className="partner cloud" />
						</a>
					</Col>
					<Col xs={12} md={4} lg={3} className="text-center">
						<a
							href="https://ev.berkeley.edu/"
							title="Formula Electric at Berkeley"
							className="screenshot"
						>
							<img src={Formula} alt="formula" className="partner formula" />
						</a>
					</Col>
					<Col xs={12} md={4} lg={3} className="text-center">
						<a
							href="https://www.ocf.berkeley.edu/~grotech/"
							title="GroTech @ Berkeley"
						>
							<img src={Grotech} alt="grotech" className="partner grotech" />
						</a>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Partnerships;
