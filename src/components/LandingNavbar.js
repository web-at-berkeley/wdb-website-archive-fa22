import React, { useState } from 'react';
import { Link } from '@reach/router';

import ContactModal from './ContactModal';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';

import LogoWhite from '../img/site-nav/logo-white.png';

import '../css/LandingNavbar.scss';

const LandingNavbar = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Navbar
				bg="transparent"
				expand="lg"
				variant="light"
				className="landing-navbar selectDisable"
			>
				<Navbar.Brand href="/">
					<img src={LogoWhite} alt="logo white" className="logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to="/" className="link-tag">
							<p className="nav-text">Home</p>
						</Link>

						<div className="dropdown">
							<Link to="/about" className="link-tag dropbtn">
								<p className="nav-text">What We Offer</p>
							</Link>
							<div className="dropdown-content">
								<Link to="/about/education" className="link-tag">
									<p className="nav-text">Education</p>
								</Link>
								<Link to="/about/development" className="link-tag">
									<p className="nav-text">Development</p>
								</Link>
								<Link to="/about/partnerships" className="link-tag">
									<p className="nav-text">Partnerships</p>
								</Link>
							</div>
						</div>

						<div className="about-nav-phone">
							<Link to="/about" className="link-tag">
								<p className="nav-text">What We Offer</p>
							</Link>
							<div className="tab-text-container">
								<Link to="/about/education" className="link-tag">
									<p className="nav-text tab-text">Education</p>
								</Link>
								<Link to="/about/development" className="link-tag">
									<p className="nav-text tab-text">Development</p>
								</Link>
								<Link to="/about/partnerships" className="link-tag">
									<p className="nav-text tab-text">Partnerships</p>
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
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Modal show={show} size="lg" onHide={handleClose}>
				<ContactModal />
			</Modal>
		</div>
	);
};

export default LandingNavbar;
