import React from 'react';

import FooterBackground from '../img/footer.png';

const Footer = () => {
	return (
		<div className="footer">
			<img
				src={FooterBackground}
				alt="footer background"
				draggable="false"
				style={{ width: '100%', marginTop: '5vh' }}
			/>
		</div>
	);
};

export default Footer;
