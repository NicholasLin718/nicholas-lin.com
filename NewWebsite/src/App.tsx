import React, { useRef, useEffect, useState } from 'react';
import JobExperienceCard from './components/JobExperienceCard';
import skydioLogo from './images/logos/skydio.png';
import waabiLogo from './images/logos/waabi.png';
import verdantLogo from './images/logos/verdant.png';
import lcboLogo from './images/logos/lcbo.png';
import portableIntelligenceLogo from './images/logos/pi.png';
import skydioBg from './images/banners/skydio-bg.mp4';
import skydioPreview from './images/banners/skydio-preview.jpg';
import waabiBg from './images/banners/waabi-bg.mp4';
import waabiPreview from './images/banners/waabi-preview.jpg';
import verdantBg from './images/banners/verdant-bg.mp4';
import verdantPreview from './images/banners/verdant-preview.jpg';
import lcboPreview from './images/banners/lcbo-preview.jpg';
import piPreview from './images/banners/pi-preview.png';
import profilePic from './images/forestPortraitZoomed.png';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useAnimation } from 'framer-motion';
const AnimatedCheckpoint = ({ active, shrinking }: { active: boolean; shrinking: boolean }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (active) {
      controls.start({
        scale: 1.5,
        backgroundColor: '#facc15',
        boxShadow: '0px 0px 12px rgba(0,0,0,0.3)',
        transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      });
    } else if (shrinking) {
      controls.start({
        scale: 1,
        backgroundColor: '#facc15',
        boxShadow: '0px 0px 0px rgba(0,0,0,0)',
        transition: { duration: 0.2, ease: 'easeInOut' },
      });
    } else {
      controls.start({
        scale: 1,
        backgroundColor: '#3b82f6',
        boxShadow: '0px 0px 0px rgba(0,0,0,0)',
        transition: { duration: 0.3, delay: 0.2, ease: [0.4, 0, 0.2, 1] },
      });
    }
  }, [active, shrinking, controls]);

  return (
    <motion.div
      className="timeline-checkpoint absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white z-20"
      animate={controls}
      initial={false}
    >
      {active && (
        <span className="absolute inset-0 animate-ping rounded-full bg-yellow-400 opacity-50"></span>
      )}
    </motion.div>
  );
};

function App() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Skydio',
      duration: 'May 2025 – Present',
      description: 'Developed and maintained user interfaces using React and Tailwind CSS.',
      logo: skydioLogo,
      previewImage: skydioPreview,
      backgroundMedia: skydioBg,
      video: true,
    },
    {
      title: 'Software Engineer Intern',
      company: 'Waabi',
      duration: 'May 2024 – August 2024, Jan 2025 – April 2025',
      description:
        'Contributed to the development of autonomous driving software, focusing on backend services and data processing.',
      logo: waabiLogo,
      previewImage: waabiPreview,
      backgroundMedia: waabiBg,
      video: true,
    },
    {
      title: 'Full Stack Engineer Intern',
      company: 'Verdant Robotics',
      duration: 'Sep 2023 – Dec 2023',
      description:
        'Worked on full-stack development for agricultural robotics, enhancing data visualization and user interaction.',
      logo: verdantLogo,
      previewImage: verdantPreview,
      backgroundMedia: verdantBg,
      video: true,
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'LCBO Next',
      duration: 'Jan 2023 – Apr 2023',
      description:
        'Developed web applications for the LCBO, focusing on user experience and backend integration.',
      logo: lcboLogo,
      previewImage: lcboPreview,
    },
    {
      title: 'Software Developer Intern',
      company: 'Portable Intelligence Inc.',
      duration: 'May 2022 – Aug 2022',
      description:
        'Contributed to the development of AI-driven applications, focusing on data analysis and machine learning.',
      logo: portableIntelligenceLogo,
      previewImage: piPreview,
    },
  ];

  const [loading, setLoading] = useState(true);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [barHeight, setBarHeight] = useState(0);
  const [passedCheckpoints, setPassedCheckpoints] = useState<number[]>([]);

  useEffect(() => {
    const imgPromises = experiences
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
      setTimeout(() => setLoading(false), 500); // min delay to prevent flash
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
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-100 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center"
        >
          {/* Animated circle */}
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 animate-ping rounded-full bg-yellow-400 opacity-75"></div>
            <div className="relative w-24 h-24 bg-yellow-300 rounded-full shadow-lg flex items-center justify-center">
              <span className="text-3xl font-bold text-white">NL</span>
            </div>
          </div>

          {/* Text animation */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg font-semibold text-gray-700"
          >
            Loading Nicholas' timeline...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto mb-20 text-center"
      >
        <motion.img
          src={profilePic}
          alt="Profile"
          className="mx-auto w-64 h-64 rounded-full shadow-lg mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Nicholas Lin</h1>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          I'm a passionate software engineer focused on building intuitive user experiences and
          performant web applications. Here's a look into my journey so far.
        </p>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-6 mt-6 text-gray-500"
        >
          <a
            href="mailto:nicholas@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://github.com/nicholaslin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/nicholaslin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
        </motion.div>
      </motion.section>

      <main className="relative max-w-7xl mx-auto">
        <div
          ref={timelineRef}
          className="hidden md:block relative before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:w-1 before:bg-gray-300 before:h-full before:top-0"
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 w-1 bg-yellow-400 z-10 transition-[height] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ height: `${barHeight}px` }}
          />

          {experiences.map((exp, i) => (
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
                shrinking={
                  passedCheckpoints.includes(i)
                }
              />
              <div className="w-full md:w-1/2">
                <JobExperienceCard {...exp} align={i % 2 === 0 ? 'left' : 'right'} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden space-y-10 relative">
          <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-gray-300"></div>
          {experiences.map((exp, i) => (
            <div key={i} className="pl-12 relative flex items-center">
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
