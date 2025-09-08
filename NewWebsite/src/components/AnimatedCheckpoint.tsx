import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedCheckpoint = ({ active, shrinking }: { active: boolean; shrinking: boolean }) => {
  const controls = useAnimation();

  React.useEffect(() => {
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

export default AnimatedCheckpoint;
