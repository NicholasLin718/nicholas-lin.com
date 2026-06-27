import { useEffect } from "react";
import confetti from "canvas-confetti";

interface Props {
  active: boolean;
  origin: { x: number; y: number } | null;
}

export default function KonamiEasterEgg({ active, origin }: Props) {
  useEffect(() => {
    if (!active || !origin) return;
    confetti({
      particleCount: 180,
      spread: 100,
      origin,
      colors: ["#facc15", "#fde68a", "#fbbf24", "#fff", "#86efac"],
    });
  }, [active, origin]);

  return null;
}
