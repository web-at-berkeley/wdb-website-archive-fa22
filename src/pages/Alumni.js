import React from 'react';
import { Alumni } from '../data/team';
import { SiteNavbar, Footer, TeamLevel } from '../components';
import AlummniMobile from './mobile/AlumniMobile';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Destinations from '../img/team/destinations.jpg';

import './css/Team.scss';

const Alumnis = () => {
	return (
		<>
			<div className="team team-desktop">
				<SiteNavbar />
				<Container className="body" style={{ paddingBottom: '0' }}>
					<Row>
						<Col xs={12} className="title-col">
							<h1 className="header">Our Destinations.</h1>
							<p className="subtitle">
								Our members have worked at companies and organizations across
								the spectrum of both industries and level of establishment.
							</p>
							<img
								src={Destinations}
								alt="Our Destinations"
								className="destinations"
							/>
						</Col>
						<Col xs={12} className="title-col">
							<h1 className="header">Our Alumni.</h1>
							<p className="subtitle">We love our alumni!</p>
						</Col>
					</Row>
				</Container>
				<TeamLevel
					title="Fall 2020"
					data={Alumni}
					names={['Melody', 'Ervin', 'Jerrick']}
				/>

				<Footer />
			</div>
			<AlummniMobile />
		</>
	);
};

export default Alumnis;
