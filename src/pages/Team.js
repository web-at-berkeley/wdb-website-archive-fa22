import React, { useState } from 'react';

import SiteNavbar from '../components/SiteNavbar';
import Footer from '../components/Footer';
import { teamData } from './data/TeamData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Samarth from '../img/team/samring.jpg';
import Vicky from '../img/team/vickyring.jpg';
import Aditya from '../img/team/aditring.jpg';
import Justin from '../img/team/justinring.jpg';
import Ervin from '../img/team/ervinring.jpg';
import Spider from '../img/team/spider.jpg';
import Bubbles from '../img/team/bubbles.png';
import Linkedin from '../img/team/linkedin.png';
import Mail from '../img/team/mail.png';

import '../css/Team.css';

const Team = () => {
	const [name, setName] = useState('Samarth Goel');
	const [role, setRole] = useState('Co-President and VP Finance');
	const [description, setDescription] = useState(
		'Hey there! My name is Samarth and I am studying Computer Science and Business Administration. Web Development has been a huge passion of mine, and the lack of advanced web dev education on Berkeley’s campus is a problem I’ve long wanted to solve, and I hope to do so with Web Dev @ Berkeley! Besides coding, I practice martial arts, practice guitar, and play the drums in the cal band.'
	);
	const [linkedin, setLinkedin] = useState(
		'https://www.linkedin.com/in/samarth-goel-07'
	);
	const [mail, setMail] = useState('mailto: sgoel9@berkeley.edu');

	const updateInfo = (name) => {
		const info = teamData[name];
		setName(info.name);
		setRole(info.role);
		setDescription(info.description);
		setLinkedin(info.linkedin);
		setMail(info.mail);
	};

	return (
		<div className="team">
			<SiteNavbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="text-center title-col">
						<h1 className="header">Meet The Team.</h1>
						<p className="subtitle">
							We are a team of UC Berkeley Students who are passionate about
							providing education and support in our community for web
							development.
						</p>
						<p
							className="subtitle"
							style={{ fontWeight: 500, marginTop: 2 + 'rem' }}
						>
							Hover over or tap on our photos to learn more about us.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={6} className="text-col">
						<h2 className="name" id="name">
							{name}
						</h2>
						<h3 className="role" id="role">
							{role}
						</h3>
						<p className="description" id="description">
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
									alt="linkedin"
									className=" social-icon linkedin-icon selectDisable"
								/>
							</a>
							<a
								href={mail}
								id="mail"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={Mail}
									alt="mail"
									className="social-icon mail-icon selectDisable"
								/>
							</a>
						</div>
					</Col>
					<Col xs={2} className="image-col">
						<img
							src={Samarth}
							alt="samarth"
							className="team-image member-1 selectDisable"
							draggable="false"
							onMouseEnter={() => updateInfo('Samarth')}
						/>
						<img
							src={Spider}
							alt="spider"
							className="team-image member-2 selectDisable"
							draggable="false"
							onMouseEnter={() => updateInfo('Spider')}
						/>
					</Col>
					<Col xs={2} className="image-col">
						<img
							src={Vicky}
							alt="vicky"
							className="team-image member-3 selectDisable"
							draggable="false"
							onMouseEnter={() => updateInfo('Vicky')}
						/>
						<img
							src={Ervin}
							alt="ervin"
							className="team-image member-4 selectDisable"
							draggable="false"
							onMouseEnter={() => updateInfo('Ervin')}
						/>
					</Col>
					<Col xs={2} className="image-col">
						<img
							src={Aditya}
							alt="aditya"
							className="team-image member-5 selectDisable"
							draggable="false"
							onMouseEnter={() => updateInfo('Aditya')}
						/>
						<img
							src={Justin}
							alt="justin"
							className="team-image member-6 selectDisable"
							draggable="false"
							onMouseEnter={() => updateInfo('Justin')}
						/>
					</Col>
					<img
						src={Bubbles}
						alt="bubbles"
						className="bubbles selectDisable"
						draggable="false"
					/>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Team;
