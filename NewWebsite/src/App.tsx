// App.tsx
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
import verdantBg from './images/banners/verdant-bg.mp4';
import verdantPreview from './images/banners/verdant-preview.jpg';
import lcboPreview from './images/banners/lcbo-preview.jpg';
import piPreview from './images/banners/pi-preview.png';

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
      previewImage: verdantPreview,
      backgroundMedia: verdantBg,
      video: true,
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'LCBO Next',
      duration: 'Jan 2023 – Apr 2023',
      description: 'Developed web applications for the LCBO, focusing on user experience and backend integration.',
      logo: lcboLogo,
      previewImage: lcboPreview,
    },
    {
      title: 'Software Developer Intern',
      company: 'Portable Intelligence Inc.',
      duration: 'May 2022 – Aug 2022',
      description: 'Contributed to the development of AI-driven applications, focusing on data analysis and machine learning.',
      logo: portableIntelligenceLogo,
      previewImage: piPreview,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4">
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800">My Experience</h1>
        <p className="text-gray-600 mt-3 text-lg">Clean, bold, and visual.</p>
      </header>

      <main className="relative max-w-7xl mx-auto">
        {/* Desktop timeline layout */}
        <div className="hidden md:block before:content-[''] before:absolute before:left-1/2 before:transform before:-translate-x-1/2 before:w-1 before:bg-gray-300 before:h-full before:top-0">
          {experiences.map((exp, i) => (
            <div key={i} className={`w-full flex ${i % 2 === 0 ? 'justify-start pr-8' : 'justify-end pl-8'} relative z-10 items-center`}>
              {/* Centered dot vertically with the card */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md z-20" />
              <div className="w-full md:w-1/2">
                <JobExperienceCard {...exp} align={i % 2 === 0 ? 'left' : 'right'} />
              </div>
            </div>
          ))}
        </div>

        {/* Improved Mobile timeline */}
        <div className="md:hidden space-y-10 relative">
          <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-gray-300"></div>
          {experiences.map((exp, i) => (
            <div key={i} className="pl-12 relative flex items-center">
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow"></div>
              <JobExperienceCard {...exp} align="mobile" />
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>&copy; 2025 My Modern Website</p>
      </footer>
    </div>
  );
}

export default App;