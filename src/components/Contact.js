import React from 'react';

const Contact = () => {
	return (
		<div style={style.Container}>
			<h5 style={style.Header}>Want to Work With Us?</h5>
			<a href="mailto: webatberkeley@gmail.com">
				<p style={style.Subtitle}>Contact Us!</p>
			</a>
		</div>
	);
};

let style = {
	Container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: '4rem',
	},
	Header: {
		fontFamily: 'Raleway',
		fontSize: '31px',
		letterSpacing: '0.22em',
		textTransform: 'uppercase',
		color: '#5F60FF',
		marginBottom: '.7rem',
	},
	Subtitle: {
		fontSize: '31px',
		letterSpacing: '0.14em',
		textDecorationLine: 'underline',
		color: '#000000',
	},
};

export default Contact;
