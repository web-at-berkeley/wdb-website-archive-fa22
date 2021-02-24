import React, { useState } from 'react';
import { Alumni } from '../../data/team';
import { SiteNavbar, Footer, MemberModal } from '../../components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bubbles from '../../img/team/bubbles.png';

import '../css/Team.scss';

const Team = () => {
	const [showMember, setShowMember] = useState(false);

	const handleCloseMember = () => setShowMember(false);
	const handleShowMember = () => setShowMember(true);

	const [data, setData] = useState({});

	const updateInfo = (name) => {
		setData(Alumni[name]);
		handleShowMember();
	};

	const members = ['Melody', 'Ervin', 'Jerrick'];

	return (
		<div className="team team-mobile">
			<SiteNavbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="title-col">
						<h1 className="header">Our Alumni.</h1>
						<p className="subtitle">We love our alumni!</p>
					</Col>
				</Row>
				<Row>
					{members.map((person) => (
						<Col xs={6} className="image-col" key={person}>
							<img
								src={Alumni[person].image}
								alt={person}
								className="team-image"
								draggable="false"
								onClick={() => updateInfo(person)}
							/>
						</Col>
					))}

					<img
						src={Bubbles}
						alt="bubbles"
						className="bubbles"
						draggable="false"
					/>
				</Row>
			</Container>

			<MemberModal show={showMember} close={handleCloseMember} data={data} />

			<Footer />
		</div>
	);
};

export default Team;
