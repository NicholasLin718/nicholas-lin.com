import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Skills, CategoryColors, type Skill, type SkillCategory } from "./skillsData";

const W = 800;
const H = 340;
const STAR_R = 4;

// Deterministic position from skill name so stars don't jump on re-render.
// Category clusters: Frontend top-left, Backend top-right, Languages bottom-left, Infra bottom-right
const CLUSTER_CENTERS: Record<SkillCategory, [number, number]> = {
  Frontend:  [W * 0.25, H * 0.35],
  Backend:   [W * 0.72, H * 0.35],
  Languages: [W * 0.28, H * 0.72],
  Infra:     [W * 0.70, H * 0.70],
};
const SPREAD = 90;

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function starPos(skill: Skill): [number, number] {
  const h = hashStr(skill.name);
  const [cx, cy] = CLUSTER_CENTERS[skill.category];
  const angle = (h % 360) * (Math.PI / 180);
  const radius = SPREAD * 0.3 + (h % 1000) / 1000 * SPREAD * 0.7;
  return [cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius];
}

const starPositions = Skills.map((s) => ({ skill: s, pos: starPos(s) }));

// Pair stars of the same category for lines
const lines = useMemoLines();
function useMemoLines() {
  const result: Array<{ x1: number; y1: number; x2: number; y2: number; category: SkillCategory }> = [];
  const byCategory: Record<string, typeof starPositions> = {};
  for (const sp of starPositions) {
    const c = sp.skill.category;
    if (!byCategory[c]) byCategory[c] = [];
    byCategory[c].push(sp);
  }
  for (const [cat, entries] of Object.entries(byCategory)) {
    for (let i = 0; i < entries.length - 1; i++) {
      const [x1, y1] = entries[i].pos;
      const [x2, y2] = entries[i + 1].pos;
      result.push({ x1, y1, x2, y2, category: cat as SkillCategory });
    }
  }
  return result;
}

export default function SkillsConstellation() {
  const [hovered, setHovered] = useState<string | null>(null);

  const categoryEntries = useMemo(() => Object.entries(CategoryColors) as [SkillCategory, typeof CategoryColors[SkillCategory]][], []);

  return (
    <motion.div
      className="max-w-4xl mx-auto mb-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
          Skills
        </h2>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
        <div className="flex gap-3">
          {categoryEntries.map(([cat, colors]) => (
            <span key={cat} className={`text-xs font-medium ${colors.label} flex items-center gap-1`}>
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: colors.star }} />
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/40 dark:bg-gray-900/40 backdrop-blur-sm overflow-hidden">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          style={{ height: "auto" }}
        >
          {/* Connection lines */}
          {lines.map((l, i) => (
            <line
              key={i}
              x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
              stroke={CategoryColors[l.category].line}
              strokeWidth={1}
            />
          ))}

          {/* Stars */}
          {starPositions.map(({ skill, pos: [x, y] }) => {
            const isHovered = hovered === skill.name;
            const colors = CategoryColors[skill.category];
            return (
              <g
                key={skill.name}
                onMouseEnter={() => setHovered(skill.name)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Glow ring on hover */}
                {isHovered && (
                  <circle
                    cx={x} cy={y}
                    r={STAR_R * 3}
                    fill={colors.star}
                    opacity={0.15}
                  />
                )}
                <circle
                  cx={x} cy={y}
                  r={isHovered ? STAR_R * 1.7 : STAR_R}
                  fill={colors.star}
                  opacity={isHovered ? 1 : 0.75}
                  style={{ transition: "r 0.15s ease, opacity 0.15s ease" }}
                />
                {/* Tooltip label */}
                {isHovered && (
                  <text
                    x={x}
                    y={y - STAR_R * 2.5}
                    textAnchor="middle"
                    fontSize={11}
                    fontWeight="600"
                    fill={colors.star}
                    style={{ pointerEvents: "none", userSelect: "none" }}
                  >
                    {skill.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </motion.div>
  );
}
