import React from 'react';

import LandingNavbar from './LandingNavbar';

import Button from 'react-bootstrap/Button';

import LandingDesign from '../img/landing/landing-design.png';

import '../css/Landing.css';

const Landing = () => {
	return (
		<div className="landing">
			<LandingNavbar />
			<div className="body">
				<div className="text">
					<h1 className="landing-text">
						Web Development
						<br />
						at Berkeley
					</h1>
					<a href="/about" className="landing-link">
						<Button className="landing-button">
							<p className="button-text">Learn More</p>
						</Button>
					</a>
				</div>
				<img
					src={LandingDesign}
					alt="landing design"
					className="landing-design selectDisable"
				/>
			</div>
		</div>
	);
};

export default Landing;
