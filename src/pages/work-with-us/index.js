import React, { useState } from 'react';

import services from './constants/Services';
import sponsorships from './constants/Sponsorships';
import Header from '../../components/header';
import Button from '../../components/button';
import Instagram from '../../components/instagram';

import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import ServiceBlobs from './img/service-blobs.png';
import FormBlobs from './img/form-blobs.png';

import Row from 'react-bootstrap/Row';

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
					{/* <form className={styles['form']}>
						<div className={classnames(styles['row'], styles['top-row'])}>
							<div className={classnames(styles['field'], styles['name'])}>
								<input
									placeholder="Full Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div className={classnames(styles['field'], styles['company'])}>
								<input
									placeholder="Company Name"
									value={company}
									onChange={(e) => setCompany(e.target.value)}
								/>
							</div>
							<div className={classnames(styles['field'], styles['email'])}>
								<input
									placeholder="Email Address"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>

						<div
							className={classnames(
								styles['row'],
								styles['field'],
								styles['org-description']
							)}
						>
							<textarea
								placeholder="Tell us about your organization."
								rows="7"
								value={orgDescription}
								onChange={(e) => setOrgDescription(e.target.value)}
							></textarea>
						</div>

						<div
							className={classnames(
								styles['row'],
								styles['field'],
								styles['request']
							)}
						>
							<textarea
								placeholder="What can we do for you?"
								rows="6"
								value={request}
								onChange={(e) => setRequest(e.target.value)}
							></textarea>
						</div>

						<div
							className={classnames(
								styles['row'],
								styles['field'],
								styles['comments']
							)}
						>
							<textarea
								placeholder="Any other comments or questions for us?"
								rows="5"
								value={comments}
								onChange={(e) => setComments(e.target.value)}
							></textarea>
						</div>

						{error.length ? (
							<p className={styles['error']}>
								Error: please enter your {errorText()}.
							</p>
						) : null}

						<div className={styles['submit']}>
							<Button text="Submit" onClick={submit} />
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

export default WorkWithUs;
