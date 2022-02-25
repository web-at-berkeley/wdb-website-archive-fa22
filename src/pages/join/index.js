import React from 'react';

import testimonials from './constants/Testimonials';
import recruitment from './constants/Recruitment';
import Header from '../../components/header';
import Button from '../../components/button';

import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Fade from 'react-reveal/Fade';

import Bg from './img/bg.png';
import Blobs from './img/blobs.png';
import Blobs2 from './img/blobs2.png';
import Blobs3 from './img/blobs3.png';
import anjan from './img/Anjan.png';
import caelin from './img/caelin-test.png';
import lizzie from './img/lizzie-test.png';

import styles from './style.module.scss';

const Join = () => {
	return (
		<main>
			<Header
				title="Join the team"
				subtitle="We're excited to meet you!"
				description="If you're looking to join either the Introduction to Full-Stack Development DeCal or join Web Development at Berkeley as a Developer or Designer, you're in the right place!"
			/>
			<Container className={styles['container']}>
				<div className={styles['recruitment']}>
					<img src={Blobs2} alt="" />
					<h3>Applications are now closed!</h3>
					<p className={styles['descrip']}>
						Thank you so much for your interest in joining WDB! We'd love to stay in
            touch with you and answer any questions you may have. Feel free to reach out to us
            if you'd liked to learn more, and check out our educational resources below!
					</p>
					{/* <div className={styles['button-interest']}>
							<a
									href="https://forms.gle/4fWFUVuifTqu4hYj7"
									target="_blank"
									rel="noreferrer"
									style={{ marginBottom: '1.5rem', marginRight: '1rem'}}
								>
									<Button text="Dev + Designer Application" />
								</a> 
								<a
									href="https://forms.gle/uw6P28m7eicTeDm47"
									target="_blank"
									rel="noreferrer"
									style={{ marginTop: '1.5rem'}}
								>
									<Button text="Full-Stack DeCal Application" style={{ marginTop: '1rem'}}/>
								</a>
					</div> */}
					{/* {recruitment.map(({ title, location, description }) => (
						<div className={styles['timeline']}>
							<p className={styles['title']}>{title}</p>
							<p className={styles['location']}>{location}</p>
							<p className={styles['text']}>"{description}"</p>
						</div>
					))} */}
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Applications now cosed -{' '}
								<span className={styles['date-time']}>
									Jan 18, 12PM PT
								</span>
							</p>
							<p className={styles['location']}>📍 Remote </p>
							<p className={styles['text']}>
								Club applications are now closed!
							</p>
{/* 
							<div className={styles['button-temp']}>
								<a
									href="https://forms.gle/4fWFUVuifTqu4hYj7"
									target="_blank"
									rel="noreferrer"
									style={{ marginBottom: '1.5rem', marginRight: '1rem' }}
								>
									<Button text="Dev + Designer Application" />
								</a> 
								<a
									href="https://forms.gle/uw6P28m7eicTeDm47"
									target="_blank"
									rel="noreferrer"
								>
									<Button text="Full-Stack DeCal Application" />
								</a>
							</div> */}
						</div>
					</Fade>
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Checkout our edcuational resources -{' '}
								<span className={styles['date-time']}>
									Anytime!
								</span>
							</p>
							<p className={styles['location']}>📍 Remote </p>
							<p className={styles['text']}>
								Learn more about web development via our decal and our educational resources!
							</p>

							<div className={styles['button-temp']}>
								<a
									href="https://fullstackdecal.com"
									target="_blank"
									rel="noreferrer"
									style={{ marginBottom: '1.5rem', marginRight: '1rem' }}
								>
									<Button text="More info here!" />
								</a> 
							</div>
						</div>
					</Fade>
          <Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Fall 2022 Recruting -{' '}
								<span className={styles['date-time']}>
                    Coming soon!
								</span>
							</p>
							<p className={styles['location']}>
							
									📍 Remote
							</p>
							<p className={styles['text']}>
								Keep an eye out on our site and on social media to stay up to date on our upcoming events!
							</p>
						</div>
					</Fade>
					{/* <Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Full-Stack DeCal Infosession #1 -{' '}
								<span className={styles['date-time']}>
									Jan 24, 7pm - 8pm PT
								</span>
							</p>
							<p className={styles['location']}>
								<a
									href="https://berkeley.zoom.us/j/99426827053"
									className={styles['location']}
								>
									📍 Zoom (Click here for link)
								</a></p>
							<p className={styles['text']}>
								Come to our infosession to learn more about the Introduction to
								Full-Stack Development DeCal.
							</p>
							<div className={styles['button-temp']}>
								<a
									href="https://www.facebook.com/events/348063700170538/"
									target="_blank"
									rel="noreferrer"
								>
									<Button text="Full-Stack DeCal Infosession One (Facebook Event)" />
								</a>
							</div>
						</div>
					</Fade>
					
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								WDB Infosession #1 -{' '}
								<span className={styles['date-time']}>
									Jan 25, 7pm - 8pm PT
								</span>
							</p>
							<p className={styles['location']}><a
								href="https://berkeley.zoom.us/j/98546969949"
								className={styles['location']}
							>
								📍 Zoom (Click here for link)
							</a></p>
							<p className={styles['text']}>
								Come to our infosession to meet our members, listen to what we’re
								all about, and hear about exciting plans for the upcoming
								semester! This will be recorded as well.
							</p>
							<div className={styles['button-temp']}>
								<a
									href="https://www.facebook.com/events/597356954695918/"
									target="_blank"
									rel="noreferrer"
								>
									<Button text="WDB Club Infosession One (Facebook Event)" />
								</a>
							</div>
						</div>
					</Fade>
				
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Full-Stack DeCal Infosession #2 -{' '}
								<span className={styles['date-time']}>
									Jan 26, 7pm - 8pm PT
								</span>
							</p>
							<p className={styles['location']}>
								<a
									href="https://berkeley.zoom.us/j/91338863388"
									className={styles['location']}
								>
									📍 Zoom (Click here for link)
								</a>
							</p>
							<p className={styles['text']}>
								Come to our infosession to learn more about the Introduction to
								Full-Stack Development DeCal. This infosession will cover the same
								content as the first one, so no need to come to both!
							</p>
							<div className={styles['button-temp']}>
								<a
									href="https://www.facebook.com/events/224636553192406/"
									target="_blank"
									rel="noreferrer"
								>
									<Button text="Full-Stack DeCal Infosession Two (Facebook Event)" />
								</a>
							</div>
						</div>
					</Fade>
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								WDB Infosession #2 -{' '}
								<span className={styles['date-time']}>
									Jan 27, 7pm - 8pm PT
								</span>
							</p>
							<p className={styles['location']}>
								<a
									href="https://berkeley.zoom.us/j/98546969949"
									className={styles['location']}
								>
									📍 Zoom (Click here for link)
								</a>
							</p>
							<p className={styles['text']}>
								Come to our second infosession to meet our members, listen to what
								we’re all about, and hear about exciting plans for the upcoming
								semester! This will be recorded as well. This infosession will
								cover the same content as the first one, so no need to come to
								both!
							</p>
							<div className={styles['button-temp']}>
								<a
									href="https://www.facebook.com/events/615374379693168"
									target="_blank"
									rel="noreferrer"
								>
									<Button text="WDB Club Infosession Two (Facebook Event)" />
								</a>
							</div>
						</div>
					</Fade>
					
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Developer + Designer Applications Close -{' '}
								<span className={styles['date-time']}>Jan 28, 11:59 PM</span>
							</p>
							<p className={styles['location']}>📍 Remote</p>
							<p className={styles['text']}>
								Make sure you get it in before out 11:59 PM cutoff time in order
								to secure your application to our organization.
							</p>
						</div>
					</Fade>
					
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Full Stack DeCal Applications Close -{' '}
								<span className={styles['date-time']}>Jan 30, 11:59 PM</span>
							</p>
							<p className={styles['location']}>📍 Remote</p>
							<p className={styles['text']}>
								Make sure you get it in before out 11:59 PM cutoff time in order
								to secure your application to the DeCal.
							</p>
						</div>
					</Fade>
					
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Technical Interviews (invite only) -{' '}
								<span className={styles['date-time']}>Feb 2 - Feb 4</span>
							</p>
							<p className={styles['location']}>📍 Remote </p>
							<p className={styles['text']}>
								Interviews for WDB Product Bootcamp and Industry Initiatives, involving a techical project presentation.
							</p>
						</div>
					</Fade>
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Final Interviews (invite only) -{' '}
								<span className={styles['date-time']}>Feb 6</span>
							</p>
							<p className={styles['location']}>📍 TBD</p>
							<p className={styles['text']}>
								Final round interviews with WDB!
							</p>
						</div>
					</Fade>
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								First Meeting (invite only) -{' '}
								<span className={styles['date-time']}>
									Feb 8, 8pm PT
								</span>
							</p>
							<p className={styles['location']}>📍 TBD</p>
							<p className={styles['text']}>
								Our first all-team meeting with new and returning members.
							</p>
						</div>
					</Fade> */}
					
				</div>
				{/* <div className={styles['interested']}>
					<img src={Bg} alt="" />
					<div className={styles['text']}>
						<h3>Interested?</h3>
						<p>
							Fall 2021 applications are now open! Please stay tuned for more updates to our Fall
							2021 applications. Feel free to reach out to
							webatberkeley@gmail.com if you have any questions.
						</p>
					</div>
				</div> */}
				{/* <div className={styles['testimonials']}>
					<img src={Blobs} alt="" />
					<h3>Member Experiences</h3>
					{testimonials.map(({ title, testimonial }) => (
						<div className={styles['testimonial']}>
							<p className={styles['title']}>{title}</p>
							<p className={styles['text']}>"{testimonial}"</p>
						</div>
					))}
				</div> */}

				<div className={styles['experiences']}>
					<img className={styles['blob']} src={Blobs3} alt="" />
					<h3>Member Experiences</h3>

					<Row lg="3" med="1" sm="1" className={styles['experience-group']}>
						<div className={styles['testimonial1']}>
							<img src={lizzie} alt="{role.title}" />
							<p className={styles['text']}>
								"WDB has allowed me to become a design sponge! Exploring my
								interests in front-end design was something I gathered the
								courage to pursue thanks to WDB and the support from fellow
								designers as well as the freedom to learn design freely has been
								fire!"
							</p>
							<p className={styles['title']}>Lizzie ‘24, Designer</p>
						</div>
						<div className={styles['testimonial2']}>
							<img src={anjan} alt="{role.title}" />
							{/* <p className={styles['title']}>Anjan</p> */}
							<p className={styles['text']}>
								"The main reason I wanted to join WDB at first was purely
								because I had never really gotten the chance to dabble in web
								development, and I thought this would be a great opportunity for
								me to actually nail down the fundamentals and then transition
								into working hands-on on projects, something that’s pretty
								unique to WDB. Later on I realized a lot of the friends I’ve
								made at Berkeley have been through this club, WDB has been a
								really important part of my Berkeley experience thus far :)"
							</p>
							<p className={styles['title']}>Anjan ‘24, Full Stack Developer</p>
						</div>

						<div className={styles['testimonial1']}>
							<img src={caelin} alt="{role.title}" />

							<p className={styles['text']}>
								"The development branch has exposed me to awesome clients and
								developers. It’s been a great opportunity to expand my personal
								network and meet some incredible people. I’ve also had a great
								time exploring new technology stacks and seeing how others
								think."
							</p>
							<p className={styles['title']}>Caelin '24, Product Manager</p>
						</div>
					</Row>
				</div>
			</Container>
		</main>
	);
};

export default Join;
