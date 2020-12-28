import React from 'react';

import FooterBackground from '../img/footer.png';
import Linkedin from '../img/LinkedIN.png';
import Facebook from '../img/facebook.png';
import Instagram from '../img/instagram.png';
import Mail from '../img/Mail.png';
import Badge from '../img/badge.png';

import './css/Footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<img
				src={FooterBackground}
				alt="footer background"
				draggable="false"
				className="bg-image"
			/>
			<a
				href="https://www.linkedin.com/company/web-dev-at-berkeley/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Linkedin} alt="Linkedin" className="social linkedin" />
			</a>
			<a
				href="mailto: webatberkeley@gmail.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Mail} alt="Mail" className="social mail" />
			</a>
			<a
				href="https://www.instagram.com/webatberkeley/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Instagram} alt="Instagram" className="social instagram" />
			</a>
			<a
				href="https://www.facebook.com/webatberkeley/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={Facebook} alt="Facebook" className="social facebook" />
			</a>
			<a href="/">
				<img src={Badge} alt="badge" className="badge" />
			</a>
		</div>
	);
};

export default Footer;
