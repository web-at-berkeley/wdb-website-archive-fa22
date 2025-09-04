import Fade from 'react-reveal/Fade';
import TimelineItem from './TimelineItem';
import styles from '../style.module.scss';

const timelineData = [
	{
		title: 'Wed Aug 27 - Applications Open',
		buttons: [
			{
				text: 'Club Application',
				onClick: () =>
					window.open(
						'https://airtable.com/appmpjePOVGj1CLC3/shrr8bBj8PJuyg0g8',
						'_blank'
					),
			},
			{
				text: 'Club Application Guide',
				onClick: () =>
					window.open(
						'https://docs.google.com/document/d/12BUhAoa0d9sdeXfgZzPkAPF2_KKqM-k7cF5cGjYlge8/edit?usp=sharing',
						'_blank'
					),
			},
			{
				text: 'DeCal Application',
				onClick: () =>
					window.open('https://forms.gle/sbAs4EMiqUhbqzVK7', '_blank'),
			},
		],
	},
	{
		title: 'Coffee Chats Open',
		buttons: [
			{
				text: 'Chat with us!',
				onClick: () =>
					window.open(
						'https://airtable.com/appVzymWdjdgfQIOM/shrGOkzsUt3UAyRrJ',
						'_blank'
					),
			},
		],
	},
	// {
	// 	title: 'JAN 24 - Design Fair',
	// 	description: (
	// 		<p>
	// 			<b>Jacobs 310 @ 6PM-8PM</b>
	// 		</p>
	// 	),
	// },
	{
		title: 'Fri Aug 27 - CLUBS & COOKIES',
		description: (
			<>
				<p>
					<b>Location: Dwinelle 155 @ 8PM-10:00PM</b>
				</p>
				<p>
					New to the tech scene at Cal? Craving some yummy cookies? 🍪 Come join
					us at Clubs and Cookies, an event where you can learn about some of
					the biggest tech clubs on campus. Meet members from WDB, Launchpad,
					Codebase, Hackathons @ Berkeley, Blockchain@Berkeley, IEEE Student
					Branch, Machine Learning @ Berkeley, Blueprint (Tech for Nonprofits),
					PlexTech, Anova, Codeology, DiversaTech, and MDB. All in one delicious
					event where you can chat directly with current members!
				</p>
			</>
		),
	},
	{
		title: 'Tues Sept 2 - CLUB INFOSESSION #1',
		description: (
			<>
				<p>
					<b>Location: SOCS155 @ 8PM-9PM</b>
				</p>
				<p>
					Come to our infosession to learn more about joining WDB or the DeCal!
				</p>
			</>
		),
	},
	{
		title: 'Wed Sept 3 - CLUB INFOSESSION #2',
		description: (
			<>
				<p>
					<b>Location: SOCS155 @ 8PM-9PM</b>
				</p>
				<p>
					Come to our infosession to learn more about joining WDB or the DeCal!
				</p>
			</>
		),
	},
	{
		title: 'Thurs Sept 4 - CLUB APPLICATION DUE @ 11:59PM',
	},
	{
		title: 'Sept 6-11 - CLUB TECHNICAL INTERVIEWS (INVITE ONLY)',
	},
	{
		title: 'Sept 12 - SOCIAL NIGHT (INVITE ONLY)',
	},
	{
		title: 'Sept 12-13 - CLUB FINAL INTERVIEWS (INVITE ONLY)',
	},
	{
		title: 'Sunday Sept 14 - DECAL APPLICATION DUE @ 11:59PM',
	},
];

const educationalResourcesData = {
	title: 'Check out our educational resources',
	date: 'Anytime!',
	location: 'Remote',
	description:
		'Learn more about web development via our DeCal and our educational resources!',
	buttons: [
		{
			text: 'More info here!',
			onClick: () => window.open('https://fullstackdecal.com', '_blank'),
		},
	],
};

const Timeline = () => {
	return (
		<>
			<Fade up delay={169}>
				<div className={styles['timeline']}>
					{timelineData.map((item, index) => (
						<TimelineItem
							key={index}
							{...item}
							isLast={index === timelineData.length - 1}
						/>
					))}
				</div>
			</Fade>

			{/* <Fade up delay={169}>
				<div className={styles['timeline']}>
					<TimelineItem {...educationalResourcesData} />
				</div>
			</Fade> */}
		</>
	);
};

export default Timeline;
