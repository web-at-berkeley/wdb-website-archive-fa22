import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactModal = () => {
	return (
		<div>
			<Modal.Header closeButton style={{ padding: '1.5rem 7.5%' }}>
				<h2 style={{ fontSize: '32px' }} className="purple-gradient">
					Contact Us
				</h2>
			</Modal.Header>
			<Modal.Body style={{ padding: '2rem 7.5%' }}>
				<Form
					action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfIhjGYVPkR5ds6lp4-BD2veVE8lVHBCGths4Hl140pQLVIqg/formResponse"
					target="_self"
					method="POST"
					id="mG61Hd"
				>
					<Row className="name">
						<Col xs={12} sm={6}>
							<Form.Group>
								<Form.Label
									htmlFor="first"
									style={style.FormText}
									className="purple-gradient"
								>
									First Name
								</Form.Label>
								<Form.Control
									type="text"
									required
									name="entry.453885916"
									id="first"
									style={style.FormBox}
								/>
							</Form.Group>
						</Col>
						<Col xs={12} sm={6}>
							<Form.Group className="last-name">
								<Form.Label
									htmlFor="last"
									style={style.FormText}
									className="purple-gradient"
								>
									Last Name
								</Form.Label>
								<Form.Control
									type="text"
									required
									name="entry.424415708"
									id="first"
									style={style.FormBox}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group className="organization">
								<Form.Label
									htmlFor="organization"
									style={style.FormText}
									className="purple-gradient"
								>
									Organization Name
								</Form.Label>
								<Form.Control
									type="text"
									required
									name="entry.108998585"
									id="first"
									style={style.FormBox}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group className="email">
								<Form.Label
									htmlFor="email"
									style={style.FormText}
									className="purple-gradient"
								>
									EMAIL ADDRESS
								</Form.Label>
								<Form.Control
									type="text"
									required
									name="entry.1510521009"
									id="first"
									style={style.FormBox}
								/>
							</Form.Group>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Group style={style.Field}>
								<Form.Label
									htmlFor="body"
									style={style.FormText}
									className="purple-gradient"
								>
									COMMENTS, QUESTIONS, FEEDBACK?
								</Form.Label>
								<Form.Control
									as="textarea"
									rows="4"
									type="text"
									required
									name="entry.1252965523"
									id="first"
									style={style.FormBox}
									class="big"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Button
						variant="secondary"
						type="submit"
						id="submit"
						value="Send message"
						style={{
							width: '100%',
							marginTop: '1.5rem',
							background: 'transparent',
							fontSize: '18px',
							padding: '.7rem',
							border: '1px solid #dee2e6',
						}}
						className="text-center"
					>
						<p className="purple-gradient text-center">Submit</p>
					</Button>
				</Form>
			</Modal.Body>
		</div>
	);
};

let style = {
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

export default ContactModal;
