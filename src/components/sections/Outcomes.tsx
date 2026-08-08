import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import TopSection from '../TopSection';

// Counter animation component
const Counter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        setCount(Math.floor(easeOutQuart * value));

        if (progress < duration) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl font-bold text-[#f9a31a]">
      {count}{suffix}
    </span>
  );
};

const Outcomes = () => {
  return (
    <>
      <TopSection
        title="Expected Outcomes"
        subtitle="Measurable impact and tangible results from our program across multiple dimensions."
      />
      <section id="outcomes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#f9a31a] rounded-full mb-6 mx-auto">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Pilot Projects</h3>
            <div className="text-center">
              <Counter value={10} suffix="+" />
              <p className="text-gray-600 mt-2">
                Successful AI implementations across different sectors
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#f9a31a] rounded-full mb-6 mx-auto">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">New Startups</h3>
            <div className="text-center">
              <span className="text-4xl font-bold text-[#f9a31a]">3-5</span>
              <p className="text-gray-600 mt-2">
                AI-focused startups launched from the program
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
          >
            <div className="flex items-center justify-center w-16 h-16 bg-[#f9a31a] rounded-full mb-6 mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Sector Strategies</h3>
            <div className="text-center">
              <Counter value={5} suffix="+" />
              <p className="text-gray-600 mt-2">
                Industry-specific AI implementation strategies
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 bg-white rounded-xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Impact Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Trained Professionals', value: 150, suffix: '+' },
              { label: 'Student Participants', value: 250, suffix: '+' },
              { label: 'Workshop Hours', value: 100, suffix: '+' },
              { label: 'Industry Partners', value: 10, suffix: '+' }
            ].map((metric, idx) => (
              <motion.div 
                key={metric.label} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="text-3xl font-bold mb-2">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Outcomes;