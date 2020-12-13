import React, { useState } from 'react';

import { leadershipData } from '../pages/data/TeamData';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Linkedin from '../img/team/linkedin.png';
import Mail from '../img/team/mail.png';

import '../css/TeamLevel.scss';

const TeamLevel = (props) => {
	const [info, setInfo] = useState(leadershipData[props.data[0]]);

	const updateInfo = (name) => {
		setInfo(leadershipData[name]);
	};

	const teamImages = leadershipData.images;

	return (
		<Container fluid className="level">
			<Row>
				<h3 className="title">{props.title}</h3>
			</Row>
			<Row className="justify-content-center">
				{props.data.map((person) => {
					return (
						<img
							src={teamImages[person]}
							alt={person}
							className="team-image selectDisable"
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
							alt="linkedin"
							className=" social-icon linkedin-icon selectDisable"
						/>
					</a>
					<p className="name">{info.name}</p>
					<a
						href={info.mail}
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
				<h5 className="role">{info.role}</h5>
			</Row>
			<Row>
				<p className="description">{info.description}</p>
			</Row>
		</Container>
	);
};

export default TeamLevel;
