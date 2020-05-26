import React from 'react';
import { Link } from '@reach/router';

import NavBackground from '../img/site-nav/site-nav-background.png';
import LogoRainbow from '../img/site-nav/logo-rainbow.png';

import '../css/SiteNavbar.css';

const SiteNavbar = (props) => {
	let LogoToggle = <div></div>;
	if (props.logo === 'false') {
		LogoToggle = (
			<img src={LogoRainbow} alt="logo rainbow" className="logo-rainbow" />
		);
	}

	return (
		<div className="site-navbar">
			<img
				src={NavBackground}
				alt="nav background"
				className="nav-background selectDisable"
				draggable="false"
			/>
			<LogoToggle />

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
	);
};

export default SiteNavbar;
