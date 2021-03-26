import React from 'react';
import { Partners } from './data';
import { SiteNavbar, Footer, Contact } from '../../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RightNav from '../../img/right-nav.png';

import './css/Partnerships.scss';

const Partnerships = () => {
	return (
		<div className="about-page partnerships">
			<SiteNavbar />
			<Container fluid className="body">
				<img
					src={RightNav}
					alt="right nav"
					className="right-nav selectDisable"
					draggable="false"
				/>
				<h1 className="header">Giving Back</h1>
				<Row>
					<Col xs={12} className="text-center">
						<p className="subtitle">
							As a UC Berkeley-based web organization, students will have the
							opportunity to partner with various clubs on campus. By creating
							websites for these organizations, we aim to provide our students
							with meaningful experiences and preparation for industry-level
							development.
						</p>
						<Contact />
					</Col>
				</Row>

				<h3 className="sub-subtitle">Our Partners</h3>

				<Row className="justify-content-center">
					{Partners.slice(0, 3).map((partner) => (
						<Col xs={12} md={4} lg={3} className="text-center partner-col">
							<a
								href={partner.link}
								title={partner.name}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={partner.cover}
									alt={partner.name}
									className={`partner ${partner.class}`}
									draggable="false"
								/>
							</a>
						</Col>
					))}
				</Row>
				<Row className="justify-content-center">
					{Partners.slice(3, 5).map((partner) => (
						<Col xs={12} md={4} lg={3} className="text-center partner-col">
							<a
								href={partner.link}
								title={partner.name}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={partner.cover}
									alt={partner.name}
									className={`partner ${partner.class}`}
									draggable="false"
								/>
							</a>
						</Col>
					))}
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Partnerships;
