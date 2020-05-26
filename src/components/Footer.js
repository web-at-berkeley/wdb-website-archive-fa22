import React from 'react';

import FooterBackground from '../img/footer.png';

const Footer = () => {
	return (
		<div
			className="footer"
			style={{ display: 'flex', justifyContent: 'center' }}
		>
			<img
				src={FooterBackground}
				alt="footer background"
				draggable="false"
				style={{
					width: '100%',
					marginTop: '5vh',
					// position: 'absolute',
					// top: '150vh',
				}}
			/>

			{/* <a
				href="https://www.linkedin.com/in/samarth-goel-07"
				style={{
					position: 'absolute',
					marginTop: '15.3rem',
					marginLeft: '-8rem',
				}}
			>
				<img src={Linkedin} alt="linkedin" />
			</a>

			<a
				href="mailto: webatberkeley@gmail.com"
				style={{
					position: 'absolute',
					marginTop: '15rem',
				}}
			>
				<p style={{ fontSize: '32px', color: '#00f8f9' }}>Contact Us</p>
			</a>
			<a
				href="mailto: sgoel9@berkeley.edu"
				style={{
					position: 'absolute',
					marginTop: '15.3rem',
					marginLeft: '8.5rem',
				}}
			>
				<img src={Mail} alt="mail" />
			</a> */}
		</div>
	);
};

export default Footer;
