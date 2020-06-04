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
				<Modal.Body>
					<form
						action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfIhjGYVPkR5ds6lp4-BD2veVE8lVHBCGths4Hl140pQLVIqg/formResponse" 
						target="_self" 
						method="POST" 
						id="mG61Hd"
					>
						<div class="name">
							<p>
								<label for="first">FIRST NAME</label>
								<input
									type="text"
									required
									name="entry.453885916"
									id="first"
									placeholder="Please enter your first name."
								/>
							</p>
							<p class="last-name">
								<label for="last">LAST NAME</label>
								<input
									type="text"
									required
									name="entry.424415708"
									id="first"
									placeholder="Please enter your last name."
								/>
							</p>
						</div>

						<p class="email">
							<label for="email">EMAIL ADDRESS</label>
							<input
								type="text"
								required
								name="entry.1510521009"
								id="first"
								placeholder="Please enter your email address."
							/>
						</p>
						<p class="organization">
							<label for="organization">ORGANIZATION NAME</label>
							<input
								type="text"
								required
								name="entry.108998585"
								id="first"
								placeholder="Please enter your email address."
							/>
						</p>
						<p>
							<label for="body">COMMENTS, QUESTIONS, FEEDBACK?</label>
							<input
								type="text"
								required
								name="entry.1252965523"
								id="first"
								placeholder="Please enter your message."
								class="big"
							/>
						</p>
						<p>
							<input id="submit" type="submit" value="Send message" />
						</p>
					</form>
				</Modal.Body>
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
