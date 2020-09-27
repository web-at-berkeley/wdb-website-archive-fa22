import React from 'react';

import SiteNavbar from '../components/SiteNavbar';
import Footer from '../components/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Timeline from '../img/apply/timeline.png';
import MobileTimeline from '../img/apply/mobile-timeline.png';

import '../css/Apply.css';

const Apply = () => {
	return (
		<div>
			<div className="apply">
				<SiteNavbar />
				<Container fluid className="body">
					<Row>
						<Col xs={12} className="text-center title-col">
							<h1 className="header">Join The Team.</h1>
						</Col>
					</Row>
					<img
						src={Timeline}
						alt="Recruitment Timeline"
						className="recruitment-timeline"
					/>
					<img
						src={MobileTimeline}
						alt="Recruitment Timeline"
						className="recruitment-timeline-mobile"
					/>
					<Row
						style={{
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						<Col>
							<a
								className="apply-button infosession-button"
								href="https://www.facebook.com/events/311960566720957/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Infosession 1
							</a>
						</Col>
						<Col>
							<a
								className="apply-button infosession-button"
								href="https://www.facebook.com/events/322447795505867/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Infosession 2
							</a>
						</Col>
					</Row>
					<div className="recruitment-info">
						<h5 className="what-to-expect">WHAT TO EXPECT</h5>
						<div className="recruitment-card-row">
							<div className="recruitment-card">
								<p className="card role">STUDENTS</p>
								<p className="card bold">What we look for:</p>
								<p className="card regular">
									No previous CS experience required
								</p>
								<p className="card regular">
									Excitement and dedication to understanding the concepts
								</p>
								<p className="card bold">Application Process:</p>
								<p className="card regular">Written Application</p>
								<p className="card regular">Behavorial Interview</p>
							</div>
							<div className="recruitment-card">
								<p className="card role">DEVELOPERS</p>
								<p className="card bold">What we look for:</p>
								<p className="card regular">
									Experience in design or a frontend or backend stack
								</p>
								<p className="card regular">
									Ability to communicate and teamwork
								</p>
								<p className="card bold">Application Process:</p>
								<p className="card regular">Written Application</p>
								<p className="card regular">Behavorial Interview</p>
								<p className="card regular">Short Project + Presentation</p>
							</div>
						</div>
					</div>
				</Container>
				<Footer />
			</div>
		</div>
	);
};

export default Apply;
