import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Sun, Moon } from "lucide-react";

import JobExperienceCard from "./components/JobExperienceCard";
import Intro from "./components/Intro";
import LoadingScreen from "./components/LoadingScreen";
import CursorTrail from "./components/CursorTrail";
import KonamiEasterEgg from "./components/KonamiEasterEgg";
import { Experiences } from "./components/experiences";
import { useKonamiCode } from "./hooks/useKonamiCode";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const konamiTriggered = useKonamiCode();

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  useEffect(() => {
    // Preload preview images
    const imgPromises = Experiences.map((exp) => exp.previewImage)
      .filter(Boolean)
      .map(
        (src) =>
          new Promise((res) => {
            const img = new Image();
            img.onload = res;
            img.onerror = res;
            img.src = src!;
          })
      );

    // Preload intro portrait
    const introPhotoPromise = new Promise((res) => {
      const img = new Image();
      img.onload = res;
      img.onerror = res;
      img.src = "/forestPortraitZoomed.png";
    });

    // Fallback so app isn’t stuck
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    Promise.all([...imgPromises, introPhotoPromise]).then(() => {
      clearTimeout(fallbackTimer);
      setTimeout(() => setLoading(false), 600);
    });

    return () => clearTimeout(fallbackTimer);
  }, []);


  return (
    <div
      className={`${isDark ? 'dark' : ''} min-h-screen py-16 px-4 relative transition-colors duration-300`}
      style={{ background: isDark
        ? 'radial-gradient(ellipse at top, #1c1a0e 0%, #0f0e07 60%)'
        : 'radial-gradient(ellipse at top, #fffff5 0%, #fefce8 60%)'
      }}
    >
      <CursorTrail />
      <KonamiEasterEgg active={konamiTriggered} />
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow text-gray-500 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 backdrop-blur-sm transition-all duration-200"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LoadingScreen />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Intro />
            <motion.div
              className="max-w-4xl mx-auto mb-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
                Experience
              </h2>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </motion.div>
            <motion.main
              className="max-w-4xl mx-auto mt-8 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {Experiences.map((exp) => (
                <motion.div
                  key={exp.company}
                  variants={itemVariants}
                  className="mb-8"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <JobExperienceCard {...exp} />
                </motion.div>
              ))}
            </motion.main>
            <footer className="mt-16 text-center text-gray-500 dark:text-gray-500 text-sm">
              <p>&copy; 2025 Nicholas Lin</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;