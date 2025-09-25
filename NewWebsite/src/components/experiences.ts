import skydioLogo from '../images/logos/skydio.png';
import waabiLogo from '../images/logos/waabi.png';
import verdantLogo from '../images/logos/verdant.png';
import lcboLogo from '../images/logos/lcbo.png';
import portableIntelligenceLogo from '../images/logos/pi.png';
import skydioBg from '../images/banners/skydio-bg.mp4';
import skydioPreview from '../images/banners/skydio-preview.jpg';
import waabiBg from '../images/banners/waabi-bg.mp4';
import waabiPreview from '../images/banners/waabi-preview.jpg';
import verdantBg from '../images/banners/verdant-bg.mp4';
import verdantPreview from '../images/banners/verdant-preview.png';
import lcboPreview from '../images/banners/lcbo-preview.jpg';
import piPreview from '../images/banners/pi-preview.png';

export const Experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Skydio',
    duration: 'May 2025 – Present',
    description:
      `Developed React dashboards, APIs, and automation supporting 2.5M+ drone flights to date, powering fleet management, livestream alerts, and dock hardware lifecycle.`,
    tech: [
      'TypeScript',
      'Python',
      'GraphQL',
      'React',
      'Relay',
      'TailwindCSS',
      'AWS',
      'Storybook',
      'Chromatic',
      'Datadog',
    ],
    logo: skydioLogo,
    previewImage: skydioPreview,
    backgroundMedia: skydioBg,
    video: true,
    url: 'https://www.skydio.com',
  },
  {
    title: 'Software Engineer Intern',
    company: 'Waabi',
    duration: 'May 2024 – Apr 2025',
    description:
      'Developed simulation and visualization tools, geospatial data pipelines, and real-time streaming systems for autonomous trucks, while developing reusable frontend and backend services to improve efficiency across teams.',
    tech: [
      'TypeScript',
      'Go',
      'Python',
      'Rust',
      'React',
      'Mapbox',
      'AWS',
      'Terraform',
      'Bazel',
      'Foxglove',
      'GitHub Actions',
    ],
    logo: waabiLogo,
    previewImage: waabiPreview,
    backgroundMedia: waabiBg,
    video: true,
    url: 'https://www.waabi.ai',
  },
  {
    title: 'Full Stack Engineer Intern',
    company: 'Verdant Robotics',
    duration: 'Sep 2023 – Dec 2023',
    description:
      'Created a React dashboards to replace CLI-based robotic workflows and implemented multithreaded data pipelines for telemetry visualization.',
    tech: [
      'TypeScript',
      'Python',
      'C++',
      'React',
      'Flask',
      'MongoDB',
      'PostgreSQL',
      'WebSockets',
      'Foxglove',
    ],
    logo: verdantLogo,
    previewImage: verdantPreview,
    backgroundMedia: verdantBg,
    video: true,
    url: 'https://www.verdantrobotics.com',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'LCBO Next',
    duration: 'Jan 2023 – Apr 2023',
    description:
      'Engineered web apps and ETL pipelines to improve retail operations, product updates, and theft-prevention systems.',
    tech: [
      'Python',
      'TypeScript',
      'React',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Azure',
      'Docker',
      'Kubernetes',
    ],
    logo: lcboLogo,
    previewImage: lcboPreview,
    url: 'https://www.lcbo.com',
  },
  {
    title: 'Software Developer Intern',
    company: 'Portable Intelligence Inc.',
    duration: 'May 2022 – Aug 2022',
    description:
      'Designed and deployed warehouse intelligence tools with real-time tracking and analytics to boost operational efficiency.',
    tech: ['C#', 'Angular', '.NET', 'MSSQL', 'WebSockets'],
    logo: portableIntelligenceLogo,
    previewImage: piPreview,
    url: 'https://www.portableintelligence.com',
  },
];
