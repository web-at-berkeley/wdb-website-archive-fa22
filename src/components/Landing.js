import React from 'react';

import LandingDesign from '../img/landing-design.png';
import LandingButton from '../img/landing-button.png';

import '../css/Landing.css';

const Landing = () => {
	return (
		<div className="landing">
			<div class="body">
				<div class="text">
					<h1>Web Developers of Berkeley</h1>
					<a href="/about">
						<img
							src={LandingButton}
							alt="landing button"
							className="landing-button"
						/>
					</a>
				</div>
				<img
					src={LandingDesign}
					alt="landing design"
					className="landing-design"
				/>
			</div>
		</div>
	);
};

export default Landing;
