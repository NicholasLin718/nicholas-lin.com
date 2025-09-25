import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../images/duck.png';

const LoadingScreen: React.FC = () => (
  <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-100 flex items-center justify-center z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center"
    >
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 animate-ping rounded-full bg-yellow-400 opacity-75"></div>
        <div className="relative w-24 h-24 bg-yellow-300 rounded-full shadow-lg overflow-hidden flex items-center justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg font-semibold text-gray-700"
      >
        Please hold, Nicholas is buffering...
      </motion.p>
    </motion.div>
  </div>
);

export default LoadingScreen;
