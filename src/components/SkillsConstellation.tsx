import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Skills, CategoryColors, type Skill, type SkillCategory } from "./skillsData";

const W = 800;
const H = 340;
const STAR_R = 4;
const SPREAD = 80; // radius of the ring each cluster's stars sit on

const CLUSTER_CENTERS: Record<SkillCategory, [number, number]> = {
  Frontend:  [W * 0.25, H * 0.38],
  Backend:   [W * 0.72, H * 0.38],
  Languages: [W * 0.28, H * 0.74],
  Infra:     [W * 0.70, H * 0.72],
};

// Rotate each cluster's ring by a fixed offset so they look distinct
const CLUSTER_ROTATION: Record<SkillCategory, number> = {
  Frontend:  15,
  Backend:   -20,
  Languages: 40,
  Infra:     -10,
};

// Place n stars evenly on a circle of radius SPREAD around the cluster center.
// Stars are equidistant — no overlap, no randomness.
function buildCluster(skills: Skill[], category: SkillCategory) {
  const [cx, cy] = CLUSTER_CENTERS[category];
  const rotOffset = CLUSTER_ROTATION[category] * (Math.PI / 180);
  return skills.map((skill, i) => {
    const angle = rotOffset + (2 * Math.PI * i) / skills.length;
    return {
      skill,
      pos: [cx + Math.cos(angle) * SPREAD, cy + Math.sin(angle) * SPREAD] as [number, number],
    };
  });
}

// Group skills by category then build each cluster
const byCategory = Skills.reduce<Record<string, Skill[]>>((acc, s) => {
  (acc[s.category] ??= []).push(s);
  return acc;
}, {});

const starPositions = (Object.entries(byCategory) as [SkillCategory, Skill[]][])
  .flatMap(([cat, skills]) => buildCluster(skills, cat));

// Connect adjacent stars within each cluster ring (wrap around to close the shape)
const lines = (Object.entries(byCategory) as [SkillCategory, Skill[]][]).flatMap(([cat, skills]) => {
  const cluster = buildCluster(skills, cat);
  return cluster.map((entry, i) => {
    const next = cluster[(i + 1) % cluster.length];
    const [x1, y1] = entry.pos;
    const [x2, y2] = next.pos;
    return { x1, y1, x2, y2, category: cat };
  });
});

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
