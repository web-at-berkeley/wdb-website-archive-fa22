import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Contact = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<div style={style.Container}>
				<h5 style={style.Header}>Want to Work With Us?</h5>
				<Button
					onClick={handleShow}
					style={{ background: 'transparent', border: 'none' }}
				>
					<p style={style.Subtitle}>Contact Us!</p>
				</Button>
			</div>

			<Modal show={show} size="lg" onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
};

export default Contact;
