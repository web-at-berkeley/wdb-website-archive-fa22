import React, { useEffect } from 'react';
import { SiteNavbar, Footer } from '../../components';
import { navigate, Link } from '@reach/router';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Logo from '../../img/site-nav/logo-rainbow.png';

import './css/Resources.scss';

const Resources = (props) => {
	const type = props.page;
	useEffect(() => {
		if (type === 'startup') {
			navigate(
				'https://www.notion.so/Startup-Resources-b413a11c5de0429a8097c38eacdbd180'
			);
		} else if (type === 'development') {
			navigate(
				'https://www.notion.so/WDB-Dev-Design-Resources-b6d91c1b96834a8d8c86614e3c70bd74'
			);
		} else if (type === 'finance') {
			navigate(
				'https://www.notion.so/Financial-Resources-2ca6a1d1ee9e4ae98c5ab325c0eed5e2'
			);
		}
	}, []);

	if (props.page) {
		return (
			<div id="redirecting">
				<img src={Logo} alt="Web Development at Berkeley" />
				<h1>redirecting...</h1>
			</div>
		);
	}

	return (
		<div className="resources">
			<SiteNavbar />
			<Container fluid className="body">
				<Row>
					<Col xs={12} className="title-col">
						<h1 className="header">Resources.</h1>
						<p className="subtitle">
							Part of our mission is giving back to our community, and to that
							end we regularly compile relevent and often timeless resources
							from our collective pool of knowledge in order to create
							collections to be used by entreprenuers, developers, designers,
							and college students in general.
						</p>
					</Col>
				</Row>
				<div className="btn-group">
					<Link to="startup" className="link-tag">
						<Button>
							<p>Startup Resources</p>
						</Button>
					</Link>
					<Link to="development" className="link-tag">
						<Button>
							<p>Web Development and Design Resources</p>
						</Button>
					</Link>
					<Link to="finance" className="link-tag">
						<Button>
							<p>Personal Finance Resources</p>
						</Button>
					</Link>
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default Resources;
