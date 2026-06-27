import { useRef, useState } from "react";

interface SkillLogo {
  name: string;
  slug: string; // simple-icons slug
}

const ROW_1: SkillLogo[] = [
  { name: "React",          slug: "react" },
  { name: "TypeScript",     slug: "typescript" },
  { name: "TailwindCSS",    slug: "tailwindcss" },
  { name: "GraphQL",        slug: "graphql" },
  { name: "Storybook",      slug: "storybook" },
  { name: "Angular",        slug: "angular" },
  { name: "Node.js",        slug: "nodedotjs" },
  { name: "Express",        slug: "express" },
  { name: "Flask",          slug: "flask" },
  { name: "PostgreSQL",     slug: "postgresql" },
  { name: "MongoDB",        slug: "mongodb" },
  { name: "Mapbox",         slug: "mapbox" },
];

const ROW_2: SkillLogo[] = [
  { name: "Python",         slug: "python" },
  { name: "Go",             slug: "go" },
  { name: "Rust",           slug: "rust" },
  { name: "C++",            slug: "cplusplus" },
  { name: "C#",             slug: "csharp" },
  { name: "AWS",            slug: "amazonaws" },
  { name: "Azure",          slug: "microsoftazure" },
  { name: "Docker",         slug: "docker" },
  { name: "Kubernetes",     slug: "kubernetes" },
  { name: "Terraform",      slug: "terraform" },
  { name: "GitHub Actions", slug: "githubactions" },
  { name: "Datadog",        slug: "datadog" },
];

function MarqueeRow({ skills, reverse }: { skills: SkillLogo[]; reverse?: boolean }) {
  const [paused, setPaused] = useState(false);
  // Duplicate items for seamless infinite loop
  const items = [...skills, ...skills];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `${reverse ? "marquee-right" : "marquee-left"} 28s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((skill, i) => (
          <div
            key={`${skill.slug}-${i}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 backdrop-blur-sm select-none shrink-0"
          >
            <img
              src={`https://cdn.simpleicons.org/${skill.slug}`}
              alt={skill.name}
              width={18}
              height={18}
              className="dark:invert dark:brightness-90"
              style={{ minWidth: 18 }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <div className="max-w-4xl mx-auto mb-10">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
          Skills
        </h2>
        <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
      </div>
      <div className="flex flex-col gap-3 overflow-hidden rounded-xl">
        <MarqueeRow skills={ROW_1} />
        <MarqueeRow skills={ROW_2} reverse />
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
