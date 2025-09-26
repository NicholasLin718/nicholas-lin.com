import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Intro: React.FC = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="max-w-5xl mx-auto mb-20 text-center"
  >
    <motion.img
      src='/forestPortraitZoomed.png'
      alt="Profile"
      className="mx-auto w-64 h-64 rounded-full shadow-lg mb-4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.3 }}
    />
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">Nicholas Lin</h1>
    <motion.p
      className="text-gray-700 mt-5 text-lg max-w-4xl mx-auto font-medium leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      I'm a fourth-year Software Engineering student at the University of Waterloo. From designing frontend tools to scaling backend systems, I enjoy building software that puts users first 🫂 
    </motion.p>

    <motion.p
      className="text-gray-600/90 mt-4 text-base max-w-4xl mx-auto leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      I'm also a washed competitive badminton player, overhang-enjoying rock climber, and I sometimes game until 4am.
    </motion.p>

    <motion.p
      className="text-gray-500 mt-12 text-base italic max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      Check out my experiences below!
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex justify-center gap-6 mt-6 text-gray-500"
    >
      <a
        href="mailto:n39lin@uwaterloo.ca"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 transition-colors"
        aria-label="Email"
      >
        <Mail size={22} />
      </a>
      <a
        href="https://github.com/NicholasLin718"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 transition-colors"
        aria-label="GitHub"
      >
        <Github size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/nicholaslin718/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-500 transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={22} />
      </a>
    </motion.div>
  </motion.section>
);

export default Intro;
