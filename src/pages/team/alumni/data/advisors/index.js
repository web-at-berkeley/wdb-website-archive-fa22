import Vicky from './img/vicky.png';
import Samarth from './img/samarth.png';
import Aditya from './img/aditya.png';
import Lizzie from './img/lizzie.png';
import Jasmine from './img/jasmine.png';
import Tijmen from './img/tijmen.png';
import Hector from './img/hector.png';
import Abhi from './img/abhi.png';
import Arushi from './img/arushi.png';
import Albert from './img/albert.png';
import Andy from './img/andy.png';
import EmilyWu from './img/emily_wu.png';
import Ethan from './img/ethan.png';
import Henry from './img/henry.png';
import Nerissa from './img/nerissa.png';
import Sooyeon from './img/sooyeon.png';
import Noor from './img/noor.png';
import Caelin from './img/caelin.png';
import Alexis from './img/alexis.png';
import Justin from './img/justin.png';
import Rick from './img/rick.png';
import Youngjun from './img/youngjun.png';
import Laura from './img/laura.png';
import Neil from './img/neil.png';

const data = [
	{
		name: 'Samarth Goel',
		image: Samarth,
		role: 'Co-President and Co-Founder',
		linkedin: 'https://www.linkedin.com/in/samarth-goel-07/',
		personal: 'https://www.notion.so/3dffd695ef42483ca5fa13338eeb1190',
		email: 'mailto: sgoel9@berkeley.edu',
		semester: 0
	},
	{
		name: 'Vicky Li',
		image: Vicky,
		role: 'Co-President and Co-Founder',
		linkedin: 'https://www.linkedin.com/in/victoriayli/',
		personal: 'https://vickyli248.github.io/',
		email: 'mailto: victoria.li@berkeley.edu',
		semester: 0
	},
	{
		name: 'Aditya Bhawal',
		image: Aditya,
		role: 'Internal VP and Co-Founder',
		linkedin: 'https://www.linkedin.com/in/adityabhawal/',
		semester: 0
	},
	{
		name: 'Justin Chen',
		image: Justin,
		role: 'Co-External VP and Co-Founder',
		linkedin: 'https://www.linkedin.com/in/justinshawnchen/',
		personal: 'https://www.itsjustchen.com',
		applemusic: 'https://music.apple.com/profile/jch3nx',
		email: 'mailto: justinshawnchen@berkeley.edu',
	},
	{
		name: 'Caelin Sutch',
		image: Caelin,
		role: 'Bootcamp VP',
		linkedin: 'https://www.linkedin.com/in/caelinsutch/',
		personal:
			'https://www.caelinsutch.com/',
		semester: 0
	},
	{
		name: 'Lizzie Lau',
		image: Lizzie,
		role: 'Design VP',
		linkedin: 'https://www.linkedin.com/in/lizzie-lau/',
		personal: 'https://github.com/lizzielau',
		semester: 1
	},
	{
		name: 'Jasmine Chen',
		image: Jasmine,
		role: 'Design VP',
		linkedin: 'https://www.linkedin.com/in/jasminewschen/',
		personal: 'https://www.jasminewschen.com/',
		semester: 1
	},
	{
		name: 'Tijmen Sep',
		image: Tijmen,
		role: 'Design VP',
		linkedin: 'https://www.linkedin.com/in/jasminewschen/',
		personal: 'https://github.com/tijmensep',
		semester: 0
	},
	{
		name: 'Arushi Somani',
		image: Arushi,
		role: 'Course Staff',
		linkedin: 'https://www.linkedin.com/in/arushisomani/',
		personal: 'http://amks.me',
		semester: 0
	},
	{
		name: 'Abhi Wadekar',
		image: Abhi,
		role: 'Course Staff',
		linkedin: 'https://www.linkedin.com/in/abhiraam-wadekar/',
		semester: 1
	},
	{
		name: 'Hector Ramos',
		image: Hector,
		role: 'Course Staff',
		linkedin: 'https://www.linkedin.com/in/hector-ramos-/#',
		semester: 0
	},
	{
		name: 'Albert Tian',
		image: Albert,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/albert-tian/',
		personal: 'https://github.com/albTian',
		semester: 1
	},

	{
		name: 'Noor Mahani',
		image: Noor,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/noor-mahini/',
		personal: 'https://github.com/noortor',
		semester: 0
	},
	{
		name: 'Andy Jiang',
		image: Andy,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/andybojiang/',
		personal: 'http://github.com/andybojiang',
		semester: 1
	},
	{
		name: 'Ethan Wu',
		image: Ethan,
		role: 'Developer',
		linkedin: 'https://www.linkedin.com/in/ethan-wu/',
		personal: 'https://github.com/ethan-wu366',
		semester: 0
	},
	// {
	// 	name: 'Stephen Krider',
	// 	image: Stephen,
	// 	role: 'Developer',
	// 	linkedin: 'https://www.linkedin.com/in/skrider/',
	// 	semester: 1
	// },
	
	{
		name: 'Henry Chiu',
		image: Henry,
		role: 'Developer',
		linkedin: 'https://www.linkedin.com/in/henryychiu/',
		personal: 'http://henrychiu.me',
		semester: 0
	},
	{
		name: 'Nerissa Hsieh',
		image: Nerissa,
		role: 'Designer',
		linkedin: 'https://www.linkedin.com/in/nerissahsieh/',
		personal: 'https://www.nerissahsieh.com/',
		semester: 1
	},
	{
		name: 'Sooyeon Oh',
		image: Sooyeon,
		role: 'Designer',
		linkedin: 'https://www.linkedin.com/in/sooyeonoh',
		semester: 0
	},
	{
		name: 'Emily Wu',
		image: EmilyWu,
		role: 'Designer',
		linkedin: 'https://www.linkedin.com/in/emily-wu-5b121a162/',
		personal: 'https://github.com/emilyjw98',
		semester: 1
	},
	{
		name: 'Alexis Kim',
		image: Alexis,
		role: 'Design VP',
		linkedin: 'https://www.linkedin.com/in/alexis-kim-1348841b6',
		personal:
			'https://alexiskimdesign.notion.site/ALEXIS-KIM-9032da2c255d480bbfe37233620be503',
		email: 'mailto: alexis-kim@berkeley.edu',
	},
	{
		name: 'Rick Zhou',
		image: Rick,
		role: 'Member Experience',
		linkedin: 'https://www.linkedin.com/in/rick-zhou-a35208169//',
	},
	{
		name: 'Youngjun Seo',
		image: Youngjun,
		role: 'Member Experience',
		linkedin: 'https://www.linkedin.com/in/youngjun-seo-9170a91a1/',
	},
	{
		name: 'Laura Pei',
		image: Laura,
		role: 'Industry Design Mentor & Marketing',
		linkedin: 'https://www.linkedin.com/in/laurapei/',
		personal: 'https://github.com/lauraspberry',
	},
	{
		name: 'Neil Kamdar',
		image: Neil,
		role: 'Frontend TA',
		linkedin: 'https://www.linkedin.com/in/neil-kamdar/',
		personal: 'github.com/nvk518',
	},
	
];

export default data;
