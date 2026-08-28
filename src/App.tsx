import { FormEvent, useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { db } from './components/config/firebase';
import AdminRegistrations from './AdminRegistrations';
import { getTeamProfileLink, partnerLinks } from './data/externalLinks';
import './track-details.css';
import './publication.css';
import {
  ArrowRight, Bot, Briefcase, CalendarDays, CheckCircle2,
  ChevronRight, Code2, Globe2, GraduationCap, Mail, MapPin, Menu,
  Award, BookOpen, Clock3, ExternalLink, Image, Network, Play, Rocket, Send, Sparkles, Target, X, Zap
} from 'lucide-react';

const nav = [
  ['Home', '/'], ['About', '/about'], ['Activities', '/activities'],
  ['Highlights', '/highlights'], ['Partners', '/partners'],
  ['Timeline', '/timeline'], ['Team', '/team'], ['Registration', '/registration'], ['Contact', '/contact']
];

const countries = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Antigua and Barbuda','Argentina','Armenia','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bhutan','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina Faso','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Central African Republic','Chad','Chile','China','Colombia','Comoros','Costa Rica','Côte d’Ivoire','Croatia','Cuba','Cyprus','Czechia','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North Korea','North Macedonia','Norway','Oman','Pakistan','Palau','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal','Qatar','Republic of the Congo','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','São Tomé and Príncipe','Saudi Arabia','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Korea','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Türkiye','Turkmenistan','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Vanuatu','Vatican City','Venezuela','Vietnam','Yemen','Zambia','Zimbabwe'
];

const tracks = [
  { name: 'AI Expert', audience: 'Professionals', hours: '24 hours', copy: 'Apply generative AI and productivity tools to research, communication, analysis, and everyday professional workflows.', prerequisites: 'Basic digital literacy; no programming required.', topics: ['Prompt design and evaluation','Responsible AI use','Research and productivity workflows'], committee: ['Katarina Trojachanec','Sean Bin Yang','Thamir Qadah'], icon: Sparkles, color: 'orange' },
  { name: 'AI Strategist', audience: 'Leaders', hours: '24 hours', copy: 'Translate AI capabilities into responsible organizational strategy, measurable value, governance, and investment decisions.', prerequisites: 'Management or decision-making experience; no programming required.', topics: ['AI opportunity assessment','Governance and risk','Business cases and ROI'], committee: ['Caroline Ling Li','Zorica Bogdanovic'], icon: Briefcase, color: 'blue' },
  { name: 'AI Engineer', audience: 'Builders', hours: '32 hours', copy: 'Build, evaluate, and deploy machine-learning solutions using practical data-science and model-development workflows.', prerequisites: 'Basic Python and introductory statistics or equivalent experience.', topics: ['Data preparation','Model training and evaluation','Applied ML project workflow'], committee: ['Seifedine Kadry','Mehdi SOUIER','Khaled Khnissi'], icon: Bot, color: 'cyan' },
  { name: 'AI Viber', audience: 'Developers', hours: '32 hours', copy: 'Use AI-assisted engineering methods to design, build, test, and improve modern software products responsibly.', prerequisites: 'Programming fundamentals in any modern language.', topics: ['AI coding assistants','Application integration','Testing, security, and quality'], committee: ['Islam Tharwat Abdel Halim'], icon: Code2, color: 'purple' },
  { name: 'AI Administrator', audience: 'Operators', hours: '28 hours', copy: 'Design agentic workflows and practical automations that connect tools, information, decisions, and human oversight.', prerequisites: 'Comfort using common digital workplace tools; no coding required.', topics: ['Workflow mapping','Agents and automation','Controls and human-in-the-loop design'], committee: ['Mousa Tawfiq AL-Akhras'], icon: Network, color: 'green' },
  { name: 'AI Junior', audience: 'School students', hours: '24 hours', copy: 'Explore how AI works through age-appropriate creative challenges, responsible-use lessons, and guided projects.', prerequisites: 'Curiosity, basic computer skills, and access to a computer; no prior AI experience.', topics: ['AI foundations','Creative problem solving','Safe and responsible AI'], committee: ['Batoul Rida Haidar','Samar M. Nour','Ruaa Al-Falluji'], icon: GraduationCap, color: 'yellow' },
];

type Person = { name:string; title?:string; affiliation?:string; photo?:string };
const leaders:Person[] = [
  {name:'Andrew Seely',title:'VP of Member and Geographic Activities',affiliation:'IEEE Computer Society',photo:'andy.avif'},{name:'Cyril Onwubiko',title:'VP of Professional and Educational Activities',affiliation:'IEEE Computer Society',photo:'CyrilOnwubiko_BoG_Photo.avif'},{name:'Yuhong Liu',title:'Secretary',affiliation:'IEEE Computer Society',photo:'Yuhong.avif'},{name:'Eric Berkowitz',title:'Director of Membership and Education',affiliation:'IEEE Computer Society',photo:'eric2.jpg'},{name:'Mohamed Rawidean',title:'MGAB Vice Chair (Geographic Activities)',affiliation:'IEEE Computer Society',photo:'mohamed-kasim.jpg'},{name:'George J. Proeller',title:'Chair, Distinguished Contributor Program',affiliation:'IEEE Computer Society',photo:'George J. Proeller .jpg'},{name:'David Koehler',title:'2027 President-Elect Candidate',affiliation:'IEEE',photo:'David.jpg'},{name:'Adel S. Elmaghraby',title:'Director of Research and Innovation',affiliation:'University of Louisville, USA',photo:'adel.jpg'},{name:'Celestine Iwendi',title:'Head, Centre of Intelligence of Things (CIoTh)',affiliation:'University of Greater Manchester, UK',photo:'Celestine-Iwendi-Web-Size-v2.jpg'},
 {name:'Lee Crudgington',title:'Regional Chapter Coordinator',affiliation:'IEEE Region 8',photo:'lee-crudgington.webp'},{name:'Islam Tharwat Abdel Halim',title:'Regional Coordinator | Founder, AI Caravan',affiliation:'IEEE Computer Society',photo:'islam-tharwat.jpg'},
];
const experts:Person[]=[{name:'Tarek Khalil',title:'Founding President of Nile University (2006-2021) and Distinguished Professor of Management of Technology',affiliation:'Nile University, Egypt',photo:'tarekkhalil.jpeg'},{name:'Erol Gelenbe',title:'Professor',affiliation:'Polish Academy of Sciences, Institute of Theoretical and Applied Informatics, Poland',photo:'erole.webp'},{name:'Ahmed M. Darwish',title:'Chairman of the Board of trustess and  Former Minister of State for Administration Development',affiliation:'IEEE Egypt Consultants Network, Egypt',photo:'AhmedDarwish.jpg'},{name:'Samir I. Shaheen',title:'Professor of Computer Engineering and Chair of IEEE Egypt Computer Socity Chapter',affiliation:'Cairo University, Egypt',photo:'Samir.jpg'},{name:'Ahmed Hazem El-Mahdy',title:'Dean of the School of Information Technology and Computer Science',affiliation:'Nile University, Egypt',photo:'mahdy.jpg'},{name:'Kostas Karpouzis',title:'Associate Professor',affiliation:'Panteion University of Social and Political Sciences, Greece', photo:'Kostas-Karpouzis.jpg'},{name:'Mousa Tawfiq',title:'Associate Professor of Artificial Intelligence and Computer Information Systems',affiliation:'University of Jordan',photo:'Mousa Al-Akhras.jpeg'},{name:'Batoul Rida Haidar',title:'Assistant Professor of Computer Science and AI',affiliation:'Coventry University, Egypt',photo:'BatoulHaidar.jpeg'}, {name:'Ayesha Afzal',title:'Researcher',affiliation:'Erlangen National High Performance Computing Center, Germany',photo:'Ayesha Afzaljpg.jpg'},{name:'Hadeer Ehab Barakat',title:'Assistant Professor',affiliation:'British University in Egypt',photo:'HadeerEhab.jpg'},{ name:'Zorica Bogdanovic',title:'Professor',affiliation:'University of Belgrade Faculty of Organizational Sciences, Serbia',photo:'zorica.jpg'},{name:'Khaled Khnissi',title:'Researcher in Robotics & AI',affiliation:'Ecole nationale supérieure des ingénieurs de Tunis - Ensit',photo:'khaled.jpg'},{name:'Atef El Fekky',title:'CEO',affiliation:'Digital Arrow, Egypt',photo:'Atef.webp'},{name:' AbdEl-Monem El-Sharkawy ',title:' chairman ',affiliation:' National Academy of Information Technology for Persons with Disabilities, Egypt ' ,photo:'AbdEl-Monem.jpg'},{name:' Mehdi SOUIER ',title:' Head of Intelligent Systems in Manufacturing (ISM)',affiliation:' Faculty of Technology, University of Tlemcen, Algeria' ,photo:'1778333851466.jpg'},{name:'Eslam Moussa',title:'CEO',affiliation:'TENET Information Technology, Egypt',photo:'IslamMousa.jpg'},{name:'Samar M. Nour',title:'Assistant Professor',affiliation:'Department of computer engineering at Badr University in Cairo (BUC), Egypt' ,photo:'samarnour.jpg'},{name:'Ruaa Al-Falluji',title:'Assistant Professor',affiliation:'College of Information Engineering, Al-Nahrain University, Iraq' ,photo:'Ruaa.jpeg'},{name:' Alex Watila ',title:' Deputy Director, ICT ',affiliation:'Kasneb, Kenya' ,photo:'1517700488238.jpg'},{name:'Oussema Fitouri',title:'Software Engineer',affiliation:'BNP Paribas, France',photo:'Oussema.jpg' } ];
experts.push(
  {name:'Ahmed Hassan Yousef',title:'President',affiliation:'Elsewedy University of Technology (SUT), Egypt',photo:'SUTech-Dr.-Ahmed-Hassan-Yousef-Square.jpg'},
  {name:'Reyhan Aydogan',title:'Associate Professor in Artificial Intelligence and Data Engineering',affiliation:'Ozyegin University, Turkey',photo:'reyhan.jpg'},
  {name:'Seifedine Kadry',title:'Professor of Data Science',affiliation:'Beirut Arab University, Lebanon',photo:'seifedine-kadry.jpg'},
  {name:'Roua TOUIHRI',title:'Change Management Board / Enterprise Architect',affiliation:'Elee, Paris, France',photo:'Roua.jpg'},
  {name:'Hironori Washizaki',title:'Professor and Associate Dean of the Research Promotion Division',affiliation:'Waseda University, Japan',photo:'IEEE_CS_Hironori_Washizaki_headshot.jpg'},
  {name:'David Alan Grier',title:'Associate Professor Emeritus of International Science and Technology Policy Emeriti Faculty',affiliation:'George Washington University, US',photo:'David-Alan-Grier-profile-01.webp'},
  {name:'Katarina Trojachanec',title:'Associate Professor at Faculty of Computer Science and Engineering',affiliation:'Ss. Cyril and Methodius University, Skopje, N. Macedonia',photo:'doc._d-r_katarina_trojachanec_dineva_20698.jpg'},
  {name:'Walid Al-Atabany',title:'Associate Dean for UG Programs & Director of Centre for Informatics (CIS)',affiliation:'Nile University, Egypt',photo:'whatsapp_image_2022-12-20_at_11.46.00_pm.jpeg'},
  {name:'Sean Bin Yang',title:'Assistant Professor in the Department of Computer Science',affiliation:'Aalborg University, Denmark',photo:'BinYang.jpg'},
  {name:'Thamir Qadah',title:'Assistant Professor in the Department of Computer and Networks Engineering College of Computing',affiliation:'Umm Al-Qura University, KSA',photo:'tmqadah.webp'},
  {name:'Caroline Ling Li',title:'Professor in Biomedical Engineering',affiliation:"City St George's, University of London, UK",photo:'caroline-li-200x267.jpg'},
  {name:'Reginald Ogu',title:'Lecturer in the Department of Computer Engineering',affiliation:'Federal University of Technology, Nigeria',photo:'Reginald-Ogu.webp'}
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
  'Kostas Karpouzis',
  'Katarina Trojachanec',
  'Reyhan Aydogan',
  'Walid Al-Atabany',
  'Zorica Bogdanovic',
  'Caroline Ling Li',
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
  mehdiSouier.title = 'Full Professor and Head of Intelligent Systems in Manufacturing (ISM)';
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
    <section className="hero">
      <div className="hero-grid container">
        <div className="hero-copy"><span className="eyebrow"><span className="pulse"/> Region 8 · 15 Aug — 15 Dec 2026</span><h1>AI knowledge.<br/><em>Real-world impact.</em></h1><p>The IEEE Computer Society AI Caravan returns to make practical artificial intelligence accessible across communities — leaving no one behind.</p><div className="actions"><Link className="btn primary" to="/registration">Join the Caravan <ArrowRight/></Link><Link className="btn secondary" to="/activities">Explore the program</Link></div><div className="country-line"><Globe2/><span>Egypt</span><i/> <span>Tunisia</span><i/> <span>Kenya</span><i/> <span>Nigeria</span><i/> <span>Jordan</span><i/> <span>Libya</span><i/> <span>Rwanda</span></div></div>
        <div className="hero-visual" aria-label="AI Caravan program overview"><div className="route-line"/><div className="stat-card top"><strong>5,000+</strong><span>participants</span></div><div className="core"><img src="/imgs/caravanlogo.png" alt=""/><span>2026</span></div><div className="stat-card right"><strong>6</strong><span>learning pathways</span></div><div className="stat-card bottom"><strong>4 months</strong><span>online + on-ground</span></div><div className="node n1"/><div className="node n2"/><div className="node n3"/></div>
      </div>
    </section>
    <section className="intro-strip"><div className="container metrics"><div><strong>3</strong><span>program pillars</span></div><div><strong>8+</strong><span>core countries</span></div><div><strong>20+</strong><span>partnership target</span></div><div><strong>90%</strong><span>knowledge-growth target</span></div></div></section>
    <section className="video-section"><div className="container video-grid"><div className="video-copy"><span className="eyebrow light">Watch the journey</span><h2>Highlights from the AI Caravan</h2><p>See the people, ideas, learning moments, and regional collaborations that shaped the Caravan—and the momentum carrying into 2026.</p><a href="https://drive.google.com/file/d/1QpcPKDpWJOf9-GIjCeCnJEOUtHTNpM3C/view" target="_blank" rel="noreferrer">Open video in Google Drive <ExternalLink/></a></div><div className="video-frame"><iframe src="https://drive.google.com/file/d/1QpcPKDpWJOf9-GIjCeCnJEOUtHTNpM3C/preview" title="IEEE CS AI Caravan highlights video" allow="autoplay; fullscreen" allowFullScreen/><span><Play/> Summary highlights</span></div></div></section>
    <section className="memory-strip"><div className="container"><div className="memory-heading"><span className="eyebrow">From the 2025 journey</span><p>Real people. Practical learning. A growing regional community.</p></div><div className="memory-grid"><ImageStory src="042A2343.jpg" alt="AI Caravan participants holding IEEE Computer Society and regional flags" label="Regional community"/><ImageStory src="0.jpg" alt="AI Caravan university audience and organizers" label="On-ground engagement"/><ImageStory src="su21.JPG" alt="Participants presenting an AI solution on stage" label="Applied innovation"/></div></div></section>
    <section className="section container"><div className="section-heading"><span className="eyebrow">One connected journey</span><h2>Learn online. Meet locally.<br/>Lead regionally.</h2><p>A four-month experience designed to move participants from understanding to practical application.</p></div><div className="pillar-grid"><Pillar n="01" icon={<Zap/>} title="Online training" copy="Six role-based pathways combine foundations, demonstrations, case studies, and hands-on exercises."/><Pillar n="02" icon={<MapPin/>} title="Regional stops" copy="Technical talks, workshops, panels, networking, and recognition in communities across Region 8."/><Pillar n="03" icon={<Rocket/>} title="AI Summit" copy="The second IEEE CS Region 8 AI Summit brings the Caravan’s outcomes and global AI leaders to Egypt."/></div></section>
    <section className="blue-band"><div className="container band-grid"><div><span className="eyebrow light">The mission</span><h2>The right to knowledge and practical application in AI.</h2></div><div><p>We connect academia, industry, government, IEEE volunteers, and local communities to build skills that last beyond the program.</p><Link to="/about">Why the Caravan matters <ArrowRight/></Link></div></div></section>
  </>
}

function Pillar({n,icon,title,copy}:{n:string,icon:React.ReactNode,title:string,copy:string}) { return <article className="pillar"><span>{n}</span><div className="icon-box">{icon}</div><h3>{title}</h3><p>{copy}</p><ChevronRight/></article> }

function About() {
  const audiences = [
    {number:'01',title:'Professionals',tagline:'Upskill · Apply · Lead',copy:'Practical learning helps professionals understand emerging AI technologies, apply them responsibly, and turn knowledge into solutions for their industries and communities.',points:['Advanced AI training','Industry-focused applications','Responsible AI leadership'],icon:Briefcase,photos:['042A0408.jpg','IMG_5559.png','569443138_122133392216959552_7396368427657888153_n - Copy.jpg']},
    {number:'02',title:'University Students & Young Professionals',tagline:'Learn · Build · Launch',copy:'Students and early-career professionals gain accessible technical foundations, hands-on experience, mentorship, and connections that accelerate their academic and career journeys.',points:['Career-ready AI skills','Hands-on project experience','Mentorship and peer networks'],icon:GraduationCap,photos:['NP101300.JPG','1762092819429.jpg','042A3835.jpg']},
    {number:'03',title:'School Students',tagline:'Explore · Imagine · Create',copy:'Age-appropriate experiences introduce school students to AI through curiosity, creativity, and responsible use—helping the next generation see themselves as technology creators.',points:['Friendly AI foundations','Creative guided activities','Responsible technology awareness'],icon:BookOpen,photos:['535090103_122163416654794889_1806144149587838493_n.jpg','622822301_122183508824794889_6556034636183667711_n.jpg','623812727_122183754398794889_5179416784368487808_n.jpg']},
    {number:'04',title:'AI Summit',tagline:'Connect · Exchange · Advance',copy:'The AI Summit brings together experts, educators, industry leaders, students, and policymakers to exchange knowledge, showcase applied innovation, and create regional collaborations.',points:['Expert talks and panels','Cross-sector knowledge exchange','Regional collaboration'],icon:Sparkles,photos:['IMG_1482.JPG','IMG_1435 (1).JPG','042A2547.jpg','IMG_7125.JPG','042A2411.jpg']}
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
    <button className="track-toggle" type="button" aria-expanded={expanded} aria-controls={panelId} onClick={event=>{event.stopPropagation();toggle();}}><span>{expanded?'Hide curriculum committee':'View curriculum committee'}</span><ChevronRight/></button>
    {expanded&&<div className="track-committee" id={panelId} onClick={event=>event.stopPropagation()}><ul>{committee.map(member=><li key={member}><a href={getTeamProfileLink(member)} target="_blank" rel="noopener noreferrer">{member}<ExternalLink aria-hidden="true"/></a></li>)}</ul></div>}
  </article>
}

function Activities() { return <><PageHero eyebrow="2026 Program" title="Six pathways. One regional movement." copy="Choose the learning experience that matches how you work, lead, build, or learn."/><section className="section container"><div className="section-heading track-intro"><span className="eyebrow">Explore each pathway</span><p>Click any track card to meet the Curriculum Development Committee responsible for shaping its curriculum, learning outcomes, and instructor recommendations.</p></div><div className="track-grid detailed">{tracks.map(track=><TrackCard track={track} key={track.name}/>)}</div></section><section className="section soft"><div className="container"><div className="section-heading"><span className="eyebrow">On-ground events</span><h2>AI Caravan in the community</h2><p>Local events connect the regional curriculum with practical challenges, young innovators, and local AI ecosystems.</p></div><article className="event-feature"><div className="event-copy"><div className="event-meta"><span><MapPin/>Hammamet, Tunisia</span><span><CalendarDays/>20 June 2026</span></div><h2>Software Engineering International Summit (SEIS)</h2><p>As an official SEIS Tunisia partner, the IEEE Computer Society Region 8 AI Caravan introduced juniors, teenagers, and university students to AI opportunities, responsible use, and real-world applications.</p><p>A highlight was seeing participants collaborate on AI-powered solutions addressing challenges faced by people with ADHD—showing how technology can create meaningful social impact.</p></div><div className="event-gallery">{eventPhotos.map((photo,i)=><div key={photo}><Photo src={photo} alt={`SEIS Tunisia event photo ${i+1}`}/></div>)}</div></article><div className="country-grid compact">{['Egypt','Tunisia','Kenya','Nigeria','Jordan','Libya','Rwanda'].map((c,i)=><article key={c}><span>{String(i+1).padStart(2,'0')}</span><MapPin/><h3>{c}</h3><p>Talks · Workshops · Panels · Networking</p></article>)}</div><p className="expansion-note"><Globe2/> Potential expansion to Saudi Arabia, Algeria, and France.</p></div></section></> }

function PublicationFeature() { return <section className="publication-section"><div className="container publication-card"><a className="publication-cover" href="/docs/IEEE-CS-AI-Caravan-Published-Paper.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open the AI Caravan published paper PDF"><img src="/imgs/ai-caravan-paper-cover.png" alt="First page of the published IEEE Computer Society AI Caravan paper"/></a><div className="publication-copy"><span className="eyebrow">Published Paper · IEEE Potentials</span><h2>IEEE Computer Society AI Caravan: Bridging the knowledge gap from Region 8 to the global stage</h2><p className="publication-author">By Islam Tharwat Abdel Halim</p><p>The article presents the Caravan’s community-focused model for making practical AI knowledge accessible across IEEE Region 8 and extending its impact to the global stage.</p><div className="publication-meta"><span>May/June 2026</span><span>DOI: 10.1109/MPOT.2026.3708243</span><span>IEEE Article ID: 11663559</span></div><div className="publication-actions"><a className="btn primary" href="https://ieeexplore.ieee.org/document/11663559" target="_blank" rel="noopener noreferrer">Read on IEEE Xplore <ExternalLink/></a><a className="btn secondary" href="/docs/IEEE-CS-AI-Caravan-Published-Paper.pdf" target="_blank" rel="noopener noreferrer">Open PDF <BookOpen/></a></div></div></div></section> }

function Highlights() { return <><PageHero eyebrow="Program Highlights" title="A practical model built to scale." copy="Online depth, local relevance, and regional visibility come together in one connected initiative."/><section className="highlight-collage container"><ImageStory src="suausc.jpg" alt="An AI project presentation on a large stage"/><ImageStory src="042A3105.jpg" alt="Junior discuss with an expert his idea"/><ImageStory src="had.jfif" alt="AI learning session at AUC"/><div className="collage-caption"><span>Ideas become experiences</span><strong>Learn · Build · Share</strong></div></section><PublicationFeature/><section className="section container"><div className="highlight-list">{[['First of its kind','A multi-country IEEE CS regional AI capacity-building initiative.'],['Role-based learning','Six pathways for students, developers, professionals, operators, and executives.'],['Practical by design','Hands-on exercises, demonstrations, case studies, and applied projects.'],['Regional community','Sustainable links among academia, industry, government, and IEEE volunteers.'],['Flagship finale','The second IEEE CS Region 8 AI Summit showcases outcomes and recognizes excellence.']].map(([a,b],i)=><article key={a}><span>{String(i+1).padStart(2,'0')}</span><div><h2>{a}</h2><p>{b}</p></div><ArrowRight/></article>)}</div></section><section className="orange-band"><div className="container"><Target/><h2>5,000+ people empowered to apply AI in their organizations and communities.</h2><Link className="btn dark" to="/registration">Register your interest <ArrowRight/></Link></div></section></> }

function Partners() { return <><PageHero eyebrow="Partners" title="Built through regional collaboration." copy="The Caravan brings together IEEE organizational units, universities, research centers, industry, government, and community partners."/><section className="section container"><div className="partner-lead"><a className="logo-panel external-photo-link" href="https://www.computer.org/" target="_blank" rel="noopener noreferrer" aria-label="Visit the IEEE Computer Society official website"><img src="/imgs/80th Anniversary Full Logo.png" alt="IEEE Computer Society"/><ExternalLink aria-hidden="true"/></a><div><span className="eyebrow">Convened by</span><h2>IEEE Computer Society</h2><p>With IEEE CS GAC, Region 8, and a growing network of institutional partners.</p></div></div><div className="partner-grid logo-grid">{partners.map((partner,i)=><article key={partner.name}><span>{String(i+1).padStart(2,'0')}</span><a className="partner-logo external-photo-link" href={partnerLinks[partner.name]} target="_blank" rel="noopener noreferrer" aria-label={`Visit the official website of ${partner.name}`}><Photo src={partner.logo} alt={`${partner.name} logo`}/><ExternalLink aria-hidden="true"/></a><p>{partner.name}</p></article>)}</div><p className="logo-note"><ExternalLink/> Select any partner logo to visit its official website.</p><div className="partner-cta"><div><h2>Help expand access to practical AI.</h2><p>Academic, industry, government, media, and community organizations are invited to collaborate.</p></div><Link className="btn primary" to="/contact">Become a partner <ArrowRight/></Link></div></section></> }

function Timeline() { const steps=[['15 August 2026','Caravan launch','Online learning begins across the six pathways.'],['August — November','Training + regional stops','Live learning, hands-on practice, and country events across Region 8.'],['November — December','Projects + recognition','Participants consolidate learning and share applied outcomes.'],['15 December 2026','2nd Region 8 AI Summit','The regional journey culminates in Egypt with leaders, showcases, and recognition.']]; return <><PageHero eyebrow="Timeline" title="Four months. One shared destination." copy="The 2026 Caravan moves from learning to local engagement and ends with a flagship regional summit."/><section className="section container timeline-layout"><div className="timeline">{steps.map(([date,title,copy],i)=><article key={title}><div className="time-marker"><span>{i+1}</span></div><div><time>{date}</time><h2>{title}</h2><p>{copy}</p></div></article>)}</div><aside className="timeline-photos"><ImageStory src="042A0089.jpg" alt="Young participants recognized at SEIS Tunisia" label="Engage"/><ImageStory src="042A9563.jpg" alt="Applied AI project presentation" label="Build"/><ImageStory src="042A1472.jpg" alt="Regional AI Caravan group with flags" label="Celebrate"/></aside></section><section className="date-banner"><div className="container"><CalendarDays/><div><span>Save the season</span><strong>15 Aug — 15 Dec 2026</strong></div><Link className="btn light-btn" to="/registration">Get updates</Link></div></section></> }

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

const registrationOpens = new Date('2026-08-14T21:00:00Z'); // 15 August, 12:00 AM Cairo
const registrationDeadline = new Date('2026-08-31T20:59:59Z');
function Registration() {
  const [status,setStatus]=useState<'idle'|'sending'|'success'|'error'>('idle'); const [message,setMessage]=useState('');
  const now=Date.now(); const isUpcoming=now<registrationOpens.getTime(); const isClosed=now>registrationDeadline.getTime(); const isOpen=!isUpcoming&&!isClosed;
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();if(!isOpen)return;const formElement=e.currentTarget;setStatus('sending');setMessage('');const form=new FormData(formElement);const email=String(form.get('email')||'').trim().toLowerCase();const id=encodeURIComponent(email);try{const ref=doc(db,'registrations-2026',id);await setDoc(ref,{name:String(form.get('name')||'').trim(),title:String(form.get('title')||'').trim(),dateOfBirth:String(form.get('dateOfBirth')||''),gender:String(form.get('gender')||''),email,phone:String(form.get('phone')||'').trim(),country:String(form.get('country')||'').trim(),affiliation:String(form.get('affiliation')||'').trim(),ieeeId:String(form.get('ieeeId')||'').trim(),track:String(form.get('track')||''),consent:form.get('consent')==='on',submittedAt:serverTimestamp(),programYear:2026});formElement.reset();setStatus('success');setMessage('Registration received. We will contact you with the next steps.');}catch(error){console.error('Registration submission failed',error);setStatus('error');setMessage('This email may already be registered, or the submission could not be completed. Please contact the Caravan team if you need help.');}}
  return <><PageHero eyebrow={isUpcoming?'Registration opens 15 August':isOpen?'Registration now open':'Registration closed'} title="Choose one pathway. Build practical AI skills." copy={isUpcoming?'The complete application form is ready and will accept submissions from 15 August 2026.':isOpen?'Apply for one of six online training tracks by 31 August 2026 at 11:59 PM Cairo time.':'The application period for the 2026 training program has ended.'}/><section className="section container registration-layout"><div className="registration-intro"><ImageStory src="su20.jpg" alt="AI Caravan participants celebrating their achievements" label="Join a regional learning community"/><span className={`status ${isOpen?'':'closed'}`}><span className="pulse"/> {isUpcoming?'Registration opens 15 August 2026':isOpen?'Applications are open':'Registration is closed'}</span><h2>One participant.<br/>One focused track.</h2><p>Select the pathway that best matches your experience and goals. Every program includes 24–32 hours of training and a final examination. Participants who meet the completion requirements receive a certificate.</p><div className="check-list">{['Exactly one track per participant','24–32 hours of online training','Final assessment required','Certificate upon successful completion'].map(x=><span key={x}><CheckCircle2/>{x}</span>)}</div><Link to="/activities" className="text-link">Compare all track details <ArrowRight/></Link></div><form className="registration-form" onSubmit={submit}><div className="form-heading"><span>2026 application</span><h2>Register for a track</h2><p>{isUpcoming?'Submissions will be enabled on 15 August. You can review the required information now.':'Fields marked * are required.'}</p></div><fieldset disabled={!isOpen}><label>Full name *<input name="name" required autoComplete="name"/></label><div className="form-row"><label>Professional or academic title *<input name="title" required placeholder="e.g. Student, Engineer, Professor" autoComplete="organization-title"/></label><label>Date of birth *<input name="dateOfBirth" type="date" required max="2026-08-08" autoComplete="bday"/></label></div><label>Gender *<select name="gender" required defaultValue=""><option value="" disabled>Select gender</option><option value="Male">Male</option><option value="Female">Female</option><option value="Prefer not to say">Prefer not to say</option></select></label><div className="form-row"><label>Email address *<input name="email" type="email" required autoComplete="email"/></label><label>Phone number *<input name="phone" type="tel" required autoComplete="tel"/></label></div><div className="form-row"><label>Country *<select name="country" required defaultValue="" autoComplete="country-name"><option value="" disabled>Select country</option>{countries.map(country=><option key={country} value={country}>{country}</option>)}</select></label><label>Affiliation<input name="affiliation"/></label></div><label>IEEE membership number <span>(optional)</span><input name="ieeeId" inputMode="numeric"/></label><label>Choose one training track *<select name="track" required defaultValue=""><option value="" disabled>Select your pathway</option>{tracks.map(t=><option key={t.name} value={t.name}>{t.name} — {t.hours}</option>)}</select></label><label className="consent"><input type="checkbox" name="consent" required/><span>I confirm that the information is accurate and agree to receive program communications. *</span></label></fieldset>{message&&<div className={`form-message ${status}`}>{message}</div>}<button className="btn primary full" disabled={!isOpen||status==='sending'}>{status==='sending'?'Submitting…':isUpcoming?'Opens 15 August':isOpen?'Submit registration':'Registration closed'} <Send/></button><small>{isUpcoming?'Registration opens 15 August 2026 and closes 31 August 2026 at 11:59 PM Cairo time.':'Deadline: 31 August 2026, 11:59 PM Cairo time. Duplicate email registrations are not accepted.'}</small></form></section></> }

function Contact() { return <><PageHero eyebrow="Contact" title="Let’s move practical AI forward." copy="Talk to the Caravan team about participation, regional activities, training, sponsorship, or institutional partnership."/><section className="section container contact-visual"><ImageStory src="IMG_6447.JPG" alt="AI Caravan organizers and participants gathered at an on-ground event" label="A community across borders"/><div className="contact-grid"><div><span className="eyebrow">Get in touch</span><h2>Start a conversation.</h2><p>Tell us where you are based and how you would like to take part in the 2026 Caravan.</p></div><div className="contact-cards"><a href="mailto:islamhalim@ieee.org"><Mail/><span><small>Program enquiries</small><b>islamhalim@ieee.org</b></span><ArrowRight/></a><a href="mailto:help@computer.org"><Mail/><span><small>IEEE Computer Society</small><b>help@computer.org</b></span><ArrowRight/></a><div><MapPin/><span><small>Regional program</small><b>IEEE Region 8</b></span></div></div></div></section></> }

function NotFound(){ return <section className="not-found"><span>404</span><h1>This stop is not on the route.</h1><Link className="btn primary" to="/">Return home</Link></section> }

export default function App(){ return <BrowserRouter><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/activities" element={<Activities/>}/><Route path="/highlights" element={<Highlights/>}/><Route path="/partners" element={<Partners/>}/><Route path="/timeline" element={<Timeline/>}/><Route path="/team" element={<Team/>}/><Route path="/registration" element={<Registration/>}/><Route path="/admin/registrations" element={<AdminRegistrations/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></BrowserRouter> }
