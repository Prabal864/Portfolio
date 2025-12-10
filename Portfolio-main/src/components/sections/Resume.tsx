import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

import { SectionWrapper } from "../../hoc";
import { fadeIn, zoomIn } from "../../utils/motion";
import { config } from "../../constants/config";

const RESUME_PDF_PATH = "/Prabal_CV_compressed.pdf";

const Resume = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "download">("preview");

  const handleDownload = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Create download link with proper attributes
    const link = document.createElement("a");
    link.href = RESUME_PDF_PATH;
    link.download = `${config.html.fullName.replace(/\s+/g, "_")}_Resume.pdf`;
    link.setAttribute('download', `${config.html.fullName.replace(/\s+/g, "_")}_Resume.pdf`);
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    
    // Clean up after a short delay
    setTimeout(() => {
      document.body.removeChild(link);
    }, 100);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Handle Escape key to close fullscreen
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isFullscreen]);

  return (
    <>
      <div>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '1.2em' }}>{config.sections.resume.h2}</h1>
      </div>

      {/* Removed resume paragraph for cleaner look */}

      {/* Tab Navigation */}
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.5)}
        className="mt-12 flex gap-4"
      >
        <button
          onClick={() => setActiveTab("preview")}
          className={`flex items-center gap-2 rounded-lg px-6 py-3 font-bold transition-all ${
            activeTab === "preview"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 dark:green-pink-gradient text-white shadow-lg scale-105"
              : "bg-[#18181b] border border-[#333] text-white hover:text-neon-blue shadow-md"
          }`}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Preview Resume
        </button>
        <button
          onClick={() => setActiveTab("download")}
          className={`flex items-center gap-2 rounded-lg px-6 py-3 font-bold transition-all ${
            activeTab === "download"
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
              : "bg-[#18181b] border border-[#333] text-white hover:text-neon-blue shadow-md"
          }`}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Options
        </button>
      </motion.div>

      {/* Content Area with Tab Animation */}
      <AnimatePresence mode="wait">
        {activeTab === "preview" ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-10"
          >
            {/* Immersive PDF Viewer */}
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              glareEnable
              glareColor="#e0e7ff"
              glareMaxOpacity={0.2}
            >
              <div className="bg-gradient-to-br from-[#18181b] to-[#22223b] rounded-[20px] p-[3px] shadow-xl">
                <div className="bg-[#18181b] relative overflow-hidden rounded-[18px]">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 -left-4 h-72 w-72 rounded-full bg-neon-blue/20 mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-0 -right-4 h-72 w-72 rounded-full bg-neon-blue/10 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 h-72 w-72 rounded-full bg-neon-blue/10 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                  </div>

                  {/* PDF Container */}
                  <div className="relative flex flex-col">
                    {/* PDF Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                          <svg
                            className="h-6 w-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[16px] font-bold text-gray-800">
                            Professional Resume
                          </h3>
                          <p className="text-[12px] text-gray-600">
                            Interactive PDF Preview
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={toggleFullscreen}
                        className="group flex items-center gap-2 rounded-lg bg-gray-100 hover:bg-gray-200 px-4 py-2 font-medium text-gray-700 transition-all hover:scale-105"
                        title="View Fullscreen"
                      >
                        <svg
                          className="h-5 w-5 transition-transform group-hover:rotate-12"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </svg>
                        <span className="hidden sm:inline">Fullscreen</span>
                      </button>
                    </div>

                    {/* PDF Viewer */}
                    <div className="relative h-[750px] overflow-hidden bg-[#111]">
                      <iframe
                        src={RESUME_PDF_PATH}
                        className="h-full w-full"
                        title="Resume Preview"
                        onError={(e) => {
                          console.error("Failed to load resume PDF:", e);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ) : (
          <motion.div
            key="download"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-10"
          >
            {/* Download Options Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Primary Download Card */}
              <motion.div
                variants={zoomIn(0.3, 0.5)}
                className="md:col-span-2 lg:col-span-2"
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="bg-gradient-to-br from-[#18181b] to-[#22223b] shadow-xl rounded-[20px] p-[1px]">
                    <div className="bg-[#18181b] flex flex-col gap-6 rounded-[20px] p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                          <svg
                            className="h-12 w-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[28px] font-bold text-gray-800">
                            Download Resume
                          </h3>
                          <p className="text-gray-600 mt-2 text-[16px]">
                            Get the complete PDF version of my professional
                            resume with all my skills, experience, and
                            achievements
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4">
                        <button
                          onClick={handleDownload}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 group flex flex-1 items-center justify-center gap-3 rounded-xl px-8 py-4 font-bold text-white shadow-md outline-none transition-all hover:scale-105 hover:shadow-xl"
                        >
                          <svg
                            className="h-6 w-6 transition-transform group-hover:translate-y-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                          Download PDF
                        </button>
                        <button
                          onClick={toggleFullscreen}
                          className="bg-white border-2 border-gray-200 hover:border-purple-300 group flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-medium text-gray-700 outline-none transition-all hover:scale-105"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                          <span className="hidden sm:inline">View Full</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                variants={zoomIn(0.4, 0.5)}
                className="flex flex-col gap-6"
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="bg-[#18181b] border border-[#333] flex items-center gap-4 rounded-xl p-6 transition-all hover:border-neon-blue shadow-md">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 text-[12px] font-medium">
                        File Format
                      </p>
                      <p className="text-[18px] font-bold text-gray-800">
                        PDF Document
                      </p>
                    </div>
                  </div>
                </Tilt>

                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <div className="bg-[#18181b] border border-[#333] flex items-center gap-4 rounded-xl p-6 transition-all hover:border-neon-blue shadow-md">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 text-[12px] font-medium">
                        Status
                      </p>
                      <p className="text-[18px] font-bold text-gray-800">
                        Ready to Download
                      </p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#18181b]"
            onClick={toggleFullscreen}
          >
            {/* Header with Glassmorphism */}
            <div className="flex items-center justify-between border-b border-[#333] bg-[#18181b]/95 p-4 backdrop-blur-md shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-gray-800">
                    Resume - Fullscreen View
                  </h3>
                  <p className="text-[12px] text-gray-600">
                    Press ESC to close
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(e);
                  }}
                  className="bg-gradient-to-r from-neon-blue to-neon-blue/80 hover:from-neon-blue/80 hover:to-neon-blue flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-white transition-all hover:scale-105"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span className="hidden sm:inline">Download</span>
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="flex items-center gap-2 rounded-lg bg-[#222] hover:bg-neon-blue/20 p-2 text-white transition-all hover:scale-110"
                  title="Close Fullscreen"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="flex-1 overflow-hidden p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={RESUME_PDF_PATH}
                className="h-full w-full rounded-lg shadow-2xl bg-[#111]"
                title="Resume Fullscreen Preview"
                onError={(e) => {
                  console.error("Failed to load resume PDF in fullscreen:", e);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
