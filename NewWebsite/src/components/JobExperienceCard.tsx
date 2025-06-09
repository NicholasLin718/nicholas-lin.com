// JobExperienceCard.tsx
import React, { useRef } from 'react';

interface JobExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  logo?: string;
  backgroundMedia?: string;
  previewImage?: string;
  video?: boolean;
  align?: 'left' | 'right' | 'center' | 'mobile';
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
  align = 'left',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
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
      className={`relative h-44 md:h-48 xl:h-60 rounded-2xl overflow-hidden shadow-lg group ${
        align === 'left' ? 'ml-auto' : align === 'right' ? 'mr-auto' : 'mx-auto'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {(align === 'left' || align === 'right') && (
        <div
          className="absolute top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center z-20"
          style={{ left: align === 'left' ? '-1.75rem' : 'auto', right: align === 'right' ? '-1.75rem' : 'auto' }}
        >
          <span className="block w-8 h-8 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-full border-4 border-white shadow-lg animate-pulse relative">
            <span className="absolute inset-0 m-auto w-3 h-3 bg-white rounded-full shadow-inner"></span>
          </span>
        </div>
      )}

      <div className="absolute inset-0 overflow-hidden">
        {previewImage && (
          <img
            src={previewImage}
            alt={`${company} preview`}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {video && backgroundMedia && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            src={backgroundMedia}
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-500" />

      <div className="relative z-10 h-full w-full flex items-end p-6 text-white transition-all duration-500 group-hover:translate-y-[-4px] group-hover:opacity-100 opacity-95">
        <div className="flex items-center gap-4 w-full">
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-12 h-12 object-contain rounded-md bg-white p-1 shadow"
            />
          )}
          <div className="transition-all duration-500 ease-in-out w-full">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <p className="text-sm text-gray-200">{company} — {duration}</p>

            <div className="overflow-hidden transition-all duration-500 ease-in-out h-0 group-hover:h-[1.5rem] mt-1">
              <p className="text-sm text-gray-100 transition-opacity duration-300 delay-100 group-hover:opacity-100 opacity-0">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobExperienceCard;
