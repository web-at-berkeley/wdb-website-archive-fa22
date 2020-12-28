import React, { useState } from 'react';

import SiteNavbar from '../components/SiteNavbar';
import Footer from '../components/Footer';
import TeamLevel from '../components/TeamLevel';
import { ExecData } from '../data/TeamData';
import TeamMobile from './mobile/TeamMobile';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bubbles from '../img/team/bubbles.png';
import Linkedin from '../img/team/linkedin.png';
import Mail from '../img/team/mail.png';

import './css/Team.scss';

const Team = () => {
	const initInfo = ExecData[0];

	const [name, setName] = useState(initInfo.name);
	const [role, setRole] = useState(initInfo.role);
	const [description, setDescription] = useState(initInfo.description);
	const [linkedin, setLinkedin] = useState(initInfo.linkedin);
	const [mail, setMail] = useState(initInfo.mail);

	const updateInfo = (index) => {
		const info = ExecData[index];
		setName(info.name);
		setRole(info.role);
		setDescription(info.description);
		setLinkedin(info.linkedin);
		setMail(info.mail);
	};

	return (
		<>
			<div className="team team-desktop">
				<SiteNavbar />
				<Container fluid className="body">
					<Row>
						<Col xs={12} className="title-col">
							<h1 className="header">Meet The Team.</h1>
							<p className="subtitle">
								We are a team of UC Berkeley Students who are passionate about
								providing education and support in our community for web
								development.
							</p>
							<p className="subtitle bold">
								Hover over or tap on our photos to learn more about us.
							</p>
						</Col>
					</Row>
					<Row className="exec-container">
						<Col xs={6} className="text-col">
							<h2 className="name" id="name">
								{name}
							</h2>
							<h3 className="role" id="role">
								{role}
							</h3>
							<p className="exec-description" id="description">
								{description}
							</p>
							<div className="social-row">
								<a
									href={linkedin}
									target="_blank"
									rel="noopener noreferrer"
									id="linkedin"
								>
									<img
										src={Linkedin}
										alt="Linkedin"
										className=" social-icon linkedin"
									/>
								</a>
								<a
									href={mail}
									id="mail"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={Mail} alt="E-Mail" className="social-icon mail" />
								</a>
							</div>
						</Col>
						<Col xs={2} className="image-col">
							{ExecData.slice(0, 2).map((exec, index) => (
								<img
									src={exec.image}
									alt={exec.name}
									className={`team-image member-${index + 1} selectDisable`}
									draggable="false"
									onMouseEnter={() => updateInfo(index)}
								/>
							))}
						</Col>
						<Col xs={2} className="image-col">
							{ExecData.slice(2, 5).map((exec, index) => (
								<img
									src={exec.image}
									alt={exec.name}
									className={`team-image member-${index + 3} selectDisable`}
									draggable="false"
									onMouseEnter={() => updateInfo(index + 2)}
								/>
							))}
						</Col>
						<Col xs={2} className="image-col">
							{ExecData.slice(5, 7).map((exec, index) => (
								<img
									src={exec.image}
									alt={exec.name}
									className={`team-image member-${index + 6} selectDisable`}
									draggable="false"
									onMouseEnter={() => updateInfo(index + 5)}
								/>
							))}
						</Col>
						<img
							src={Bubbles}
							alt="bubbles"
							className="bubbles selectDisable"
							draggable="false"
						/>
					</Row>
				</Container>
				<TeamLevel
					title="leadership"
					data={['April', 'Jessica', 'Izzie', 'Cindy', 'Noor']}
				/>
				<TeamLevel title="course staff" data={['Arushi', 'Hector']} />
				<TeamLevel
					title="product managers"
					data={['Neha', 'Emily', 'Caelin']}
				/>
				<TeamLevel
					title="project managers"
					data={['Alina', 'Albert', 'Ansa']}
				/>
				<Footer />
			</div>
			<TeamMobile />
		</>
	);
};

export default Team;
