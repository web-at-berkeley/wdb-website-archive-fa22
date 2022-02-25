import React from 'react';

// import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

import styles from './styles.module.scss';

const Project = ({ project }) => {
	const { name, cover, color, link } = project;

	return (
		<Col sm={12} md={6} lg={4} className={styles['project']}>
			{link ? (
				<a href={link} target="_blank" rel="noreferrer">
					<img
						src={cover}
						alt={name}
						style={{ boxShadow: `4px 4px 21px ${color}` }}
					/>
				</a>
			) : (
				<img
					src={cover}
					alt={name}
					style={{ boxShadow: `4px 4px 21px ${color}` }}
				/>
			)}
		</Col>
	);
};

export default Project;
