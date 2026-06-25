import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Dot {
  id: number;
  x: number;
  y: number;
}

export default function CursorTrail() {
  const [dots, setDots] = useState<Dot[]>([]);
  const idRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    // No trail on touch-only devices (no cursor)
    if (window.matchMedia('(hover: none)').matches) return;

    const THROTTLE_MS = 40;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTimeRef.current < THROTTLE_MS) return;
      lastTimeRef.current = now;

      const id = idRef.current++;
      setDots(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const removeDot = (id: number) => {
    setDots(prev => prev.filter(d => d.id !== id));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <AnimatePresence>
        {dots.map(dot => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            onAnimationComplete={() => removeDot(dot.id)}
            style={{
              position: 'fixed',
              left: dot.x - 4,
              top: dot.y - 4,
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: '#f59e0b',
              pointerEvents: 'none',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
