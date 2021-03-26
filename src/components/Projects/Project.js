import React from 'react';

import Col from 'react-bootstrap/Col';
import { Flex, Spacer } from '@chakra-ui/react';

import Overlay from './img/overlay.png';

import styles from './css/Project.module.scss';
import classnames from 'classnames';

const Project = ({ project }) => {
	const { name, cover, link, technologies, lead } = project;

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
		<Col sm={12} md={6} lg={4} className={styles['project']}>
			<a
				href={link ? link : null}
				title={name}
				className={styles['link']}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					src={cover}
					alt={name}
					className={styles['cover']}
					draggable="false"
				/>

				<div className={classnames(styles['overlay'], styles['image'])}>
					<img src={Overlay} alt="overlay" draggable="false" />
				</div>
				<div className={classnames(styles['overlay'], styles['text'])}>
					<h3>{name}</h3>
					<p>Created using {description}</p>
					{lead ? <p>Lead(s): {lead}</p> : <div></div>}
				</div>
			</a>

			<Flex
				direction="column"
				align="center"
				w="95%"
				mx="2.5%"
				className={styles['description']}
			>
				<h3>{name}</h3>
				<p>Created using {description}</p>
			</Flex>
		</Col>
	);
};

export default Project;
