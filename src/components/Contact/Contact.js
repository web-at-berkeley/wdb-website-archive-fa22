import React, { useState } from 'react';

import ContactModal from './ContactModal';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './css/Contact.scss';

const Contact = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<div className="contact">
				<h5>Want to Work With Us?</h5>
				<Button onClick={handleShow}>
					<p className="contact-text">Contact Us</p>
				</Button>
			</div>

			<Modal show={show} size="lg" onHide={handleClose}>
				<ContactModal />
			</Modal>
		</>
	);
};

export default Contact;
