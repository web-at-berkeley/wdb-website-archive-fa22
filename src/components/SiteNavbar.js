import React from 'react';
import { Link } from '@reach/router';

import NavBackground from '../img/site-nav-background.png';
import NavBackground1 from '../img/site-nav-1.png';
import NavBackground2 from '../img/site-nav-2.png';

import '../css/SiteNavbar.css';

const SiteNavbar = () => {
	return (
		<div className="site-navbar">
			<img
				src={NavBackground}
				alt="nav background"
				className="nav-background"
			/>
			<img
				src={NavBackground1}
				alt="nav background 1"
				className="nav-background-1"
			/>
			<img
				src={NavBackground2}
				alt="nav background 2"
				className="nav-background-2"
			/>
			<div class="text">
				<Link to="/" className="link-tag">
					<p className="nav-text">Home</p>
				</Link>
				<Link to="/about" className="link-tag">
					<p className="nav-text">About</p>
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
			</div>
		</div>
	);
};

export default SiteNavbar;
