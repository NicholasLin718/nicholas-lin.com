import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&";

function randChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export function useScrambleText(target: string, delayMs = 200): string {
  const [display, setDisplay] = useState(() =>
    target.split("").map((c) => (c === " " ? " " : randChar())).join("")
  );

  useEffect(() => {
    const chars = target.split("");
    const startTime = Date.now();
    const tickMs = 40;
    const scrambleDuration = 300; // ms each letter scrambles before locking
    const lockStagger = 60;       // ms between successive letters locking

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime - delayMs;
      // How many letters should be locked by now
      const lockedUpTo = Math.max(
        0,
        Math.floor((elapsed - scrambleDuration) / lockStagger) + 1
      );

      if (lockedUpTo >= chars.length) {
        setDisplay(target);
        clearInterval(interval);
        return;
      }

      setDisplay(
        chars
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < lockedUpTo) return ch;
            return randChar();
          })
          .join("")
      );
    }, tickMs);

    return () => clearInterval(interval);
  }, [target, delayMs]);

  return display;
}
