// Summit Information Data
import summitLogo from "../components/imgs/IEEE Computer Society R8 AI Caravan  (4) (1).png";
import aucHall from "../components/imgs/auc_hall.jpg";
import nuHall from "../components/imgs/nu_hall.jpg";
import honoraryChairPhoto from "../components/imgs/honorary_chair.png";
import partner1 from "../components/imgs/NCAI.jpg";
import partner2 from "../components/imgs/EGCERT.jpg";
import partner3 from "../components/imgs/AIC.png";

// Speaker images
import speaker1 from "../components/imgs/grace.jpg";
import speaker2 from "../components/imgs/Yuhong.jpg";
import speaker3 from "../components/imgs/David.jpg";
import speaker4 from "../components/imgs/Joaquim.jpeg";
import speaker5 from "../components/imgs/george.webp";
import speaker6 from "../components/imgs/Shivam.jpg";
import speaker7 from "../components/imgs/Tamer.jpg";
import speaker8 from "../components/imgs/SherifKishk.png";
import speaker9 from "../components/imgs/EsamElGohary.jpg";
import speaker10 from "../components/imgs/AhmedDarwish.jpg";
import speaker11 from "../components/imgs/KhaledNegm.png";
import speaker12 from "../components/imgs/Atef.webp";
import speaker13 from "../components/imgs/TarekShabaka.jpg";
import speaker14 from "../components/imgs/IslamMousa.jpg";
import speaker15 from "../components/imgs/Eric.jpg";
import speaker16 from "../components/imgs/MahmoudALLAM.webp";
import speaker17 from "../components/imgs/AhmedMahdy.jpg";
import speaker18 from "../components/imgs/AbdEl-Monem.jpg";
import speaker19 from "../components/imgs/DoaaSalem.jpg";
import speaker20 from "../components/imgs/AhmedMadian.jpeg";
import speaker21 from "../components/imgs/AhmedSaleh.png";
import speaker22 from "../components/imgs/IslamTharwat.jpg";
import speaker23 from "../components/imgs/WalidAtabany.jpeg";
import speaker24 from "../components/imgs/HadeerEhab.jpg";
import speaker25 from "../components/imgs/BatoulHaidar.jpeg";
import speaker26 from "../components/imgs/MohamedFouad.jpg";
import speaker27 from "../components/imgs/AmrIbrahim.jpg";

export interface Speaker {
  img: string;
  name: string;
  title: string;
  affiliation: string;
  link: string;
}

export interface StrategicPartner {
  img: string;
  name: string;
  link: string;
}

export interface Venue {
  name: string;
  image: string;
  url: string;
}

export const summitData = {
  logo: summitLogo,
  title: "IEEE Computer Society AI Caravan Regional Summit 2025",
  edition: "(R8 Edition – Cairo, Egypt)",
  
  honoraryChair: {
    name: "Prof. Mahmoud Mohieldin",
    photo: honoraryChairPhoto,
    title: "United Nations Special Envoy on Financing the 2030 Sustainable Development Agenda",
    subtitle: "Former Minister of Investment, Egypt",
    link: "https://mohieldin.net/"
  },
  
  strategicPartners: [
    {
      img: partner1,
      name: "National Council for Artificial Intelligence (NCAI)",
      link: "https://ai.gov.eg/"
    },
    {
      img: partner2,
      name: "EG-CERT (Egyptian Computer Emergency Readiness Team)",
      link: "https://egcert.eg/"
    },
    {
      img: partner3,
      name: "Applied Innovation Center(AIC)",
      link: "https://mcit.gov.eg/en/Applied_innovation_Center"
    }
  ] as StrategicPartner[],
  
  venues: {
    description: "The IEEE Computer Society AI Caravan Regional Summit 2025 will be jointly hosted by The American University in Cairo (AUC) and Nile University (NU), from 11–13 December 2025.",
    locations: [
      {
        name: "The American University in Cairo",
        image: aucHall,
        url: "https://www.aucegypt.edu/"
      },
      {
        name: "Nile University",
        image: nuHall,
        url: "https://www.nu.edu.eg/"
      }
    ] as Venue[]
  },
  
  speakers: [
    {
      img: speaker10,
      name: " ",
      title: "Former Minister of State for Administration Development and Chairman of the Suez Canal Economic Zone",
      affiliation: "",
      link: "https://www.amdarwish.com/"
    },
    {
      img: speaker1,
      name: "Grace A. Lewis",
      title: "2026 IEEE Computer Society President and Principal Researcher",
      affiliation: "Carnegie Mellon Software Engineering Institute (SEI), USA",
      link: "https://www.andrew.cmu.edu/user/gritter/lewis.html"
    },
    {
      img: speaker2,
      name: "Yuhong Liu",
      title: "IEEE Computer Society GAC Chair and Associate Professor",
      affiliation: "Santa Clara University, USA",
      link: "https://www.scu.edu/engineering/faculty/liu-yuhong/"
    },
    {
      img: speaker8,
      name: "Sherif Kishk",
      title: "Assistant Minister for Smart Governance",
      affiliation: "Ministry of Higher Education and Scientific Research, Egypt",
      link: "https://eg.linkedin.com/in/kishk-sherif"
    },
    {
      img: speaker3,
      name: "David Koehler",
      title: "Director of Oil Lab Analysis (Former)",
      affiliation: "Indianapolis, Indiana, USA",
      link: "https://www.linkedin.com/in/davidakoehler"
    },
    {
      img: speaker4,
      name: "Joaquim Jorge",
      title: "UNESCO Chair on AI & XR at IST",
      affiliation: "Universidade de Lisboa, Portugal",
      link: "https://web.tecnico.ulisboa.pt/jorgej/ieeecs"
    },
    {
      img: speaker16,
      name: "Mahmoud Allam",
      title: "Dean of the School of Continuing Education",
      affiliation: "American University in Cairo (AUC)",
      link: "https://www.aucegypt.edu/fac/mahmoud-allam"
    },
    {
      img: speaker7,
      name: "Tamer A. Elbatt",
      title: "Professor at the CSE Dept",
      affiliation: "American University in Cairo (AUC), Egypt",
      link: "https://www.aucegypt.edu/fac/tamer-el-batt"
    },
    {
      img: speaker5,
      name: "George Proeller",
      title: "Chair",
      affiliation: "IEEE Computer Society Distinguished Contributor Program",
      link: "https://www.computer.org/profiles/george-proeller"
    },
    {
      img: speaker11,
      name: "Khaled Ezzat Ahmed Negm",
      title: "ICT Minister Advisor for Digital Governance",
      affiliation: "Ministry of Communication and Information Technology, Egypt",
      link: "https://eg.linkedin.com/in/khaled-negm-phd-7aa72b1a"
    },
    {
      img: speaker17,
      name: "Ahmed Hazem El-Mahdy",
      title: "Dean of the School of Information Technology and Computer Science",
      affiliation: "Nile University",
      link: "https://www.nu.edu.eg/academic-staff/prof-ahmed-hazem-el-mahdy"
    },
    {
      img: speaker6,
      name: "Shivam Abhilash",
      title: "Enterprise (AI) Architect",
      affiliation: "ZS Associates, India",
      link: "https://shivamabhilash.com/"
    },
    {
      img: speaker18,
      name: "AbdEl-Monem El-Sharkawy",
      title: "Chairman of the National Academy of Information Technology for Persons with Disabilities",
      affiliation: "Ministry of Communications and Information Technology, Egypt",
      link: "https://eg.linkedin.com/in/abdel-monem-el-sharkawy-phd-256b84a"
    },
    {
      img: speaker12,
      name: "Atef El Fekky",
      title: "Founder and CEO",
      affiliation: "Digital Arrow",
      link: "https://eg.linkedin.com/in/atef-elfeki-306a8ba1"
    },
    {
      img: speaker15,
      name: "Eric Berkowitz",
      title: "Membership Development Director",
      affiliation: "IEEE Computer Society",
      link: "https://www.linkedin.com/in/ericberkowitz"
    },
    {
      img: speaker20,
      name: "Ahmed H. Madian",
      title: "Chairman",
      affiliation: "IEEE Egypt Section",
      link: "https://www.nu.edu.eg/academic-staff/prof-ahmed-h-madian"
    },
    {
      img: speaker19,
      name: "Doaa Salem",
      title: "Senior Director, Outreach and Partnerships",
      affiliation: "American University in Cairo (AUC)",
      link: "https://eg.linkedin.com/in/doaa-salem-bashanfar-68a7b822"
    },
    {
      img: speaker9,
      name: "Esam ElGohary",
      title: "Assistant Minister for Development, Training and Digital Transformation",
      affiliation: "Ministry of Local Development, Egypt",
      link: "https://eg.linkedin.com/in/esam-elgohary"
    },
    {
      img: speaker23,
      name: "Walid Al-Atabany",
      title: "Associate Dean for UG Programs & Director of Centre for Informatics (CIS)",
      affiliation: "Nile University",
      link: "https://www.nu.edu.eg/academic-staff/prof-walid-al-atabany"
    },
    {
      img: speaker26,
      name: "Mohamed Mostafa Fouad",
      title: "Associate Dean for Graduate Studies and Research",
      affiliation: "Arab Academy for Science, Technology and Maritime Transport (AASTMT)",
      link: "https://aast.edu/cv.php?&ser=24250"
    },
    {
      img: speaker13,
      name: "Tarek Shabaka",
      title: "Founder and CEO",
      affiliation: "Mideast Communication Systems (MCS)",
      link: "https://eg.linkedin.com/in/tarek-shabaka-57b868225"
    },
    {
      img: speaker24,
      name: "Hadeer Ehab",
      title: "Assistant Professor of Clinical Pharmacy",
      affiliation: "British University in Egypt (BUE)",
      link: "https://eg.linkedin.com/in/hadeer-ehab-5ba6862a1?trk=people-guest_people_search-card"
    },
    {
      img: speaker25,
      name: "Batoul Rida Haidar",
      title: "Assistant Professor of Computer Science and Artificial Intelligence",
      affiliation: "Coventry University, Egypt",
      link: "https://eg.linkedin.com/in/batoul-haidar-coven-egy?trk=people-guest_people_search-card"
    },
    {
      img: speaker14,
      name: "Eslam Moussa",
      title: "Founder and CEO",
      affiliation: "TENET",
      link: "https://eg.linkedin.com/in/eslammoussamba"
    },
    {
      img: speaker21,
      name: "Ahmed Saleh",
      title: "Executive Director, Innovation and Entrepreneurship Center",
      affiliation: "Nile University",
      link: "https://eg.linkedin.com/in/ahmed-a-saleh"
    },
    {
      img: speaker27,
      name: "Amr Ibrahim",
      title: "Data & AI Cloud Solution Architect",
      affiliation: "Microsoft",
      link: "https://www.linkedin.com/in/amr-ibrahim-ai"
    },
    {
      img: speaker22,
      name: "Islam Tharwat",
      title: "Regional Coordinator - EMEA",
      affiliation: "IEEE Computer Society",
      link: "https://nu.edu.eg/academic-staff/dr-islam-tharwat"
    }
  ] as Speaker[],
  
  registration: {
    title: "Registration is Open!",
    description: "🎉 Online registration for the AI Caravan Regional Summit 2025 is now open and will close on 20th November 2025. Secure your spot early!",
    deadline: "20th November 2025",
    buttonText: "Register Now",
    buttonLink: "/registration"
  }
};
