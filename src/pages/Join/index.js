import Header from '../../components/Header';
import Button from '../../components/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Fade from 'react-reveal/Fade';
import Blobs2 from './img/blobs2.png';
import Blobs3 from './img/blobs3.png';
import tony from '../../assets/pfps/tony-xin-0.jpg';
import aadhiti from '../../assets/pfps/aadhiti-ghankota-0.jpg';
import danielle from '../../assets/pfps/danielle-wong-0.jpg';

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
					<h3>Applications are now open!</h3>
					<p className={styles['descrip']}>
						Thank you so much for your interest in joining WDB! We'd love to
						stay in touch with you and answer any questions you may have. Feel
						free to reach out to us if you'd liked to learn more, and check out
						our educational resources below!
					</p>
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>Jan 17 - Applications open</p>
							<div
								className={`${styles['description']} ${styles['apply-buttons']}`}
							>
								<Button
									text="Club Application"
									onClick={() =>
										window.location.replace(
											'https://airtable.com/shra6vQUGoIVhmaKv'
										)
									}
								/>
								<Button
									text="DeCal Application"
									onClick={() =>
										window.location.replace(
											'https://docs.google.com/forms/d/e/1FAIpQLSfRWSvC72lGyvCWUZgczuYwICB2CMKVP1fwIznwmGH2qWfvhQ/viewform'
										)
									}
								/>
							</div>
							<p className={styles['title']}>Jan 22 - Coffee Chats Open</p>
							<div className={styles['description']}>
								<Button text="Chat with us!" onClick={() => {}} />
							</div>
							<p className={styles['title']}>JAN 23 - CLUBS AND COOKIES FAIR</p>
							<div className={styles['description']}>
								<p>
									<b>VLSB 2050 @ 8PM</b>
								</p>
								<p>
									New to the tech scene at Cal? Craving some yummy cookies? Come
									join us at Clubs and Cookies, an event to learn about some of
									the biggest tech clubs on campus. Launchpad, Codebase, Machine
									Learning at Berkeley, Blockchain at Berkeley, Blueprint,
									Codeology, and WDB all in one delicious event and chat
									directly with current members!
								</p>
							</div>
							<p className={styles['title']}>
								JAN 24 - CLUB + DECAL INFOSESSION #1
							</p>
							<div className={styles['description']}>
								<p>
									<b>SOCS 20 @ 8PM</b>
								</p>
								<p>
									Come to our infosession to learn more about WDB and the Intro
									to Full Stack Decal!
								</p>
								<p>Club Infosession: 8-9PM</p>
								<p>Decal Infosession: 9-10PM</p>
							</div>
							<p className={styles['title']}>
								JAN 24 - CLUB + DECAL INFOSESSION #2
							</p>
							<div className={styles['description']}>
								<p>
									<b>SOCS 20 @ 8PM</b>
								</p>
								<p>
									In case you missed infosession #1! All the information
									presented will be the same so don't worry about attending
									both.
								</p>
								<p>Club Infosession: 8-9PM</p>
								<p>Decal Infosession: 9-10PM</p>
							</div>
							<p className={styles['title']}>
								JAN 26 - DECAL APPLICATION DUE @ 11:59PM
							</p>
							<div className={styles['description']}></div>
							<p className={styles['title']}>JAN 27 - CLUB APPLICATION DUE</p>
							<div className={styles['description']}></div>
							<p className={styles['title']}>
								FEB 2/3 - CLUB TECHNICAL INTERVIEWS (INVITE ONLY)
							</p>
							<div className={styles['description']}></div>
							<p className={styles['title']}>
								FEB 4/5 - CLUB FINAL INTERVIEWS (INVITE ONLY)
							</p>
						</div>
					</Fade>
					<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Check out our educational resources -{' '}
								<span className={styles['date-time']}>Anytime!</span>
							</p>
							<p className={styles['location']}>📍 Remote </p>
							<p className={styles['text']}>
								Learn more about web development via our DeCal and our
								educational resources!
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
					{/*<Fade up delay={169}>
						<div className={styles['timeline']}>
							<p className={styles['title']}>
								Fall 2022 Recruiting -{' '}
								<span className={styles['date-time']}>Coming soon!</span>
							</p>
							<p className={styles['location']}>📍 Remote</p>
							<p className={styles['text']}>
								Keep an eye out on our site and on social media to stay up to
								date on our upcoming events!
							</p>
						</div>
						</Fade>*/}
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
							<img src={danielle} alt="{role.title}" />
							{/* <p className={styles['title']}>Anjan</p> */}
							<p className={styles['text']}>
								"Joining WDB has been one of the best decisions I’ve made at Cal
								because it has provided me so many opportunities to learn and
								grow alongside some of my closest friends and the most talented
								people in the welcoming environment WDB creates. It has been so
								rewarding to be around such a dedicated group of people who push
								me to explore my interests in both design and development!"
							</p>
							<p className={styles['title']}>Danielle ‘25, Designer</p>
						</div>
						<div className={styles['testimonial2']}>
							<img src={aadhiti} alt="{role.title}" />
							<p className={styles['text']}>
								"Web Development at Berkeley has possibly been my favorite part
								about being a student at Cal thus far. Combining learning how to
								be a better programming with the chance to meet incredible
								members of the development and design community, WDB really
								helped me hone my skills. Despite entering as a novice
								programmer who really didn’t know much React, I can now
								confidently say I love web development and I’m excited to learn
								more! "
							</p>
							<p className={styles['title']}>Aadhiti ‘24, Developer</p>
						</div>
						<div className={styles['testimonial1']}>
							<img src={tony} alt="{role.title}" />

							<p className={styles['text']}>
								"From spending hours and hours on end working with my team to
								finalize a web page to spending the night in Murphy, California
								during a retreat with 40 brilliant and passionate people, I am
								forever grateful for the opportunities that WDB has given me and
								the people that I've been able to meet."
							</p>
							<p className={styles['title']}>Tony '24, Product Manager</p>
						</div>
					</Row>
				</div>
			</Container>
		</main>
	);
};

export default Join;
