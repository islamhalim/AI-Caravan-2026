import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const summitDate = new Date("2025-12-11T09:00:00"); // 11th Dec 2025, 9 AM
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [progress, setProgress] = useState(0);

  // Background images
  const bgImages = [
    "/imgs/e0.jpg","/imgs/j1.jpg","/imgs/n0.png","/imgs/sut00.jfif",
    "/imgs/u1.jpg","/imgs/tu0.jpg","/imgs/nn1.jpg","/imgs/g1.jpg",
    "/imgs/e1.jpg","/imgs/n6.png","/imgs/d0.png","/imgs/d5.png","/imgs/TKH00.jpg",
  ];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Countdown & progress
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = summitDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Progress calculation (from now until summit)
      const totalDuration = summitDate.getTime() - new Date("2025-01-01T00:00:00").getTime(); // can adjust start date
      const elapsed = now.getTime() - new Date("2025-01-01T00:00:00").getTime();
      setProgress(Math.min((elapsed / totalDuration) * 100, 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Background slider
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    return () => clearInterval(bgInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 transition-opacity duration-1000"
          style={{ backgroundImage: `url(${bgImages[currentBgIndex]})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        ></div>
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight px-2 lg:whitespace-nowrap"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          IEEE Computer Society AI Caravan 2025
        </motion.h1>

        <motion.h4
          className="text-base sm:text-xl md:text-2xl font-semibold text-[#f9a31a] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          (R8 Edition)
        </motion.h4>

        <motion.p
          className="text-sm sm:text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed px-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          The Right to <span className="font-semibold text-[#f9a31a]">Knowledge</span> and
          <span className="font-semibold text-[#f9a31a]"> Practical Application in AI</span><br />
          Leaving No One Behind.
        </motion.p>

        {/* Summit Announcement Box */}
        <div className="bg-gradient-to-r from-[#fff9f0] to-[#fff4e0] border border-[#f9a31a]/40 rounded-2xl px-4 sm:px-6 py-4 shadow-md mb-6 inline-block w-full max-w-sm sm:max-w-lg mx-auto">
          <p className="text-sm sm:text-base font-bold text-[#f9a31a] mb-1 tracking-wide">
            🌟 The Grand Finale is Coming Soon!
          </p>
          <p className="text-gray-800 text-xs sm:text-base flex flex-wrap justify-center items-center gap-2 mb-1">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#f9a31a]" />
            <span>
              IEEE CS AI Caravan R8 Summit — <strong>11–13 December 2025</strong>
            </span>
          </p>
          <p className="text-gray-700 text-xs sm:text-sm">
            <strong>Joint Organization:</strong> AUC & Nile University
          </p>
          <p className="text-gray-700 italic mt-0.5 text-xs sm:text-sm">
            <strong>Theme:</strong> “Harnessing AI for Sustainable Economic Growth”
          </p>
        </div>

        {/* Glowing Banner */}


                {/* Countdown Banner */}
        <div className="flex justify-center gap-4 mb-4">
        <div className="mb-6 p-4 rounded-xl bg-[#f9a31a] text-white font-bold shadow-lg animate-pulse inline-block">
          Summit Starts 11 December 2025
        </div>
        </div>

        {/* Countdown Boxes */}
        <div className="flex justify-center gap-4 mb-4">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => {
            const value = Object.values(timeLeft)[idx];
            return (
              <div key={label} className="bg-white p-4 rounded-lg shadow-lg w-20 sm:w-24">
                <span className="text-2xl sm:text-3xl font-bold text-[#f9a31a]">{value}</span>
                <div className="text-xs sm:text-sm text-gray-700 mt-1">{label}</div>
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xl mx-auto h-4 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-4 bg-[#f9a31a] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
