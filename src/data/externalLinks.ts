const caravanLinkedIn = 'https://www.linkedin.com/company/ieee-computer-society-r8-ai-caravan/';

const teamProfileLinks:Record<string,string> = {
  'Andrew Seely': 'https://www.computer.org/profiles/andrew-seely',
  'Cyril Onwubiko': 'https://www.computer.org/profiles/cyril-onwubiko',
  'Yuhong Liu': 'https://www.computer.org/profiles/yuhong-liu',
  'Eric Berkowitz': 'https://www.linkedin.com/in/ericberkowitz',
  'Mohamed Rawidean': 'https://www.computer.org/profiles/mohamed-rawidean',
  'George J. Proeller': 'https://www.computer.org/profiles/george-proeller',
  'David Koehler': 'https://www.linkedin.com/in/davidakoehler',
  'Adel S. Elmaghraby': 'https://engineering.louisville.edu/faculty/adel-s-elmaghraby/',
  'Celestine Iwendi': 'https://greatermanchester.ac.uk/our-staff/celestine-iwendi',
  'Lee Crudgington': 'https://ieeer8.org/technical-activities/chapter-coordination/chcc/',
  'Islam Tharwat Abdel Halim': 'https://nu.edu.eg/academic-staff/dr-islam-tharwat',
  'Ahmed M. Darwish': 'https://www.amdarwish.com/',
  'Ahmed Hazem El-Mahdy': 'https://www.nu.edu.eg/academic-staff/prof-ahmed-hazem-el-mahdy',
  'Kostas Karpouzis': 'https://kkarpou.github.io/',
  'Reyhan Aydogan': 'https://faculty.ozyegin.edu.tr/reyhanaydogan/',
  'AbdEl-Monem El-Sharkawy': 'https://www.linkedin.com/in/abdel-monem-el-sharkawy-phd-256b84a',
  'Batoul Rida Haidar': 'https://www.linkedin.com/in/batoul-haidar-coven-egy',
  'Hadeer Ehab Barakat': 'https://www.linkedin.com/in/hadeer-ehab-5ba6862a1',
  'Mousa Tawfiq': 'https://www.linkedin.com/in/mousa-al-akhras-56645316',
  'Roua TOUIHRI': 'https://www.linkedin.com/in/roua-touihri/',
  'Atef El Fekky': 'https://www.linkedin.com/in/atef-elfeki-306a8ba1',
  'Eslam Moussa': 'https://www.linkedin.com/in/eslammoussamba',
  'Tarek Khalil': 'https://nu.edu.eg/academic-staff/dr-tarek-khalil',
  'Erol Gelenbe': 'https://en.wikipedia.org/wiki/Erol_Gelenbe',
  'Samir I. Shaheen': 'https://staff.eng.cu.edu.eg/ShowInstructorData.aspx?iid=239',
  'Ahmed Hassan Yousef': 'https://sut.edu.eg/about-sutech/president/',
  'Ayesha Afzal': 'https://hpc.fau.de/faudir/ayesha-afzal/',
  'Zorica Bogdanovic': 'https://www.etsi.org/speakers/zorica-bogdanovic/',
  'Seifedine Kadry': 'https://www.computer.org/profiles/seifedine-kadry',
  'Mehdi SOUIER': 'https://www.linkedin.com/in/mehdi-souier-19a25234/',
  'Khaled Khnissi': 'https://www.linkedin.com/in/khaled-khnissi-112a6792/',
  'Samar M. Nour': 'https://www.linkedin.com/in/samar-m-nour-14b16424/',
  'Ruaa Al-Falluji': 'https://www.linkedin.com/in/ruaa-al-falluji-b215b4354/',
  'Alex Watila': 'https://www.linkedin.com/in/awatila/',
  'Oussema Fitouri': 'https://www.linkedin.com/in/oussema-fitouri-49424b140/',
};

const affiliationLinks:Array<[string,string]> = [
  ['IEEE Computer Society', 'https://www.computer.org/'],
  ['IEEE Region 8', 'https://ieeer8.org/'],
  ['IEEE', 'https://www.ieee.org/'],
  ['Nile University', 'https://nu.edu.eg/'],
  ['Panteion University', 'https://www.panteion.gr/en/'],
  ['University of Jordan', 'https://www.ju.edu.jo/'],
  ['Coventry University', 'https://tkh.edu.eg/coventry/'],
  ['British University in Egypt', 'https://www.bue.edu.eg/'],
  ['University of Belgrade', 'https://en.fon.bg.ac.rs/'],
  ['University of Tlemcen', 'https://www.univ-tlemcen.dz/'],
  ['Beirut Arab University', 'https://www.bau.edu.lb/'],
  ['Ozyegin University', 'https://www.ozyegin.edu.tr/en'],
  ['Cairo University', 'https://cu.edu.eg/Home'],
  ['AI Caravan ExCom', caravanLinkedIn],
];

export function getTeamProfileLink(name:string, affiliation?:string) {
  const normalizedName = name.trim();
  if (teamProfileLinks[normalizedName]) return teamProfileLinks[normalizedName];
  const institutionalLink = affiliationLinks.find(([label]) => affiliation?.includes(label));
  return institutionalLink?.[1] || caravanLinkedIn;
}

export const partnerLinks:Record<string,string> = {
  'IEEE Computer Society': 'https://www.computer.org/',
  'IEEE CS GAC': 'https://www.computer.org/volunteering/boards-and-committees/member-geographic-activities',
  'IEEE CS Region 8': 'https://www.computer.org/volunteering/boards-and-committees/member-geographic-activities#:~:text=R8%3A%20Islam%20Tharwat%20Abdel%20Halim',
  'University of Louisville — Digital Transformation Center': 'https://louisville.edu/digital-transformation',
  'University of Greater Manchester — CIoTh': 'https://ciothings.com/',
  'Nile University': 'https://nu.edu.eg/',
  'Coventry University branch in Egypt': 'https://tkh.edu.eg/coventry/',
  'North American University Sfax': 'https://iit.tn/',
  'ENETCom Sfax': 'https://enetcom.rnu.tn/',
  'University of Jordan': 'https://www.ju.edu.jo/',
  'Amman Arab University': 'https://www.aau.edu.jo/',
  'Multimedia University of Kenya, Kenya': 'https://www.mmu.ac.ke/',
  'Dedan Kimathi University of Technology': 'https://www.dkut.ac.ke/',
  'National Academy of Information Technology for Persons with Disabilities, Egypt': 'https://mcit.gov.eg/en/Digital_Citizenship/NAID',
  'Centre for Multidisciplinary Research, Innovation and Collaboration (C-MRiC)': 'https://www.c-mric.com',
  'IEEE ATIC (Afrotech Intelligence Congress)': 'https://www.linkedin.com/company/atic-afrotech-intelligence-congress/',
};
