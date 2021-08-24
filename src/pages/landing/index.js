import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import stats from './constants/Stats';
import Instagram from '../../components/instagram';
import Button from '../../components/button';
import Event from '../../components/event';
import Showcase from '../../components/showcase';

import axios from 'axios';

import Container from 'react-bootstrap/Container';

import Bg from './img/bg.png';
import NewsletterBlob from './img/newsletter-blob.png';
import Blobs from './img/blobs.png';
import Clients from './img/clients.png';
import Partners from './img/partners.png';
import LandingBlobs from './img/landing-blobs.png';
import LogoBlack from './img/logo-black.png';
import Meta from './img/meta.png';

import BlobsMobile from './img/landing-blobs-mobile.png';
import NewsletterBlobMobile from './img/newsletter-blob-mobile.png';
import ClientsMobile from './img/clients-mobile.png';
import PartnersMobile from './img/partners-mobile.png';

import styles from './style.module.scss';
import classnames from 'classnames';
import breakpoints from '../../breakpoints.module.scss';

const Landing = () => {
	const [emailAddress, setEmailAddress] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [emailSuccess, setEmailSuccess] = useState(false);

	function submitEmail(e) {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (re.test(e)) {
			setEmailError(false);
			setEmailSuccess(true);
			let emailObject = { email: e };
			console.log(emailObject);
			axios
				.post(
					'https://sheet.best/api/sheets/d67bcf77-3da2-475c-85b9-a1863ded112e',
					emailObject,
					{
						headers: {
							'X-API-Key':
								'm3RSp-wizXAM3jBcCP2Eo06bfE!2KcEmupS55XMXoscTWg-ivegf#rKQiTUmHpIJ',
						},
					}
				)
				.then((response) => {
					console.log(response);
				});
		} else {
			setEmailError(true);
		}
	}

	return (
		<div className={styles['container']}>
			{/* Splash page */}
			<img src={Meta} alt="" style={{ display: 'none' }} />
			<div className={styles['hero']}>
				<img src={Bg} alt="" className={styles['bg']} />
				{/* Desktop top graphics */}
				<img
					src={LandingBlobs}
					alt=""
					className={`${styles['landing-blobs']} ${breakpoints['desktop']}`}
				/>
				{/* Mobile top graphics */}
				<img
					src={BlobsMobile}
					alt=""
					className={`${styles['landing-blobs']} ${breakpoints['mobile']}`}
				/>

				<div className={styles['text']}>
					<Link to="/" className={breakpoints['mobile']}>
						<img src={LogoBlack} alt="Web Development at Berkeley" />
					</Link>
					<h3>
						Builders, Creatives,
						<br />
						and entrepreneurs
					</h3>
					<h2 className={breakpoints['desktop']}>
						UC Berkeley’s premier web design
						<br />
						and development organization.
					</h2>
				</div>
			</div>

			<Container className={styles['content']}>
				<h6 className={styles['blurb']}>
					<span style={{ fontWeight: 800 }}>Web Development at Berkeley</span>{' '}
					is UC Berkeley's first web development-focused organization, bringing
					full-stack web development education and hands-on industry development
					experience to UC Berkeley students.
				</h6>

				{/* Newsletter */}
				<div className={styles['newsletter']}>
					<img
						src={NewsletterBlob}
						alt=""
						className={styles['blob'] + ' ' + breakpoints['desktop']}
					/>
					<img
						src={NewsletterBlobMobile}
						alt=""
						className={styles['blob'] + ' ' + breakpoints['mobile']}
					/>
					<div className={styles['input']}>
						<p className={styles['blurb'] + ' ' + breakpoints['desktop']}>
							📫 Sign up for our email list for updates, resources, and more!
						</p>

						<p className={styles['blurb'] + ' ' + breakpoints['mobile']}>
							📫 Sign up for our email list!
						</p>

						<div className={styles['form']}>
							<input
								id="emailField"
								className={styles['emailField']}
								type="text"
								placeholder="Email Address"
								onChange={(event) => setEmailAddress(event.target.value)}
							/>
							<div className={styles['button-container']}>
								<Button
									text="Gimme the news!"
									onClick={() => submitEmail(emailAddress)}
								/>
							</div>
						</div>
						<div className={styles['subtext']}>
							{emailError && 'Please enter a valid email.'}
							{emailSuccess && 'Thanks for subscribing!'}
						</div>
					</div>
				</div>

				{/* Club Statistics */}
				<div className={styles['stats']}>
					{stats.map(({ title, description, image }) => (
						<div className={styles['stat']}>
							<div className={styles['number']}>
								<img src={image} alt="" />
								<h6>{title}</h6>
							</div>
							<p>{description}</p>
						</div>
					))}
				</div>

				{/* Client and Partner Logos */}
				{/* Desktop */}
				<div className={styles['graphics']}>
					<img src={Blobs} alt="" className={styles['blobs']} />
					<div className={styles['clients']}>
						<Showcase
							title="Past Clients"
							image={Clients}
							imageMobile={ClientsMobile}
						/>
					</div>

					<div className={styles['partners']}>
						<Showcase
							title="Partners + Sponsors"
							image={Partners}
							imageMobile={PartnersMobile}
						/>
					</div>
				</div>
				<Instagram />
			</Container>
		</div>
	);
};

export default Landing;
