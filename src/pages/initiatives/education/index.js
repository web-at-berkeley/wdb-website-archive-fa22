import notionResources from './constants/Notion';
import Header from '../../../components/Header';
import Button from '../../../components/Button';

import Container from 'react-bootstrap/Container';

import CuteComputer from './img/edu-image.png';
import Youtube from './img/youtube.png';
import Logo from './img/logo.png';
import Blobs from './img/blobs.png';

import styles from './style.module.scss';

const Education = () => {
	return (
		<main>
			<Header
				title="education"
				subtitle="giving back to the community"
				description="WDB strives to share our knowledge and resources to allow everyone to experience web development education. From hosting UC Berkeley’s first full stack web development course, to providing public resources and workshops, we are always looking for new ways to share the joys of web development and design."
			/>
			<Container className={styles['container']}>
				<img src={Blobs} alt="" className={styles['blobs']} />
				<div className={styles['decal']}>
					<h3>Introduction to Full Stack Development Decal</h3>
					<div className={styles['content']}>
						<div className={styles['col']}>
							<img
								src={CuteComputer}
								alt="Introduction to Full Stack Development Decal Logo"
							/>
							<a href="https://fullstackdecal.com/">
								<Button text="Learn More" />
							</a>
						</div>
						<div className={styles['text-col']}>
							<p>
								WDB has been running the Introduction to Full-Stack DeCal every
								semester, starting in Fall 2021. We aim to take students with
								any level of previous programming experience and equip them with
								the tools to build whatever they put their mind to. In addition
								to attending lecture twice a week, students participate in a
								weekend-long hackathon and spend the last month developing a
								larger-scale final project in groups.
							</p>
						</div>
					</div>
				</div>

				<div className={styles['resources']}>
					<div className={styles['notion']}>
						<h3>Notion Resources</h3>
						{notionResources.map(({ title, description, link, image }) => (
							<a
								href={link}
								target="_blank"
								rel="noreferrer"
								className={styles['card']}
							>
								<img src={image} alt={`WDB ${title}`} />
								<div className={styles['content']}>
									<h5>{title}</h5>
									<p>{description}</p>
								</div>
							</a>
						))}
					</div>
					<div className={styles['youtube']}>
						<img
							src={Youtube}
							alt="Youtube"
							className={styles['youtube-logo']}
						/>
						<a
							href="https://www.youtube.com/channel/UCGpukPda1pJ8Ei20e02oR0w"
							target="_blank"
							rel="noreferrer"
							className={styles['card']}
						>
							<img src={Logo} alt="Web Development at Berkeley" />
							<div className={styles['content']}>
								<h3>Web Dev at Berkeley</h3>
								<p className={styles['subscribers']}>10,034,890 Subscribers</p>
								<p className={styles['subscribe']}>Subscribe 10M</p>
							</div>
						</a>
						<p className={styles['description']}>
							Visit our YouTube for past workshops, education lectures,
							recruiting events and more!
						</p>
					</div>
				</div>
			</Container>
		</main>
	);
};

export default Education;
