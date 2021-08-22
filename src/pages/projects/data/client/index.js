import LaunchParty from './img/launchparty.png';
import Clicked from './img/clicked.png';
import ScholarHub from './img/scholarhub.png';
import Ansari from './img/ansari.png';
import UDoIt from './img/legal.png';
import SAAI from './img/saai.png';
import CMES from './img/cmes.png';
import BarracudaTechnologies from './img/barracuda.png';
import BPT from './img/bpt.png';

export const data = [
	// {
	// 	name: 'Test',
	// 	cover: BPT,
	// 	subtitle: 'Edtech startup',
	// 	label: 'clicked',
	// 	color: 'rgba(255, 102, 0, 0.22)',
	// 	link: 'https://www.clicked.com/',
	// 	technologies: ['React, Node, MongoDB, Express'],
	// 	lead: ['Caelin Sutch'],
	// 	semester: 'Spring 2021',
	// },
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
		name: 'Barracuda Technologies',
		cover: BarracudaTechnologies,
		subtitle: 'innovative materials startup',
		label: 'barracuda-technologies',
		color: 'rgba(75, 152, 75, 0.38)',
		link: 'https://www.barra-labs.com/',
		technologies: ['Figma', 'React'],
		lead: ['Justin Chen', 'Tijmen Sep'],
		semester: 'Fall 2021',
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
	{
		name: 'Best Path Transit',
		cover: BPT,
		subtitle: 'Transportation Startup',
		label: 'best-path-transit',
		color: 'rgba(142, 207, 214, 0.51)',
		link: 'https://bestpathtransit.com/',
		technologies: ['Google Cloud', 'React'],
		lead: ['Neha Haq'],
		semester: 'Fall 2021',
	},
];

export default data;
