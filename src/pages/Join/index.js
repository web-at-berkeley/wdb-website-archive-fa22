import Button from '../../components/Button';
import Header from '../../components/Header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Fade from 'react-reveal/Fade';
import aadhiti from '../../assets/pfps/aadhiti-ghankota-0.jpg';
import danielle from '../../assets/pfps/danielle-wong-0.jpg';
import tony from '../../assets/pfps/tony-xin-0.jpg';
import Blobs2 from './img/blobs2.png';
import Blobs3 from './img/blobs3.png';

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
							<p className={styles['title']}>Aug 23 - Applications open</p>
							<div
								className={`${styles['description']} ${styles['apply-buttons']}`}
							>
								<Button
									text="Club Application"
									onClick={() =>
										window.location.replace(
											'https://airtable.com/app9KytKyLJg5Nsvq/shrxn0L0lPosFnAZl'
										)
									}
								/>
								<Button
									text="DeCal Application"
									onClick={() =>
										window.location.replace(
											'https://airtable.com/app4DQfVs1iDSqn4b/shrFGkWU1iF8nLpgS'
										)
									}
								/>
							</div>
							<p className={styles['title']}>Aug 24 - Coffee Chats Open</p>
							<div className={styles['description']}>
								<Button
									text="Chat with us!"
									onClick={() =>
										window.location.replace(
											'https://airtable.com/appWoOwHS7hIg7DNv/shrlDn8Zo9qYlfC7W'
										)
									}
								/>
							</div>
							<p className={styles['title']}>Aug 28 - Clubs and Cookies</p>
							<div className={styles['description']}>
								<p>
									<b>HEARST FIELD ANNEX A1 @ 8PM-10PM</b>
								</p>
								<p>
									New to the tech scene at Cal? Craving some yummy cookies? Come
									join us at Clubs and Cookies, an event to learn about some of
									the biggest tech clubs on campus. Blueprint, Codebase, Codeology, Data Science Society, Girls Who Code,
									Launchpad, SAAS, WDB, plus lightning presentations from more tech clubs all in one delicious event and chat directly with current members!
								</p>
							</div>
							<p className={styles['title']}>
								AUG 29 - CLUB + DECAL INFOSESSION #1
							</p>
							<div className={styles['description']}>
								<p>
									<b>DWINELLE 109 @ 8-9:30PM</b>
								</p>
								<p>
									Come to our infosession to learn more about WDB and the Intro
									to Full Stack Decal!
								</p>
								<p>DeCal Infosession: 8-8:30PM</p>
								<p>Club Infosession: 8:30-9:30PM</p>
							</div>
							<p className={styles['title']}>Aug 30 - Tech Diversity Night</p>
							<div className={styles['description']}>
								<p>
									<b>DWINELLE 209 @ 8PM-10PM</b>
								</p>
							</div>
							<p className={styles['title']}>
								AUG 31 - CLUB + DECAL INFOSESSION #2
							</p>
							<div className={styles['description']}>
								<p>
									<b>DWINELLE 109 @ 8-9:30PM</b>
								</p>
								<p>
									In case you missed infosession #1! All the information
									presented will be the same so don't worry about attending
									both.
								</p>
								<p>DeCal Infosession: 8-8:30PM</p>
								<p>Club Infosession: 8:30-9:30PM</p>
							</div>
							<p className={styles['title']}>
								Sep 1 - CLUB APPLICATION DUE @ 11:59PM
							</p>
							<div className={styles['description']}></div>
							<p className={styles['title']}>
								Sep 2 - DECAL APPLICATION DUE @ 10AM
							</p>
							<div className={styles['description']}></div>
							<p className={styles['title']}>
								Sep 4-6 - CLUB TECHNICAL INTERVIEWS (INVITE ONLY)
							</p>
							<div className={styles['description']}></div>
							<p className={styles['title']}>
								Sep 7-8 - CLUB FINAL INTERVIEWS (INVITE ONLY)
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
				</div>
				
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
