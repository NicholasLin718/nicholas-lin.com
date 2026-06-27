export type SkillCategory = "Frontend" | "Backend" | "Languages" | "Infra";

export interface Skill {
  name: string;
  category: SkillCategory;
}

export const Skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Relay", category: "Frontend" },
  { name: "Storybook", category: "Frontend" },
  { name: "Mapbox", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "WebSockets", category: "Frontend" },
  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: ".NET", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "MSSQL", category: "Backend" },
  // Languages
  { name: "Python", category: "Languages" },
  { name: "Go", category: "Languages" },
  { name: "Rust", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "C#", category: "Languages" },
  // Infra
  { name: "AWS", category: "Infra" },
  { name: "Azure", category: "Infra" },
  { name: "Docker", category: "Infra" },
  { name: "Kubernetes", category: "Infra" },
  { name: "Terraform", category: "Infra" },
  { name: "Bazel", category: "Infra" },
  { name: "GitHub Actions", category: "Infra" },
  { name: "Datadog", category: "Infra" },
  { name: "Chromatic", category: "Infra" },
];

export const CategoryColors: Record<SkillCategory, { star: string; line: string; label: string }> = {
  Frontend: { star: "#facc15", line: "rgba(250,204,21,0.25)", label: "text-yellow-400" },
  Backend:  { star: "#60a5fa", line: "rgba(96,165,250,0.25)",  label: "text-blue-400" },
  Languages:{ star: "#86efac", line: "rgba(134,239,172,0.25)", label: "text-green-400" },
  Infra:    { star: "#c084fc", line: "rgba(192,132,252,0.25)", label: "text-purple-400" },
};
