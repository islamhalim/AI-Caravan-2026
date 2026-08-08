// partners.tsx
import { motion } from 'framer-motion';
import { GraduationCap, Users, Factory, Newspaper } from 'lucide-react';
import TopSection from '../TopSection';

// Define a type for partner categories for better organization
type PartnerCategory = 'Academic, Research, and Educational Partners' | 'Community Partners' | 'Industrial Partners' | 'Media Partners';

// --- Data Reclassification ---
// I've arbitrarily assigned your existing partners to the new categories 
// based on typical organizational types. You may need to adjust these assignments.
const partnersData: { category: PartnerCategory, icon: React.FC<any>, logos: { name: string, url: string }[] }[] = [
  {
    category: 'Academic, Research, and Educational Partners',
    icon: GraduationCap,
    logos: [
      {
        name: 'IEEE Learning Network ',
        url: 'https://mga.ieee.org/images/files/ILN.png'
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
        url: 'https://buc-univercity.com/aa.jpeg'
      },


            {
        name: 'CIS',
        url: 'https://drive.google.com/thumbnail?id=1RC4fzh_hSX8WgQPLE9Ll-d158VXK_xFd&sz=w1000'
      },
                       {
        name: 'NP',
        url: 'https://iecc.nu.edu.eg/wp-content/uploads/2024/07/IECC-LOGO-01.png'
      },


    ]
  },
  {
    category: 'Community Partners',
    icon: Users,
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
        name: 'IEEE Computer Society Tunsia Chapter',
        url: 'https://computer.ieee.tn/logos/cs%20tn%20section.webp'
      },
      {
        name: 'IEEE Computer Society Kenya Chapter',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbto2i5AorWUOPlOE_b7QgcruYcdhDf0bCoQ&s'
      },
      {
        name: 'FDC Summit', // Assuming this is a media/event partner
        url: 'https://itida.gov.eg/PublishingImages/logo/fdc-summit.png'
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
    name: 'IEEE R8 WIE',
        url: 'https://ieeer8.org/wp-content/uploads/2017/08/3.png'
      },


      {
        name: 'WIE',
        url: 'https://drive.google.com/thumbnail?id=12NsYUiFhyMPM6LNcWyGqMttv0FV1I-3Q&sz=w1000'
      },
      {
        name: 'IEEE Computational Intelligence Society-Egypt Chapter',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwcpN2_lho7ip4ALHVZ-Z74PVapq8SbNszCA&s'
      },

    ]
  },
  {
    category: 'Industrial Partners',
    icon: Factory,
    logos: [
      {
        name: 'Digital Arrow',
        url: '/imgs/digitalarrow.png',
      },
      {
        name: 'TENET',
        url: '/imgs/tenet.png',
      },
    ]
  },
  {
    category: 'Media Partners',
    icon: Newspaper,
    logos: [
      {
        name: 'Watan Rakami', // Assuming this is a media/event partner
        url: 'https://watanraqami.com/wp-content/uploads/2025/04/watanlogo.png'
      },
    ]
  },
];

const Partners = () => {

  return (
    <>
      <TopSection
        title="Our Partners"
        subtitle="Collaborating with leading institutions to drive AI innovation across academia, industry, and community."
      />
      <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="space-y-16">
          {partnersData.map((categoryData) => {
            const Icon = categoryData.icon; // Get the dynamic icon component
            
            // Only render categories that actually have partners
            if (categoryData.logos.length === 0) {
              return null;
            }

            return (
              <motion.div 
                key={categoryData.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-center mb-8">
                  {/* Use the dynamic icon for each category */}
                  <Icon className="w-6 h-6 text-[#f9a31a] mr-3" /> 
                  <h3 className="text-2xl font-bold text-gray-900">{categoryData.category}</h3>
                </div>

                <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-3 lg:grid-cols-4">
                  {categoryData.logos.map((partner, idx) => (
                    <motion.div
                      key={partner.name}
                      className="flex items-center justify-center p-8 bg-gray-50 rounded-lg w-full md:w-auto"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                    >
                      <img
                        src={partner.url}
                        alt={partner.name}
                        className="max-h-16 object-contain w-full md:w-auto"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-[#f9a31a] text-[#f9a31a] rounded-lg hover:bg-[#f9a31a] hover:text-white transition-colors"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default Partners;
