import React from 'react';
import { Link } from '@reach/router';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import NavBackground from '../img/site-nav/site-nav-background.png';
import LogoRainbow from '../img/site-nav/logo-rainbow.png';

import '../css/SiteNavbar.css';
import '../css/LandingNavbar.css';

const SiteNavbar = (props) => {
	let Toggle = (
		<img
			src={LogoRainbow}
			alt="logo rainbow"
			className="logo-rainbow"
			id="logo-rainbow"
		/>
	);

	if (props.logo === 'false') {
		Toggle = <div></div>;
	}

	return (
		<div>
			<div className="site-navbar">
				<img
					src={NavBackground}
					alt="nav background"
					className="nav-background selectDisable"
					draggable="false"
				/>
				{Toggle}

				<div className="text">
					<Link to="/" className="link-tag">
						<p className="nav-text">Home</p>
					</Link>
					<div className="dropdown">
						<Link to="/about" className="link-tag dropbtn">
							<p className="nav-text">What We Offer</p>
						</Link>
						<div className="dropdown-content">
							<Link to="/about/education" className="link-tag">
								<p className="nav-text">
									<mark>Education</mark>
								</p>
							</Link>
							<Link to="/about/development" className="link-tag">
								<p className="nav-text">
									<mark>Development</mark>
								</p>
							</Link>
							<Link to="/about/partnerships" className="link-tag">
								<p className="nav-text">
									<mark>Partnerships</mark>
								</p>
							</Link>
						</div>
					</div>
					<Link to="/team" className="link-tag">
						<p className="nav-text">Team</p>
					</Link>
					<Link to="/projects" className="link-tag">
						<p className="nav-text">Projects</p>
					</Link>
					<Link to="/apply" className="link-tag">
						<p className="nav-text">Apply</p>
					</Link>
				</div>
			</div>

			<Navbar
				bg="transparent"
				expand="lg"
				variant="light"
				className="landing-navbar selectDisable site-navbar-mobile"
			>
				<Navbar.Brand href="/">
					<img src={LogoRainbow} alt="logo white" style={style.Logo} />
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
						<Link to="/about/education" className="link-tag">
							<p className="nav-text tab-text">Education</p>
						</Link>
						<Link to="/about/development" className="link-tag">
							<p className="nav-text tab-text">Development</p>
						</Link>
						<Link to="/about/partnerships" className="link-tag">
							<p className="nav-text tab-text">Partnerships</p>
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
						<a href="mailto: webatberkeley@gmail.com" className="link-tag">
							<p className="nav-text">Contact Us</p>
						</a>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

const style = {
	Logo: {
		marginRight: '1.5rem',
		width: '100px',
	},
};

export default SiteNavbar;
