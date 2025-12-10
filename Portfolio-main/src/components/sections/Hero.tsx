import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { profilepic } from "../../assets";

const Hero = () => {
  return (
    <section className="relative mx-auto flex min-h-screen w-full flex-col justify-center overflow-hidden bg-screen-black text-white">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-white/5 blur-[100px]" />
        <div className="absolute right-[0%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className={`relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 ${styles.paddingX} pt-32 pb-12 md:flex-row md:items-center md:justify-between`}>
        
        {/* Left Content */}
        <div className="flex max-w-2xl flex-col items-start gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-gray-300 uppercase">Open to Opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl md:text-7xl text-left"
          >
            Architecting the Future of <br />
            <span className="text-gray-500">Digital Infrastructure.</span>
          </motion.h1>

          {/* Social Buttons */}
          <div className="flex gap-4 mt-6 items-center">
            <a
              href="https://github.com/Prabal864"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-semibold shadow-lg border border-transparent transition-all"
              style={{
                textDecoration: 'none',
                background: 'linear-gradient(90deg, #23132b 0%, #23235a 50%, #2d143b 100%)',
                boxShadow: '0 0 16px 2px #7a2262, 0 0 32px 4px #1e1e99',
                filter: 'drop-shadow(0 0 8px #7a2262)',
                transition: 'box-shadow 0.5s cubic-bezier(0.4,0,0.2,1)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 12px 3px #7a226266, 0 0 16px 4px #1e1e9944'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 4px 1px #7a226244, 0 0 8px 2px #1e1e9922'}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/prabal864"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-semibold shadow-lg border border-transparent transition-all"
              style={{
                textDecoration: 'none',
                background: 'linear-gradient(90deg, #23235a 0%, #2d143b 50%, #23132b 100%)',
                boxShadow: '0 0 16px 2px #1e1e99, 0 0 32px 4px #7a2262',
                filter: 'drop-shadow(0 0 8px #1e1e99)',
                transition: 'box-shadow 0.5s cubic-bezier(0.4,0,0.2,1)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 12px 3px #1e1e9944, 0 0 16px 4px #7a226266'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 4px 1px #1e1e9922, 0 0 8px 2px #7a226244'}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-lg text-lg leading-relaxed text-gray-400"
          >
            Expertise in architecting fault-tolerant backend systems, building cloud-native infrastructures, and delivering secure, compliant fintech platforms. Dedicated to converting business complexity into scalable, modular, and production-ready technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3 font-medium text-black transition duration-300 hover:bg-gray-200"
            >
              <span className="mr-2">View Projects</span>
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-8 py-3 font-medium text-white transition duration-300 hover:bg-white/10"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Visual - Profile Picture with Blending */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mt-10 flex h-[400px] w-full items-center justify-center md:mt-0 md:h-[600px] md:w-[500px]"
        >
          <div className="relative h-[400px] w-[400px] md:h-[500px] md:w-[500px] flex items-center justify-center">
            {/* Profile Picture with subtle drop shadow for natural look */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <img 
                src={profilepic} 
                alt="Profile" 
                className="w-full h-full object-contain rounded-full drop-shadow-[0_8px_32px_rgba(145,94,255,0.15)]"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -right-4 top-20 h-20 w-20 animate-bounce rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 shadow-2xl z-20">
               <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-50"></div>
            </div>
            <div className="absolute -left-4 bottom-32 h-16 w-16 animate-pulse rounded-full bg-white/5 backdrop-blur-xl border border-white/10 p-3 shadow-2xl z-20">
               <div className="h-full w-full rounded-full bg-gradient-to-br from-green-400 to-emerald-600 opacity-50"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar - Custom Highlights */}
      <div className="relative z-10 w-full border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-6 py-8 md:px-12">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-white">Spring Boot</span>
            <span className="text-sm text-gray-400">Microservices <br/> Architect</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-white">Cloud Native</span>
            <span className="text-sm text-gray-400">AWS, Docker, <br/> Kubernetes</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-white">DevOps</span>
            <span className="text-sm text-gray-400">CI/CD & <br/> Monitoring</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
