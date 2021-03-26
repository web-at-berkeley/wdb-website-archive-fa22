import React from 'react';
import { Spring2021Projects, Fall2020Projects } from '../Projects/data';
import { SiteNavbar, Footer, Contact, Project } from '../../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RightNav from '../../img/right-nav.png';

import './css/AboutPages.scss';

const Development = () => {
	return (
		<div className="about-page development">
			<SiteNavbar />
			{/* <img src={Blobs} alt="blobs" className="blobs" draggable="false" /> */}
			<Container fluid className="body">
				<img
					src={RightNav}
					alt="right nav"
					className="right-nav"
					draggable="false"
				/>
				<h1 className="header">
					<span style={{ textShadow: 'none' }}>Education With </span>
					Application.
				</h1>

				<Row>
					<Col xs={12} className="text-center">
						<p className="subtitle">
							In our development branch, we allow experienced developers to gain
							hands-on experience working with industry clients. Students will
							partake in the software engineering lifecycle, leading the design,
							build, and deployment stages of the client's website.
						</p>
						<Contact />
					</Col>
				</Row>

				<h3 className="sub-subtitle">
					Spring <span>2021</span> Clients
				</h3>

				<Row style={{ justifyContent: 'center' }}>
					{Spring2021Projects.map((project) => (
						<Project project={project} />
					))}
				</Row>

				<h3 className="sub-subtitle">
					Fall <span>2020</span> Clients
				</h3>

				<Row style={{ justifyContent: 'center' }}>
					{Fall2020Projects.map((project) => (
						<Project project={project} />
					))}
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Development;