import React from 'react';

import Header from '../../../components/header';
import clientProjects from '../data/client';
import nonprofitProjects from '../data/nonprofit';

import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './style.module.scss';

const Project = () => {
	let { id } = useParams();

	console.log(id);

	let data = clientProjects.filter((project) => project.label === id)[0];

	if (!data) {
		data = nonprofitProjects.filter((project) => project.label === id)[0];
	}

	console.log(data);

	const { name, subtitle, link, technologies, lead, semester } = data;

	return (
		<main>
			<Header title={name} subtitle={subtitle} />
			<Container></Container>
		</main>
	);
};

export default Project;
