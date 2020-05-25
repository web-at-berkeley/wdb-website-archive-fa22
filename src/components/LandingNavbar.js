import React from 'react';
import { Link } from '@reach/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import LogoWhite from '../img/site-nav/logo-white.png';

import '../css/LandingNavbar.css';

const LandingNavbar = () => {
	return (
		<Navbar
			bg="transparent"
			expand="lg"
			variant="light"
			className="landing-navbar selectDisable"
		>
			<Navbar.Brand href="/">
				<img src={LogoWhite} alt="logo white" style={style.Logo} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/" className="link-tag">
						<p className="nav-text">Home</p>
					</Link>
					<Link to="/about" className="link-tag">
						<p className="nav-text">What We Offer</p>
					</Link>
					<Link to="/team" className="link-tag">
						<p className="nav-text">Team</p>
					</Link>
					<Link to="/projects" className="link-tag">
						<p className="nav-text">Projects</p>
					</Link>
					<Link to="/apply" className="link-tag">
						<p className="nav-text">Apply</p>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

const style = {
	Logo: {
		marginRight: '1.5rem',
		width: '100px',
	},
};

export default LandingNavbar;
