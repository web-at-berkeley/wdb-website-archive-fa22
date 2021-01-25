import React from 'react';
import { Alumni } from '../../data/team';
import { SiteNavbar, Footer, TeamLevel } from '../../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Members = () => {
	return (
		<>
			<div className="team team-desktop">
				<SiteNavbar />
				<Container className="body" style={{ paddingBottom: '0' }}>
					<Row>
						<Col xs={12} className="title-col">
							<h1 className="header">Our Members</h1>
							<p className="subtitle">
								WDB is a tight-knit, inviting community that truly values
								upholding a friendly, open, and hard-working culture. Each one
								of our members brings something unique and important to the
								table. Meet our Fall 2020 cohort here!
							</p>
						</Col>
					</Row>
				</Container>
				<TeamLevel
					title="Students"
					data={Alumni}
					names={['Melody', 'Ervin', 'Jerrick']}
				/>

				<TeamLevel
					title="Developers"
					data={Alumni}
					names={['Melody', 'Ervin', 'Jerrick']}
				/>

				<Footer />
			</div>
		</>
	);
};

export default Members;
