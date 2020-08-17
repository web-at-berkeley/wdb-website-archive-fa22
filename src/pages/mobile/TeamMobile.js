import React, { useState } from 'react';

import Navbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';
import { execData } from '../data/TeamData';

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bubbles from '../../img/team/bubbles.png';
import Linkedin from '../../img/team/linkedin.png';
import Mail from '../../img/team/mail.png';

import '../../css/Team.css';

const Team = () => {
	const updateInfo = (name) => {
		const info = execData[name];
		handleShowMember(info);
	};

	const [showMember, setShowMember] = useState(false);
	const handleCloseMember = () => setShowMember(false);
	const handleShowMember = () => setShowMember(true);

	const infoModal = (info) => (
		<Modal
			show={showMember}
			onHide={handleCloseMember}
			className="team"
			style={{
				width: '90%',
				margin: '2.5rem 5%',
				maxHeight: '85%',
				overflowY: 'scroll',
			}}
		>
			<Modal.Header
				closeButton
				style={{
					border: 'none',
					paddingBottom: '0',
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<h2 className="name" id="name">
						{info.name}
					</h2>
					<h3 className="role" id="role">
						{info.role}
					</h3>
				</div>
			</Modal.Header>
			<Modal.Body>
				<p className="description" id="description">
					{info.description}
				</p>
				<div className="social-row">
					<a href={info.linkedin} id="linkedin">
						<img
							src={Linkedin}
							alt="linkedin"
							className="social-icon linkedin-icon"
						/>
					</a>
					<a href={info.mail} id="mail">
						<img src={Mail} alt="mail" className="social-icon mail-icon" />
					</a>
				</div>
			</Modal.Body>
		</Modal>
	);

	const teamImages = execData.images;

	return (
		<div className="team">
			<Navbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="text-center title-col">
						<h1 className="header">Meet The Team.</h1>
						<p className="subtitle">
							We are a team of UC Berkeley Students who are passionate about
							providing education and support in our community for web
							development. Tap on our photos to learn more about us.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} className="image-col">
						<img
							src={teamImages.Samarth}
							alt="samarth"
							className="team-image member-1 selectDisable"
							draggable="false"
							onClick={updateInfo('Samarth')}
						/>
					</Col>
					<Col xs={12} className="image-col">
						<img
							src={teamImages.Vicky}
							alt="vicky"
							className="team-image member-3 selectDisable"
							draggable="false"
							onClick={updateInfo('Vicky')}
						/>
						<img
							src={teamImages.Ervin}
							alt="ervin"
							className="team-image member-4 selectDisable"
							draggable="false"
							onClick={updateInfo('Ervin')}
						/>
					</Col>
					<Col xs={12} className="image-col">
						<img
							src={teamImages.Aditya}
							alt="aditya"
							className="team-image member-5 selectDisable"
							draggable="false"
							onClick={updateInfo('Aditya')}
						/>
						<img
							src={teamImages.Justin}
							alt="justin"
							className="team-image member-6 selectDisable"
							draggable="false"
							onClick={updateInfo('Justin')}
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
