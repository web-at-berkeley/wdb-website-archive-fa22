import Jupiter from './img/jupiter.png';
import Truth from './img/truth.png';
import Indecisive from './img/Indecisive.png';
import WatsonSpotify from './img/WatsonSpotify.png';
import Daycation from './img/Daycation.png';
import UpAndComing from './img/UpAndComing.png';

export const data = [
	{
		name: 'Jupiter Journal',
		cover: Jupiter,
		link: 'https://github.com/ethan-wu366/data-journal',
		technologies: ['Django', 'PostgreSQL', 'React', 'Plot.ly'],
		semester: 'Spring 2021',
	},

	{
		name: 'Truth',
		cover: Truth,
		link: 'https://github.com/misterluna/TRUTH',
		technologies: ['React', 'MongoDB', 'Node', 'Express'],
		semester: 'Spring 2021',
	},
	{
		name: 'Indecisive',
		cover: Indecisive,
		link: 'https://github.com/ansaschmulbach/indecisive',
		technologies: ['React', 'Django', 'Heroku'],
		semester: 'Fall 2020',
	},
	{
		name: 'IBM Watson x Spotify',
		cover: WatsonSpotify,
		link: 'https://github.com/emmaguo13/spotify-webapp',
		technologies: ['IBM Watson', 'React', 'OAuth'],
		semester: 'Fall 2020',
	},
	{
		name: 'Daycation',
		cover: Daycation,
		link: 'https://github.com/anushasilla/wdbproj',
		technologies: ['Figma', 'React'],
		semester: 'Fall 2020',
	},
	{
		name: 'Up & Coming',
		cover: UpAndComing,
		link: 'http://upandcoming.herokuapp.com/home',
		technologies: ['Amazon Web Services', 'Node', 'React'],
		semester: 'Fall 2020',
	},
];

export default data;
