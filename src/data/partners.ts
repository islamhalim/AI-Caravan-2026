// Partners Data
import digitalarrow from "../components/imgs/digitalarrow.png";
import tenet from "../components/imgs/tenet.png";

export type PartnerCategory = 'Academic, Research, and Educational Partners' | 'Community Partners' | 'Industrial Partners' | 'Media Partners';

export interface Partner {
  name: string;
  url: string;
}

export interface PartnerCategoryData {
  category: PartnerCategory;
  icon: string; // Icon name as string (e.g., 'GraduationCap', 'Users', 'Factory', 'Newspaper')
  logos: Partner[];
}

export const partnersData: PartnerCategoryData[] = [
  {
    category: 'Academic, Research, and Educational Partners',
    icon: 'GraduationCap',
    logos: [
      {
        name: 'IEEE Learning Network ',
        url: 'https://www.ieee.org/content/dam/ieee-org/ieee/web/org/educ/931277.png'
      },
      {
        name: 'University of Louisville',
        url: 'https://www.bestcollegesonline.org/wp-content/uploads/2020/09/University-of-Louisville-50-No-GRE-Master%E2%80%99s-in-Human-Resources-Online-Programs-2021.png'
      },
      {
        name: 'AUC',
        url: 'https://scemoodle.aucegypt.edu/pluginfile.php/1/theme_moove/logo/1759059811/auc_wordmark_blue2.png'
      },
      {
        name: 'NU',
        url: 'https://upload.wikimedia.org/wikipedia/ar/a/a2/Nile_University_logo.png'
      },
      {
        name: 'TKH',
        url: 'https://tkh.edu.eg/wp-content/uploads/2024/08/Co-Branding-English-New-02-3.png'
      },
      {
        name: 'AASIT',
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju9cZH6pj9QKadtTGycWi6W4v6G7rMQ0r-XhNdkfE79tCLT4JTYgbEmFyYll52BGfg8XR45y7Ny3zetyaOPjSt7RqMc-g61Hc2nzEd2Ht5ETt9fTcNB5tTTBB1d4D6HZFtND5FIFk7I9sl/w1200-h630-p-k-no-nu/retreiveOnePIC.php.gif'
      },
      {
        name: 'EUI',
        url: 'https://eui.edu.eg/themes/custom/eui/logo.svg'
      },
      {
        name: 'GUC',
        url: 'https://www.guc.edu.eg/img/guc_logo_og.png'
      },
      {
        name: 'SU',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYENaAW3r2lGFGbwnbhi5wwk7rbZx-x9LIHQ&s'
      },
      {
        name: 'CIOTH',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gt4lFqlEGo7K9ZTmWFn6i8y7j0UEQA2sjw&s'
      },
      {
        name: 'north american university sfax',
        url: 'https://iit.tn/wp-content/uploads/2024/04/naulogo.png'
      },
      {
        name: 'dekut ',
        url: 'https://www.dkut.ac.ke/library/wp-content/uploads/2020/06/library-logo.fw_.png'
      },
      {
        name: 'NAID',
        url: 'https://drive.google.com/thumbnail?id=1HLGuNzuWm34kqyIxFFxMemVL9EzZGBKy&sz=w1000'
      },
      {
        name: 'ENICarthage',
        url: 'https://upload.wikimedia.org/wikipedia/fr/c/c2/Logo_ENICarthage.jpg'
      },
      {
        name: 'Egyptian Chinese University',
        url: 'https://ecu.edu.eg/wp-content/uploads/2022/05/ECU-Logo.png'
      },
      {
        name: 'BUC',
        url: 'https://www.prototypesforhumanity.com/wp-content/uploads/2021/10/LOGO-BUC-01.png'
      },
      {
        name: 'Ahram Canadian University',
        url: 'https://acu.edu.eg/App_Themes/ACU/images/acu-logo.png'
      },
      {
        name: 'CIS',
        url: 'https://drive.google.com/thumbnail?id=1RC4fzh_hSX8WgQPLE9Ll-d158VXK_xFd&sz=w1000'
      },
      {
        name: 'NP',
        url: 'https://iecc.nu.edu.eg/wp-content/uploads/2024/07/IECC-LOGO-01.png'
      }
    ]
  },
  {
    category: 'Community Partners',
    icon: 'Users',
    logos: [
      {
        name: 'IEEE Egypt Section',
        url: 'https://ieee.org.eg/wp-content/uploads/2022/04/cropped-logo.png'
      },
      {
        name: 'IEEE Computer Society Egypt Chapter',
        url: 'https://drive.google.com/thumbnail?id=1PPkjWlvHvZNdjTwxA3Z1STRCrlv2wlYQ&sz=w1000'
      },
      {
        name: 'IEEE Computer Society Tunisia Chapter',
        url: ''
      },
      {
        name: 'IEEE Computer Society Kenya Chapter',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbto2i5AorWUOPlOE_b7QgcruYcdhDf0bCoQ&s'
      },
      {
        name: 'FDC Summit',
        url: 'https://fdcsummit.org/storage/logo-photos/UElqJzdRBsmIChKia4zkyzFFir6tjaIL3TYXCJaZ.png'
      },
      {
        name: 'ATIC',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoOVoIln3mKu-mLfGwk_pgcCxrH3lbqRxl9Q&s'
      },
      {
        name: 'IEEE Egypt Consultants Network',
        url: 'https://drive.google.com/thumbnail?id=1GFrca6dotR4QobT2bo8U0RMOo-K6-Uqn&sz=w1000'
      },
      {
        name: 'ACM Cairo Chapter',
        url: 'https://drive.google.com/thumbnail?id=1tlHmffSEGoktsST4UanK6NCEjYf3NmkP&sz=w1000'
      },
      {
        name: 'WIE',
        url: 'https://drive.google.com/thumbnail?id=12NsYUiFhyMPM6LNcWyGqMttv0FV1I-3Q&sz=w1000'
      },
      {
        name: 'IEEE Computational Intelligence Society-Egypt Chapter',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcpN2_lho7ip4ALHVZ-Z74PVapq8SbNszCA&s'
      }
    ]
  },
  {
    category: 'Industrial Partners',
    icon: 'Factory',
    logos: [
      {
        name: 'Digital Arrow',
        url: digitalarrow,
      },
      {
        name: 'TENET',
        url: tenet,
      }
    ]
  },
  {
    category: 'Media Partners',
    icon: 'Newspaper',
    logos: [
      {
        name: 'Watan Rakami',
        url: 'https://watanraqami.com/wp-content/uploads/2025/04/watanlogo.png'
      }
    ]
  }
];
