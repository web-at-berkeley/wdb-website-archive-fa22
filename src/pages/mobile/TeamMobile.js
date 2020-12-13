import React, { useState } from 'react';

import Navbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';
import { execData, leadershipData } from '../../data/TeamData';

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bubbles from '../../img/team/bubbles.png';
import Linkedin from '../../img/team/linkedin.png';
import Mail from '../../img/team/mail.png';

import '../../css/Team.scss';

const Team = () => {
	const [showMember, setShowMember] = useState(false);

	const handleCloseMember = () => setShowMember(false);
	const handleShowMember = () => setShowMember(true);

	const [data, setData] = useState({});

	const updateInfo = (name) => {
		if (execData.hasOwnProperty(name)) {
			setData(execData[name]);
		} else {
			setData(leadershipData[name]);
		}
		handleShowMember();
	};

	const teamImages = { ...execData.images, ...leadershipData.images };
	const members = [
		'Samarth',
		'Vicky',
		'Ervin',
		'Justin',
		'Aditya',
		'Aman',
		'Alex',
		'Emily',
		'Arushi',
		'Neha',
	];

	return (
		<div className="team team-mobile">
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
					{members.map((person) => (
						<Col xs={6} className="image-col" key={person}>
							<img
								src={teamImages[person]}
								alt={person}
								className="team-image selectDisable"
								draggable="false"
								onClick={() => updateInfo(person)}
							/>
						</Col>
					))}

					<img
						src={Bubbles}
						alt="bubbles"
						className="bubbles selectDisable"
						draggable="false"
					/>
				</Row>
			</Container>
			<Modal
				show={showMember}
				onHide={handleCloseMember}
				className="member-modal"
				centered
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
							{data.name}
						</h2>
						<h3 className="role" id="role">
							{data.role}
						</h3>
					</div>
				</Modal.Header>
				<Modal.Body>
					<p className="description" id="description">
						{data.description}
					</p>
					<div className="social-row">
						<a href={data.linkedin} id="linkedin">
							<img
								src={Linkedin}
								alt="linkedin"
								className="social-icon linkedin-icon"
							/>
						</a>
						<a href={data.mail} id="mail">
							<img src={Mail} alt="mail" className="social-icon mail-icon" />
						</a>
					</div>
				</Modal.Body>
			</Modal>
			<Footer />
		</div>
	);
};

export default Team;
