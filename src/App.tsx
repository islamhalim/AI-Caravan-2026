import { FormEvent, useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './components/config/firebase';
import AdminRegistrations from './AdminRegistrations';
import { getTeamProfileLink, partnerLinks } from './data/externalLinks';
import { getTrackCurriculum } from './data/trackCurricula';
import './track-details.css';
import './publication.css';
import './summit.css';
import './schedule.css';
import {
  ArrowRight, Bot, Briefcase, CalendarDays, CheckCircle2,
  ChevronRight, Code2, Globe2, GraduationCap, Mail, MapPin, Menu,
  Award, BookOpen, Clock3, ExternalLink, Image, Network, Play, Rocket, Send, Sparkles, Target, X, Zap
} from 'lucide-react';

const nav = [
  ['Home', '/'], ['About', '/about'], ['Activities', '/activities'],
  ['Highlights', '/highlights'], ['Partners', '/partners'],
  ['Timeline', '/timeline'], ['Team', '/team'], ['Track Registration', '/track-registration'], ['Summit Registration', '/registration'], ['Contact', '/contact']
];

const countries = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Costa Rica','Côte d’Ivoire','Croatia','Cuba','Cyprus','Czechia','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Republic of the Congo','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','São Tomé and Príncipe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Türkiye','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'
];

const tracks = [
  { slug: 'ai-expert', name: 'AI Expert', audience: 'Professionals', hours: '24 hours', copy: 'Apply generative AI and productivity tools to research, communication, analysis, and everyday professional workflows.', prerequisites: 'Basic digital literacy; no programming required.', topics: ['Prompt design and evaluation','Responsible AI use','Research and productivity workflows'], committee: [{name:'Katarina Trojachanec',role:'Expert Track Lead'},{name:'Sean Bin Yang',role:'Expert Track Co-Lead'},{name:'Thamir Qadah',role:'Expert (Reviewer)'}], icon: Sparkles, color: 'orange' },
  { slug: 'ai-strategist', name: 'AI Strategist', audience: 'Leaders', hours: '24 hours', copy: 'Translate AI capabilities into responsible organizational strategy, measurable value, governance, and investment decisions.', prerequisites: 'Management or decision-making experience; no programming required.', topics: ['AI opportunity assessment','Governance and risk','Business cases and ROI'], committee: [{name:'Caroline Ling Li',role:'Strategist Track Lead'},{name:'Vasanthi Neelagiri',role:'Strategist Track Co-Lead'},{name:'Zorica Bogdanovic',role:'Strategist (Reviewer)'}], icon: Briefcase, color: 'blue' },
  { slug: 'ai-engineer', name: 'AI Engineer', audience: 'Builders', hours: '32 hours', copy: 'Build, evaluate, and deploy machine-learning solutions using practical data-science and model-development workflows.', prerequisites: 'Basic Python and introductory statistics or equivalent experience.', topics: ['Data preparation','Model training and evaluation','Applied ML project workflow'], committee: [{name:'Seifedine Kadry',role:'Engineering Track Lead'},{name:'Khaled Khnissi',role:'Engineering Track Co-Lead'},{name:'Mehdi SOUIER',role:'Engineer (Reviewer)'}], icon: Bot, color: 'cyan' },
  { slug: 'ai-viber', name: 'AI Viber', audience: 'Developers', hours: '32 hours', copy: 'Use AI-assisted engineering methods to design, build, test, and improve modern software products responsibly.', prerequisites: 'Programming fundamentals in any modern language.', topics: ['AI coding assistants','Application integration','Testing, security, and quality'], committee: [{name:'Charalampos Z. Patrikakis',role:'Viber Track Lead'},{name:'Ravitez Dondeti',role:'Viber Track Co-Lead'},{name:'Ayesha Afzal',role:'Viber (Reviewer)'}], icon: Code2, color: 'purple' },
  { slug: 'ai-administrator', name: 'AI Administrator', audience: 'Managers', hours: '28 hours', copy: 'Design agentic workflows and practical automations that connect tools, information, decisions, and human oversight.', prerequisites: 'Comfort using common digital workplace tools; no coding required.', topics: ['Workflow mapping','Agents and automation','Controls and human-in-the-loop design'], committee: [{name:'Mousa Tawfiq AL-Akhras',role:'Administrator Track Lead'},{name:'Robina Mirbahar',role:'Administrator Track Co-Lead'},{name:'Francesco Flammini',role:'Administrator (Reviewer)'}], icon: Network, color: 'green' },
  { slug: 'ai-junior', name: 'AI Junior', audience: 'Beginners', hours: '24 hours', copy: 'Explore how AI works through accessible creative challenges, responsible-use lessons, and guided projects.', prerequisites: 'Curiosity, basic computer skills, and access to a computer; no prior AI experience.', topics: ['AI foundations','Creative problem solving','Safe and responsible AI'], committee: [{name:'Batoul Rida Haidar',role:'Junior Track Lead'},{name:'Samar M. Nour',role:'Junior Track Co-Lead'},{name:'Kostas Karpouzis',role:'Junior (Reviewer)'}], icon: GraduationCap, color: 'yellow' },
];

const cohortSchedule = [
  {day:'Wednesday',date:'18 Nov 2026',sessions:{'AI Viber':'6–10 PM'}},
  {day:'Friday',date:'20 Nov 2026',sessions:{'AI Strategist':'6–10 PM','AI Engineer':'6–10 PM'}},
  {day:'Saturday',date:'21 Nov 2026',sessions:{'AI Strategist':'6–10 PM','AI Engineer':'6–10 PM'}},
  {day:'Sunday',date:'22 Nov 2026',sessions:{'AI Administrator':'6–10 PM','AI Viber':'6–10 PM'}},
  {day:'Monday',date:'23 Nov 2026',sessions:{'AI Expert':'6–10 PM','AI Junior':'6–10 PM'}},
  {day:'Wednesday',date:'25 Nov 2026',sessions:{'AI Administrator':'6–10 PM','AI Viber':'6–10 PM'}},
  {day:'Thursday',date:'26 Nov 2026',sessions:{'AI Expert':'6–10 PM','AI Junior':'6–10 PM'}},
  {day:'Friday',date:'27 Nov 2026',sessions:{'AI Strategist':'6–10 PM','AI Engineer':'6–10 PM'}},
  {day:'Saturday',date:'28 Nov 2026',sessions:{'AI Strategist':'6–10 PM','AI Engineer':'6–10 PM'}},
  {day:'Sunday',date:'29 Nov 2026',sessions:{'AI Administrator':'6–10 PM','AI Viber':'6–10 PM'}},
  {day:'Monday',date:'30 Nov 2026',sessions:{'AI Expert':'6–10 PM','AI Junior':'6–10 PM'}},
  {day:'Wednesday',date:'2 Dec 2026',sessions:{'AI Administrator':'6–10 PM','AI Viber':'6–10 PM'}},
  {day:'Thursday',date:'3 Dec 2026',sessions:{'AI Expert':'6–10 PM','AI Junior':'6–10 PM'}},
  {day:'Friday',date:'4 Dec 2026',sessions:{'AI Strategist':'6–10 PM','AI Engineer':'6–10 PM'}},
  {day:'Saturday',date:'5 Dec 2026',sessions:{'AI Strategist':'6–10 PM','AI Engineer':'6–10 PM'}},
  {day:'Sunday',date:'6 Dec 2026',sessions:{'AI Administrator':'6–10 PM','AI Viber':'6–10 PM'}},
  {day:'Monday',date:'7 Dec 2026',sessions:{'AI Expert':'6–10 PM','AI Junior':'6–10 PM'}},
  {day:'Wednesday',date:'9 Dec 2026',sessions:{'AI Administrator':'6–10 PM','AI Viber':'6–10 PM'}},
  {day:'Thursday',date:'10 Dec 2026',sessions:{'AI Expert':'6–10 PM','AI Junior':'6–10 PM'}},
  {day:'Friday',date:'11 Dec 2026',sessions:{'AI Engineer':'6–10 PM'}},
  {day:'Saturday',date:'12 Dec 2026',sessions:{'AI Engineer':'6–10 PM'}},
  {day:'Sunday',date:'13 Dec 2026',sessions:{'AI Administrator':'6–10 PM','AI Viber':'6–10 PM'}},
] as {day:string;date:string;sessions:Partial<Record<string,string>>}[];

type Person = { name:string; title?:string; affiliation?:string; photo?:string };
const leaders:Person[] = [
  {name:'Andrew Seely',title:'VP of Member and Geographic Activities',affiliation:'IEEE Computer Society',photo:'andy.avif'},{name:'Cyril Onwubiko',title:'VP of Professional and Educational Activities',affiliation:'IEEE Computer Society',photo:'CyrilOnwubiko_BoG_Photo.avif'},{name:'Yuhong Liu',title:'Secretary',affiliation:'IEEE Computer Society',photo:'Yuhong.avif'},{name:'Eric Berkowitz',title:'Director of Membership and Education',affiliation:'IEEE Computer Society',photo:'eric2.jpg'},{name:'Mohamed Rawidean',title:'MGAB Vice Chair (Geographic Activities)',affiliation:'IEEE Computer Society',photo:'mohamed-kasim.jpg'},{name:'George J. Proeller',title:'Chair, Distinguished Contributor Program',affiliation:'IEEE Computer Society',photo:'George J. Proeller .jpg'},{name:'David Koehler',title:'2027 President-Elect Candidate',affiliation:'IEEE',photo:'David.jpg'},{name:'Adel S. Elmaghraby',title:'Director of Research and Innovation',affiliation:'University of Louisville, USA',photo:'adel.jpg'},{name:'Celestine Iwendi',title:'Head, Centre of Intelligence of Things (CIoTh)',affiliation:'University of Greater Manchester, UK',photo:'Celestine-Iwendi-Web-Size-v2.jpg'},
 {name:'Lee Crudgington',title:'Regional Chapter Coordinator',affiliation:'IEEE Region 8',photo:'lee-crudgington.webp'},{name:'Islam Tharwat Abdel Halim',title:'Regional Coordinator | Founder, AI Caravan',affiliation:'IEEE Computer Society',photo:'islam-tharwat.jpg'},
];
const experts:Person[]=[{name:'Tarek Khalil',title:'Founding President of Nile University (2006-2021) and Distinguished Professor of Management of Technology',affiliation:'Nile University, Egypt',photo:'tarekkhalil.jpeg'},{name:'Erol Gelenbe',title:'Professor',affiliation:'Polish Academy of Sciences, Institute of Theoretical and Applied Informatics, Poland',photo:'erole.webp'},{name:'Ahmed M. Darwish',title:'Chairman of the Board of trustess and  Former Minister of State for Administration Development',affiliation:'IEEE Egypt Consultants Network, Egypt',photo:'AhmedDarwish.jpg'},{name:'Samir I. Shaheen',title:'Professor of Computer Engineering and Chair of IEEE Egypt Computer Socity Chapter',affiliation:'Cairo University, Egypt',photo:'Samir.jpg'},{name:'Ahmed Hazem El-Mahdy',title:'Dean of the School of Information Technology and Computer Science',affiliation:'Nile University, Egypt',photo:'mahdy.jpg'},{name:'Kostas Karpouzis',title:'Associate Professor',affiliation:'Panteion University of Social and Political Sciences, Greece', photo:'Kostas-Karpouzis.jpg'},{name:'Mousa Tawfiq',title:'Associate Professor of Artificial Intelligence and Computer Information Systems',affiliation:'University of Jordan',photo:'Mousa Al-Akhras.jpeg'},{name:'Batoul Rida Haidar',title:'Assistant Professor of Computer Science and AI',affiliation:'Coventry University, Egypt',photo:'BatoulHaidar.jpeg'}, {name:'Ayesha Afzal',title:'Researcher',affiliation:'Erlangen National High Performance Computing Center, Germany',photo:'Ayesha Afzaljpg.jpg'},{name:'Hadeer Ehab Barakat',title:'Assistant Professor',affiliation:'British University in Egypt',photo:'HadeerEhab.jpg'},{ name:'Zorica Bogdanovic',title:'Professor',affiliation:'University of Belgrade Faculty of Organizational Sciences, Serbia',photo:'zorica.jpg'},{name:'Khaled Khnissi',title:'Researcher in Robotics & AI',affiliation:'Ecole nationale supérieure des ingénieurs de Tunis - Ensit',photo:'khaled.jpg'},{name:'Atef El Fekky',title:'CEO',affiliation:'Digital Arrow, Egypt',photo:'Atef.webp'},{name:' AbdEl-Monem El-Sharkawy ',title:' chairman ',affiliation:' National Academy of Information Technology for Persons with Disabilities, Egypt ' ,photo:'AbdEl-Monem.jpg'},{name:' Mehdi SOUIER ',title:'Full Professor, Head of the ISM Research Team, University of Tlemcen, Algeria',affiliation:' Faculty of Technology, University of Tlemcen, Algeria' ,photo:'Mehdi SOUIER.jpeg'},{name:'Eslam Moussa',title:'CEO',affiliation:'TENET Information Technology, Egypt',photo:'IslamMousa.jpg'},{name:'Samar M. Nour',title:'Assistant Professor',affiliation:'Department of computer engineering at Badr University in Cairo (BUC), Egypt' ,photo:'samarnour.jpg'},{name:'Ruaa Al-Falluji',title:'Assistant Professor',affiliation:'College of Information Engineering, Al-Nahrain University, Iraq' ,photo:'Ruaa.jpeg'},{name:' Alex Watila ',title:' Deputy Director, ICT ',affiliation:'Kasneb, Kenya' ,photo:'1517700488238.jpg'},{name:'Oussema Fitouri',title:'Software Engineer',affiliation:'BNP Paribas, France',photo:'Oussema.jpg'},{name:'Vasanthi Neelagiri',title:'Sr. Product Manager, Data Cloud',affiliation:'Salesforce, USA',photo:'Vasanthi Neelagiri.png'},{name:'Ravitez Dondeti',title:'Engineering Manager',affiliation:'Crestron Electronics, Rockleigh, NJ',photo:'RavitezDondeti.png'},{name:'Robina Mirbahar',title:'Google Developer Expert - AI & Cloud',affiliation:'Google for Developers',photo:'PXL_20260704_133021288.jpg'} ];
experts.push(
  {name:'Ahmed Hassan Yousef',title:'President',affiliation:'Elsewedy University of Technology (SUT), Egypt',photo:'SUTech-Dr.-Ahmed-Hassan-Yousef-Square.jpg'},
  {name:'Reyhan Aydogan',title:'Associate Professor in Artificial Intelligence and Data Engineering',affiliation:'Ozyegin University, Turkey',photo:'reyhan.jpg'},
  {name:'Seifedine Kadry',title:'Professor of Data Science',affiliation:'Lebanese American University, Lebanon',photo:'seifedine-kadry.jpg'},
  {name:'Roua TOUIHRI',title:'Change Management Board / Enterprise Architect',affiliation:'Elee, Paris, France',photo:'Roua.jpg'},
  {name:'Hironori Washizaki',title:'Professor and Associate Dean of the Research Promotion Division',affiliation:'Waseda University, Japan',photo:'IEEE_CS_Hironori_Washizaki_headshot.jpg'},
  {name:'David Alan Grier',title:'Associate Professor Emeritus of International Science and Technology Policy Emeriti Faculty',affiliation:'George Washington University, US',photo:'David-Alan-Grier-profile-01.webp'},
  {name:'Katarina Trojachanec',title:'Associate Professor at Faculty of Computer Science and Engineering',affiliation:'Ss. Cyril and Methodius University, Skopje, N. Macedonia',photo:'doc._d-r_katarina_trojachanec_dineva_20698.jpg'},
  {name:'Walid Al-Atabany',title:'Associate Dean for UG Programs & Director of Centre for Informatics (CIS)',affiliation:'Nile University, Egypt',photo:'whatsapp_image_2022-12-20_at_11.46.00_pm.jpeg'},
  {name:'Sean Bin Yang',title:'Assistant Professor in the Department of Computer Science',affiliation:'Aalborg University, Denmark',photo:'BinYang.jpg'},
  {name:'Thamir Qadah',title:'Assistant Professor in the Department of Computer and Networks Engineering College of Computing',affiliation:'Umm Al-Qura University, KSA',photo:'tmqadah.webp'},
  {name:'Caroline Ling Li',title:'Professor in Biomedical Engineering',affiliation:"City St George's, University of London, UK",photo:'caroline-li-200x267.jpg'},
  {name:'Reginald Ogu',title:'Lecturer in the Department of Computer Engineering',affiliation:'Federal University of Technology, Nigeria',photo:'Reginald-Ogu.webp'},
  {name:'Francesco Flammini',title:'Full Professor of Computer Science',affiliation:'University of Florence, Italy',photo:'FF-SUPSI_improved.png'},
  {name:'Tamer El Batt',title:'Professor, Computer Science and Engineering',affiliation:'Department of Computer Science and Engineering, The American University in Cairo (AUC)',photo:'dr._tamer_elbatt.jpg'},
  {name:'Charalampos Z. Patrikakis',title:'Professor/Director, Dept. of Electrical & Electronics Engineering',affiliation:'University of West Attica/ CoNSeRT, Greece',photo:'patrikakis.png'},
  {name:'Passent M. ElKafrawy',title:'Professor of Artificial Intelligence',affiliation:'College of Engineering, Effat University, Saudi Arabia',photo:'Passent-Elkafrawy.webp'},
  {name:'Sherin M. Youssef',title:'Professor & Head of Computer Engineering Program',affiliation:'Arab Academy for Science, Technology and Maritime Transport (AASTMT), Egypt',photo:'MyPhoto-SherinYoussef-IMG-20220224-WA0014-200x200.jpg'},
  {name:'Mohammad Abdel-Majeed',title:'Associate Professor in the Computer Engineering Department',affiliation:'University of Jordan, Jordan',photo:'Mohammad-Abdel-Majeed.jpg'},
  {name:'Martin Kiselicki',title:'Assistant Professor',affiliation:'Ss. Cyril and Methodius University in Skopje, North Macedonia',photo:'Martin-Kiselicki.jpg'},
  {name:'Tamer Arafa',title:'Associate Professor & Acting CIO',affiliation:'Nile University, Egypt',photo:'whatsapp_image_2025-02-01_at_8.32.13_am.jpeg'},
  {name:'Jeanine A. DeFalco, PhD',title:'Founder and CEO',affiliation:'Mixta Inc., USA',photo:'Jeanine-DeFalco.jpg'},
  {name:'Tamara Naumovic',title:'Teaching Assistant',affiliation:'Faculty of Organizational Sciences, University of Belgrade, Serbia',photo:'Tamara-Naumovic.jpg'},
  {name:'Petar Lukovac',title:'Supporting Assistant',affiliation:'Faculty of Organizational Sciences, University of Belgrade, Serbia',photo:'Petar-Lukovac.jpg'},
  {name:'Loveleen Gaur',title:'Program Director, Artificial Intelligence and Data Analytics',affiliation:'Amity International Business School, Amity University, India',photo:'Loveleen-Gaur.jpg'},
  {name:'Abedal-Kareem Al-Banna',title:'Assistant Professor',affiliation:'University of Petra, Jordan',photo:'Abedal-Kareem-Al-Banna.jpg'},
  {name:'Emna Amri',title:'AI Researcher and Consultant',affiliation:'France',photo:'photo_profil_voile-Emna-IEEE.jpg'},
  {name:'M Naeem',title:'AI Expert',affiliation:'Arab Academy for Science, Technology and Maritime Transport (AASTMT), Egypt',photo:'mnaem.jpg'}
);
const mousaTawfiq = experts.find(expert => expert.name.trim() === 'Mousa Tawfiq');
if (mousaTawfiq) {
  mousaTawfiq.name = 'Mousa Tawfiq AL-Akhras';
}
const preferredExpertOrder = [
  'Tarek Khalil',
  'Erol Gelenbe',
  'Ahmed M. Darwish',
  'Samir I. Shaheen',
  'Ahmed Hassan Yousef',
  'Ahmed Hazem El-Mahdy',
  'Francesco Flammini',
  'Tamer El Batt',
  'Kostas Karpouzis',
  'Katarina Trojachanec',
  'Reyhan Aydogan',
  'Walid Al-Atabany',
  'Zorica Bogdanovic',
  'Caroline Ling Li',
  'Charalampos Z. Patrikakis',
  'Ayesha Afzal',
  'Seifedine Kadry',
  'Mehdi SOUIER',
  'Mousa Tawfiq AL-Akhras',
  'Sean Bin Yang',
  'Thamir Qadah',
  'Hadeer Ehab Barakat',
  'Batoul Rida Haidar',
  'Samar M. Nour',
  'Atef El Fekky',
  'Khaled Khnissi',
  'Eslam Moussa',
  'Roua TOUIHRI',
  'AbdEl-Monem El-Sharkawy',
  'Ruaa Al-Falluji',
  'Alex Watila',
  'Reginald Ogu'
];
const mehdiSouier = experts.find(expert => expert.name.trim() === 'Mehdi SOUIER');
if (mehdiSouier) {
  mehdiSouier.title = 'Full Professor, Head of the ISM Research Team, University of Tlemcen, Algeria';
}
const abdElMonemElSharkawy = experts.find(expert => expert.name.trim() === 'AbdEl-Monem El-Sharkawy');
if (abdElMonemElSharkawy) {
  abdElMonemElSharkawy.title = 'Chairman';
}
const ruaaAlFalluji = experts.find(expert => expert.name.trim() === 'Ruaa Al-Falluji');
if (ruaaAlFalluji) {
  ruaaAlFalluji.title = 'Professor';
  ruaaAlFalluji.affiliation = 'Department of Automation and Artificial Intelligence Engineering, College of Information Engineering, Al-Nahrain University, Iraq';
  ruaaAlFalluji.photo = '8013c5bc-02b7-49cc-b0f5-1038420ca89f.jpg';
}
experts.sort((first, second) => {
  const firstIndex = preferredExpertOrder.indexOf(first.name.trim());
  const secondIndex = preferredExpertOrder.indexOf(second.name.trim());
  if (firstIndex === -1 && secondIndex === -1) return 0;
  if (firstIndex === -1) return 1;
  if (secondIndex === -1) return -1;
  return firstIndex - secondIndex;
});
const advisoryBoardNames = ['David Koehler', 'Adel S. Elmaghraby', 'Celestine Iwendi', 'Erol Gelenbe', 'Hironori Washizaki', 'David Alan Grier'];
const advisoryBoard = [...leaders, ...experts].filter(person => advisoryBoardNames.includes(person.name.trim()));
const caravanLeaders = leaders.filter(person => !advisoryBoardNames.includes(person.name.trim()));
const regionalExperts = experts.filter(person => !advisoryBoardNames.includes(person.name.trim()));
const excom:Person[]=[
  {name:'Amr Nabih Riyad',title:'Content & Documentation Lead',photo:'amrjpg.jpg',affiliation:'Egypt'},
  {name:'Taieb jemal',title:'Training Program Lead',photo:'taieb.jpg',affiliation:'Tunisia'},
  {name:'Esraa Elhossieny',photo:'esraa.jpg',affiliation:'Egypt'},
  {name:'Mohamed Zouari',title:'Media Lead',photo:'zouri.jpg',affiliation:'Tunisia'},
  {name:'Mohamed SaidSalah Hassan',title:'Partnerships & Sponsorships Lead',photo:'042A3056.jpg',affiliation:'Egypt'},
  {name:'Lina Bouallegue',title:'Awards & Recognition Lead',photo:'zjeS2Eu.png',affiliation:'Tunisia'},
  {name:'Mohannad Mohamed Abdelaziz',photo:'042A2607.jpg',affiliation:'Egypt'},
  {name:'Mohamed Ali Ben Dhiab',title:'Webmaster Lead',photo:'Mohamed Ali Ben dhiab.jpg',affiliation:'Tunisia'},
  {name:'Mohamed Essam',title:'Communication Lead',photo:'essam.png',affiliation:'Egypt'},
  {name:'Hassan Ahmed El Sayed',title:'Marketing Lead',photo:'f2bc8ae7-ee13-4fd3-9aea-dfb8558cbeb5.jpg',affiliation:'Egypt'},
  {name:'Rue Kemboi',photo:'Reu Kemboi (1).jpeg',affiliation:'Kenya'},
  {name:'Ann Mucheke',photo:'1756231029177.jpg',affiliation:'Kenya'},
  {name:'Muaid F Ben Sassi',title:'Industry Engagement Lead',photo:'6ed403ba-0cb4-495a-83dd-0ab8c081b9b7.jpg',affiliation:'Libya'}
];
excom.forEach(member => {
  member.affiliation = 'AI Caravan ExCom';
});
const tunisiaTeamAdditions:Person[] = [
  {name:'Rania Foughali',title:'Secretary, AI Caravan Tunisia Team',affiliation:'Tunisia',photo:'Rania Foughali.jpg'},
  {name:'Ghada Medimagh',title:'Program Manager, AI Caravan Tunisia Team',affiliation:'Tunisia',photo:'Ghada Medimagh.jpg'},
  {name:'Arije Ben Abdel Hamid',title:'Community Management Manager, AI Caravan Tunisia Team',affiliation:'Tunisia',photo:'Arije Ben Abdel Hamid.jpg'},
  {name:'Salma Ghedamsi',title:'Research & Innovation Manager, AI Caravan Tunisia Team',affiliation:'Tunisia',photo:'Salma Ghedamsi.jpg'},
  {name:'Rima Fathallah',title:'Technical Team Manager, AI Caravan Tunisia Team',affiliation:'Tunisia',photo:'Rima Fathallah.jpg'},
  {name:'Dhia Zrelli',title:'Partnerships & Sponsorships Manager, AI Caravan Tunisia Team',affiliation:'Tunisia',photo:'Dhia Zrelli.JPG'},
  {name:'Firas Frigui',title:'Event Organization (Sahil Region), AI Caravan Tunisia Team',affiliation:'Tunisia',photo:'Firas Frigui.jpeg'},
  {name:'Mohamed Amine Lbabda',title:'Video Editor, AI Caravan Tunisia Team',affiliation:'Tunisia',photo:'Mohamed Amine Lbabda.jpg'},
  {name:'Imen othmen',title:'Community Management Team Member, AI Caravan Tunisia Team',affiliation:'Tunisia',photo:'Imen othmen.jpeg'}
];
const representatives:Person[]=[{name:'Esraa Elhossieny',affiliation:'Egypt', photo:'esraa.jpg'},{name:'Mohamed Zouari',affiliation:'Tunisia', photo:'zouri.jpg'},{name:'John Mumo Nyerere',affiliation:'Kenya', photo:'John.jpg'},{name:'Qusai Mashriqi',affiliation:'Jordan', photo:'quisai.jpg'},{name:'Muaid Bensasi',affiliation:'Libya', photo:'6ed403ba-0cb4-495a-83dd-0ab8c081b9b7.jpg'},{name:'Simenya Jonathan',affiliation:'Rwanda',photo:'1719237057326.jpg'},{name:'Tasnim Ashraf Khafagy',affiliation:'Kuwait', photo:'tasnim.png'},{name:'Aya AlAkhzami',affiliation:'Oman', photo:'aya-alakhzami.jpg'}];
representatives.push({name:'Kalu Onyedikachi Ikpo',affiliation:'Nigeria',photo:'1753710857911.jpg'});
const tasnimAshrafKhafagyIndex = representatives.findIndex(member => member.name === 'Tasnim Ashraf Khafagy');
if (tasnimAshrafKhafagyIndex !== -1) representatives.splice(tasnimAshrafKhafagyIndex, 1);
representatives.forEach(member => {
  member.title = 'AI Caravan representative';
});
const eventPhotos=['733621678_122198744456794889_3539825857277880690_n.jpg','732985155_122198744690794889_2660884121770403882_n.jpg','733040960_122198744504794889_8525536481251118432_n.jpg'];
const partners:{name:string;logo?:string}[] = [
  {name:'IEEE Computer Society',logo:'IEEE-CS_LogoTM-orange.png'},
  {name:'IEEE CS GAC',logo:'mga_gac_color.png'},
  {name:'IEEE CS Region 8',logo:'ieee_r8_cs_rgb_ko.png'},
  {name:'University of Louisville — Digital Transformation Center',logo:'University-of-Louisville-Logo.jpg'},
  {name:'University of Greater Manchester — CIoTh',logo:'Uni-of-GM.png'},
  {name:'Centre for Multidisciplinary Research, Innovation and Collaboration (C-MRiC)',logo:'C-MRiC.png'},
  {name:'Nile University',logo:'nu-removebg-preview (1).png'},
   {name:'Coventry University branch in Egypt',logo:'tkh-cov-e1672836300212.jpg'},
  {name:'North American University Sfax',logo:'3qxvJTl.png'},
  {name:'ENETCom Sfax',logo:'logo.png'},
  {name:'University of Jordan',logo:'University of Jordan.png'},
  {name:'Amman Arab University',logo:'AAU.jpg'},
  {name:'Effat University',logo:'Effat.jpg'},
  {name:'Libyan British University',logo:'LBU.png'},
 {name:'Multimedia University of Kenya, Kenya',logo:'MMU.png'},
  {name:'Dedan Kimathi University of Technology',logo:'dekut.jpg'},
  {name:'National Academy of Information Technology for Persons with Disabilities, Egypt',logo:'NAID.jpg'},
  {name:'IEEE ATIC (Afrotech Intelligence Congress)',logo:'ATIC.jpg'}
];

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location.pathname]);
  return <header className="site-header">
    <div className="nav-wrap">
      <Link className="brand" to="/" aria-label="AI Caravan 2026 home">
        <img src="/imgs/caravanlogo.png" alt="AI Caravan" />
        <span><b>AI Caravan</b><small>IEEE Computer Society · Region 8</small></span>
      </Link>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {nav.map(([label, path]) => <NavLink key={path} to={path} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>)}
        <a className="year-link" href="https://ai-caravan-umber.vercel.app/" target="_blank" rel="noreferrer">2025 site ↗</a>
      </nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    </div>
  </header>
}

function Footer() {
  return <footer><div className="footer-grid">
    <div><img src="/imgs/IEEE-CS_LogoTM-orange.png" alt="IEEE Computer Society" /><p>Advancing inclusive, practical AI knowledge across IEEE Region 8.</p></div>
    <div><b>Explore</b>{nav.slice(1).map(([l,p]) => <Link key={p} to={p}>{l}</Link>)}</div>
    <div><b>Connect</b><a href="mailto:islamhalim@ieee.org">islamhalim@ieee.org</a><a href="https://www.linkedin.com/company/ieee-computer-society-r8-ai-caravan/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.facebook.com/profile.php?id=61573846683564" target="_blank" rel="noreferrer">Facebook ↗</a></div>
  </div><div className="footer-bottom"><span>© 2026 IEEE Computer Society AI Caravan</span><a href="https://ai-caravan-umber.vercel.app/" target="_blank" rel="noreferrer">Visit the 2025 edition</a></div></footer>
}

function PageHero({eyebrow, title, copy}:{eyebrow:string,title:string,copy:string}) {
  return <section className="page-hero"><div className="orb orb-one"/><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div></section>
}

function ImageStory({src,alt,label}:{src:string,alt:string,label?:string}) { return <figure className="image-story"><img src={`/imgs/${src}`} alt={alt}/>{label&&<figcaption>{label}</figcaption>}</figure> }

function Home() {
  return <>
    <section className="summit-hero">
      <div className="summit-hero-photo" aria-hidden="true"/>
      <div className="container summit-hero-content">
        <span className="summit-kicker"><span/> IEEE Computer Society Region 8</span>
        <h1>2nd AI Caravan<br/><em>Summit</em></h1>
        <p>Three days of AI leadership, technical exchange, applied innovation, and regional collaboration in Cairo, Egypt.</p>
        <div className="summit-hero-meta"><span><CalendarDays/>16–18 December 2026</span><span><MapPin/>Cairo, Egypt</span></div>
        <div className="actions"><Link className="btn primary" to="/registration">Register now <ArrowRight/></Link><a className="btn summit-outline" href="#summit-program">Explore the summit</a></div>
      </div>
      <div className="summit-number" aria-hidden="true">02</div>
    </section>

    <section className="summit-alert"><div className="container"><strong>Registration now open</strong><span>10–30 November 2026</span><i/><span>Two-night accommodation packages available</span><Link to="/registration">View fees <ArrowRight/></Link></div></section>

    <section className="section container summit-introduction"><div><span className="eyebrow">The regional finale</span><h2>Where the Caravan’s ideas, people, and impact meet.</h2></div><div className="prose"><p>The 2nd IEEE Computer Society AI Caravan Summit brings together students, professionals, researchers, educators, industry leaders, and IEEE volunteers for a three-day regional experience.</p><p>Across 16–18 December, participants will connect around practical AI, responsible innovation, community outcomes, and new collaborations—building on the 2026 Caravan journey across Region 8.</p></div></section>

    <section className="summit-support"><div className="container"><div className="summit-support-heading"><span className="eyebrow light">With the support of</span><p>Four leading Egyptian universities supporting the regional summit experience.</p></div><div className="summit-support-grid">{([
      {name:'German International University (GIU)',logo:'summit-giu-logo.png'},
      {name:'The Knowledge Hub Universities (TKH)',logo:'summit-tkh-logo.png'},
      {name:'Egypt University of Informatics (EUI)',logo:'summit-eui-logo.jpg'},
      {name:'Nile University (NU)',logo:'summit-nu-logo.png'}
    ]).map((partner,index)=><article key={partner.name}><span>{String(index+1).padStart(2,'0')}</span><div className="summit-support-logo"><img src={`/imgs/${partner.logo}`} alt={`${partner.name} logo`}/></div><h3>{partner.name}</h3></article>)}</div></div></section>

    <LeadershipMessages/>

    <section className="section container summit-legacy"><div className="summit-legacy-heading"><div><span className="eyebrow">2025 summit highlights</span><h2>The moments that built the momentum.</h2></div><p>Leadership conversations, expert panels, student engagement, and a growing regional community—returning to Cairo at a larger scale in 2026.</p></div><div className="summit-legacy-grid"><figure className="wide"><img src="/imgs/042A2547.jpg" alt="International speakers participating in a 2025 AI Caravan Summit panel"/><figcaption>International perspectives</figcaption></figure><figure><img src="/imgs/IMG_7125.JPG" alt="Leaders speaking during a 2025 AI Caravan Summit panel"/><figcaption>Leadership dialogue</figcaption></figure><figure><img src="/imgs/042A2345.jpg" alt="Audience attending the 2025 AI Caravan Summit"/><figcaption>Regional community</figcaption></figure><figure className="wide"><img src="/imgs/042A3835.jpg" alt="Student activity at the 2025 AI Caravan Summit"/><figcaption>Student engagement</figcaption></figure><figure><img src="/imgs/042A2877.jpg" alt="Keynote speakers and guests at the 2025 AI Caravan Summit"/><figcaption>Keynote speakers</figcaption></figure><figure><img src="/imgs/su10.JPG" alt="Industry expert presenting an applied AI session"/><figcaption>Industry engagement</figcaption></figure><figure className="wide"><img src="/imgs/IMG_20251212_131406.jpg" alt="AI Caravan participants visiting the Giza pyramids and Sphinx"/><figcaption>Cultural exchange</figcaption></figure><figure><img src="/imgs/042A3105.jpg" alt="A student sharing a project with an international mentor"/><figcaption>Mentorship and networking</figcaption></figure><figure><img src="/imgs/IMG_6970.JPG" alt="Participant presenting a practical AI project to summit judges"/><figcaption>Practical project showcase</figcaption></figure></div></section>

    <section className="section container summit-speakers"><div className="section-heading"><span className="eyebrow">Featured speakers</span><h2>IEEE leaders and international AI experts.</h2><p>The current confirmed speaker list from the summit proposal. Additional speakers and session assignments will be announced as the program is finalized.</p></div><div className="summit-speaker-grid">{([
      {name:'Andrew Seely',title:'IEEE Computer Society Vice President, Member and Geographic Activities',photo:'andy.avif'},
      {name:'Cecilia Metra',title:'IEEE Vice President-Elect for Technical Activities',photo:'cecilia-metra.jpg'},
      {name:'Erika Ross Ellison',title:'Head of Clinical, Neuralink · President, IEEE EMBS',photo:'erika-ross-ellison.jpg'},
      {name:'Elvira Fortunato',title:'Former Minister of Science, Technology and Higher Education, Portugal',photo:'elvira-fortunato.jpg'},
      {name:'Mohamed Rawidean',title:'MGAB Vice Chair (Geographic Activities), IEEE Computer Society',photo:'mohamed-kasim.jpg'},
      {name:'Adel S. Elmaghraby',title:'Director of Research and Innovation, University of Louisville',photo:'adel.jpg'},
      {name:'George J. Proeller',title:'Chair, Distinguished Contributor Program, IEEE Computer Society',photo:'George J. Proeller .jpg'},
      {name:'Islam Tharwat Abdel Halim',title:'Regional Coordinator and Founder, AI Caravan',photo:'islam-tharwat.jpg'}
    ] as {name:string;title:string;photo?:string}[]).map(speaker=><article key={speaker.name}><div className="summit-speaker-photo"><Photo src={speaker.photo} alt={speaker.name}/></div><div><h3>{speaker.name}</h3><p>{speaker.title}</p></div></article>)}</div></section>

    <section className="section summit-agenda" id="summit-program"><div className="container"><div className="section-heading"><span className="eyebrow light">Tentative agenda</span><h2>Three days of ideas, exchange, and impact.</h2><p>Activities and timings remain subject to final confirmation.</p></div><div className="summit-agenda-days">
      <article><div className="agenda-day-heading"><span>Day 1</span><time>16 December</time><h3>Opening, keynotes, and industry dialogue</h3></div><ul><li><time>11:00 AM–1:00 PM</time><span>Check-in and registration</span></li><li><time>1:00–2:00 PM</time><span>Opening and welcoming remarks</span></li><li><time>2:00–2:30 PM</time><span>MoUs signing and partners recognition</span></li><li><time>2:30–3:30 PM</time><span>Keynote speeches</span></li><li><time>3:30–4:00 PM</time><span>Break</span></li><li><time>4:00–5:00 PM</time><span>Panel: The impact of artificial intelligence on students’ academic development</span></li><li><time>5:00–6:00 PM</time><span>Panel: Artificial intelligence—economic impact, opportunities, challenges, and implications for policy</span></li><li><time>6:00–7:00 PM</time><span>Panel: The role of AI in different industries</span></li><li><time>7:00–8:00 PM</time><span>Networking</span></li></ul></article>
      <article><div className="agenda-day-heading"><span>Day 2</span><time>17 December</time><h3>Sector panels, hackathons, and workshops</h3></div><ul><li><time>9:00–10:00 AM</time><span>Welcoming speech</span></li><li><time>10:00–11:00 AM</time><span>Panel: Reshaping the future of sports with AI—performance, fan engagement, and strategic decision-making</span></li><li><time>11:00 AM–12:00 PM</time><span>Panel: AI aspirations and applications in real estate development and the housing sector</span></li><li><time>12:00–1:00 PM</time><span>Keynote speeches</span></li><li><time>1:00–2:00 PM</time><span>Break</span></li><li><time>2:00–3:00 PM</time><span>Regional Hackathons Highlights: Egypt and the Middle East</span></li><li><time>3:00–6:00 PM</time><span>Parallel workshops: education, healthcare, finance, cybersecurity, and sports</span></li><li><time>6:00–7:00 PM</time><span>Networking</span></li></ul></article>
      <article><div className="agenda-day-heading"><span>Day 3</span><time>18 December</time><h3>Success stories, recognition, and Cairo</h3></div><ul><li><time>9:00–10:00 AM</time><span>Keynote speeches</span></li><li><time>10:00–11:00 AM</time><span>Panel: Women in AI</span></li><li><time>11:00 AM–12:00 PM</time><span>IEEE Computer Society Region 8 success stories and obstacles</span></li><li><time>12:00–1:00 PM</time><span>Volunteer recognition and closing</span></li><li><time>1:00–5:00 PM</time><span>Sight visit</span></li><li><time>5:00–7:00 PM</time><span>Gala dinner</span></li></ul></article>
    </div><p className="summit-disclaimer">Tentative program. Final locations, sessions, speakers, and times will be confirmed before the summit.</p></div></section>

    <section className="section container summit-experience"><div className="summit-experience-photo"><img src="/imgs/042A2343.jpg" alt="AI Caravan participants celebrating together in Cairo"/></div><div><span className="eyebrow">Attend in Cairo</span><h2>One summit. Three ways to participate.</h2><p>Choose the package that matches the summit experience and services you need.</p><div className="summit-package-summary"><div><strong>Accommodation Registration Package</strong><span>2 nights / 3 days at Engineering Authority House Hotel + ID + meals + transportation + giveaways + sightseeing + gala dinner + all summit activities</span></div><div><strong>Full Registration Package</strong><span>ID + meals + transportation + giveaways + sightseeing + gala dinner + all summit activities</span></div><div><strong>Access Registration Package</strong><span>ID + all summit activities</span></div></div><Link className="btn primary" to="/registration">Compare registration fees <ArrowRight/></Link></div></section>

    <section className="summit-final-cta"><div className="container"><div><span>Registration is open</span><h2>Be part of the regional AI conversation.</h2></div><Link className="btn primary" to="/registration">Register now <ArrowRight/></Link></div></section>
  </>
}

function Pillar({n,icon,title,copy}:{n:string,icon:React.ReactNode,title:string,copy:string}) { return <article className="pillar"><span>{n}</span><div className="icon-box">{icon}</div><h3>{title}</h3><p>{copy}</p><ChevronRight/></article> }

function About() {
  const audiences = [
    {number:'01',title:'Professionals',tagline:'Upskill · Apply · Lead',copy:'Practical learning helps professionals understand emerging AI technologies, apply them responsibly, and turn knowledge into solutions for their industries and communities.',points:['Advanced AI training','Industry-focused applications','Responsible AI leadership'],icon:Briefcase,photos:['042A0408.jpg','IMG_5559.png','569443138_122133392216959552_7396368427657888153_n - Copy.jpg']},
    {number:'02',title:'University Students & Young Professionals',tagline:'Learn · Build · Launch',copy:'Students and early-career professionals gain accessible technical foundations, hands-on experience, mentorship, and connections that accelerate their academic and career journeys.',points:['Career-ready AI skills','Hands-on project experience','Mentorship and peer networks'],icon:GraduationCap,photos:['NP101300.JPG','1762092819429.jpg','623366781_122183599814794889_2152851732608969430_n.jpg']},
    {number:'03',title:'School Students',tagline:'Explore · Imagine · Create',copy:'Age-appropriate experiences introduce school students to AI through curiosity, creativity, and responsible use—helping the next generation see themselves as technology creators.',points:['Friendly AI foundations','Creative guided activities','Responsible technology awareness'],icon:BookOpen,photos:['535090103_122163416654794889_1806144149587838493_n.jpg','622822301_122183508824794889_6556034636183667711_n.jpg','623812727_122183754398794889_5179416784368487808_n.jpg']},
    {number:'04',title:'Experts and Leaders',tagline:'Connect · Exchange · Advance',copy:'The AI Summit brings together experts, educators, industry leaders, students, and policymakers to exchange knowledge, showcase applied innovation, and create regional collaborations.',points:['Expert talks and panels','Cross-sector knowledge exchange','Regional collaboration'],icon:Sparkles,photos:['IMG_1482.JPG','IMG_1435 (1).JPG','042A2547.jpg','IMG_7125.JPG','042A2411.jpg']}
  ];
  return <><PageHero eyebrow="About the Caravan" title="AI knowledge for every stage of the journey." copy="A flagship IEEE Computer Society Region 8 initiative serving professionals, university communities, school students, and AI leaders across borders."/>
    <section className="section container about-purpose"><div><span className="eyebrow">Our purpose</span><h2>The right to knowledge and practical application in AI.</h2></div><div className="prose"><p>The IEEE Computer Society AI Caravan expands access to artificial intelligence knowledge while supporting human development and the 2030 Agenda principle of leaving no one behind.</p><p>Through hands-on training, expert talks, community events, and cross-border collaboration, the Caravan connects academic and professional communities and promotes practical, ethical AI solutions for locally relevant challenges.</p></div></section>
    <section className="section soft audience-section"><div className="container"><div className="section-heading"><span className="eyebrow">Who we serve</span><h2>One Caravan. Four connected communities.</h2><p>Our programs meet people at different stages of their learning and professional journeys, creating an inclusive pathway into AI.</p></div><div className="audience-list">{audiences.map(({number,title,tagline,copy,points,icon:Icon,photos},index)=><article className={`audience-card ${index%2?'reverse':''}`} key={title}><div className="audience-gallery"><img className="audience-main-photo" src={`/imgs/${photos[0]}`} alt={`${title} participating in the AI Caravan`}/><div className="audience-thumbs">{photos.slice(1).map((photo,i)=><img key={photo} src={`/imgs/${photo}`} alt={`${title} AI Caravan activity ${i+2}`} loading="lazy"/>)}</div></div><div className="audience-copy"><div className="audience-card-top"><span className="audience-icon"><Icon/></span><b>{number}</b></div><span className="eyebrow">{tagline}</span><h3>{title}</h3><p>{copy}</p><ul>{points.map(point=><li key={point}><CheckCircle2/>{point}</li>)}</ul></div></article>)}</div></div></section>
  </>
}

function Photo({src,alt}:{src?:string,alt:string}) { const [failed,setFailed]=useState(!src); return failed ? <div className="photo-fallback" aria-label={alt}>{alt.split(' ').map(x=>x[0]).slice(0,2).join('')}</div> : <img src={`/imgs/${src}`} alt={alt} onError={()=>setFailed(true)}/> }

function TrackCard({track}:{track:(typeof tracks)[number]}) {
  const [expanded,setExpanded] = useState(false);
  const {name,audience,hours,copy,prerequisites,topics,committee,icon:Icon,color} = track;
  const panelId = `committee-${name.toLowerCase().replace(/\s+/g,'-')}`;
  const toggle = () => setExpanded(value => !value);
  return <article className={`track ${color} ${expanded?'expanded':''}`} onClick={toggle}>
    <div className="track-top"><span>{audience}</span><Icon/></div><h2>{name}</h2>
    <div className="track-duration"><Clock3/>{hours}<i/>Online training</div><p>{copy}</p>
    <h4>What you will cover</h4><ul>{topics.map(topic=><li key={topic}>{topic}</li>)}</ul>
    <h4>Prerequisites</h4><p className="prereq">{prerequisites}</p>
    <div className="track-foot"><Award/> Certificate after successfully completing the final exam</div>
    <Link className="track-page-link" to={`/activities/${track.slug}`} onClick={event=>event.stopPropagation()}>Explore the full curriculum <ArrowRight/></Link>
    <button className="track-toggle" type="button" aria-expanded={expanded} aria-controls={panelId} onClick={event=>{event.stopPropagation();toggle();}}><span>{expanded?'Hide curriculum committee':'View curriculum committee'}</span><ChevronRight/></button>
    {expanded&&<div className="track-committee" id={panelId} onClick={event=>event.stopPropagation()}><ul>{committee.map(member=><li key={member.name}><a href={getTeamProfileLink(member.name)} target="_blank" rel="noopener noreferrer">{member.name}<ExternalLink aria-hidden="true"/></a><span>{member.role}</span></li>)}</ul></div>}
  </article>
}

function TrackDetails() {
  const {trackSlug} = useParams();
  const curriculum = getTrackCurriculum(trackSlug);
  const track = tracks.find(item => item.slug === trackSlug);
  useEffect(() => { window.scrollTo(0, 0); }, [trackSlug]);
  if (!curriculum || !track) return <NotFound/>;
  const Icon = track.icon;
  return <>
    <section className={`track-detail-hero ${track.color}`}>
      <div className="container">
        <Link className="track-back" to="/activities"><ChevronRight/> All learning pathways</Link>
        <div className="track-detail-hero-grid">
          <div><span className="eyebrow">{track.audience} pathway</span><h1>{track.name}</h1><p>{track.copy}</p></div>
          <div className="track-detail-mark"><Icon/><strong>{track.hours}</strong><span>Live online learning</span></div>
        </div>
      </div>
    </section>

    <section className="track-detail-summary container">
      <article><Clock3/><div><span>Duration & format</span><strong>{curriculum.delivery}</strong></div></article>
      <article><Target/><div><span>Audience</span><strong>{track.audience}</strong></div></article>
      <article><Award/><div><span>Recognition</span><strong>Certificate after successful completion</strong></div></article>
    </section>

    <section className="section container track-detail-intro">
      <div><span className="eyebrow">Overall goal</span><h2>From knowledge to practical capability.</h2></div>
      <div className="prose"><p>{curriculum.goal}</p><p>{curriculum.learningApproach}</p></div>
    </section>

    <section className="section soft">
      <div className="container curriculum-section">
        <div className="section-heading"><span className="eyebrow">Learning outcomes</span><h2>What participants will be able to do</h2></div>
        <div className="outcome-grid">{curriculum.outcomes.map((outcome,index)=><article key={outcome}><span>{String(index+1).padStart(2,'0')}</span><p>{outcome}</p></article>)}</div>
      </div>
    </section>

    <section className="section container curriculum-columns">
      <article><span className="curriculum-icon"><BookOpen/></span><h2>Knowledge covered</h2><ul>{curriculum.theory.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul></article>
      <article><span className="curriculum-icon"><Rocket/></span><h2>Practical application</h2><ul>{curriculum.practical.map(item=><li key={item}><CheckCircle2/>{item}</li>)}</ul></article>
    </section>

    <section className="section track-plan-wrap">
      <div className="container track-plan-layout">
        <div><span className="eyebrow">Curriculum plan</span><h2>The learning journey</h2><p>The program progresses from foundations to applied practice, project work, and final assessment.</p></div>
        <ol className="track-plan">{curriculum.sessions.map((session,index)=><li key={`${session.title}-${index}`}><span>{String(index+1).padStart(2,'0')}</span><div><h3>{session.title}</h3>{session.detail&&<p>{session.detail}</p>}</div></li>)}</ol>
      </div>
    </section>

    <section className="section container track-requirements">
      <article><span className="eyebrow">Before you start</span><h2>Prerequisites</h2><ul>{curriculum.prerequisites.map(item=><li key={item}>{item}</li>)}</ul></article>
      {curriculum.tools&&<article><span className="eyebrow">Learning environment</span><h2>Tools and platforms</h2><div className="tool-tags">{curriculum.tools.map(item=><span key={item}>{item}</span>)}</div></article>}
    </section>

    <section className="section soft">
      <div className="container assessment-layout">
        <div><span className="eyebrow">Assessment & certification</span><h2>Demonstrate both knowledge and practice.</h2><div className="assessment-list">{curriculum.assessment.map(item=><p key={item}><CheckCircle2/>{item}</p>)}</div></div>
        <aside><Award/><h3>Completion requirements</h3><ul>{curriculum.completion.map(item=><li key={item}>{item}</li>)}</ul></aside>
      </div>
    </section>

    <section className="section container track-detail-committee">
      <div className="section-heading"><span className="eyebrow">Curriculum Development Committee</span><h2>The experts shaping this pathway</h2></div>
      <div className="committee-grid">{track.committee.map(member=><a href={getTeamProfileLink(member.name)} target="_blank" rel="noopener noreferrer" key={member.name}><div><strong>{member.name}</strong><span>{member.role}</span></div><ExternalLink/></a>)}</div>
      <div className="track-detail-actions"><Link className="btn secondary" to="/activities">Compare all tracks</Link><Link className="btn primary" to={`/track-registration?track=${track.slug}`}>Register for this track <ArrowRight/></Link><Link className="text-link" to="/contact">Ask about this track</Link></div>
    </section>
  </>;
}

function TrackScheduleSection() {
  const scheduleTracks = [
    {name:'AI Strategist',hours:'24 hours'},
    {name:'AI Expert',hours:'24 hours'},
    {name:'AI Junior',hours:'24 hours'},
    {name:'AI Administrator',hours:'28 hours'},
    {name:'AI Viber',hours:'32 hours'},
    {name:'AI Engineer',hours:'32 hours'},
  ];
  return <div id="track-schedule" className="activities-schedule">
    <section className="schedule-notice"><div className="container"><Clock3/><div><strong>Arabic cohort schedule · 18 November–13 December 2026</strong><span>All sessions: 6:00–10:00 PM Cairo time · Live online training · Four hours per session</span></div></div></section>
    <section className="section container schedule-page">
      <div className="section-heading"><span className="eyebrow">Track-by-track schedule</span><h2>Find every session for your selected pathway.</h2><p>Each pathway completes its published 24–32 training hours before the final assessment and certificate requirements.</p></div>
      <div className="schedule-track-grid">{scheduleTracks.map(track=>{
        const sessions=cohortSchedule.filter(row=>row.sessions[track.name]);
        return <article key={track.name}><div className="schedule-track-heading"><div><h3>{track.name}</h3><span>{track.hours}</span></div><strong>{sessions.length}<small>sessions</small></strong></div><ol>{sessions.map(session=><li key={`${track.name}-${session.date}`}><span>{session.day.slice(0,3)}</span><div><b>{session.date}</b><small>{session.sessions[track.name]} Cairo time</small></div></li>)}</ol></article>;
      })}</div>
    </section>
    <section className="section soft"><div className="container"><div className="section-heading"><span className="eyebrow">Complete cohort calendar</span><h2>One calendar. Six pathways.</h2><p>Scroll horizontally on smaller screens to compare all tracks.</p></div><div className="schedule-table-wrap"><table className="schedule-table"><thead><tr><th>Day</th><th>Date</th>{scheduleTracks.map(track=><th key={track.name}><span>{track.name}</span><small>{track.hours}</small></th>)}</tr></thead><tbody>{cohortSchedule.map(row=><tr key={row.date}><th>{row.day}</th><td>{row.date}</td>{scheduleTracks.map(track=><td className={row.sessions[track.name]?'active':''} key={track.name}>{row.sessions[track.name]||'—'}</td>)}</tr>)}</tbody></table></div><p className="schedule-footnote"><Clock3/> Times are published in Cairo time (UTC+2 in November and December 2026). Participants will receive online access details through their registered email addresses.</p></div></section>
    <section className="schedule-cta"><div className="container"><div><span>Registration closes 15 November</span><h2>Choose one pathway and join the Arabic cohort.</h2></div><Link className="btn primary" to="/track-registration">Register for a track <ArrowRight/></Link></div></section>
  </div>;
}

function ActivitiesPage(){return <><Activities/><TrackScheduleSection/></>}

const trackRegistrationDeadline = new Date('2026-11-15T21:59:59Z'); // 15 November, 11:59 PM Cairo
function TrackRegistration() {
  const location=useLocation();
  const requestedTrack=new URLSearchParams(location.search).get('track')||'';
  const initialTrack=tracks.some(track=>track.slug===requestedTrack)?requestedTrack:'';
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
  const [message,setMessage]=useState('');
  const isClosed=Date.now()>trackRegistrationDeadline.getTime();
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(isClosed){setStatus('error');setMessage('Track registration closed on 15 November 2026 at 11:59 PM Cairo time.');return;}
    const formElement=e.currentTarget; const form=new FormData(formElement); setStatus('sending'); setMessage('');
    const email=String(form.get('email')||'').trim().toLowerCase(); const trackSlug=String(form.get('track')||''); const track=tracks.find(item=>item.slug===trackSlug);
    try{
      const ref=doc(db,'registrations-2026',encodeURIComponent(`${email}__arabic-cohort-nov-2026`));
      await setDoc(ref,{name:String(form.get('name')||'').trim(),title:String(form.get('title')||'').trim(),dateOfBirth:String(form.get('dateOfBirth')||''),gender:String(form.get('gender')||''),email,phone:String(form.get('phone')||'').trim(),country:String(form.get('country')||''),affiliation:String(form.get('affiliation')||'').trim(),ieeeId:String(form.get('ieeeId')||'').trim(),track:track?.name||trackSlug,trackSlug,language:'Arabic',schedulingRegion:'Middle East',timezoneReference:'Africa/Cairo',cohort:'Arabic Middle East Cohort — November 2026',consent:form.get('consent')==='on',submittedAt:serverTimestamp(),programYear:2026});
      formElement.reset(); setStatus('success'); setMessage('Your track registration has been received. The Caravan team will contact you with the Arabic cohort schedule and next steps.');
    }catch(error){console.error('Track registration failed',error);setStatus('error');setMessage('The registration could not be completed. Please try again or contact the Caravan team for assistance.');}
  }
  return <><section className="track-registration-hero"><div className="container"><span className="eyebrow light">Six online learning pathways</span><h1>Register for the Arabic cohort.</h1><p>Choose one track and join practical AI training scheduled for participants across the Middle East.</p></div></section><section className="cohort-announcement"><div className="container"><Globe2/><div><strong>This cohort will be delivered in Arabic.</strong><span>Live sessions will be scheduled at Middle East–friendly times, using Cairo time as the published reference.</span></div></div></section><section className="section container track-registration-layout"><div className="track-registration-copy"><span className="status"><span className="pulse"/>Registration is open</span><h2>One participant.<br/>One focused track.</h2><p>Select the pathway that best matches your experience and goals. Each track includes 24–32 hours of online training, a final examination, and a certificate for participants who successfully complete the requirements.</p><div className="check-list">{['Arabic-language instruction','Middle East–friendly session times','Exactly one track per registration','Final examination and completion certificate'].map(item=><span key={item}><CheckCircle2/>{item}</span>)}</div><Link className="text-link" to="/activities">Compare all six tracks <ArrowRight/></Link></div><form className="registration-form" onSubmit={submit}><div className="form-heading"><span>Arabic cohort application</span><h2>Register for a track</h2><p>Fields marked * are required.</p></div><label>Full name *<input name="name" required autoComplete="name"/></label><div className="form-row"><label>Professional or academic title *<input name="title" required placeholder="e.g. Student, Engineer, Professor" autoComplete="organization-title"/></label><label>Date of birth *<input name="dateOfBirth" type="date" required max="2026-11-10" autoComplete="bday"/></label></div><label>Gender *<select name="gender" required defaultValue=""><option value="" disabled>Select gender</option><option value="Male">Male</option><option value="Female">Female</option><option value="Prefer not to say">Prefer not to say</option></select></label><div className="form-row"><label>Email address *<input name="email" type="email" required autoComplete="email"/></label><label>Phone number *<input name="phone" type="tel" required autoComplete="tel"/></label></div><div className="form-row"><label>Country *<select name="country" required defaultValue="" autoComplete="country-name"><option value="" disabled>Select country</option>{countries.map(country=><option key={country} value={country}>{country}</option>)}</select></label><label>Affiliation *<input name="affiliation" required autoComplete="organization"/></label></div><label>IEEE membership number <span>(optional)</span><input name="ieeeId" inputMode="numeric"/></label><label>Choose one training track *<select name="track" required defaultValue={initialTrack}><option value="" disabled>Select your pathway</option>{tracks.map(track=><option key={track.slug} value={track.slug}>{track.name} — {track.audience} — {track.hours}</option>)}</select></label><div className="cohort-form-note"><strong>Language: Arabic</strong><span>Session schedule: Middle East–friendly hours · Cairo time reference</span></div><label className="consent"><input type="checkbox" name="consent" required/><span>I confirm that the information is accurate and agree to receive cohort and program communications. *</span></label>{message&&<div className={`form-message ${status}`}>{message}</div>}<button className="btn primary full" disabled={status==='sending'}>{status==='sending'?'Submitting…':'Submit track registration'} <Send/></button></form></section></>
}

function Activities() { return <><PageHero eyebrow="2026 Program" title="Six pathways. One regional movement." copy="Choose the learning experience that matches how you work, lead, build, or learn."/><section className="cohort-inline-banner"><div className="container"><div><span className="eyebrow">Registration open</span><h2>Join the Arabic-language cohort.</h2><p>All six tracks are open, with live sessions scheduled at Middle East–friendly times.</p></div><Link className="btn primary" to="/track-registration">Register for one track <ArrowRight/></Link></div></section><section className="section container"><div className="section-heading track-intro"><span className="eyebrow">Explore each pathway</span><p>Open a track’s full curriculum for its learning outcomes, practical work, prerequisites, assessment, and committee—or expand the card for a quick look at its curriculum committee.</p></div><div className="track-grid detailed">{tracks.map(track=><TrackCard track={track} key={track.name}/>)}</div></section><section className="section soft"><div className="container"><div className="section-heading"><span className="eyebrow">On-ground events</span><h2>AI Caravan in the community</h2><p>Local events connect the regional curriculum with practical challenges, young innovators, and local AI ecosystems.</p></div><article className="event-feature"><div className="event-copy"><div className="event-meta"><span><MapPin/>Hammamet, Tunisia</span><span><CalendarDays/>20 June 2026</span></div><h2>Software Engineering International Summit (SEIS)</h2><p>As an official SEIS Tunisia partner, the IEEE Computer Society Region 8 AI Caravan introduced juniors, teenagers, and university students to AI opportunities, responsible use, and real-world applications.</p><p>A highlight was seeing participants collaborate on AI-powered solutions addressing challenges faced by people with ADHD—showing how technology can create meaningful social impact.</p></div><div className="event-gallery">{eventPhotos.map((photo,i)=><div key={photo}><Photo src={photo} alt={`SEIS Tunisia event photo ${i+1}`}/></div>)}</div></article><div className="country-grid compact">{['Egypt','Tunisia','Kenya','Nigeria','Jordan','Libya','Rwanda','Uganda'].map((c,i)=><article key={c}><span>{String(i+1).padStart(2,'0')}</span><MapPin/><h3>{c}</h3><p>Talks · Workshops · Panels · Networking</p></article>)}</div><p className="expansion-note"><Globe2/> Potential expansion to Saudi Arabia, Algeria, and France.</p></div></section></> }

function PublicationFeature() { return <section className="publication-section"><div className="container publication-card"><a className="publication-cover" href="/docs/IEEE-CS-AI-Caravan-Published-Paper.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open the AI Caravan published paper PDF"><img src="/imgs/ai-caravan-paper-cover.png" alt="First page of the published IEEE Computer Society AI Caravan paper"/></a><div className="publication-copy"><span className="eyebrow">Published Paper · IEEE Potentials</span><h2>IEEE Computer Society AI Caravan: Bridging the knowledge gap from Region 8 to the global stage</h2><p className="publication-author">By Islam Tharwat Abdel Halim</p><p>The article presents the Caravan’s community-focused model for making practical AI knowledge accessible across IEEE Region 8 and extending its impact to the global stage.</p><div className="publication-meta"><span>May/June 2026</span><span>DOI: 10.1109/MPOT.2026.3708243</span><span>IEEE Article ID: 11663559</span></div><div className="publication-actions"><a className="btn primary" href="https://ieeexplore.ieee.org/document/11663559" target="_blank" rel="noopener noreferrer">Read on IEEE Xplore <ExternalLink/></a><a className="btn secondary" href="/docs/IEEE-CS-AI-Caravan-Published-Paper.pdf" target="_blank" rel="noopener noreferrer">Open PDF <BookOpen/></a></div></div></div></section> }

function LeadershipMessages() {
  const messages = [
    {name:'Grace A. Lewis',title:'IEEE Computer Society 2026 President',profile:'https://www.computer.org/profiles/grace-lewis',video:'https://drive.google.com/file/d/1BO7cxoZMwWG43ixxRWI_G-G4Drrmom_G/preview',open:'https://drive.google.com/file/d/1BO7cxoZMwWG43ixxRWI_G-G4Drrmom_G/view?usp=sharing'},
    {name:'Andrew Seely',title:'IEEE Computer Society Vice President, Member and Geographic Activities',profile:'https://www.computer.org/profiles/andrew-seely',video:'https://drive.google.com/file/d/1qMe8U-1LdHVz8E-M5sAdsdPtcz5WLp9Q/preview',open:'https://drive.google.com/file/d/1qMe8U-1LdHVz8E-M5sAdsdPtcz5WLp9Q/view'}
  ];
  return <section className="section leadership-messages"><div className="container"><div className="section-heading"><span className="eyebrow light">Leadership messages</span><h2>Welcome to the AI Caravan 2026</h2><p>Hear from IEEE Computer Society leaders about the Caravan’s regional mission and the community building it together.</p></div><div className="leadership-video-grid">{messages.map(message=><article key={message.name}><div className="leadership-video"><iframe src={message.video} title={`${message.name} — AI Caravan 2026 message`} allow="autoplay; fullscreen" allowFullScreen/><span><Play/> Leadership message</span></div><div className="leadership-speaker"><div><a href={message.profile} target="_blank" rel="noopener noreferrer">{message.name}<ExternalLink/></a><p>{message.title}</p></div><a className="watch-link" href={message.open} target="_blank" rel="noopener noreferrer">Open video <ExternalLink/></a></div></article>)}</div></div></section>;
}

function Highlights() { return <><PageHero eyebrow="Program Highlights" title="A practical model built to scale." copy="Online depth, local relevance, and regional visibility come together in one connected initiative."/><section className="highlight-collage container"><ImageStory src="suausc.jpg" alt="An AI project presentation on a large stage"/><ImageStory src="042A0462.jpg" alt="Junior participants sharing an AI learning experience"/><ImageStory src="had.jfif" alt="AI learning session at AUC"/><div className="collage-caption"><span>Ideas become experiences</span><strong>Learn · Build · Share</strong></div></section><LeadershipMessages/><PublicationFeature/><section className="section container"><div className="highlight-list">{[['First of its kind','A multi-country IEEE CS regional AI capacity-building initiative.'],['Role-based learning','Six pathways for beginners, developers, professionals, managers, and executives.'],['Practical by design','Hands-on exercises, demonstrations, case studies, and applied projects.'],['Regional community','Sustainable links among academia, industry, government, and IEEE volunteers.'],['Flagship finale','The second IEEE CS Region 8 AI Summit showcases outcomes and recognizes excellence.']].map(([a,b],i)=><article key={a}><span>{String(i+1).padStart(2,'0')}</span><div><h2>{a}</h2><p>{b}</p></div><ArrowRight/></article>)}</div></section><section className="orange-band"><div className="container"><Target/><h2>5,000+ people empowered to apply AI in their organizations and communities.</h2><Link className="btn dark" to="/registration">Register your interest <ArrowRight/></Link></div></section></> }

function Partners() { return <><PageHero eyebrow="Partners" title="Built through regional collaboration." copy="The Caravan brings together IEEE organizational units, universities, research centers, industry, government, and community partners."/><section className="section container"><div className="partner-lead"><a className="logo-panel external-photo-link" href="https://www.computer.org/" target="_blank" rel="noopener noreferrer" aria-label="Visit the IEEE Computer Society official website"><img src="/imgs/80th Anniversary Full Logo.png" alt="IEEE Computer Society"/><ExternalLink aria-hidden="true"/></a><div><span className="eyebrow">Convened by</span><h2>IEEE Computer Society</h2><p>With IEEE CS GAC, Region 8, and a growing network of institutional partners.</p></div></div><div className="partner-grid logo-grid">{partners.map((partner,i)=><article key={partner.name}><span>{String(i+1).padStart(2,'0')}</span><a className="partner-logo external-photo-link" href={partnerLinks[partner.name]} target="_blank" rel="noopener noreferrer" aria-label={`Visit the official website of ${partner.name}`}><Photo src={partner.logo} alt={`${partner.name} logo`}/><ExternalLink aria-hidden="true"/></a><p>{partner.name}</p></article>)}</div><p className="logo-note"><ExternalLink/> Select any partner logo to visit its official website.</p><div className="partner-cta"><div><h2>Help expand access to practical AI.</h2><p>Academic, industry, government, media, and community organizations are invited to collaborate.</p></div><Link className="btn primary" to="/contact">Become a partner <ArrowRight/></Link></div></section></> }

function Timeline() { const steps=[['15 August 2026','Online registration opens','Online registration begins across the six learning pathways.'],['September — November','Training + regional stops','Live learning, hands-on practice, and country events across Region 8.'],['November — December','Projects + recognition','Participants consolidate learning and share applied outcomes.'],['16–18 December 2026','2nd Region 8 AI Summit','The regional journey culminates in Egypt with leaders, showcases, and recognition.']]; return <><PageHero eyebrow="Timeline" title="Four months. One shared destination." copy="The 2026 Caravan moves from learning to local engagement and ends with a flagship regional summit."/><section className="section container timeline-layout"><div className="timeline">{steps.map(([date,title,copy],i)=><article key={title}><div className="time-marker"><span>{i+1}</span></div><div><time>{date}</time><h2>{title}</h2><p>{copy}</p></div></article>)}</div><aside className="timeline-photos"><ImageStory src="042A0089.jpg" alt="Young participants recognized at SEIS Tunisia" label="Engage"/><ImageStory src="042A9563.jpg" alt="Applied AI project presentation" label="Build"/><ImageStory src="042A1472.jpg" alt="Regional AI Caravan group with flags" label="Celebrate"/></aside></section><section className="date-banner"><div className="container"><CalendarDays/><div><span>Save the season</span><strong>15 Aug — 18 Dec 2026</strong></div><Link className="btn light-btn" to="/registration">Get updates</Link></div></section></> }

function PeopleGrid({people}:{people:Person[]}) { return <div className="people-grid">{people.map(person=>{const profileUrl=getTeamProfileLink(person.name,person.affiliation);return <article key={`${person.name}-${person.affiliation}`}><div className="person-photo"><a className="external-photo-link" href={profileUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open the official profile or institutional page for ${person.name}`}><Photo src={person.photo} alt={person.name}/><ExternalLink aria-hidden="true"/></a></div><div className="person-info"><h3>{person.name}</h3>{person.title&&<p>{person.title}</p>}{person.affiliation&&<span>{person.affiliation}</span>}</div></article>})}</div> }
function Team() {
  const country = (name:string) => representatives.filter(person => person.affiliation === name);
  const committeeMember = (name:string) => excom.find(person => person.name === name)!;
  const committeeMemberForLocalTeam = (name:string) => ({...committeeMember(name), title: undefined});
  const coreCountries = ['Egypt','Tunisia','Jordan','Kenya'];
  const otherR8 = representatives.filter(person => !coreCountries.includes(person.affiliation || ''));
  const egyptTeam = [
    ...country('Egypt'),
    committeeMemberForLocalTeam('Amr Nabih Riyad'),
    committeeMemberForLocalTeam('Mohamed SaidSalah Hassan'),
    committeeMemberForLocalTeam('Mohamed Essam'),
    committeeMemberForLocalTeam('Mohannad Mohamed Abdelaziz'),
    committeeMemberForLocalTeam('Hassan Ahmed El Sayed'),
    {name:'Omar Ahmed',photo:'Omar Ahmed.jpg',affiliation:'Egypt'},
    {name:'Dareen Ahmed Sakr',photo:'dareen2 - Copy.jpg',affiliation:'Egypt'},
    {name:'Mohamed Kamal Said',photo:'kamal.jpg',affiliation:'Egypt'},
    {name:'Alaa Taha El Maria',photo:'dareen.jpg',affiliation:'Egypt'},
    {name:'Mohamed Amir AbdelFatah',photo:'amir.jpg',affiliation:'Egypt'},
    {name:'Fatema Mohammad Mostafa',affiliation:'Egypt'}
  ];
  const tunisiaTeam = [
    ...country('Tunisia'),
    committeeMemberForLocalTeam('Taieb jemal'),
    committeeMemberForLocalTeam('Lina Bouallegue'),
    committeeMemberForLocalTeam('Mohamed Ali Ben Dhiab'),
    ...tunisiaTeamAdditions
  ];
  const jordanTeam = [
    ...country('Jordan'),
    {name:'Mohammad Alqasem',photo:'qasem.webp',affiliation:'Jordan'},
    {name:'Abdallah Abughallous',photo:'Abdallah Abughallous.jpg',affiliation:'Jordan'}
  ];
  const kenyaTeam = [...country('Kenya'),committeeMemberForLocalTeam('Rue Kemboi'),committeeMemberForLocalTeam('Ann Mucheke')];
  const groups = [
    ['Caravan Leaders',caravanLeaders],
    ['Advisory Board',advisoryBoard],
    ['Regional Experts',regionalExperts],
    ['Representatives',representatives],
    ['Executive Committee',excom],
    ['Egypt Team',egyptTeam],
    ['Tunisia Team',tunisiaTeam],
    ['Jordan Team',jordanTeam],
    ['Kenya Team',kenyaTeam],
    ['R8 – Other Countries',otherR8]
  ] as [string,Person[]][];
  return <><PageHero eyebrow="Our Team" title="The people moving the Caravan forward." copy="IEEE leaders, AI experts, regional representatives, and volunteer teams working together across Region 8."/><div className="team-nav container">{groups.map(([name])=><a href={`#${name.replace(/\s/g,'-').toLowerCase()}`} key={name}>{name}</a>)}</div>{groups.map(([name,people],i)=><section className={`team-section ${i%2?'soft':''}`} id={name.replace(/\s/g,'-').toLowerCase()} key={name}><div className="container"><div className="team-heading"><span className="eyebrow">{String(i+1).padStart(2,'0')}</span><h2>{name}</h2><span>{people.length} {people.length===1?'member':'members'}</span></div><PeopleGrid people={people}/></div></section>)}</>
}

const registrationOpens = new Date('2026-11-09T22:00:00Z'); // 10 November, 12:00 AM Cairo
const registrationDeadline = new Date('2026-11-30T21:59:59Z'); // 30 November, 11:59 PM Cairo
function Registration() {
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle');
  const [message,setMessage]=useState('');
  const [residency,setResidency]=useState('');
  const [ieeeMembership,setIeeeMembership]=useState('');
  const [attendancePackage,setAttendancePackage]=useState('accommodation');
  const now=Date.now(); const isUpcoming=now<registrationOpens.getTime(); const isClosed=now>registrationDeadline.getTime(); const isOpen=!isUpcoming&&!isClosed;
  const fee = attendancePackage==='access' ? 0 : !residency||!ieeeMembership ? null : attendancePackage==='accommodation' ? (ieeeMembership==='member' ? (residency==='egyptian'?60:100) : (residency==='egyptian'?90:150)) : ieeeMembership==='member' ? 40 : 60;
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); if(!isOpen||fee===null)return;
    const formElement=e.currentTarget; setStatus('sending'); setMessage(''); const form=new FormData(formElement);
    const email=String(form.get('email')||'').trim().toLowerCase(); const id=encodeURIComponent(email);
    try{
      const ref=doc(db,'summit-registrations-2026',id);
      await setDoc(ref,{name:String(form.get('name')||'').trim(),title:String(form.get('title')||'').trim(),email,phone:String(form.get('phone')||'').trim(),country:String(form.get('country')||'').trim(),affiliation:String(form.get('affiliation')||'').trim(),ieeeId:String(form.get('ieeeId')||'').trim(),ieeeMembership,residency,attendancePackage,feeUsd:fee,dietaryOrAccessibility:String(form.get('dietaryOrAccessibility')||'').trim(),consent:form.get('consent')==='on',paymentStatus:fee===0?'not-required':'pending',submittedAt:serverTimestamp(),event:'2nd IEEE Computer Society AI Caravan Summit',programYear:2026});
      formElement.reset(); setResidency(''); setIeeeMembership(''); setAttendancePackage('accommodation'); setStatus('success'); setMessage('Your summit registration has been received. Payment instructions and confirmation steps will be announced later.');
    }catch(error){console.error('Summit registration failed',error);setStatus('error');setMessage('This email may already be registered, or the submission could not be completed. Please contact the Caravan team if you need help.');}
  }
  const fees=[['Egyptian','$90'],['Non-Egyptian','$150'],['Egyptian IEEE Member','$60'],['Non-Egyptian IEEE Member','$100']];
  return <>
    <section className="summit-registration-hero"><div className="container"><span className="eyebrow light">2nd AI Caravan Summit · Cairo</span><h1>Plan your three-day summit experience.</h1><p>16–18 December 2026 · Registration open 10–30 November</p></div></section>
    <section className="section container summit-fees"><div className="section-heading"><span className="eyebrow">Registration fees</span><h2>Choose the participation package that fits your visit.</h2><p>All paid fees are listed in US dollars. Package inclusions are shown explicitly below.</p></div><div className="summit-fee-layout summit-fee-layout-three"><article className="accommodation-fees"><div className="fee-card-heading"><span><CalendarDays/></span><div><h3>Accommodation Registration Package</h3><p>2 nights / 3 days at Engineering Authority House Hotel</p></div></div><div className="fee-inclusions"><span>ID</span><span>Meals</span><span>Transportation</span><span>Giveaways</span><span>Sightseeing</span><span>Gala dinner</span><span>All summit activities</span></div><div className="fee-table">{fees.map(([label,price])=><div key={label}><span>{label}</span><strong>{price}</strong></div>)}</div></article><article className="accommodation-fees"><div className="fee-card-heading"><span><Globe2/></span><div><h3>Full Registration Package</h3><p>Complete summit experience without accommodation</p></div></div><div className="fee-inclusions"><span>ID</span><span>Meals</span><span>Transportation</span><span>Giveaways</span><span>Sightseeing</span><span>Gala dinner</span><span>All summit activities</span></div><div className="fee-table">{[['Egyptian','$60'],['Non-Egyptian','$60'],['Egyptian IEEE Member','$40'],['Non-Egyptian IEEE Member','$40']].map(([label,price])=><div key={label}><span>{label}</span><strong>{price}</strong></div>)}</div></article><article className="day-access-fee"><span className="fee-badge">Access Registration Package</span><strong>Free</strong><h3>ID + all summit activities</h3><p>Available to Egyptian and non-Egyptian participants, including IEEE members.</p></article></div><p className="payment-note"><CheckCircle2/><span><strong>Payment process:</strong> The payment method, account details, proof process, capacity, and cancellation policy will be announced later.</span></p></section>
    <section className="section soft"><div className="container summit-registration-layout"><div className="summit-registration-copy"><span className={`status ${isOpen?'':'closed'}`}><span className="pulse"/> {isUpcoming?'Registration opens 10 November 2026':isOpen?'Summit registration is open':'Summit registration is closed'}</span><h2>Register for the summit</h2><p>Complete one application per participant. Your fee is calculated from your residency, IEEE membership, and selected package.</p><div className="summit-registration-facts"><span><CalendarDays/><b>16–18 December</b><small>Three summit days</small></span><span><MapPin/><b>Cairo, Egypt</b><small>Regional summit experience</small></span><span><Clock3/><b>30 November</b><small>Registration deadline</small></span></div></div><form className="registration-form summit-form" onSubmit={submit}><div className="form-heading"><span>Summit application</span><h2>Participant details</h2><p>{isUpcoming?'The form will accept submissions from 10 November. You can review all required information now.':'Fields marked * are required.'}</p></div><fieldset disabled={!isOpen}><label>Full name *<input name="name" required autoComplete="name"/></label><div className="form-row"><label>Professional or academic title *<input name="title" required placeholder="e.g. Student, Engineer, Professor" autoComplete="organization-title"/></label><label>Affiliation *<input name="affiliation" required autoComplete="organization"/></label></div><div className="form-row"><label>Email address *<input name="email" type="email" required autoComplete="email"/></label><label>Phone number *<input name="phone" type="tel" required autoComplete="tel"/></label></div><div className="form-row"><label>Country *<select name="country" required defaultValue="" autoComplete="country-name"><option value="" disabled>Select country</option>{countries.map(country=><option key={country} value={country}>{country}</option>)}</select></label><label>Residency category *<select name="residency" required value={residency} onChange={event=>setResidency(event.target.value)}><option value="" disabled>Select residency</option><option value="egyptian">Egyptian participant</option><option value="non-egyptian">Non-Egyptian participant</option></select></label></div><div className="form-row"><label>IEEE membership status *<select name="ieeeMembership" required value={ieeeMembership} onChange={event=>setIeeeMembership(event.target.value)}><option value="" disabled>Select membership status</option><option value="non-member">Not an IEEE member</option><option value="member">IEEE member</option></select></label><label>IEEE membership number <span>(required for members)</span><input name="ieeeId" inputMode="numeric" required={ieeeMembership==='member'} disabled={ieeeMembership!=='member'}/></label></div><fieldset className="package-options"><legend>Participation package *</legend><label><input type="radio" name="attendancePackage" value="accommodation" checked={attendancePackage==='accommodation'} onChange={event=>setAttendancePackage(event.target.value)}/><span><b>Accommodation Registration Package</b><small>2 nights / 3 days at Engineering Authority House Hotel + ID + meals + transportation + giveaways + sightseeing + gala dinner + all summit activities</small></span></label><label><input type="radio" name="attendancePackage" value="without-accommodation" checked={attendancePackage==='without-accommodation'} onChange={event=>setAttendancePackage(event.target.value)}/><span><b>Full Registration Package</b><small>ID + meals + transportation + giveaways + sightseeing + gala dinner + all summit activities</small></span></label><label><input type="radio" name="attendancePackage" value="access" checked={attendancePackage==='access'} onChange={event=>setAttendancePackage(event.target.value)}/><span><b>Access Registration Package</b><small>ID + all summit activities</small></span></label></fieldset><label>Dietary, accessibility, or other requirements <span>(optional)</span><textarea name="dietaryOrAccessibility" rows={3}/></label><label className="consent"><input type="checkbox" name="consent" required/><span>I confirm that the information is accurate and agree to receive summit, payment, and logistical communications. *</span></label></fieldset><div className={`summit-fee-calculator ${fee===null?'waiting':''}`}><span>Calculated registration fee</span><strong>{fee===null?'Select residency and IEEE membership':fee===0?'Free':`$${fee} USD`}</strong><small>{attendancePackage==='accommodation'?'Accommodation Registration Package: two hotel nights, ID, meals, transportation, giveaways, sightseeing, gala dinner, and all summit activities.':attendancePackage==='without-accommodation'?'Full Registration Package: ID, meals, transportation, giveaways, sightseeing, gala dinner, and all summit activities.':'Access Registration Package: ID and all summit activities.'}</small></div>{message&&<div className={`form-message ${status}`}>{message}</div>}<button className="btn primary full" disabled={!isOpen||status==='sending'||fee===null}>{status==='sending'?'Submitting…':isUpcoming?'Opens 10 November':isOpen?'Submit summit registration':'Registration closed'} <Send/></button><small>Registration closes 30 November 2026 at 11:59 PM Cairo time. Duplicate email registrations are not accepted.</small></form></div></section>
  </>
}

function Contact() { return <><PageHero eyebrow="Contact" title="Let’s move practical AI forward." copy="Talk to the Caravan team about participation, regional activities, training, sponsorship, or institutional partnership."/><section className="section container contact-visual"><ImageStory src="IMG_6447.JPG" alt="AI Caravan organizers and participants gathered at an on-ground event" label="A community across borders"/><div className="contact-grid"><div><span className="eyebrow">Get in touch</span><h2>Start a conversation.</h2><p>Tell us where you are based and how you would like to take part in the 2026 Caravan.</p></div><div className="contact-cards"><a href="mailto:islamhalim@ieee.org"><Mail/><span><small>Program enquiries</small><b>islamhalim@ieee.org</b></span><ArrowRight/></a><a href="mailto:help@computer.org"><Mail/><span><small>IEEE Computer Society</small><b>help@computer.org</b></span><ArrowRight/></a><div><MapPin/><span><small>Regional program</small><b>IEEE Region 8</b></span></div></div></div></section></> }

function NotFound(){ return <section className="not-found"><span>404</span><h1>This stop is not on the route.</h1><Link className="btn primary" to="/">Return home</Link></section> }

export default function App(){ return <BrowserRouter><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/activities" element={<ActivitiesPage/>}/><Route path="/activities/:trackSlug" element={<TrackDetails/>}/><Route path="/track-registration" element={<TrackRegistration/>}/><Route path="/highlights" element={<Highlights/>}/><Route path="/partners" element={<Partners/>}/><Route path="/timeline" element={<Timeline/>}/><Route path="/team" element={<Team/>}/><Route path="/registration" element={<Registration/>}/><Route path="/admin/registrations" element={<AdminRegistrations/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></BrowserRouter> }
