import React from 'react';

import LandingNavbar from './LandingNavbar';

import Button from 'react-bootstrap/Button';

import LandingDesign from '../img/landing/landing-design.png';
import LandingText from '../img/landing/landing-text.png';

import '../css/Landing.css';

const Landing = () => {
	return (
		<div className="landing">
			<LandingNavbar />
			<div class="body">
				<div class="text">
					<img
						src={LandingText}
						alt="landing text"
						className="landing-text selectDisable"
						draggable="false"
					/>
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
