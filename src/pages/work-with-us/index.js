import React, { useState } from 'react';

import services from './constants/Services';
import sponsorships from './constants/Sponsorships';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Instagram from '../../components/instagram';

import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import ServiceBlobs from './img/service-blobs.png';
import FormBlobs from './img/form-blobs.png';

import styles from './style.module.scss';
import classnames from 'classnames';

const WorkWithUs = () => {
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');
	const [orgDescription, setOrgDescription] = useState('');
	const [request, setRequest] = useState('');
	const [comments, setComments] = useState('');
	const [error, setError] = useState([]);
	const [submitted, setSubmitted] = useState(false);

	const submit = () => {
		const errors = [];
		const fields = [
			{ field: name, name: 'name' },
			{ field: company, name: 'company' },
			{ field: email, name: 'email' },
			{ field: orgDescription, name: 'orgDescription' },
			{ field: request, name: 'request' },
		];
		for (let i = 0; i < fields.length; i++) {
			const current = fields[i];
			if (!current.field) {
				errors.push(current.name);
			}
		}
		setError(error);
		if (!errors.length) {
			setSubmitted(true);
		}
	};

	const errorText = () => {
		const text = error.map((message) => `${message}, `);
		return text;
	};

	return (
		<main>
			<Header
				title="Work with us"
				subtitle="we’re open for work!"
				description="Interested in working with us? Want to ask questions about our past projects or see our 
							design portfolios? Feel free to reach out and contact us!"
			/>
			<Container className={styles['container']}>
				<div className={styles['buttons']}>
					<span>
						<a
							href="https://forms.gle/tDLdLqd8psNfNTbo8"
							target="_blank"
							rel="noreferrer"
						>
							<Button text="Fill out our form" />
						</a>
					</span>
					<Link to="/projects">
						<Button text="Check out our past work" />
					</Link>
				</div>

				<div className={styles['services']}>
					<img src={ServiceBlobs} alt="" className={styles['blobs']} />
					<h2>Services we offer</h2>
					<div className={styles['cards']}>
						<Row lg="4" med="2" sm="1">
							{services.map(({ image, title, description }) => (
								<div className={styles['card']}>
									<img src={image} alt={title} />
									<div className={styles['text']}>
										<h3>{title}</h3>
										<p>{description}</p>
									</div>
								</div>
							))}
						</Row>
					</div>

					<h2>Other ways you can work with us</h2>
					<div className={styles['cards']}>
						<Row lg="3" med="1" sm="1" xs="1">
							{sponsorships.map(({ image, title, description }) => (
								<div
									className={classnames(styles['card'], styles['sponsor-card'])}
								>
									{' '}
									<img src={image} alt={title} />
									<div className={styles['text']}>
										<h3>{title}</h3>
										<p>{description}</p>
									</div>
								</div>
							))}
						</Row>
					</div>
				</div>

				<div className={styles['contact']} id="contact">
					<h4 className={styles['title']}>
						Looking to build something great?
						<br /> Let’s get to{' '}
						<span style={{ textDecoration: 'underline' }}>work.</span>
					</h4>
					<p className={styles['subtitle']}>
						Fill out this form with some basic information about your
						organization or startup, and we’ll reach out to schedule a time to
						chat.
					</p>
					<a
						href="https://forms.gle/tDLdLqd8psNfNTbo8"
						target="_blank"
						rel="noreferrer"
					>
						<Button text="Contact Us" />
					</a>
					{/* <form 
					action='https://docs.google.com/forms/d/e/1FAIpQLSf_HkQ06zaYExGMX8LTSvyPbApQ90wvfbW6_MUYFct-jH_1ow/formResponse'
					target='_self'
					method='post'
					id='asdf'
					className={styles['form']}>
						<div className={classnames(styles['row'], styles['top-row'])}>
							<div className={classnames(styles['field'], styles['name'])}>
							<Form.Group className={styles['form_group']} >
								
								<Form.Control
									placeholder="Full Name"
									type="text"
									required
									name="entry.194553479"
									id="first"
									style={style.FormBox}
								/>
							</Form.Group>
							</div>
							<div className={classnames(styles['field'], styles['company'])}>
								<Form.Group className={styles['form_group']}>
									
									<Form.Control
										placeholder="Organization/Company"
										type="text" 
										required
										name="entry.1946864254"
										id="first"
										style={style.FormBox}
									/>
								</Form.Group>
							</div>
							<div className={classnames(styles['field'], styles['email'])}>
							<Form.Group className={styles['form_group']}>
									
									<Form.Control
										placeholder="Email Address"
										type="text"
										required
										name="entry.1287541880"
										id="first"
										style={style.FormBox}
									/>
								</Form.Group>
							</div>
						</div>

						<div
							className={classnames(
								styles['row'],
								styles['field'],
								styles['org-description']
							)}
						>
							<Form.Group className={styles['form_group_area']}>
								<Form.Control
									as="textarea"
									rows="6"
									type="text"
									required
									name="entry.634684828"
									id="first"
									placeholder="Tell us about your organization/company."
									class="big"
									style={style.FormBox}
								/>
							</Form.Group>
						</div>

						<div
							className={classnames(
								styles['row'],
								styles['field'],
								styles['request']
							)}
						>
							<Form.Group className={styles['form_group_area']}>
								<Form.Control
									as="textarea"
									rows="6"
									type="text"
									required
									name="entry.554707180"
									id="first"
									placeholder="What can we do for you?"
									class="big"
									style={style.FormBox}
								/>
							</Form.Group>
						</div>

						<div
							className={classnames(
								styles['row'],
								styles['field'],
								styles['comments']
							)}
						>
							<Form.Group className={styles['form_group_area']}>
								<Form.Control
									as="textarea"
									rows="6"
									type="text"
									required
									name="entry.1974357149"
									id="first"
									placeholder="Any other comments or questions for us?"
									class="big"
									style={style.FormBox}
								/>
							</Form.Group>
						</div>

						{error.length ? (
							<p className={styles['error']}>
								Error: please enter your {errorText()}.
							</p>
						) : null}

						<div className={styles['submit']}>
						<Button
						text="Submit"
						type="submit"
						id="submit"
						value="Send message"
						// style={{
						// 	width: '100%',
						// 	marginTop: '1.5rem',
						// 	background: 'transparent',
						// 	fontSize: '18px',
						// 	padding: '.7rem',
						// 	border: '1px solid #dee2e6',
						// }}
						// className="text-center"
					>
						
					</Button>
							
						</div>
					</form> */}
				</div>

				<div className={styles['instagram']}>
					<Instagram />
				</div>
			</Container>
		</main>
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
		borderRadius: '9px',
		border: 'none',
	},
};

export default WorkWithUs;
