import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
        name: 'Andrew Seely',
        photo: 'https://ieeecs-media.computer.org/wp-media/2018/09/30104518/Andrew-Seely.png'
      },

      {
        name: 'Yuhong Liu',
        photo: 'https://ieeecs-media.computer.org/wp-media/2022/02/16092829/Yuhong.2024.jpg'
      },

      {
        name: ' George J. Proeller',
        photo: 'https://csdl-images.ieeecomputer.org/mags/co/2023/08/figures/cselection.a12-3290268.gif'
      },

      {
        name: 'Islam Tharwat',
        photo: 'https://nu.edu.eg/sites/default/files/2022-12/whatsapp_image_2022-12-20_at_11.53.17_pm_1.jpeg'
      },

    {
      name: 'Eric Berkowitz',
      photo: 'https://media.licdn.com/dms/image/v2/D5603AQGnSOerV41JmQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700236625393?e=2147483647&v=beta&t=VqmC3FAxCfnItShUGtV3owXfkD3fgKEJQ3jSoOgAZwE'
    },

    {
        name: 'Erol Gelenbe',
       photo: 'https://ieeecs-media.computer.org/wp-media/2022/01/31164513/Erol-Gelenbe-Small.png'
      },
      
    {
      name: 'David Alan Grier',
     photo: 'https://elliott.gwu.edu/sites/g/files/zaxdzs4886/files/image/grier_david.jpeg'
    },
    {
      name: 'Adel Elmaghraby',
     photo: 'https://bibalex.org/bva2020/Attachments/Speakers/249_AEcrop.jpg'
    },
    {
      name: 'Cyril Onwubiko',
     photo: 'https://ieeecs-media.computer.org/wp-media/2018/09/08100857/CyrilOnwubiko_BoG_Photo.jpeg'
    },
    {
      name: 'Kostas Karpouzis',
       photo: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNkSiG-w-12GLBBu_jexw6WgWhVc3GY-fB8rp2qGbVt4TBZKbT'
    },
    {
      name: 'Nancy R. Mead',
      photo: 'https://ieeecs-media.computer.org/wp-media/2020/01/30142511/Nancy-Mead-small.png'
    },
    {
        name: 'Yiran Chen',
        photo: 'https://ieeecs-media.computer.org/wp-media/2018/04/28174547/Yiran-Chen.jpg'
      },

      {
        name: 'David Koehler',
        photo: 'https://media.licdn.com/dms/image/v2/C4E03AQH_iZrORKzwOg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1565003950184?e=1787788800&v=beta&t=eRFdkPQyogCQ51Tr8WmEKDQdaAyeFs9JIkzJSSxTfdg'
      },

      {
        name: 'Sharon Kerrick',
        photo: 'https://engineering.louisville.edu/cybercenter/wp-content/uploads/sites/8/2024/01/kerrickSharon_headshot.jpg'
      },



      {
        name: 'Robert Kubash',
        photo: 'https://engineering.louisville.edu/cybercenter/wp-content/uploads/sites/8/2024/01/kubashRobert_headshot.jpg'
      },

      {
        name: 'Ahmed M. Darwish',
        photo: 'https://www.amdarwish.com/AMDarwish_MedRes_Processed_Portrait_2023.jpg'
      },

      {
        name: 'Samir I. Shaheen',
        photo: 'https://staff.eng.cu.edu.eg/image.aspx?FileName=239.jpg'
      },

      {
        name: 'Mahmoud ALLAM',
        photo: 'https://i1.rgstatic.net/ii/profile.image/11431281289048373-1730991919443_Q512/Mahmoud-Allam.jpg'
      },

      {
        name: 'Ahmed Hassan Yousef',
        photo: 'https://media.licdn.com/dms/image/v2/C5603AQGXpv6aRVcPhg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1647036950363?e=2147483647&v=beta&t=OH4T5yECcX43Quw-VAUqQN2g-RPTT-g_3qhjNOjBXSQ'
      },

     {
        name: 'Atef El Fekky',
        photo: 'https://img.youm7.com/large/s120131523163.jpg'
      },

      {
        name: 'Ahmed Abdel-Hafez',
        photo: 'https://platforms-root-technologies.com/icec-2024/wp-content/uploads/2024/10/Ahmed-Ali-Abdel-Hafez.gif'
      },






      {
        name: 'Ahmed Hazem El-Mahdy',
        photo: 'https://www.nu.edu.eg/sites/default/files/2023-03/327995676_722354982769064_9155476884185803130_n.jpg'
      },

      {
        name: 'Walid Al-Atabany',
        photo: 'https://itcs.nu.edu.eg/sites/it.nu.edu/files/2022-12/whatsapp_image_2022-12-20_at_11.46.00_pm.jpeg'
      },

          {
        name: 'Ahmed H. Madian',
        photo: 'https://ieee-cas.org/files/ieeecass/styles/responsive_4_5_760w/public/images/contacts/madian_pic.jpeg?h=4e06fa8c&itok=byQ4aady'
      },

      {
        name: 'Sherin Youssef ',
        photo: 'https://attend.ieee.org/wieils-egypt-2024/wp-content/uploads/sites/649/MyPhoto-SherinYoussef-IMG-20220224-WA0014-200x200.jpg'
      },

      {
        name: 'AbdEl-Monem El-Sharkawy',
        photo: 'https://static.wixstatic.com/media/7440ae_3bd82cb578b847b7b0cd930473cf8fe1~mv2.jpg/v1/fill/w_382,h_473,al_c,q_80/153%20AbdEl-Monem%20El-Sharkawy.jpg'
      },


      {
        name: 'Eslam Moussa',
        photo: 'https://media.licdn.com/dms/image/v2/D4D03AQGg3p7Q-7rVbg/profile-displayphoto-scale_400_400/B4DZkgJIyXIcAg-/0/1757180891385?e=1787788800&v=beta&t=3-jfRJlMAhMfT2pJIiAhWq_N9k_5L-hldO8EM3_uDAY'
      },

      {
        name: 'Ahmed Saleh',
        photo: 'https://smart.nu.edu.eg/sites/smart.nu.edu/files/2024-06/ahmed_saleh.png'
      },

 

      {
        name: 'Batoul Rida Haidar',
        photo: 'https://tkh.edu.eg/wp-content/uploads/2022/05/Batoul.jpeg'
      },


      {
        name: 'Doaa Salem',
        photo: 'https://media.licdn.com/dms/image/v2/D4D03AQGa-c81hSTWsA/profile-displayphoto-shrink_200_200/B4DZP_hpZwHcAc-/0/1735158844807?e=2147483647&v=beta&t=X4ODQzQeBpf2JCXh2Uy4EMEdXD8x4W3HGvRr226EzCo'
      },

      {
        name: 'Hadeer Ehab',
        photo: 'https://scholar.googleusercontent.com/citations?view_op=view_photo&user=SEwt-LQAAAAJ&citpid=1'
      },

      {
        name: 'Mohamed Sobh',
        photo: 'https://media.licdn.com/dms/image/v2/C5603AQH0cFEybo26lQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516503462204?e=2147483647&v=beta&t=nN52myIkuoyj2sb32QK6fRkHCGKKMrVXHKujDDu_Hdk'
      },

      {
        name: 'Amal Elgammal',
        photo: 'https://eui.edu.eg/sites/default/files/2024-05/gamell.jpeg'
      },

      {
        name: 'Mohamed Mostafa Fouad',
        photo: 'https://aast.edu/getData/retreiveOnePICStaff.php?img=530_972_My%20pic2020_1.jpg'
      },

          {
        name: 'Samar Nour',
        photo: 'https://i1.rgstatic.net/ii/profile.image/11431281152783996-1682158017570_Q512/Samar-Nour.jpg'
      },

      {
        name: 'Heba Kaoud',
        photo: 'https://mot.nu.edu.eg/sites/gs.nu.edu/files/2022-09/heba-ka3od.jpg'
      },

          {
        name: 'Haitham Ghalwash',
        photo: 'https://media.licdn.com/dms/image/v2/C4E03AQE4UlXoReoX4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1590521864181?e=2147483647&v=beta&t=ujVhkSl_AuKd1j3k4gp_VhjjrYuL2s-L4ugvuD_mRqI'
      },

      {
        name: 'Hady H. Fayek',
        photo: 'https://media.licdn.com/dms/image/v2/D4D03AQHWBHhn3PBp5Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725275878976?e=2147483647&v=beta&t=XYW25hh5KJFz5NPWadzDy3DCpyK_-wqatAGP8fhSf4o'
      },

     {
        name: 'Mohamed Aly Mohamed',
        photo: 'https://media.licdn.com/dms/image/v2/D5603AQFo_myPz4bnPQ/profile-displayphoto-shrink_400_400/B56ZTxFsNFGoAk-/0/1739211589775?e=2147483647&v=beta&t=i-XQxAPY3F9cE0Szo2ngCTWQVVEBfuCGI_YAsJK1shU'
      },

      {
        name: 'Mousa Al-Akhras',
        photo: 'https://media.licdn.com/dms/image/sync/v2/D4D27AQGYRzPq1g8-Og/articleshare-shrink_800/articleshare-shrink_800/0/1741395053218?e=2147483647&v=beta&t=zO7vNBc1yV5ySTY3o5Y2wGwcFVQk_KD2eUJN6NG_FL4'
      },


    // Add more members as needed
  ];

  return (
    <section id="team" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
        <div className="flex items-center justify-center mb-4">
          <Users className="w-6 h-6 text-[#f9a31a] mr-3" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
          </div>

          <p className="text-lg text-gray-600">
            The passionate minds driving the AI Caravan forward
          </p>
        </motion.div>



        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-center">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <p className="text-center font-medium text-gray-800">{member.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
