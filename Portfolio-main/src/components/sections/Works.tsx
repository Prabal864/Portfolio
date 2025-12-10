import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { config } from "../../constants/config";

// Video Modal Component
const VideoModal = ({ isOpen, onClose, videoSrc }: { isOpen: boolean; onClose: () => void; videoSrc: string }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={onClose}>
      <div className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#1f1f1f]" onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-white/20 text-white p-2 rounded-full transition-all backdrop-blur-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="aspect-video w-full">
          <video controls autoPlay className="w-full h-full object-contain">
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handlePopState = () => {
      if (selectedVideo) {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [selectedVideo]);

  const handleOpenDemo = (video: string) => {
    setSelectedVideo(video);
    window.history.pushState({ modal: true }, "");
  };

  const handleCloseDemo = () => {
    setSelectedVideo(null);
    window.history.back();
  };

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const activeProject = projects[activeIndex];
  const isDevelopment = activeProject.name === "LiveReconAI";

  return (

    <>
      <div className="mb-12">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          <span className="text-gradient">{config.sections.works.h2}</span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-[1100px] mx-auto h-[750px] md:h-[650px] flex items-center justify-center perspective-1000">
        
        {/* Navigation Buttons */}
        <button 
          onClick={prevProject}
          className="absolute left-0 md:-left-12 z-30 p-3 rounded-full bg-black/50 border border-[#1f1f1f] text-white hover:bg-white/10 transition-all backdrop-blur-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextProject}
          className="absolute right-0 md:-right-12 z-30 p-3 rounded-full bg-black/50 border border-[#1f1f1f] text-white hover:bg-white/10 transition-all backdrop-blur-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Main Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <div className="w-full h-full card-gradient rounded-3xl overflow-hidden flex flex-col md:flex-row relative group">
              
              {/* Development Banner */}
              {isDevelopment && (
                <div className="absolute top-6 -right-12 bg-neon-blue text-white text-[12px] font-black uppercase tracking-wider py-1 px-12 rotate-45 z-20 shadow-md">
                  In Development
                </div>
              )}

              {/* Image Section (Left/Top) */}
              <div className="w-full md:w-1/2 h-[40%] md:h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 md:bg-gradient-to-r" />
                <img 
                  src={activeProject.image} 
                  alt={activeProject.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* GitHub Link Overlay */}
                <div className="absolute top-4 left-4 z-20">
                  <div
                    onClick={() => window.open(activeProject.sourceCodeLink, "_blank")}
                    className="black-gradient w-32 h-14 rounded-full flex justify-center items-center gap-3 cursor-pointer border border-[#1f1f1f] hover:bg-neon-blue/10 transition-all px-4"
                    title="View Source Code"
                  >
                    <img
                      src={github}
                      alt="github"
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-white font-bold text-lg tracking-wide select-none">GitHub</span>
                  </div>
                </div>
              </div>

              {/* Content Section (Right/Bottom) */}
              <div className="w-full md:w-1/2 h-[60%] md:h-full p-8 flex flex-col justify-center relative">
                
                <h3 className="text-white font-black text-[32px] md:text-[40px] mb-4 leading-tight group-hover:text-gradient transition-all duration-300">
                  {activeProject.name}
                </h3>
                
                <p className="text-secondary text-[16px] leading-[26px] mb-6">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {activeProject.tags.map((tag) => (
                    <span key={tag.name} className={`text-[14px] px-3 py-1 rounded-full bg-[#1f1f1f] text-gray-300 border border-[#333]`}>
                      #{tag.name}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto">
                  {activeProject.liveLink && (
                    <button
                      onClick={() => window.open(activeProject.liveLink, "_blank")}
                      className="flex-1 bg-neon-blue text-white py-3 px-6 rounded-xl font-bold text-sm hover:bg-neon-blue/80 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Live Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  )}
                  
                  {activeProject.demo && (
                    <button
                      onClick={() => handleOpenDemo(activeProject.demo!)}
                      className="flex-1 bg-transparent border border-neon-blue text-white py-3 px-6 rounded-xl font-bold text-sm hover:bg-neon-blue/20 transition-all flex items-center justify-center gap-2"
                    >
                      <span>Watch Demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="absolute -bottom-10 flex gap-3">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === activeIndex ? "bg-neon-blue w-8" : "bg-[#222] hover:bg-neon-blue/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={!!selectedVideo} 
        onClose={handleCloseDemo} 
        videoSrc={selectedVideo || ""} 
      />
    </>
  );
};

export default SectionWrapper(Works, "projects");
