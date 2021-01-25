import React, { useState } from 'react';
import Link from 'next/link';

import ContactModal from './ContactModal';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';

import LogoWhite from '../img/site-nav/logo-white.png';

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
						<Link href="/" className="link-tag">
							<a className="link-tag">
								<p className="nav-text">Home</p>
							</a>
						</Link>

						<div className="dropdown">
							<Link href="/about" className="link-tag dropbtn">
								<a className="link-tag">
									<p className="nav-text">What We Offer</p>
								</a>
							</Link>
							<div className="dropdown-content">
								<Link href="/about/education" className="link-tag">
									<a className="link-tag">
										<p className="nav-text">Education</p>
									</a>
								</Link>
								<Link href="/about/development" className="link-tag">
									<a className="link-tag">
										<p className="nav-text">Development</p>
									</a>
								</Link>
								<Link href="/about/partnerships" className="link-tag">
									<a className="link-tag">
										<p className="nav-text">Partnerships</p>
									</a>
								</Link>
							</div>
						</div>

						<div className="about-nav-phone">
							<Link href="/about" className="link-tag">
								<a className="link-tag">
									<p className="nav-text">What We Offer</p>
								</a>
							</Link>
							<div className="tab-text-container">
								<Link href="/about/education" className="link-tag">
									<a className="link-tag">
										<p className="nav-text tab-text">Education</p>
									</a>
								</Link>
								<Link href="/about/development" className="link-tag">
									<a className="link-tag">
										<p className="nav-text tab-text">Development</p>
									</a>
								</Link>
								<Link href="/about/partnerships" className="link-tag">
									<a className="link-tag">
										<p className="nav-text tab-text">Partnerships</p>
									</a>
								</Link>
							</div>
						</div>

						<div className="dropdown">
							<Link href="/team" className="link-tag dropbtn">
								<a className="link-tag">
									<p className="nav-text">Team</p>
								</a>
							</Link>
							<div className="dropdown-content">
								<Link href="/team/leadership" className="link-tag">
									<a className="link-tag">
										<p className="nav-text">Leadership</p>
									</a>
								</Link>
								<Link href="/team/alumni" className="link-tag">
									<a className="link-tag">
										<p className="nav-text">Alumni</p>
									</a>
								</Link>
							</div>
						</div>

						<div className="about-nav-phone">
							<Link href="/team" className="link-tag">
								<a className="link-tag">
									<p className="nav-text">Team</p>
								</a>
							</Link>
							<div className="tab-text-container">
								<Link href="/team/leadership" className="link-tag">
									<a className="link-tag">
										<p className="nav-text">Leadership</p>
									</a>
								</Link>
								<Link href="/team/alumni" className="link-tag">
									<a className="link-tag">
										<p className="nav-text">Alumni</p>
									</a>
								</Link>
							</div>
						</div>

						<Link href="/projects" className="link-tag">
							<a className="link-tag">
								<p className="nav-text">Projects</p>
							</a>
						</Link>
						<Link href="/apply" className="link-tag">
							<a className="link-tag">
								<p className="nav-text">Apply</p>
							</a>
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
