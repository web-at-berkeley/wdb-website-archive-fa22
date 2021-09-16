import CivHacks from './img/civhacks.png';
import Stac from './img/stac.png';
import Carepath from './img/carepath.png';
import Resource19 from './img/resource19.png';
import FreeVentures from './img/freeventures.png';
import GroTech from './img/grotech.png';
import FormulaElectric from './img/formula.png';
import TBF from './img/tbf.png';
import CloudAtCal from './img/cloud.png';

export const data = [
	{
		name: 'Carepath',
		cover: Carepath,
		subtitle: 'Mental health nonprofit',
		label: 'carepath',
		color: 'rgba(179, 225, 218, 0.51)',
		link: 'https://join.care-path.org',
		technologies: ['React', 'Django', 'AWS'],
		semester: 'Spring 2021',
	},
	{
		name: 'ASUC civ.hacks',
		cover: CivHacks,
		subtitle: 'hackathon hosted to boost civic engagement',
		label: 'civhacks',
		color: 'rgba(68, 95, 142, 0.29)',
		link: 'https://civhacks.com/',
		technologies: ['Figma', 'React'],
		semester: 'Spring 2021',
	},
	{
		name: 'Free Ventures',
		cover: FreeVentures,
		subtitle: 'VC nonprofit',
		label: 'free-ventures',
		color: 'rgba(85, 38, 112, 0.24)',
		link: 'https://www.freeventures.org/',
		technologies: ['Figma', 'React'],
		semester: 'Fall 2021',
	},
	{
		name: 'The Berkeley Forum',
		cover: TBF,
		subtitle: 'discussion club',
		label: 'the-berkeley-forum',
		color: 'rgba(30, 55, 75, 0.27)',
		link: 'https://forum.berkeley.edu/',
		technologies: ['React', 'Amazon Web Services', 'Bootstrap'],
		semester: 'Spring 2021',
	},
	{
		name: 'Space Technologies at Cal',
		cover: Stac,
		subtitle: 'space tech club',
		label: 'space-technologies-at-cal',
		color: 'rgba(147, 147, 147, 0.38)',
		link: 'https://stac.berkeley.edu/',
		technologies: ['Figma', 'Flask'],
		semester: 'Fall 2020',
	},
	{
		name: 'Resource 19',
		cover: Resource19,
		subtitle: 'COvid-19 nonprofit',
		label: 'resource-19',
		color: 'rgba(59, 98, 139, 0.17)',
		link: 'https://resource19.org/',
		technologies: ['React', 'JQuery', 'Sass', 'Firebase'],
		semester: 'Fall 2020',
	},
	{
		name: 'Formula Electric at Berkeley',
		cover: FormulaElectric,
		subtitle: 'EV club',
		label: 'formula-electric',
		color: 'rgba(253, 181, 21, 0.28)',
		link: 'https://ev.berkeley.edu/',
		technologies: ['React', 'Bootstrap'],
		semester: 'Fall 2020',
	},
	{
		name: 'GroTech @ Berkeley',
		cover: GroTech,
		subtitle: 'biotechnology club',
		label: 'grotech',
		color: 'rgba(75, 152, 75, 0.38)',
		link: 'https://www.ocf.berkeley.edu/~grotech/',
		technologies: ['HTML', 'CSS', 'JavaScript'],
		semester: 'Fall 2020',
	},
	{
		name: 'Cloud at California',
		cover: CloudAtCal,
		subtitle: 'Cloud tech club',
		label: 'cloud-at-california',
		color: 'rgba(161, 214, 255, 0.58)',
		link: 'https://cloudatcal.org/',
		technologies: ['React'],
		semester: 'Fall 2020',
	},
];

export default data;
