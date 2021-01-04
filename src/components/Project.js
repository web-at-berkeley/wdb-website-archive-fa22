import React from 'react';

import Col from 'react-bootstrap/Col';

import Overlay from '../data/projects/img/overlay.png';

import './css/Project.scss';

const Project = ({ project }) => {
	const { name, cover, link, technologies } = project;

	const determineDescription = () => {
		if (technologies.length === 1) {
			return technologies[0];
		} else if (technologies.length === 2) {
			return technologies[0] + ' and ' + technologies[1];
		} else {
			return (
				technologies.slice(0, -1).map((tech) => ` ${tech}`) +
				', and ' +
				technologies.pop()
			);
		}
	};

	const description = determineDescription();

	return (
		<Col sm={12} md={6} lg={4} className="project">
			{link ? (
				<a
					href={link}
					title={name}
					className="cover-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={cover} alt={name} className="cover" draggable="false" />

					<div className="overlay image">
						<img src={Overlay} alt="overlay" draggable="false" />
					</div>
					<div className="overlay text">
						<h3>{name}</h3>
						<p>Created using {description}</p>
					</div>
				</a>
			) : (
				<div className="cover-link">
					<img src={cover} alt={name} className="cover" draggable="false" />

					<div className="overlay image">
						<img src={Overlay} alt="overlay" draggable="false" />
					</div>
					<div className="overlay text">
						<h3>{name}</h3>
						<p>Created using {description}</p>
					</div>
				</div>
			)}

			<div className="description">
				<h3>{name}</h3>
				<p>Created using {description}</p>
			</div>
		</Col>
	);
};

export default Project;
