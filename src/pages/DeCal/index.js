import Profile from '../../components/MemberCard';
import Header from '../../components/Header';

// import Timeline from './constants/Timeline.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// import Carousel, {
// 	slidesToShowPlugin,
// 	arrowsPlugin,
// } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// import left from './img/leftarrow.png';
// import right from './img/rightarrow.png';

import Calender from './img/calender.png';
import Clock from './img/clock.png';
import Syllabus from './img/syllabus.png';
import Number from './img/number.png';
import Blobs from './img/blobs.png';
import BasicStack from './img/basic.png';
import Frontend from './img/frontend.png';
import Backend from './img/backend.png';

import styles from './style.module.scss';
import { courseStaff } from '../../static/members';

const Decal = () => {
	return (
		<main>
			<Header
				title="Intro to Full Stack Development"
				subtitle="hone your development skills and learn something new"
			/>
			<Container className={styles['container']}>
				<div className={styles['logistics']}>
					<div className={styles['detail']}>
						<img src={Calender} alt="TIme" />
						<h5>Tu/Th 6:30-8:00 PM</h5>
					</div>
					<div className={styles['detail']}>
						<img src={Clock} alt="Units" />
						<h5>3 Units</h5>
					</div>
					<div className={styles['detail']}>
						<img src={Syllabus} alt="Syllabus" />
						<a
							href="https://www.notion.so/webatberkeley/Syllabus-ef2cdf6639274debb01f33ca68131c4d"
							target="_blank"
							rel="noreferrer"
							style={{ color: 'black' }}
						>
							<h5>Syllabus</h5>
						</a>
					</div>
					<div className={styles['detail']}>
						<img src={Number} alt="number" />
						<a
							href="https://classes.berkeley.edu/content/2021-fall-compsci-198-099-grp-099"
							target="_blank"
							rel="noreferrer"
							style={{ color: 'black' }}
						>
							{' '}
							<h5>CCN: 33390</h5>
						</a>
					</div>
				</div>

				<div className={styles['log-mobile']}>
					<Row className={styles['logistics-mobile']}>
						<div className={styles['detail']}>
							<img src={Calender} alt="TIme" />
							<h5>Tu/Th 6:30-8:00 PM</h5>
						</div>
					</Row>
					<Row className={styles['logistics-mobile']}>
						<div className={styles['detail']}>
							<img src={Clock} alt="Units" />
							<h5>3 Units</h5>
						</div>
					</Row>
					<Row className={styles['logistics-mobile']}>
						<div className={styles['detail']}>
							<img src={Syllabus} alt="Syllabus" />
							<a
								href="https://www.notion.so/webatberkeley/Syllabus-ef2cdf6639274debb01f33ca68131c4d"
								target="_blank"
								rel="noreferrer"
								style={{ color: 'black' }}
							>
								<h5>Syllabus</h5>
							</a>
						</div>
					</Row>
					<Row className={styles['logistics-mobile']}>
						<div className={styles['detail']}>
							<img src={Number} alt="number" />
							<a
								href="https://classes.berkeley.edu/content/2021-fall-compsci-198-099-grp-099"
								target="_blank"
								rel="noreferrer"
								style={{ color: 'black' }}
							>
								{' '}
								<h5>CCN: 33390</h5>
							</a>
						</div>
					</Row>
				</div>

				<p className={styles['description']}>
					This DeCal is meant to give students of all levels of experience a
					chance to experience full stack development. The course is highly
					hands-on, as we believe doing is the best way to learn any new skill.
					You will complete several course projects including a final full-stack
					web application project where you can build anything you wish with the
					skills you’ve learned!
				</p>
			</Container>
			<div className={styles['join']}>
				<Header
					subheader
					title="Interested?"
					description="The applications for the DeCal have closed for the Spring 2022 semester. Check back here or on our “Join Us” page next semester to fill out our application when applications open!"
				/>
			</div>

			<div className={styles['decal-header']}>
				<Header
					linkheader
					title="Course Schedule"
					description="Check out the DeCal course schedule here, or go to our DeCal Notion for more details!"
					buttonText="fullstackdecal.com"
					linkTo="https://www.fullstackdecal.com"
				/>
			</div>

			{/* <Carousel
				className={styles['carousel']}
				breakpoints={{
					770: {
						plugins: [
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 1,
								},
							},
						],
					},
					900: {
						plugins: [
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 2,
								},
							},
						],
					},
					1200: {
						plugins: [
							{
								resolve: slidesToShowPlugin,
								options: {
									numberOfSlides: 3,
								},
							},
						],
					},
				}}
				plugins={[
					// 'infinite',
					{
						resolve: arrowsPlugin,
						options: {
							arrowLeft: (
								<img className={styles['carousel-arrow']} src={left} alt="" />
							),
							arrowLeftDisabled: (
								<img className={styles['carousel-arrow']} src={left} alt="" />
							),
							arrowRight: (
								<img className={styles['carousel-arrow']} src={right} alt="" />
							),
							arrowRightDisabled: (
								<img className={styles['carousel-arrow']} src={left} alt="" />
							),
							addArrowClickHandler: true,
						},
					},
					{
						resolve: slidesToShowPlugin,
						options: {
							numberOfSlides: 4,
						},
					},
				]}
			>
				{Timeline.map(({ date, lecture, topic, topic2 }) => (
					<div className={styles['col']} key={date}>
						<h6>{date}</h6>
						<h5>Lecture #{lecture}</h5>
						<p>{topic}</p>
						<p>{topic2}</p>
					</div>
				))}
			</Carousel> */}

			<Container className={styles['container']}>
				<div className={styles['technologies']}>
					<img src={Blobs} alt="" className={styles['blobs']} />
					<div className={styles['stack']}>
						<h5>Basic Stack</h5>
						<img
							src={BasicStack}
							alt="Basic Stack"
							className={styles['branch']}
						/>
						<h5>Frontend Stack</h5>
						<img
							src={Frontend}
							alt="Frontend Stack"
							className={styles['branch']}
						/>
						<h5>Backend Stack</h5>
						<img
							src={Backend}
							alt="Backend Stack"
							className={styles['branch']}
						/>
					</div>
				</div>
			</Container>

			<Container className={styles['staff']}>
				<h4>Education Team</h4>
				<Row lg="5" sm="3" xs="2">
					{courseStaff.map((data, i) => (
						<Profile data={data} key={i} />
					))}
				</Row>
			</Container>
		</main>
	);
};

export default Decal;
