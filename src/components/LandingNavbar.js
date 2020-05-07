import React from 'react';
import { Link } from '@reach/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import LogoWhite from '../img/logo-white.png';

import '../css/Navbar.css';

const LandingNavbar = () => {
	return (
		<Navbar
			bg="transparent"
			expand="lg"
			style={style.SiteNav}
			className="navbar"
		>
			<Navbar.Brand href="/">
				<img src={LogoWhite} alt="logo white" style={style.Logo} />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Link to="/" className="link-tag">
						<p style={style.NavText}>Home</p>
					</Link>
					<Link to="/about" className="link-tag">
						<p style={style.NavText}>About</p>
					</Link>
					<Link to="/team" className="link-tag">
						<p style={style.NavText}>Team</p>
					</Link>
					<Link to="/projects" className="link-tag">
						<p style={style.NavText}>Projects</p>
					</Link>
					<Link to="/apply" className="link-tag">
						<p style={style.NavText}>Apply</p>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

const style = {
	SiteNav: {
		padding: '8vh 0 0 7%',
	},
	Logo: {
		marginRight: '1.5rem',
		width: '100px',
	},
	NavText: {
		fontSize: '22px',
		color: 'white',
		margin: '0 1rem',
		letterSpacing: '0.11em',
		textTransform: 'uppercase',
	},
};

export default LandingNavbar;
