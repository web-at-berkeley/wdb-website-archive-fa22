import Fade from 'react-reveal/Fade';
import TimelineItem from './TimelineItem';
import styles from '../style.module.scss';

const timelineData = [
	{
		title: 'JAN 20 - Applications open',
		buttons: [
			{
				text: 'Club Application',
				onClick: () =>
					window.open(
						'https://airtable.com/appelfQAuKw37gJpR/shrg6VpPJxHNTLtlk',
						'_blank'
					),
			},
			{
				text: 'DeCal Application',
				onClick: () => alert('Coming soon!'),
			},
		],
	},
	{
		title: 'JAN 21 - Coffee Chats Open',
		buttons: [
			{
				text: 'Chat with us!',
				onClick: () =>
					window.open(
						'https://airtable.com/appTem4WA5Y5ZShFA/shrG0viG1OB1LPQ7s',
						'_blank'
					),
			},
		],
	},
	{
		title: 'JAN 24 - Design Fair',
		description: (
			<p>
				<b>Jacobs 310 @ 6PM-8PM</b>
			</p>
		),
	},
	{
		title: 'JAN 27 - Clubs & Cookies',
		description: (
			<>
				<p>
					<b>Location TBD (check our instagram for updates!) @ 8PM-10:00PM</b>
				</p>
				<p>
					New to the tech scene at Cal? Craving some yummy cookies? Come join us
					at Clubs and Cookies, an event to learn about some of the biggest tech
					clubs on campus. WDB, Codeology, LaunchPad, Blueprint, ML@B, Codebase,
					Anova, B@B, DiversaTech, CalHacks, PlexTech plus lightning
					presentations from more tech clubs all in one delicious event and chat
					directly with current members!
				</p>
			</>
		),
	},
	{
		title: 'Jan 28 - CLUB INFOSESSION #1',
		description: (
			<>
				<p>
					<b>Location TBD (check our instagram for updates!) @ 8PM-10:00PM</b>
				</p>
				<p>
					Come to our infosession to learn more about joining WDB or the DeCal!
				</p>
			</>
		),
	},
	{
		title: 'Jan 29 - CLUB INFOSESSION #2',
		description: (
			<>
				<p>
					<b>Location TBD (check our instagram for updates!) @ 8PM-10:00PM</b>
				</p>
				<p>
					Come to our infosession to learn more about joining WDB or the DeCal!
				</p>
			</>
		),
	},
	{
		title: 'Jan 29 - CLUB APPLICATION DUE @ 11:59PM',
	},
	{
		title: 'Jan 31 - DECAL APPLICATION DUE @ 11:59PM',
	},
	{
		title: 'FEB 1-3 - CLUB TECHNICAL INTERVIEWS (INVITE ONLY)',
	},
	{
		title: 'FEB 4 - SOCIAL NIGHT (INVITE ONLY)',
	},
	{
		title: 'FEB 5-6 - CLUB FINAL INTERVIEWS (INVITE ONLY)',
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
