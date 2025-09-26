import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";

import JobExperienceCard from "./components/JobExperienceCard";
import Intro from "./components/Intro";
import LoadingScreen from "./components/LoadingScreen";
import { Experiences } from "./components/experiences";

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
    <div className="min-h-screen bg-yellow-50 py-16 px-4 relative">
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
            <motion.main
              className="max-w-4xl mx-auto mt-8 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {Experiences.map((exp, i) => (
                <motion.div
                  key={i}
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
            <footer className="mt-16 text-center text-gray-500 text-sm">
              <p>&copy; 2025 Nicholas Lin</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;