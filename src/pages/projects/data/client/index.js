// Fall 2022
import Convex from './img/convex.png';
import MindAndMatch from './img/mindandmatch.png';
import Vivid from './img/vivid.png';

// Spring 2022
import NSF from './img/SMC.png';
import Weekly from './img/weekly.png';

// Fall 2021
import Provecho from './img/provecho.png';
import Goahead from './img/goahead.png';
import Traders from './img/traders.png';
import Politiq from './img/politiq.png';

// Spring 2021
import LaunchParty from './img/launchparty.png';
import Clicked from './img/clicked.png';
import ScholarHub from './img/scholarhub.png';
import Ansari from './img/ansari.png';
import UDoIt from './img/legal.png';

// Fall 2020
import SAAI from './img/saai.png';
import CMES from './img/cmes.png';
import BarracudaTechnologies from './img/barracuda.png';
import BPT from './img/bpt.png';

export const data = [
	// Fall 2022
	{
		name: 'Convex',
		cover: Convex,
		subtitle: 'Reactive backend-as-a-service',
		label: 'convex',
		color: 'rgba(241, 173, 145, 0.3)',
		link: 'https://www.convex.dev/',
		technologies: [],
		lead: ['Anish Shanbhag'],
		semester: 'Fall 2022',
	},
	{
		name: 'Vivid',
		cover: Vivid,
		subtitle: '',
		label: 'vivid',
		color: 'rgba(209, 21, 203, 0.3)',
		link: '',
		technologies: [],
		lead: ['Tony Xin', 'Adam Goldstein'],
		semester: 'Fall 2022',
	},
	{
		name: 'Mind and Match',
		cover: MindAndMatch,
		subtitle: '',
		label: 'mindandmatch',
		color: 'rgba(209, 178, 21, 0.3)',
		link: 'https://www.mindandmatch.com/',
		technologies: [],
		lead: ['Cass Li', 'William Louis'],
		semester: 'Fall 2022',
	},
	// Spring 2022
	{
		name: 'National Science Foundation',
		cover: NSF,
		subtitle: 'Student Mission Control',
		label: 'nsf',
		color: 'rgba(241, 173, 145, 0.3)',
		link: 'https://www.nsf.gov',
		technologies: ['React, Node, GCP'],
		lead: ['Vaikundh Jagannathan'],
		semester: 'Spring 2022',
	},
	{
		name: 'Weekly',
		cover: Weekly,
		subtitle: 'Digital Habits Tracker',
		label: 'weekly',
		color: 'rgba(241, 173, 145, 0.3)',
		link: '/',
		technologies: ['React, Node, DynamoDB'],
		lead: ['Avinash Rao', 'Tony Xin'],
		semester: 'Spring 2022',
	},
	// Fall 2021
	{
		name: 'Provecho',
		cover: Provecho,
		subtitle: 'Social Network for Recipes',
		label: 'provecho',
		color: 'rgba(241, 173, 145, 0.3)',
		link: 'https://www.provecho.bio/',
		technologies: ['React, Node, GCP'],
		lead: ['Alina Wang', 'Atharva Mehendale'],
		semester: 'Fall 2021',
	},
	{
		name: 'GoAhead Ventures',
		cover: Goahead,
		subtitle: 'Venture Capital Fund',
		label: 'goahead',
		color: 'rgba(182, 0, 0, 0.24)',
		link: 'https://www.goaheadvc.com/',
		technologies: ['React, Figma'],
		lead: ['Elizabeth Lau'],
		semester: 'Fall 2021',
	},
	{
		name: 'Traders at Berkeley',
		cover: Traders,
		subtitle: 'Quantitative Finance Origanization',
		label: 'traders',
		color: 'rgba(0, 0, 0, 0.24)',
		link: 'https://traders.berkeley.edu/',
		technologies: ['React, Flask, AWS'],
		lead: ['Aniruddha Vangala'],
		semester: 'Fall 2021',
	},
	{
		name: 'Politiq',
		cover: Politiq,
		subtitle: 'Political Engagement startup',
		label: 'politiq',
		color: 'rgba(217, 14, 93, 0.3)',
		link: 'https://www.politiq.org/',
		technologies: ['React, Node, MongoDB, Express'],
		lead: ['Anjan Bharadwaj', 'Noor Mahini'],
		semester: 'Fall 2021',
	},

	// Spring 2021
	{
		name: 'Clicked',
		cover: Clicked,
		subtitle: 'Edtech startup',
		label: 'clicked',
		color: 'rgba(255, 102, 0, 0.22)',
		link: 'https://www.clicked.com/',
		technologies: ['React, Node, MongoDB, Express'],
		lead: ['Caelin Sutch'],
		semester: 'Spring 2021',
	},
	{
		name: 'LaunchParty',
		cover: LaunchParty,
		subtitle: 'Venture Capital Startup',
		label: 'launchparty',
		color: 'rgba(95, 0, 255, 0.25)',
		link: 'https://www.launchpartyvc.com/',
		technologies: ['Figma', 'Vercel', 'AWS', 'Next.JS'],
		lead: ['Neha Haq'],
		semester: 'Spring 2021',
	},
	{
		name: 'U-Do-It Legal',
		cover: UDoIt,
		subtitle: 'legal startup for the economically disadvantaged',
		label: 'u-do-it-legal',
		color: 'rgba(0, 56, 255, 0.2)',
		link: '',
		technologies: ['React', 'Figma', 'React'],
		lead: ['Alina Wang', 'Albert Tian'],
		semester: 'Spring 2021',
	},
	{
		name: 'Scholarhub',
		cover: ScholarHub,
		subtitle: 'Edtech startup',
		label: 'scholarhub',
		color: 'rgba(37, 70, 241, 0.21)',
		link: '',
		technologies: ['Figma', 'MongoDB', 'Express', 'React', 'Node'],
		lead: ['Emily Su', 'Andy Jiang'],
		semester: 'Spring 2021',
	},
	{
		name: 'Ansari Math',
		cover: Ansari,
		subtitle: 'EdTech Startup',
		label: 'ansari-math',
		color: 'rgba(255, 0, 0, 0.17)',
		link: 'https://ansarimath.com/',
		technologies: ['AWS', 'React', 'Node', 'Express'],
		lead: ['Viansa Schmulbach'],
		semester: 'Spring 2021',
	},

	// Fall 2020
	{
		name: 'Barracuda Technologies',
		cover: BarracudaTechnologies,
		subtitle: 'innovative materials startup',
		label: 'barracuda-technologies',
		color: 'rgba(75, 152, 75, 0.38)',
		link: 'https://www.barra-labs.com/',
		technologies: ['Figma', 'React'],
		lead: ['Justin Chen', 'Tijmen Sep'],
		semester: 'Fall 2020',
	},
	{
		name: 'UC Berkeley SAAI Artists Residency',
		cover: SAAI,
		label: 'artists-residency',
		subtitle: 'artists residency hosted by the center for south asian studies',
		color: 'rgba(98, 156, 173, 0.26)',
		link: 'https://www.ucberkeley-saai-artistsresidency.com/',
		technologies: ['React', 'Figma'],
		semester: 'Fall 2020',
	},
	{
		name: 'UC Berkeley CMES',
		cover: CMES,
		subtitle: 'admin takeover',
		label: 'cmes',
		color: 'rgba(36, 94, 136, 0.3)',
		link: 'https://cmes.berkeley.edu/',
		technologies: ['Figma', 'Adobe Illustrator'],
		lead: ['Vicky Li'],
		semester: 'Fall 2020',
	},
	{
		name: 'Best Path Transit',
		cover: BPT,
		subtitle: 'Transportation Startup',
		label: 'best-path-transit',
		color: 'rgba(142, 207, 214, 0.51)',
		link: 'https://bestpathtransit.com/',
		technologies: ['Google Cloud', 'React'],
		lead: ['Neha Haq'],
		semester: 'Fall 2020',
	},
];

export default data;
