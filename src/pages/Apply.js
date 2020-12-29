import React from 'react';

import SiteNavbar from '../components/SiteNavbar';
import Footer from '../components/Footer';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Timeline from '../img/apply/timeline.png';
// import MobileTimeline from '../img/apply/mobile-timeline.png';

import './css/Apply.scss';

const Apply = () => {
	return (
		<div>
			<div className="apply">
				<SiteNavbar />
				<Container fluid className="body">
					<h1 className="header">Join The Team.</h1>
					<p className="subtitle">
					Our general Spring 2021 recruitment cycle will begin at the start of the semester. Check back soon!
					</p>
					
					<div className="recruitment-info">
						<h5 className="interested">INTERESTED IN JOINING LEADERSHIP?</h5>
						<p className="subtitle">Here are our open roles:</p>
						<div className="open-roles">
							<div className="type-col">
								<h5 className="role-type">COURSE STAFF</h5>
								<div className="role-card">
									<h6 className="role-title">FRONTEND EDUCATOR (3)</h6>
									<p className="role-description">Work in a team of 3 other frontend educators to teach concepts like HTML/CSS/JS, UI/UX Design, React.js, React Native, Sass, and more.</p>
								</div>
								<div className="role-card">
									<h6 className="role-title">BACKEND EDUCATOR (4)</h6>
									<p className="role-description">Work in a team of 3 other backend educators to teach concepts like Django, REST, Databases, AWS, Node.js, and more.</p>
								</div>
								<div className="role-card">
									<h6 className="role-title">READER/TUTOR (3)</h6>
									<p className="role-description">Assist in grading web dev homework assignments and projects and hold office hours for students in our education branch.</p>
								</div>
							</div>
							<div className="type-col">
								<h5 className="role-type management">MANAGEMENT</h5>
								<div className="role-card">
									<h6 className="role-title management">PROJECT MANAGER (2)</h6>
									<p className="role-description">Lead a team of 5-6 developers and designers in building a full-stack web application for WDB internal use or a Berkeley organization/startup.</p>
								</div>
								<div className="role-card">
									<h6 className="role-title management">PRODUCT MANAGER (2)</h6>
									<p className="role-description">Lead a team of 5-6 developers and designers in building a full-stack web application for an external industry client.</p>
								</div>
							</div>
						</div>
						<Button href="https://forms.gle/EpLGmyr6Aj7snQnu8" target="_blank">
							<p className="contact-text">Apply</p>
						</Button>
					</div>
				</Container>
				<Footer />
			</div>
		</div>
	);
};

export default Apply;
