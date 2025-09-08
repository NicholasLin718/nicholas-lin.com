import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import profilePic from '../images/forestPortraitZoomed.png';

const HeroSection: React.FC = () => (
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
);

export default HeroSection;
