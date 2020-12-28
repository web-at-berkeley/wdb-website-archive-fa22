import React, { useState } from 'react';
import { Link } from '@reach/router';

import ContactModal from './ContactModal';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';

import NavBackground from '../img/site-nav/site-nav-background.png';
import LogoRainbow from '../img/site-nav/logo-rainbow.png';

import './css/SiteNavbar.scss';
import './css/LandingNavbar.scss';

const SiteNavbar = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<div className="site-navbar">
				<img
					src={NavBackground}
					alt="nav background"
					className="nav-background selectDisable"
					draggable="false"
				/>
				<Link to="/">
					<img
						src={LogoRainbow}
						alt="logo rainbow"
						className="logo-rainbow selectDisable"
						id="logo-rainbow"
					/>
				</Link>

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
					<div onClick={handleShow} className="link-tag">
						<p className="nav-text">Contact</p>
					</div>
				</div>
			</div>

			<Navbar
				bg="transparent"
				expand="lg"
				variant="light"
				className="landing-navbar selectDisable site-navbar-mobile"
			>
				<Navbar.Brand href="/">
					<img src={LogoRainbow} alt="logo rainbow" style={style.Logo} />
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
						<div onClick={handleShow} className="link-tag">
							<p className="nav-text">Contact Us</p>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Modal show={show} size="lg" onHide={handleClose}>
				<ContactModal />
			</Modal>
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
