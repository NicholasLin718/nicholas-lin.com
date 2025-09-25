import React, { useRef, useEffect, useState } from 'react';

interface JobExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  logo?: string;
  backgroundMedia?: string;
  previewImage?: string;
  video?: boolean;
  tech: string[];
  url?: string;
}

const JobExperienceCard: React.FC<JobExperienceCardProps> = ({
  title,
  company,
  duration,
  description,
  logo,
  previewImage,
  backgroundMedia,
  video,
  tech,
  url,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    if (video && backgroundMedia) {
      const preloadVideo = document.createElement('video');
      preloadVideo.src = backgroundMedia;
      preloadVideo.preload = 'metadata';
      preloadVideo.load();
    }
  }, [video, backgroundMedia]);

  const handleMouseEnter = () => {
    setVideoLoaded(true);
    if (video && videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (video && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`relative h-44 md:h-48 xl:h-60 rounded-2xl overflow-hidden shadow-lg group cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => { if (url) window.open(url, '_blank'); }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105">
          {previewImage && (
            <img
              src={previewImage}
              alt={`${company} preview`}
              loading="eager"
              fetchPriority="high"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                video && videoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
            />
          )}

          {video && backgroundMedia && (
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              src={backgroundMedia}
              muted
              loop
              playsInline
              preload="metadata"
            />
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-500" />

      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white transition-all duration-500 group-hover:opacity-100 opacity-95">
        <div className="flex items-start gap-4 w-full">
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-12 h-12 object-contain rounded-md bg-white p-1 shadow mt-1"
            />
          )}
          <div className="transition-all duration-500 ease-in-out w-full">
            <h2 className="text-2xl font-bold text-white">{company}</h2>
            <p className="text-sm text-gray-200">
              {title} — {duration}
            </p>
            <div className="overflow-hidden mt-1 transition-all duration-500 max-h-0 group-hover:max-h-24">
              <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {tech.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-200 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobExperienceCard;
