import Button from '../../components/Button';
import Header from '../../components/Header';
import Timeline from './components/Timeline';

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
					<Timeline />
					<h3>Sign up for a coffee chat!</h3>
					<iframe
						class="airtable-embed"
						src="https://airtable.com/embed/appTem4WA5Y5ZShFA/shrG0viG1OB1LPQ7s?viewControls=on"
						frameborder="0"
						onmousewheel=""
						width="100%"
						height="533"
					></iframe>
				</div>

				<div className={styles['experiences']}>
					<img className={styles['blob']} src={Blobs3} alt="" />
					<h3>Member Experiences</h3>

					<Row lg="3" med="1" sm="1" className={styles['experience-group']}>
						<div className={styles['testimonial1']}>
							<img src={danielle} alt="{role.title}" />
							<p className={styles['text']}>
								"Joining WDB has been one of the best decisions I've made at Cal
								because it has provided me so many opportunities to learn and
								grow alongside some of my closest friends and the most talented
								people in the welcoming environment WDB creates. It has been so
								rewarding to be around such a dedicated group of people who push
								me to explore my interests in both design and development!"
							</p>
							<p className={styles['title']}>Danielle '25, Designer</p>
						</div>
						<div className={styles['testimonial2']}>
							<img src={aadhiti} alt="{role.title}" />
							<p className={styles['text']}>
								"Web Development at Berkeley has possibly been my favorite part
								about being a student at Cal thus far. Combining learning how to
								be a better programming with the chance to meet incredible
								members of the development and design community, WDB really
								helped me hone my skills. Despite entering as a novice
								programmer who really didn't know much React, I can now
								confidently say I love web development and I'm excited to learn
								more! "
							</p>
							<p className={styles['title']}>Aadhiti '24, Developer</p>
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
