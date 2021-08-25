import Vicky from './img/vicky.png';
import Samarth from './img/samarth.png';
import Justin from './img/justin.png';
import Caelin from './img/caelin.png';
import Alex from './img/alex.png';
import Aditya from './img/aditya.png';
import Lizzie from './img/lizzie.png';
import Hector from './img/hector.png';
import Abhi from './img/abhi.png';
import Arushi from './img/arushi.png';
import Kimberley from './img/kimberley.png';
import Dhruv from './img/dhruv.png';
import Alina from './img/alina.png';
import Stephen from './img/stephen.png';
import Anjan from './img/anjan.png';
import William from './img/william.png';
import Gabriel from './img/gabriel.png';
import Ani from './img/ani.png';
import Isabel from './img/isabel.png';
import Sophia from './img/sophia.png';
import Daniel from './img/daniel.png';
import Cindy from './img/cindy.png';


const data = [
	{
		name: 'Vicky Li',
		image: Vicky,
		role: 'Co-President',
		linkedin: 'https://www.linkedin.com/in/victoriayli/',
		personal: 'https://vickyli248.github.io/',
		email: 'mailto:victoria.li@berkeley.edu',
	},
	{
		name: 'Samarth Goel',
		image: Samarth,
		role: 'Co-President',
		linkedin: 'https://www.linkedin.com/in/samarth-goel-07/',
		personal: 'https://www.notion.so/3dffd695ef42483ca5fa13338eeb1190',
		email: 'sgoel9@berkeley.edu',
	},
	{
		name: 'Justin Chen',
		image: Justin,
		role: 'External VP',
		linkedin: 'https://www.linkedin.com/in/justinshawnchen/',
		personal: 'https://www.itsjustchen.com',
		applemusic: 'https://music.apple.com/profile/jch3nx',
		email: 'justinshawnchen@berkeley.edu',
	},
	{
		name: 'Caelin Sutch',
		image: Caelin,
		role: 'Training VP',
		linkedin: 'https://www.linkedin.com/in/caelinsutch/',
		personal: 'https://www.caelinsutch.com/',
		email: 'caelinsutch@berkeley.edu',
	},
	{
		name: 'Alex Wu',
		image: Alex,
		role: 'Education VP',
		linkedin: 'https://www.linkedin.com/in/jialin-wu-658929185/',
		personal:
			'https://jialin-wu.com/Hi-I-am-Alex-Wu-e214ae8665244ef8b086d669f2d21800',
		email: 'justinshawnchen@berkeley.edu',
	},
	{
		name: 'Lizzie Lau',
		image: Lizzie,
		role: 'Design VP',
		linkedin: 'https://www.linkedin.com/in/lizzie-lau/',
		personal: 'https://github.com/lizzielau',
		email: 'lizzielau@berkeley.edu',
	},
	{
		name: 'Aditya Bhawal',
		image: Aditya,
		role: 'Internal VP',
		linkedin: 'https://www.linkedin.com/in/adityabhawal/',
		email: 'adbhawal@berkeley.edu',
	},
	{
		name: 'Hector Ramos',
		image: Hector,
		role: 'DeCal TA',
		linkedin: 'https://www.linkedin.com/in/hector-ramos-/#',
		email: 'hector.ramos@berkeley.edu',
	},
	{
		name: 'Abhi Wadekar',
		image: Abhi,
		role: 'DeCal TA',
		linkedin: 'https://www.linkedin.com/in/abhiraam-wadekar/',
		email: 'abhi1@berkeley.edu',
	},
	{
		name: 'Arushi Somani',
		image: Arushi,
		role: 'DeCal TA',
		linkedin: 'https://www.linkedin.com/in/arushisomani/',
		email: 'arushisomani@berkeley.edu',
		personal: 'http://amks.me',
	},
	{
		name: 'Kimberly Fan',
		image: Kimberley,
		role: 'DeCal TA',
		linkedin: 'https://www.linkedin.com/in/kimberleyfan/',
		personal: 'www.github.com/kimberleyfan',
		email: 'kimberley.fan123@berkeley.edu',
	},
	{
		name: 'Dhruv Vaish',
		image: Dhruv,
		role: 'DeCal TA',
		linkedin: 'https://www.linkedin.com/in/dhruv-vaish/',
	},
	{
		name: 'Alina Wang',
		image: Alina,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/wangerful/',
		personal: 'https://github.com/aliner-wang',
	},
	{
		name: 'Stephen Krider',
		image: Stephen,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/skrider/',
		personal: 'https://github.com/skrider',
	},
	{
		name: 'Anjan Bharadwaj',
		image: Anjan,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/anjanbharadwaj/',
		personal: 'http://anjanbharadwaj.me/',
	},
	{
		name: 'William Louis',
		image: William,
		role: 'Training Team',
		linkedin: 'https://www.linkedin.com/in/william-l-549860132/',
	},
	{
		name: 'Gabriel Meng',
		image: Gabriel,
		role: 'Member Experience Team',
		linkedin: 'https://www.linkedin.com/in/gabrielmeng',
		personal: 'https://github.com/gabemeng',
	},
	{
		name: 'Aniruddha Vangala',
		image: Ani,
		role: 'Product Manager & Training Team',
		linkedin: 'https://www.linkedin.com/in/aniruddhavangala/',
		personal: 'https://github.com/aniruddha98',
	},
	{
		name: 'Isabel Zheng',
		image: Isabel,
		role: 'Design Team',
		linkedin: 'https://www.linkedin.com/in/isabel-zheng-24003b1b2/',
		personal:
			'https://www.notion.so/Welcome-to-Isabel-s-Space-b762d57ef4fb4c6bbc055a520bc2d28f',
	},
	
	{
		name: 'Sophia guo',
		image: Sophia,
		role: 'Design Team',
		linkedin: 'https://www.linkedin.com/in/sophia-guo-957844149/',
	},
	{
		name: 'Daniel Won',
		image: Daniel,
		role: 'Design Team',
		linkedin: 'https://www.linkedin.com/in/danielw23/',
	},
	{
		name: 'Cindy Liu',
		image: Cindy,
		role: 'Design Team',
		linkedin: 'https://www.linkedin.com/in/cindy-liu-a52a0a194/',
	},
];

export default data;
