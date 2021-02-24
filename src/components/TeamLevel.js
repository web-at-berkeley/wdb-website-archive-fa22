import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { ReactComponent as Linkedin } from '../img/team/linkedin.svg';
import { ReactComponent as Github } from '../img/team/github.svg';

import './css/TeamLevel.scss';

const TeamLevel = ({ title, data, names }) => {
	const [info, setInfo] = useState(data[names[0]]);

	const updateInfo = (name) => {
		setInfo(data[name]);
	};

	return (
		<Container fluid className="level">
			<Row>
				<h3 className="title">{title}</h3>
			</Row>
			<Row className="justify-content-center">
				{names.map((person) => {
					return (
						<img
							src={data[person].image}
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
						<Linkedin alt="Linkedin" className=" social-icon linkedin-icon " />
					</a>
					<p className="name">{info.name}</p>
					{info.mail ? (
						<a
							href={info.mail}
							id="Email"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Github alt="Github" className="social-icon mail-icon " />
						</a>
					) : (
						<Github alt="Github" className="social-icon mail-icon " />
					)}
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
