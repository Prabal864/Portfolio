import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";

const About = () => {
  return (
    <section className="relative w-full">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-20">
        
        {/* Header */}
        <div className="flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1"
          >
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">My Expertise</span>
          </motion.div>
          
            <motion.h2
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#6a0572] via-[#1e1e99] to-[#7a2262] bg-clip-text text-transparent mb-4"
            >
              About Me
            </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-500 min-h-[320px]
                ${index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"}
                bg-[#0a0a0a] border border-white/5
                hover:z-30 hover:scale-[1.08] hover:shadow-[0_8px_40px_0_rgba(122,34,98,0.25),0_16px_64px_0_rgba(30,30,153,0.18)]
              `}
              style={{ transition: 'box-shadow 0.6s cubic-bezier(0.4,0,0.2,1), background 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.4s cubic-bezier(0.4,0,0.2,1), z-index 0s' }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 16px 4px #7a2262AA, 0 0 24px 6px #1e1e9966';
                e.currentTarget.style.background = 'linear-gradient(90deg, #2d143b 0%, #23235a 50%, #3a1c2e 100%)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.background = '';
              }}
            >
              {/* Grid Pattern for Large Cards */}
              {index === 0 && (
                <div className="absolute inset-0 opacity-20 pointer-events-none" 
                  style={{ 
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                    backgroundSize: '30px 30px' 
                  }} 
                />
              )}

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div
                      className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border transition duration-500 group-hover:scale-110
                        ${index === 0 
                          ? "bg-neon-blue/10 border-neon-blue/30" 
                          : "bg-white/5 border-white/10"
                        }
                      `}
                      style={{ transition: 'box-shadow 0.3s' }}
                      onMouseEnter={e => {
                        e.currentTarget.style.boxShadow = '0 0 32px 8px #7a2262, 0 0 48px 12px #1e1e99';
                        e.currentTarget.style.background = 'linear-gradient(90deg, #6a0572 0%, #1e1e99 50%, #7a2262 100%)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = '';
                        e.currentTarget.style.background = '';
                      }}
                    >
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    
                    <h3 className={`mb-3 text-2xl font-bold ${index === 0 ? "text-white" : "text-white group-hover:text-gradient"}`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-base leading-relaxed text-gray-400">
                      {service.description}
                    </p>
                </div>

                {/* Explore Link for Large Cards */}
                {(index === 0 || index === 3) && (
                  <div className="mt-8 flex items-center text-sm font-bold text-neon-blue cursor-pointer hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
