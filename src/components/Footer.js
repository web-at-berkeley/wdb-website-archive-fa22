import React from 'react';

import FooterBackground from '../img/footer.png';
import Linkedin from '../img/linkedin-white.png';

import '../css/Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<img
				src={FooterBackground}
				alt="footer background"
				draggable="false"
				className="bg-image selectDisable"
			/>

			<a
				href="https://www.linkedin.com/company/web-dev-at-berkeley/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Linkedin} alt="Linkedin" className="linkedin" />
			</a>
			<a
				href="mailto: webatberkeley@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<p className="text">Email: webatberkeley@gmail.com</p>
			</a>
		</div>
	);
};

export default Footer;
