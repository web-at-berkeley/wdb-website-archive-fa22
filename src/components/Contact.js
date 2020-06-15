import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';

import ContactModal from './ContactModal';

const Contact = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<div style={style.Container}>
				<h5 style={style.Header}>Want to Work With Us?</h5>
				<p
					style={style.Subtitle}
					onClick={handleShow}
					className="cursor contact-text"
				>
					Contact Us!
				</p>
			</div>

			<Modal show={show} size="lg" onHide={handleClose}>
				<ContactModal />
			</Modal>
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
		fontWeight: '700',
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
	FormText: {
		fontSize: '22px',
		letterSpacing: '0.14em',
		textTransform: 'uppercase',
		fontFamily: 'Raleway',
		fontWeight: '700',
		marginBottom: '6px',
	},
	FormBox: {
		boxShadow: '4px 4px 30px rgba(0, 0, 0, 0.1)',
		borderRadius: '11px',
		border: 'none',
	},
};

export default Contact;
