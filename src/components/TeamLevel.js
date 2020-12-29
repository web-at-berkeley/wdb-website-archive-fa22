import React, { useState } from 'react';

import { LeadershipData } from '../data/TeamData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Linkedin from '../img/team/linkedin.png';
import Github from '../img/team/github.svg';

import './css/TeamLevel.scss';

const TeamLevel = (props) => {
	const [info, setInfo] = useState(LeadershipData[props.data[0]]);

	const updateInfo = (name) => {
		setInfo(LeadershipData[name]);
	};

	return (
		<Container fluid className="level">
			<Row>
				<h3 className="title">{props.title}</h3>
			</Row>
			<Row className="justify-content-center">
				{props.data.map((person) => {
					return (
						<img
							src={LeadershipData[person].image}
							alt={person}
							className="team-image"
							draggable="false"
							onMouseEnter={() => updateInfo(person)}
							key={person}
						/>
					);
				})}
			</Row>
			<Row className="info-row">
				<div className="social-row">
					<a
						href={info.linkedin}
						target="_blank"
						rel="noopener noreferrer"
						id="linkedin"
					>
						<img
							src={Linkedin}
							alt="Linkedin"
							className=" social-icon linkedin-icon selectDisable"
						/>
					</a>
					<p className="name">{info.name}</p>
					<a
						href={info.mail}
						id="E-mail"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={Github}
							alt="github"
							className="social-icon mail-icon selectDisable"
						/>
					</a>
				</div>
				<h5 className="role">{info.role}</h5>
			</Row>
			<Row>
				<p className="description">{info.description}</p>
			</Row>
		</Container>
	);
};

export default TeamLevel;
