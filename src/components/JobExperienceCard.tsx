import React, { useRef, useEffect, useState } from "react";
import { Info } from "lucide-react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  // Detect viewport visibility for lazy video loading
  useEffect(() => {
    if (!video || !backgroundMedia) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { threshold: 0 } // fire as soon as element enters viewport
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [video, backgroundMedia]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setShowInfo(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      ref={containerRef}
      className={`relative rounded-2xl overflow-hidden shadow-lg group
        ${isMobile ? "min-h-48" : "h-44 md:h-56 xl:h-60"}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105">
          {previewImage && (
            <img
              src={previewImage}
              alt={`${company} preview`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                video && videoLoaded ? "opacity-0" : "opacity-100"
              }`}
            />
          )}
          {video && shouldLoadVideo && backgroundMedia && (
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded ? "opacity-100" : "opacity-0"
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

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition duration-500" />

      <button
        className={`absolute top-3 right-3 z-20 ${showInfo ? "text-yellow-500" : "text-gray-400"} p-1 rounded-full bg-black/10 hover:bg-black/50 transition`}
        onClick={(e) => {
          e.stopPropagation();
          setShowInfo((prev) => !prev);
        }}
      >
        <Info
          size={20}
          className="cursor-pointer"
        />
      </button>

      {/* Text + description */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6 text-white transition-all duration-500 group-hover:opacity-100 opacity-95">
        <div className="flex items-start gap-3 w-full">
          {logo && (
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-8 h-8 md:w-12 md:h-12 object-contain rounded-md bg-white p-0.75 md:p-1 shadow mt-1"
            />
          )}
          <div className="transition-all duration-500 ease-in-out w-full">
            <h2 className="text-md md:text-2xl font-bold text-white">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                {company}
              </a>
            </h2>
            <p className="text-[10px] md:text-sm text-gray-200">
              {title} — {duration}
            </p>

            <div
              className={`overflow-hidden mt-1 transition-all duration-500
                ${showInfo ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
                ${!isMobile ? "group-hover:max-h-24 group-hover:opacity-100" : ""}
              `}
            >
              <p className="text-[10px] xs:text-[12px] md:text-sm text-gray-100 transition-opacity duration-300 delay-100">
                {description}
              </p>
              <div className="flex flex-wrap gap-1 md:gap-2 mt-2">
                {tech.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 text-gray-200 text-[8px] md:text-xs font-medium px-2 py-1 rounded-full"
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
