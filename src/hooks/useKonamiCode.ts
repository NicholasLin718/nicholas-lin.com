import { useEffect, useState, useRef } from "react";

const CLICK_COUNT = 5;
const RESET_MS = 2000;

interface KonamiResult {
  triggered: boolean;
  origin: { x: number; y: number } | null;
}

export function useKonamiCode(): KonamiResult {
  const [result, setResult] = useState<KonamiResult>({ triggered: false, origin: null });
  const clicks = useRef(0);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      clicks.current += 1;

      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => {
        clicks.current = 0;
      }, RESET_MS);

      if (clicks.current >= CLICK_COUNT) {
        clicks.current = 0;
        if (resetTimer.current) clearTimeout(resetTimer.current);
        const origin = {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        };
        setResult({ triggered: true, origin });
        setTimeout(() => setResult({ triggered: false, origin: null }), 100);
      }
    };

    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("click", onClick);
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  return result;
}
