const caravanLinkedIn = 'https://www.linkedin.com/company/ieee-computer-society-r8-ai-caravan/';

const teamProfileLinks:Record<string,string> = {
  'Andrew Seely': 'https://www.computer.org/profiles/andrew-seely',
  'Cyril Onwubiko': 'https://www.computer.org/profiles/cyril-onwubiko',
  'Yuhong Liu': 'https://www.scu.edu/engineering/faculty/liu-yuhong/',
  'Eric Berkowitz': 'https://www.linkedin.com/in/ericberkowitz',
  'Mrinal Karvir': 'https://www.computer.org/communities/professional-chapters/distinguished-visitors-program',
  'George J. Proeller': 'https://www.computer.org/profiles/george-proeller',
  'David Koehler': 'https://www.linkedin.com/in/davidakoehler',
  'Adel S. Elmaghraby': 'https://engineering.louisville.edu/faculty/adel-elmaghraby/',
  'Islam Tharwat Abdel Halim': 'https://nu.edu.eg/academic-staff/dr-islam-tharwat',
  'Ahmed M. Darwish': 'https://www.amdarwish.com/',
  'Ahmed Hazem El-Mahdy': 'https://www.nu.edu.eg/academic-staff/prof-ahmed-hazem-el-mahdy',
  'Kostas Karpouzis': 'https://kkarpou.github.io/',
  'Reyhan Aydogan': 'https://www.ozyegin.edu.tr/en/faculty/reyhan-aydogan',
  'AbdEl-Monem El-Sharkawy': 'https://www.linkedin.com/in/abdel-monem-el-sharkawy-phd-256b84a',
  'Batoul Rida Haidar': 'https://www.linkedin.com/in/batoul-haidar-coven-egy',
  'Hadeer Ehab Barakat': 'https://www.linkedin.com/in/hadeer-ehab-5ba6862a1',
  'Mousa Tawfiq': 'https://www.linkedin.com/in/mousa-al-akhras-56645316',
  'Roua TOUIHRI': 'https://www.linkedin.com/in/roua-touihri/',
  'Atef El Fekky': 'https://www.linkedin.com/in/atef-elfeki-306a8ba1',
  'Eslam Moussa': 'https://www.linkedin.com/in/eslammoussamba',
  'Tarek Khalil': 'https://nu.edu.eg/',
  'Erol Gelenbe': 'https://www.iitis.pl/en',
  'Samir I. Shaheen': 'https://eng.cu.edu.eg/en/',
  'Ahmed Hassan Yousef': 'https://sut.edu.eg/',
  'Ayesha Afzal': 'https://hpc.fau.de/',
  'Zorica Bogdanovic': 'https://en.fon.bg.ac.rs/',
  'Seifedine Kadry': 'https://www.bau.edu.lb/',
  'Mehdi SOUIER': 'https://www.univ-tlemcen.dz/',
  'Khaled Khnissi': 'https://ensit.rnu.tn/',
  'Samar M. Nour': 'https://buc.edu.eg/',
  'Ruaa Al-Falluji': 'https://nahrainuniv.edu.iq/en',
  'Alex Watila': 'https://www.kasneb.or.ke/',
  'Oussema Fitouri': 'https://group.bnpparibas/en/',
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
  'IEEE CS DVP': 'https://www.computer.org/communities/professional-chapters/distinguished-visitors-program',
  'IEEE CS Region 8': 'https://ieeer8.org/',
  'University of Louisville — Digital Transformation Center': 'https://louisville.edu/digital-transformation',
  'University of Greater Manchester — CIoTh': 'https://www.greatermanchester.ac.uk/',
  'Nile University': 'https://nu.edu.eg/',
  'Coventry University branch in Egypt': 'https://tkh.edu.eg/coventry/',
  'North American University Sfax': 'https://iit.tn/',
  'ENETCom Sfax': 'https://enetcom.rnu.tn/',
  'University of Jordan': 'https://www.ju.edu.jo/',
  'Amman Arab University': 'https://www.aau.edu.jo/',
  'Multimedia University of Kenya, Kenya': 'https://www.mmu.ac.ke/',
  'Dedan Kimathi University of Technology': 'https://www.dkut.ac.ke/',
  'National Academy of Information Technology for Persons with Disabilities, Egypt': 'https://www.mcit.gov.eg/en/Institution_NAID',
  'Centre for Multidisciplinary Research, Innovation and Collaboration (C-MRiC)': 'https://cmric.org/',
  'IEEE ATIC (Afrotech Intelligence Congress)': 'https://attend.ieee.org/atic/',
};

