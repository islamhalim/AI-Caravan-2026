import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket } from 'lucide-react';

import Team from './Team';
import Outcomes from './Outcomes';
import TopSection from '../TopSection';
const About = () => {
  return (
    <section id="about" className=" bg-white">
      <TopSection
        title="About the AI Caravan"
        subtitle="Bridging the AI knowledge gap and fostering innovation through comprehensive training and practical application."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">


        {/* Executive Summary Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h3>
          <p className="text-lg text-gray-600">
            The IEEE Computer Society AI Caravan is an outreach initiative designed to promote access to artificial intelligence (AI) knowledge as a means of advancing human development, aligning with the core value of the 2030 Agenda for Sustainable Development — “leaving no one behind.” The Caravan launched in February 2025 with its first edition (R8) held in Egypt with plans to extend across Europe, the Middle East, and Africa. The Caravan brought together universities, research institutions, and global AI experts to deliver talks and panel discussions, along with hands-on training. The theme behind the caravan is “The Right to Knowledge and Practical Application in AI,” which emphasizes addressing locally relevant challenges while promoting the responsible and ethical use of AI technologies.
            <br /><br />
            Over the course of 9 months, 30 events have been held in Egypt, Tunisia, Uganda, Greece, Jordan, and Kenya engaging more than 600 participants including students, faculty, professionals, and policymakers through in-person and hybrid sessions that addressed both technical foundations and domain-specific applications in areas such as healthcare, finance, accessibility, and cybersecurity.
            <br /><br />
            The R8 Edition will culminate in a leading international summit in December 2025 focused on applied and multidisciplinary research and technologies for AI. The initiative has strengthened ties between academic and professional communities, broadened awareness of AI’s practical uses, and laid the groundwork for long-term collaboration and future programs across Region 8 with efforts to expand to other regions across the world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <motion.div 
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#f9a31a] p-3 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">Empowering Professionals</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Briefcase className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Advanced AI training</span>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Practical AI project development</span>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Industry-focused implementation</span>
              </li>
            </ul>
            <div className="flex flex-col md:flex-row gap-2 mb-4"></div>
            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
                <img src="/imgs/nu33.jpg" height={200} width={300} alt="AI Caravan" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mb-4"></div>
            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
                <img src="/imgs/g3.jpg" height={200} width={300} alt="AI Caravan" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#f9a31a] p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">Educating Students</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <GraduationCap className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Fundamental AI concepts</span>
              </li>
              <li className="flex items-start">
                <GraduationCap className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Entrepreneurship skills development</span>
              </li>
              <li className="flex items-start">
                <GraduationCap className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>GenZ Juniors competition participation</span>
              </li>
            </ul>
            <div className="flex flex-col md:flex-row gap-2 mb-4"></div>
            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
                <img src="/imgs/p4.png" height={200} width={300} alt="AI Caravan" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mb-4"></div>
            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
                <img src="/imgs/j10.jpg" height={200} width={300} alt="AI Caravan" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#f9a31a] p-3 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">AI Summit</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Rocket className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>AI leaders</span>
              </li>
              <li className="flex items-start">
                <Rocket className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Knowledge exchange</span>
              </li>
              <li className="flex items-start">
                <Rocket className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Fostering collaboration</span>
              </li>
            </ul>
            <div className="flex flex-col md:flex-row gap-2 mb-4"></div>
            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
                <img src="/imgs/p5.png" height={200} width={300} alt="AI Caravan" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mb-4"></div>
            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
                <img src="/imgs/p6.png" height={200} width={300} alt="AI Caravan" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Team />
      <Outcomes />
    </section>
  );
};

export default About;