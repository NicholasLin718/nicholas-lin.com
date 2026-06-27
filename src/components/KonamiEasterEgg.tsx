import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

interface Props {
  active: boolean;
}

export default function KonamiEasterEgg({ active }: Props) {
  useEffect(() => {
    if (!active) return;
    confetti({
      particleCount: 180,
      spread: 100,
      origin: { y: 0.5 },
      colors: ["#facc15", "#fde68a", "#fbbf24", "#fff", "#86efac"],
    });
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="konami"
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl px-10 py-8 shadow-2xl text-center border border-yellow-300 dark:border-yellow-500">
            <div className="text-5xl mb-3">🎉</div>
            <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              You found it!
            </p>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">
              ↑↑↓↓←→←→BA — the classic
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
