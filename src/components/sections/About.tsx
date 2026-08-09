import { motion } from 'framer-motion';
import {
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  School,
  Sparkles,
} from 'lucide-react';

import Team from './Team';
import Outcomes from './Outcomes';
import TopSection from '../TopSection';

const audiences = [
  {
    number: '01',
    title: 'Professionals',
    eyebrow: 'Upskill. Apply. Lead.',
    description:
      'Practical learning experiences help professionals understand emerging AI technologies, apply them responsibly, and turn knowledge into solutions for their industries and communities.',
    highlights: ['Advanced AI training', 'Industry-focused applications', 'Responsible AI leadership'],
    icon: BriefcaseBusiness,
    images: [
      { src: '/imgs/042A0408.jpg', alt: 'Professionals exchanging ideas during an AI Caravan workshop' },
      { src: '/imgs/IMG_5559.png', alt: 'A diverse professional community at an IEEE Computer Society event' },
      { src: '/imgs/569443138_122133392216959552_7396368427657888153_n - Copy.jpg', alt: 'Professionals participating in an AI Caravan learning session' },
    ],
  },
  {
    number: '02',
    title: 'University Students & Young Professionals',
    eyebrow: 'Learn. Build. Launch.',
    description:
      'University students and young professionals gain accessible technical foundations, hands-on experience, mentorship, and connections that can accelerate their academic and early-career journeys.',
    highlights: ['Career-ready AI skills', 'Hands-on project experience', 'Mentorship and peer networks'],
    icon: GraduationCap,
    images: [
      { src: '/imgs/NP101300.JPG', alt: 'University students taking part in an interactive AI Caravan session' },
      { src: '/imgs/1762092819429.jpg', alt: 'Young professionals collaborating during an AI activity' },
      { src: '/imgs/042A3835.jpg', alt: 'University learners engaging with an AI Caravan speaker' },
    ],
  },
  {
    number: '03',
    title: 'School Students',
    eyebrow: 'Explore. Imagine. Create.',
    description:
      'Age-appropriate experiences introduce school students to AI through curiosity, creativity, and responsible use—helping the next generation see themselves as technology creators.',
    highlights: ['Friendly AI foundations', 'Creative, guided activities', 'Responsible technology awareness'],
    icon: School,
    images: [
      { src: '/imgs/535090103_122163416654794889_1806144149587838493_n.jpg', alt: 'School students discovering artificial intelligence with the AI Caravan' },
      { src: '/imgs/622822301_122183508824794889_6556034636183667711_n.jpg', alt: 'Young learners participating in a practical technology activity' },
      { src: '/imgs/623812727_122183754398794889_5179416784368487808_n.jpg', alt: 'School students learning together at an AI Caravan event' },
    ],
  },
  {
    number: '04',
    title: 'AI Summit',
    eyebrow: 'Connect. Exchange. Advance.',
    description:
      'The AI Summit brings together experts, educators, industry leaders, students, and policymakers to exchange knowledge, showcase applied innovation, and create new regional collaborations.',
    highlights: ['Expert talks and panels', 'Cross-sector knowledge exchange', 'Regional collaboration'],
    icon: Sparkles,
    images: [
      { src: '/imgs/IMG_1482.JPG', alt: 'The diverse IEEE Computer Society community gathered at the AI Summit' },
      { src: '/imgs/IMG_1435 (1).JPG', alt: 'AI Caravan participants and leaders at the summit' },
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white">
      <TopSection
        title="About the AI Caravan"
        subtitle="Making practical, responsible AI knowledge accessible across generations, careers, and communities."
      />

      <div className="mx-auto max-w-7xl px-4 pb-8 pt-10 sm:px-6 lg:px-8">
        <motion.div
          className="relative mb-20 overflow-hidden rounded-3xl bg-[#071b33] px-6 py-10 text-white shadow-xl sm:px-10 lg:px-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f9a31a]/20 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#f9a31a]">Our purpose</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">The right to knowledge and practical application in AI</h2>
            </div>
            <div className="space-y-4 text-base leading-7 text-slate-200 sm:text-lg">
              <p>
                The IEEE Computer Society AI Caravan is an outreach initiative that expands access to artificial intelligence knowledge while supporting human development and the 2030 Agenda principle of leaving no one behind.
              </p>
              <p>
                Through hands-on training, expert talks, community events, and cross-border collaboration, the Caravan connects academic and professional communities and promotes practical, ethical AI solutions for locally relevant challenges.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#e58a00]">Who we serve</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">One caravan. Four connected communities.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Our programs meet people at different stages of their learning and professional journeys, creating an inclusive pathway into AI.
          </p>
        </div>

        <div className="space-y-10">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={audience.title}
                className="grid overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:grid-cols-2"
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55 }}
              >
                <div className={`relative min-h-[320px] sm:min-h-[400px] ${isReversed ? 'lg:order-2' : ''}`}>
                  <img
                    src={audience.images[0].src}
                    alt={audience.images[0].alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071b33]/80 via-transparent to-transparent" />
                  <div className={`absolute bottom-4 left-4 right-4 grid gap-3 ${audience.images.length > 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {audience.images.slice(1).map((image) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className="h-24 w-full rounded-xl border-2 border-white/90 object-cover shadow-lg sm:h-32"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </div>

                <div className={`flex flex-col justify-center p-7 sm:p-10 lg:p-12 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f9a31a] shadow-lg shadow-orange-200">
                      <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    <span className="text-5xl font-black text-slate-200" aria-hidden="true">{audience.number}</span>
                  </div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#d77e00]">{audience.eyebrow}</p>
                  <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">{audience.title}</h3>
                  <p className="mt-4 leading-7 text-gray-600">{audience.description}</p>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {audience.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f9a31a]" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <Team />
      <Outcomes />
    </section>
  );
};

export default About;
