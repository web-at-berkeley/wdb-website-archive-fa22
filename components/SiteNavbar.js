import React, { useState } from 'react';
import Link from 'next/link';

import ContactModal from './ContactModal';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal';

import NavBackground from '../img/site-nav/site-nav-background.png';
import LogoRainbow from '../img/site-nav/logo-rainbow.png';

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
				<Link href="/">
					<a className="link-tag">
						<img
							src={LogoRainbow}
							alt="logo rainbow"
							className="logo-rainbow selectDisable"
							id="logo-rainbow"
						/>
					</a>
				</Link>

				<div className="text">
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
									<p className="nav-text">
										<mark>Education</mark>
									</p>
								</a>
							</Link>
							<Link href="/about/development" className="link-tag">
								<a className="link-tag">
									<p className="nav-text">
										<mark>Development</mark>
									</p>
								</a>
							</Link>
							<Link href="/about/partnerships" className="link-tag">
								<a className="link-tag">
									<p className="nav-text">
										<mark>Partnerships</mark>
									</p>
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
							{/* <Link href="/team/members" className="link-tag">
								<p className="nav-text">
									<mark>Members</mark>
								</p>
							</Link> */}
							<Link href="/team/leadership" className="link-tag">
								<a className="link-tag">
									<p className="nav-text">
										<mark>Leadership</mark>
									</p>
								</a>
							</Link>
							<Link href="/team/alumni" className="link-tag">
								<a className="link-tag">
									<p className="nav-text">
										<mark>Alumni</mark>
									</p>
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
						<Link href="/" className="link-tag">
							<p className="nav-text">Home</p>
						</Link>
						<Link href="/about" className="link-tag">
							<p className="nav-text">What We Offer</p>
						</Link>
						<Link href="/about/education" className="link-tag">
							<p className="nav-text tab-text">Education</p>
						</Link>
						<Link href="/about/development" className="link-tag">
							<p className="nav-text tab-text">Development</p>
						</Link>
						<Link href="/about/partnerships" className="link-tag">
							<p className="nav-text tab-text">Partnerships</p>
						</Link>
						<Link href="/team" className="link-tag">
							<p className="nav-text">Team</p>
						</Link>
						<Link href="/projects" className="link-tag">
							<p className="nav-text">Projects</p>
						</Link>
						<Link href="/apply" className="link-tag">
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
