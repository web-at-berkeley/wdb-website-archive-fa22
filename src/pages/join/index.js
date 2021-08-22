import React from 'react';

import testimonials from './constants/Testimonials';
import recruitment from './constants/Recruitment';
import Header from '../../components/header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



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
				
			/>
			<Container className={styles['container']}>

				<div className={styles['recruitment']}>
					<img src={Blobs2} alt="" />
					<h3>Recruitment Timeline</h3>
					{/* {recruitment.map(({ title, location, description }) => (
						<div className={styles['timeline']}>
							<p className={styles['title']}>{title}</p>
							<p className={styles['location']}>{location}</p>
							<p className={styles['text']}>"{description}"</p>
						</div>
					))} */}
					<div className={styles['timeline']}>
							<p className={styles['title']}>Applications open - <span className={styles['date-time']}>Aug 25, 11:59 PM</span></p>
							<p className={styles['location']}>📍 Remote</p>
							<p className={styles['text']}>Link to our application coming soon! In the application you will find information about roles,  time commitments, organization structure and more.</p>
						</div>

					<div className={styles['timeline']}>
							<p className={styles['title']}>Infosession - <span className={styles['date-time']}>Sept 2, 7PM pst - 8PM PST</span></p>
							<p className={styles['location']}>📍 Jacobs 310</p>
							<p className={styles['text']}>Come to our infosession to meet our members, listen to what we’re all about, and hear about exciting plans for the upcoming semester! This will be recorded as well.</p>
						</div>
					<div className={styles['timeline']}>
							<p className={styles['title']}>Applications Close - <span className={styles['date-time']}>Sept 5, 11:59 PM</span></p>
							<p className={styles['location']}>📍 Remote</p>
							<p className={styles['text']}>Make sure you get it in before out 11:59 PM cutoff time in order to secure your application to our organization.</p>
						</div>
					<div className={styles['timeline']}>
							<p className={styles['title']}>Behaviorial Interviews (invite only) - <span className={styles['date-time']}>Sept 7 - Sept 8</span></p>
							<p className={styles['location']}>📍 TBD</p>
							<p className={styles['text']}>Interviews for WDB Product Bootcamp and Industry Initiatives</p>
						</div>
					<div className={styles['timeline']}>
							<p className={styles['title']}>Technical Interviews (invite only) - <span className={styles['date-time']}>Sept 12</span></p>
							<p className={styles['location']}>📍 TBD</p>
							<p className={styles['text']}>Technical Interviews (technical project presentations).</p>
						</div>
						<div className={styles['timeline']}>
							<p className={styles['title']}>First Meeting (invite only) - <span className={styles['date-time']}>Sept 15, 8PM PST - 10PM PST</span></p>
							<p className={styles['location']}>📍 TBD</p>
							<p className={styles['text']}>Our first all-team meeting with new and returning members.</p>
						</div>


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
							<img src={lizzie} alt='{role.title}' />
							<p className={styles['text']}>"WDB has allowed me to become a design sponge! Exploring my interests in front-end design was something I gathered the courage to pursue thanks to WDB and the support from fellow designers as well as the freedom to learn design freely has been fire!"</p>
							<p className={styles['title']}>Lizzie ‘24, Designer</p>
						</div>
						<div className={styles['testimonial2']}>
							<img src={anjan} alt='{role.title}' />
							{/* <p className={styles['title']}>Anjan</p> */}
							<p className={styles['text']}>"The main reason I wanted to join WDB at first was purely because I had never really gotten the chance to dabble in web development, and I thought this would be a great opportunity for me to actually nail down the fundamentals and then transition into working hands-on on projects, something that’s pretty unique to WDB. Later on I realized a lot of the friends I’ve made at Berkeley have been through this club, WDB has been a really important part of my Berkeley experience thus far :)"</p>
							<p className={styles['title']}>Anjan ‘24, Full Stack Developer</p>
						</div>
						<div className={styles['testimonial1']}>


							
							<img src={caelin} alt='{role.title}' />
							
							<p className={styles['text']}>"The development branch has exposed me to awesome clients and developers. It’s been a great opportunity to expand my personal network and meet some incredible people. I’ve also had a great time exploring new technology stacks and seeing how others think."</p>
							<p className={styles['title']}>Caelin '24, Product Manager</p>
						</div>
					</Row>
					
					
					
				
				</div>
			</Container>
		</main>
	);
};

export default Join;
