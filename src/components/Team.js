import React from 'react';

import SiteNavbar from './SiteNavbar';
import Footer from './Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TeamText from '../img/team/team-title.png';
import Samarth from '../img/team/samring.png';
import Vicky from '../img/team/vickyring.png';
import Aditya from '../img/team/aditring.png';
import Justin from '../img/team/justinring.png';
import Ervin from '../img/team/ervinring.png';
import Spider from '../img/team/spider.png';

import '../css/Team.css';

const Team = () => {
	function samarth(e) {
		document.getElementById('name').innerHTML = 'Samarth Goel';
		document.getElementById('role').innerHTML = 'Co-President and VP Finance';
		document.getElementById('description').innerHTML =
			'I am a second-year studying Computer Science and Business Administration. Web Development has been a huge passion of mine, and the lack of advanced web dev education on Berkeley’s campus is a problem I’ve long wanted to solve, and I hope to do so with Web Dev @ Berkeley! Besides coding, I practice martial arts, practice guitar, and play the drums in the cal band.';
	}

	function vicky(e) {
		document.getElementById('name').innerHTML = 'Vicky Li';
		document.getElementById('role').innerHTML =
			'Co-President and VP Marketing and Design';
		document.getElementById('description').innerHTML =
			'Hi everyone, I am a second-year at UC Berkeley studying Computer Science with a minor in Data Science. I recently got into Web Development after attending a hackathon, and I believe that it is an extremely valuable topic that is not extensively covered in Berkeley’s current CS curriculum. I am also very passionate about UI/UX Design, and I am excited to teach others these skills as well. Outside of coding and staring at screens, I am an avid photographer, videographer, and dancer. I enjoy making Youtube videos in my free time, so as they say, like and subscribe, and go bears!';
	}

	function aditya(e) {
		document.getElementById('name').innerHTML = 'Aditya Bhawal';
		document.getElementById('role').innerHTML = 'VP Internal';
		document.getElementById('description').innerHTML =
			'Hello! I am an EECS major from Arcadia, a city close to Los Angeles. I first got into computer science through video games, when I used to play with the Unity3D game engine and Skyrim mods. Since then, I’ve had a variety of interests in computer science, one of which is web development! Outside of the world of computers, I’m also in TBD Comedy, an improv comedy team here at UC Berkeley. My other interests include playing the electric bass guitar, ludology, studying philosophy, and reading science fiction.';
	}

	function justin(e) {
		document.getElementById('name').innerHTML = 'Justin Chen';
		document.getElementById('role').innerHTML = 'VP External';
		document.getElementById('description').innerHTML =
			'Hey everyone! I am a second-year at Berkeley studying Computer Science and Applied Math. I started programming in high school, creating various games with my own game driver and physics engine, and have since transitioned to a variety of other interests as well, such as web development. Outside of Web Development at Berkeley, I am also on the Quantum CubeSat and executive team for Space Technologies at Cal, an aerospace engineering club on campus. In my free time, I enjoy playing music and jamming with friends! I play the violin, piano, and love making fingerstyle guitar arrangements. ';
	}

	function ervin(e) {
		document.getElementById('name').innerHTML = 'Ervin Baccay';
		document.getElementById('role').innerHTML = 'VP Education';
		document.getElementById('description').innerHTML =
			'Hi! I’m Ervin Baccay and I study Bioengineering and EECS. After four years of teaching a technical field, I’ve grown passionate about educating the future generation of engineers and computer scientists. When I’m not busy teaching backend web development, cloud technologies, data structures, data science, or bioengineering, you can catch me at marching band performances or drinking boba somewhere!';
	}

	function spider(e) {
		document.getElementById('name').innerHTML = 'A Spider';
		document.getElementById('role').innerHTML = 'Not quite sure yet';
		document.getElementById('description').innerHTML =
			"why is this spider here? Don't ask me!";
	}

	return (
		<div className="team">
			<SiteNavbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="text-center title-col">
						<img src={TeamText} alt="team text" draggable="false" />
					</Col>
				</Row>
				<Row>
					<Col xs={6} className="text-col">
						<h2 className="name" id="name">
							Samarth Goel
						</h2>
						<h3 className="role" id="role">
							Co-President and VP Finance
						</h3>
						<p className="description" id="description">
							I am a second-year studying Computer Science and Business
							Administration. Web Development has been a huge passion of mine,
							and the lack of advanced web dev education on Berkeley’s campus is
							a problem I’ve long wanted to solve, and I hope to do so with Web
							Dev @ Berkeley! Besides coding, I practice martial arts, practice
							guitar, and play the drums in the cal band.
						</p>
						<div className="social-row">
							<a href="#">
								<i className="fa fa-linkedin"></i>
							</a>
							<a href="#">
								<i className="fa fa-envelope"></i>
							</a>
						</div>
					</Col>
					<Col xs={2} className="image-col">
						<img
							src={Samarth}
							alt="samarth"
							className="team-image member-1"
							onMouseEnter={samarth}
						/>
						<img
							src={Spider}
							alt="spider"
							className="team-image member-2"
							onMouseEnter={spider}
						/>
					</Col>
					<Col xs={2} className="image-col">
						<img
							src={Vicky}
							alt="vicky"
							className="team-image member-3"
							onMouseEnter={vicky}
						/>
						<img
							src={Ervin}
							alt="ervin"
							className="team-image member-4"
							onMouseEnter={ervin}
						/>
					</Col>
					<Col xs={2} className="image-col">
						<img
							src={Aditya}
							alt="aditya"
							className="team-image member-5"
							onMouseEnter={aditya}
						/>
						<img
							src={Justin}
							alt="justin"
							className="team-image member-6"
							onMouseEnter={justin}
						/>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Team;
