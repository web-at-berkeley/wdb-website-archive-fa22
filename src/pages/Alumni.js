import React from 'react';
import { Alumni } from '../data/team';
import { SiteNavbar, Footer, TeamLevel } from '../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './css/Team.scss';

const Team = () => {
	return (
		<>
			<div className="team team-desktop">
				<SiteNavbar />
				<Container className="body" style={{ paddingBottom: '0' }}>
					<Row>
						<Col xs={12} className="title-col">
							<h1 className="header">Our Alumni.</h1>
							<p className="subtitle">
								We love our alumni!
							</p>
						</Col>
					</Row>
				</Container>
				<TeamLevel
					title="Fall 2020"
					data={Alumni}
					names={['Ervin', 'Melody']}
				/>

				<Footer />
			</div>
		</>
	);
};

export default Team;
