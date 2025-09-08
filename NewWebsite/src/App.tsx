import React, { useRef, useEffect, useState } from 'react';
import JobExperienceCard from './components/JobExperienceCard';

import { motion } from 'framer-motion';
import Intro from './components/Intro';
import LoadingScreen from './components/LoadingScreen';
import AnimatedCheckpoint from './components/AnimatedCheckpoint';
import { Experiences } from './components/experiences';
function App() {
  

  const [loading, setLoading] = useState(true);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [barHeight, setBarHeight] = useState(0);
  const [passedCheckpoints, setPassedCheckpoints] = useState<number[]>([]);

  useEffect(() => {
    const imgPromises = Experiences
      .map((exp) => exp.previewImage)
      .filter(Boolean)
      .map((src) => {
        return new Promise((res) => {
          const img = new Image();
          img.onload = res;
          img.onerror = res;
          img.src = src!;
        });
      });

    Promise.all(imgPromises).then(() => {
      setTimeout(() => setLoading(false), 500);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineTop = timelineRef.current.getBoundingClientRect().top + window.scrollY;
      const timelineHeight = timelineRef.current.offsetHeight;
      const adjustedBottom = window.scrollY + window.innerHeight * 0.75;
      const progress = adjustedBottom - timelineTop;
      const clampedHeight = Math.max(0, Math.min(progress, timelineHeight));
      setBarHeight(clampedHeight);

      const checkpoints = Array.from(document.querySelectorAll('.timeline-checkpoint'));
      const newPassed: number[] = [];
      checkpoints.forEach((el, idx) => {
        const htmlEl = el as HTMLElement;
        const elTop = htmlEl.getBoundingClientRect().top + window.scrollY;
        const elCenter = elTop + htmlEl.offsetHeight / 2;
        if (adjustedBottom >= elCenter) {
          newPassed.push(idx);
        }
      });
      setPassedCheckpoints(newPassed);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4">
      <Intro />

      <main className="relative max-w-7xl mx-auto">
        <div
          ref={timelineRef}
          className="hidden md:block relative before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:w-1 before:bg-gray-300 before:h-full before:top-0"
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 w-1 bg-yellow-400 z-10 transition-[height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ height: `${barHeight}px` }}
          />

          {Experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`w-full flex ${i % 2 === 0 ? 'justify-start pr-8' : 'justify-end pl-8'} relative z-10 items-center`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <AnimatedCheckpoint
                active={passedCheckpoints.includes(i)}
                shrinking={passedCheckpoints.includes(i)}
              />
              <div className="w-full md:w-1/2">
                <JobExperienceCard {...exp} align={i % 2 === 0 ? 'left' : 'right'} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden space-y-10 relative">
          <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-gray-300"></div>
          {Experiences.map((exp, i) => (
            <div key={i} className="pl-12 relative items-center">
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
              <JobExperienceCard {...exp} align="mobile" />
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>&copy; 2025 Nicholas Lin</p>
      </footer>
    </div>
  );
}

export default App;
