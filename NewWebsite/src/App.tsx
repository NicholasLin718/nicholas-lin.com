import JobExperienceCard from './components/JobExperienceCard';
import skydioLogo from './images/logos/skydio.png';
import waabiLogo from './images/logos/waabi.png';
import verdantLogo from './images/logos/verdant.png';
import lcboLogo from './images/logos/lcbo.png';
import portableIntelligenceLogo from './images/logos/pi.png';
import skydioBg from './images/banners/skydio-bg.mp4';
import skydioPreview from './images/banners/skydio-preview.jpg';
import waabiBg from './images/banners/waabi-bg.mp4';
import waabiPreview from './images/banners/waabi-preview.jpg';

function App() {
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'Skydio',
      duration: 'May 2025 – Present',
      description: 'Developed and maintained user interfaces using React and Tailwind CSS.',
      logo: skydioLogo,
      previewImage: skydioPreview,
      backgroundMedia: skydioBg,
      video: true,
    },
    {
      title: 'Software Engineer Intern',
      company: 'Waabi',
      duration: 'May 2024 – August 2024, Jan 2025 – April 2025',
      description: 'Contributed to the development of autonomous driving software, focusing on backend services and data processing.',
      logo: waabiLogo,
      previewImage: waabiPreview,
      backgroundMedia: waabiBg,
      video: true,
    },
    {
      title: 'Full Stack Engineer Intern',
      company: 'Verdant Robotics',
      duration: 'Sep 2023 – Dec 2023',
      description: 'Worked on full-stack development for agricultural robotics, enhancing data visualization and user interaction.',
      logo: verdantLogo,
      backgroundMedia: '/images/verdant-bg.jpg',
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'LCBO Next',
      duration: 'Jan 2023 – Apr 2023',
      description: 'Developed web applications for the LCBO, focusing on user experience and backend integration.',
      logo: lcboLogo,
      backgroundMedia: '/images/lcbo-bg.jpg',
    },
    {
      title: 'Software Developer Intern',
      company: 'Portable Intelligence Inc.',
      duration: 'May 2022 – Aug 2022',
      description: 'Contributed to the development of AI-driven applications, focusing on data analysis and machine learning.',
      logo: portableIntelligenceLogo,
      backgroundMedia: '/images/portable-intelligence-bg.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800">My Experience</h1>
        <p className="text-gray-600 mt-3 text-lg">Clean, bold, and visual.</p>
      </header>

      <main className="space-y-10 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <JobExperienceCard key={i} {...exp} />
        ))}
      </main>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>&copy; 2025 My Modern Website</p>
      </footer>
    </div>
  );
}

export default App;
