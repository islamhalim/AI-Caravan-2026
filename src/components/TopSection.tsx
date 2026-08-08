import { motion } from "framer-motion";
import fadeInUp  from '../data/animations';

interface TopSectionProps {
  title: string;
  subtitle: string;
}

const TopSection = ({title, subtitle}: TopSectionProps) => {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12 sm:py-16 md:py-20" style={{ backgroundImage: 'linear-gradient(to right, #f9a31a, #f9a31a)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center md:text-left pt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-4xl text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default TopSection;