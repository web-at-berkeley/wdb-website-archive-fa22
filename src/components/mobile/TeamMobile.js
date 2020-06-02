import React, { useState } from 'react';

import Navbar from '../SiteNavbar';
import Footer from '../Footer';

import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Samarth from '../../img/team/samring.jpg';
import Vicky from '../../img/team/vickyring.jpg';
import Aditya from '../../img/team/aditring.jpg';
import Justin from '../../img/team/justinring.jpg';
import Ervin from '../../img/team/ervinring.jpg';
import Bubbles from '../../img/team/bubbles.png';
import Linkedin from '../../img/team/linkedin.png';
import Mail from '../../img/team/mail.png';

import '../../css/Team.css';

const Team = () => {
	const [showSamarth, setShowSamarth] = useState(false);
	const [showVicky, setShowVicky] = useState(false);
	const [showAditya, setShowAditya] = useState(false);
	const [showErvin, setShowErvin] = useState(false);
	const [showJustin, setShowJustin] = useState(false);

	const handleCloseVicky = () => setShowVicky(false);
	const handleShowVicky = () => setShowVicky(true);

	const handleCloseSamarth = () => setShowSamarth(false);
	const handleShowSamarth = () => setShowSamarth(true);

	const handleCloseAditya = () => setShowAditya(false);
	const handleShowAditya = () => setShowAditya(true);

	const handleCloseErvin = () => setShowErvin(false);
	const handleShowErvin = () => setShowErvin(true);

	const handleCloseJustin = () => setShowJustin(false);
	const handleShowJustin = () => setShowJustin(true);

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
							src={Samarth}
							alt="samarth"
							className="team-image member-1"
							onClick={handleShowSamarth}
						/>
					</Col>
					<Col xs={12} className="image-col">
						<img
							src={Vicky}
							alt="vicky"
							className="team-image member-3"
							onClick={handleShowVicky}
						/>
						<img
							src={Ervin}
							alt="ervin"
							className="team-image member-4"
							onClick={handleShowErvin}
						/>
					</Col>
					<Col xs={12} className="image-col">
						<img
							src={Aditya}
							alt="aditya"
							className="team-image member-5"
							onClick={handleShowAditya}
						/>
						<img
							src={Justin}
							alt="justin"
							className="team-image member-6"
							onClick={handleShowJustin}
						/>
					</Col>
					<img src={Bubbles} alt="bubbles" className="bubbles" />
					<Modal
						show={showSamarth}
						onHide={handleCloseSamarth}
						className="team"
						style={{ width: '90%', margin: '2.5rem 5%' }}
					>
						<Modal.Header
							closeButton
							style={{ border: 'none', paddingBottom: '0' }}
						>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<h2 className="name" id="name">
									Samarth Goel
								</h2>
								<h3 className="role" id="role">
									Co-President and VP Finance
								</h3>
							</div>
						</Modal.Header>
						<Modal.Body>
							<p className="description" id="description">
								I am a second-year studying Computer Science and Business
								Administration. Web Development has been a huge passion of mine,
								and the lack of advanced web dev education on Berkeley’s campus
								is a problem I’ve long wanted to solve, and I hope to do so with
								Web Dev @ Berkeley! Besides coding, I practice martial arts,
								practice guitar, and play the drums in the cal band.
							</p>
							<div className="social-row">
								<a
									href="https://www.linkedin.com/in/samarth-goel-07"
									id="linkedin"
								>
									<img
										src={Linkedin}
										alt="linkedin"
										className="social-icon linkedin-icon"
									/>
								</a>
								<a href="mailto: sgoel9@berkeley.edu" id="mail">
									<img
										src={Mail}
										alt="mail"
										className="social-icon mail-icon"
									/>
								</a>
							</div>
						</Modal.Body>
					</Modal>

					<Modal
						show={showVicky}
						onHide={handleCloseVicky}
						className="team"
						style={{ width: '90%', margin: '2.5rem 5%' }}
					>
						<Modal.Header
							closeButton
							style={{ border: 'none', paddingBottom: '0' }}
						>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<h2 className="name" id="name">
									Vicky Li
								</h2>
								<h3 className="role" id="role">
									Co-President and VP Marketing and Design
								</h3>
							</div>
						</Modal.Header>
						<Modal.Body>
							<p className="description" id="description">
								Hi everyone, I am a second-year at UC Berkeley studying Computer
								Science with a minor in Data Science. I recently got into Web
								Development after attending a hackathon, and I believe that it
								is an extremely valuable topic that is not extensively covered
								in Berkeley’s current CS curriculum. I am also very passionate
								about UI/UX Design, and I am excited to teach others these
								skills as well. Outside of coding and staring at screens, I am
								an avid photographer, videographer, and dancer. I enjoy making
								Youtube videos in my free time, so as they say, like and
								subscribe, and go bears!
							</p>

							<div className="social-row">
								<a
									href="https://www.linkedin.com/in/victoriayli/"
									id="linkedin"
								>
									<img
										src={Linkedin}
										alt="linkedin"
										className=" social-icon linkedin-icon"
									/>
								</a>
								<a href="mailto: victoria.li@berkeley.edu" id="mail">
									<img
										src={Mail}
										alt="mail"
										className="social-icon mail-icon"
									/>
								</a>
							</div>
						</Modal.Body>
					</Modal>

					<Modal
						show={showErvin}
						onHide={handleCloseErvin}
						className="team"
						style={{ width: '90%', margin: '2.5rem 5%' }}
					>
						<Modal.Header
							closeButton
							style={{ border: 'none', paddingBottom: '0' }}
						>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<h2 className="name" id="name">
									Ervin Baccay
								</h2>
								<h3 className="role" id="role">
									VP Education
								</h3>
							</div>
						</Modal.Header>
						<Modal.Body>
							<p className="description" id="description">
								Hi! I’m Ervin Baccay and I study Bioengineering and EECS. After
								four years of teaching a technical field, I’ve grown passionate
								about educating the future generation of engineers and computer
								scientists. When I’m not busy teaching backend web development,
								cloud technologies, data structures, data science, or
								bioengineering, you can catch me at marching band performances
								or drinking boba somewhere!
							</p>
							<div className="social-row">
								<a href="https://www.linkedin.com/in/ebaccay/" id="linkedin">
									<img
										src={Linkedin}
										alt="linkedin"
										className=" social-icon linkedin-icon"
									/>
								</a>
								<a href="mailto: ebaccay@berkeley.edu" id="mail">
									<img
										src={Mail}
										alt="mail"
										className="social-icon mail-icon"
									/>
								</a>
							</div>
						</Modal.Body>
					</Modal>

					<Modal
						show={showAditya}
						onHide={handleCloseAditya}
						className="team"
						style={{ width: '90%', margin: '2.5rem 5%' }}
					>
						<Modal.Header
							closeButton
							style={{ border: 'none', paddingBottom: '0' }}
						>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<h2 className="name" id="name">
									Aditya Bhawal
								</h2>
								<h3 className="role" id="role">
									VP Internal
								</h3>
							</div>
						</Modal.Header>
						<Modal.Body>
							<p className="description" id="description">
								Hello! I am an EECS major from Arcadia, a city close to Los
								Angeles. I first got into computer science through video games,
								when I used to play with the Unity3D game engine and Skyrim
								mods. Since then, I’ve had a variety of interests in computer
								science, one of which is web development! Outside of the world
								of computers, I’m also in TBD Comedy, an improv comedy team here
								at UC Berkeley. My other interests include playing the electric
								bass guitar, ludology, studying philosophy, and reading science
								fiction.{' '}
							</p>
							<div className="social-row">
								<a
									href="https://www.linkedin.com/in/aditya-bhawal-4a4352145/"
									id="linkedin"
								>
									<img
										src={Linkedin}
										alt="linkedin"
										className=" social-icon linkedin-icon"
									/>
								</a>
								<a href="mailto: aditya.bhawal@gmail.com" id="mail">
									<img
										src={Mail}
										alt="mail"
										className="social-icon mail-icon"
									/>
								</a>
							</div>
						</Modal.Body>
					</Modal>

					<Modal
						show={showJustin}
						onHide={handleCloseJustin}
						className="team"
						style={{ width: '90%', margin: '2.5rem 5%' }}
					>
						<Modal.Header
							closeButton
							style={{ border: 'none', paddingBottom: '0' }}
						>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<h2 className="name" id="name">
									Justin Chen
								</h2>
								<h3 className="role" id="role">
									VP External
								</h3>
							</div>
						</Modal.Header>
						<Modal.Body>
							<p className="description" id="description">
								Hey everyone! I am a second-year at Berkeley studying Computer
								Science and Applied Math. I started programming in high school,
								creating various games with my own game driver and physics
								engine, and have since transitioned to a variety of other
								interests as well, such as web development. Outside of Web
								Development at Berkeley, I am also on the Quantum CubeSat and
								executive team for Space Technologies at Cal, an aerospace
								engineering club on campus. In my free time, I enjoy playing
								music and jamming with friends! I play the violin, piano, and
								love making fingerstyle guitar arrangements.
							</p>{' '}
							<div className="social-row">
								<a
									href="https://www.linkedin.com/in/justinshawnchen/"
									id="linkedin"
								>
									<img
										src={Linkedin}
										alt="linkedin"
										className=" social-icon linkedin-icon"
									/>
								</a>
								<a href="mailto: justinshawnchen@berkeley.edu" id="mail">
									<img
										src={Mail}
										alt="mail"
										className="social-icon mail-icon"
									/>
								</a>
							</div>
						</Modal.Body>
					</Modal>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Team;
