import React, { useEffect } from 'react';
import { navigate, Link } from '@reach/router';

import Button from 'react-bootstrap/Button';

import Logo from '../img/site-nav/logo-rainbow.png';

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
		<div
			style={{
				width: '100%',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
			id="resources"
		>
			<img src={Logo} alt="Web Development at Berkeley" />
			<Link to="startup" style={{ marginBottom: '1rem' }}>
				<Button>
					<p>Startup Resources</p>
				</Button>
			</Link>
			<Link to="development">
				<Button>
					<p>Web Development and Design Resources</p>
				</Button>
			</Link>
			<Link to="finance">
				<Button>
					<p>Personal Finance Resources</p>
				</Button>
			</Link>
		</div>
	);
};

export default Resources;
