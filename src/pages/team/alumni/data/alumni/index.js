import Ani from './img/ani.png';
import RichardX from './img/richardX.png';
import Jerrick from './img/jerrick.png';
import Jessica from './img/jessica.png';
import Raga from './img/raga.png';
import Melody from './img/melody.png';
import Ervin from './img/ervin.png';
import Gabe from './img/gabe.png';
import Alex from './img/alex.png';
import Atharva from './img/atharva.png';
import James from './img/james.png';
import EmilySu from './img/emily_su.png';
import Neha from './img/neha.png';
import Izzie from './img/izzie.png';
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
		name: 'Caelin Sutch',
		image: Caelin,
		role: 'Bootcamp VP',
		linkedin: 'https://www.linkedin.com/in/caelinsutch/',
		personal: 'https://www.caelinsutch.com/',
		semester: 0,
	},
	{
		name: 'Lizzie Lau',
		image: Lizzie,
		role: 'Design VP',
		linkedin: 'https://www.linkedin.com/in/lizzie-lau/',
		personal: 'https://github.com/lizzielau',
		semester: 1,
	},
	{
		name: 'Jasmine Chen',
		image: Jasmine,
		role: 'Design VP',
		linkedin: 'https://www.linkedin.com/in/jasminewschen/',
		personal: 'https://www.jasminewschen.com/',
		semester: 1,
	},
	{
		name: 'Tijmen Sep',
		image: Tijmen,
		role: 'Design VP',
		linkedin: 'https://www.linkedin.com/in/jasminewschen/',
		personal: 'https://github.com/tijmensep',
		semester: 0,
	},
	{
		name: 'Arushi Somani',
		image: Arushi,
		role: 'Course Staff',
		linkedin: 'https://www.linkedin.com/in/arushisomani/',
		personal: 'http://amks.me',
		semester: 0,
	},
	{
		name: 'Abhi Wadekar',
		image: Abhi,
		role: 'Course Staff',
		linkedin: 'https://www.linkedin.com/in/abhiraam-wadekar/',
		semester: 1,
	},
	{
		name: 'Hector Ramos',
		image: Hector,
		role: 'Course Staff',
		linkedin: 'https://www.linkedin.com/in/hector-ramos-/#',
		semester: 0,
	},
	{
		name: 'Albert Tian',
		image: Albert,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/albert-tian/',
		personal: 'https://github.com/albTian',
		semester: 1,
	},

	{
		name: 'Noor Mahani',
		image: Noor,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/noor-mahini/',
		personal: 'https://github.com/noortor',
		semester: 0,
	},
	{
		name: 'Andy Jiang',
		image: Andy,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/andybojiang/',
		personal: 'http://github.com/andybojiang',
		semester: 1,
	},
	{
		name: 'Ethan Wu',
		image: Ethan,
		role: 'Developer',
		linkedin: 'https://www.linkedin.com/in/ethan-wu/',
		personal: 'https://github.com/ethan-wu366',
		semester: 0,
	},
	{
		name: 'Henry Chiu',
		image: Henry,
		role: 'Developer',
		linkedin: 'https://www.linkedin.com/in/henryychiu/',
		personal: 'http://henrychiu.me',
		semester: 0,
	},
	{
		name: 'Nerissa Hsieh',
		image: Nerissa,
		role: 'Designer',
		linkedin: 'https://www.linkedin.com/in/nerissahsieh/',
		personal: 'https://www.nerissahsieh.com/',
		semester: 1,
	},
	{
		name: 'Sooyeon Oh',
		image: Sooyeon,
		role: 'Designer',
		linkedin: 'https://www.linkedin.com/in/sooyeonoh',
		semester: 0,
	},
	{
		name: 'Emily Wu',
		image: EmilyWu,
		role: 'Designer',
		linkedin: 'https://www.linkedin.com/in/emily-wu-5b121a162/',
		personal: 'https://github.com/emilyjw98',
		semester: 1,
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
	// Spring 2022
	{
		name: 'Gabriel Meng',
		image: Gabe,
		role: 'Member Experience',
		linkedin: 'https://www.linkedin.com/in/gabrielmeng/',
	},
	{
		name: 'Alex Wu',
		image: Alex,
		role: 'Full Stack TA',
		linkedin: 'https://www.linkedin.com/in/jialin-wu-658929185/',
		personal:
			'https://jialin-wu.com/Hi-I-am-Alex-Wu-e214ae8665244ef8b086d669f2d21800',
	},
	{
		name: 'Atharva Mehendale',
		image: Atharva,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/atharvamehendale/',
		semester: 1,
	},
	{
		name: 'James Shin',
		image: James,
		role: 'Developer',
		linkedin: 'https://www.linkedin.com/in/jamesjungmin',
		semester: 0,
	},
	{
		name: 'Emily Su',
		image: EmilySu,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/emily-su/',
		personal: 'https://github.com/emilysu01',
		semester: 0,
	},
	{
		name: 'Neha Haq',
		image: Neha,
		role: 'Product Manager',
		linkedin: 'https://www.linkedin.com/in/neha-haq/',
		personal: 'https://github.com/nwhaq1',
		semester: 0,
	},
	{
		name: 'Izzie Lau',
		image: Izzie,
		role: 'Head of Marketing',
		linkedin: 'https://www.linkedin.com/in/izzielau/',
		personal: 'https://izzielau.github.io/',
		semester: 1,
	},
	// Fall 2021
	{
		name: 'Ani Vangala',
		image: Ani,
		role: 'Product Manager',
		at: 'Tesla',
		linkedin: 'https://www.linkedin.com/in/aniruddhavangala/',
		personal: 'https://github.com/aniruddha98',
	},
	{
		name: 'Richard Xue',
		image: RichardX,
		role: 'Backend Developer',
		at: 'Docusign',
		linkedin: 'https://www.linkedin.com/in/richrichard/',
		personal: 'https://github.com/mauveofwhite',
	},
	// Spring 2021
	{
		name: 'Jerrick Zhu',
		image: Jerrick,
		role: 'Course Staff',
		at: 'Facebook',
		linkedin: 'https://www.linkedin.com/in/jerrickzhu/',
		personal: 'https://www.linkedin.com/in/jerrickzhu/',
	},
	{
		name: 'Jessica Wu',
		image: Jessica,
		role: 'Head of Finance',
		at: 'KPMG',
		linkedin: 'https://www.linkedin.com/in/jessica-wu1/',
		personal: 'http://github.com/jwu191',
	},
	{
		name: 'Raga Kavari',
		image: Raga,
		role: 'Product Designer',
		at: 'CMU HCI',
		linkedin: 'https://www.linkedin.com/in/ragakavari/',
	},
	// Fall 2020
	{
		name: 'Melody Yan',
		image: Melody,
		role: 'Product Designer',
		at: 'Twitter',
		linkedin: 'https://www.linkedin.com/in/melodysyan/',
		personal: 'https://github.com/itsmelodious',
	},
	{
		name: 'Ervin Baccay',
		image: Ervin,
		at: 'Tesla',
		role: 'Technology VP',
		linkedin: 'https://www.linkedin.com/in/ebaccay/',
		personal: 'https://github.com/ebaccay',
	},
];

export default data;
