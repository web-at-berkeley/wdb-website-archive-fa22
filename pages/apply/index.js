import React from 'react';
import { SiteNavbar, Footer } from '../../components';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

// import Timeline from '../img/apply/timeline.png';
// import MobileTimeline from '../img/apply/mobile-timeline.png';

const Apply = () => {
	return (
		<div>
			<div className="apply">
				<SiteNavbar />
				<Container fluid className="body">
					<h1 className="header">Join The Team.</h1>
					<p className="subtitle">
						Interested in joining a group of passionate developers, designers,
						entreprenuers as either a student, designer, or developer? If so,
						you're in the right place! Our Sping 2021 applications are open and
						due Febraury 1st by midnight pacific time, so make sure to apply
						below!
					</p>

					<div className="recruitment-info">
						<h5 className="interested">ready to join?</h5>
						<Button href="https://forms.gle/BaVcxm1x41S2br5C7" target="_blank">
							<p className="contact-text">Application</p>
						</Button>
						<Button href="https://forms.gle/DA8yiV7NZ8hUUy6U9" target="_blank">
							<p className="contact-text">Interest Form</p>
						</Button>
						<h5 className="interested mt-5">want to learn more?</h5>
						<Button href="https://linktr.ee/webdevatberkeley" target="_blank">
							<p className="contact-text">WDB Linktree</p>
						</Button>
						<p className="subtitle mt-5">Here are our open roles:</p>
						<div className="open-roles">
							<div className="type-col">
								<h5 className="role-type">Education Branch</h5>
								<div className="role-card">
									<h6 className="role-title">Student</h6>
									<p className="role-description">
										Join our education branch as a student to learn full-stack
										development and gain applicable programming skills. No
										experience is required, just a passion for learning web
										development and willingness to learn!
									</p>
								</div>
								<div className="role-card">
									<h6 className="role-title">FRONTEND EDUCATOR</h6>
									<p className="role-description">
										Work in a team of 3 other frontend educators to teach
										concepts like HTML/CSS/JS, UI/UX Design, React.js, Sass, and
										more.
									</p>
								</div>
								<div className="role-card">
									<h6 className="role-title">BACKEND EDUCATOR</h6>
									<p className="role-description">
										Work in a team of 3 other backend educators to teach
										concepts like Django, REST, Databases, AWS, Node.js, and
										more.
									</p>
								</div>
							</div>
							<div className="type-col">
								<h5 className="role-type management">Development Branch</h5>
								<div className="role-card">
									<h6 className="role-title management">Developer</h6>
									<p className="role-description">
										Work in teams of 5-6 to create an amazing product for either
										a high-growth startup or nonprofit organization. If you're
										interested in frontend, proficiency with a frontend
										framework such as React, Angular, or Vue is recommended.If
										you're interested in backend, proficiency with at least one
										of Django, Node, AWS, or GCP is recommended. Database
										Knowledge with MongoDB, PostgreSQL, etc... is a plus.
									</p>
								</div>
								<div className="role-card">
									<h6 className="role-title management">Designer</h6>
									<p className="role-description">
										Work in teams of 5-6 to design an amazing product for either
										a high-growth startup or nonprofit organization from start
										to finish. Proficiency with Adobe tools and/or Figma is
										recommended.
									</p>
								</div>
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
