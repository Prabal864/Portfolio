
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { config } from "../../constants/config";

const Tech = () => {
  const firstRow = technologies.slice(0, Math.ceil(technologies.length / 2));
  const secondRow = technologies.slice(Math.ceil(technologies.length / 2));
  
  // Duplicate content to ensure seamless infinite scroll
  // We create a sequence that is long enough and then duplicate it for the loop
  const row1 = [...firstRow, ...firstRow];
  const row2 = [...secondRow, ...secondRow];

  return (
    <>
      <h1 className="text-gradient" style={{ fontSize: '3.5rem', fontWeight: 900, textAlign: 'center', marginBottom: '1.2em' }}>{config.sections.tech.h2}</h1>
      {/* Paragraph removed for cleaner look */}

      <div className="flex flex-col gap-10 mt-14 w-screen relative left-[50%] -translate-x-[50%] py-10 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#915EFF] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

        {/* Gradient Masks for smooth fade in/out */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* First Row - Moving Left */}
        <div className="flex w-full overflow-hidden mask-image-linear-gradient">
          <div className="flex animate-scroll gap-16 min-w-full shrink-0 items-center py-4">
            {[...row1, ...row1].map((technology, index) => (
              <div key={`row1-${index}`} className="flex flex-col items-center justify-center gap-4 group min-w-[140px] cursor-pointer">
                <div className="w-28 h-28 rounded-[2rem] bg-[#0a0a0a] border border-white/5 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-[#915EFF]/50 group-hover:shadow-[0_0_50px_rgba(145,94,255,0.3)] group-hover:-translate-y-2 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                </div>
                <p className="text-gray-400 text-sm font-medium group-hover:text-[#915EFF] transition-colors uppercase tracking-wider">{technology.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Right */}
        <div className="flex w-full overflow-hidden">
          <div className="flex animate-scroll-reverse gap-16 min-w-full shrink-0 items-center py-4">
            {[...row2, ...row2].map((technology, index) => (
              <div key={`row2-${index}`} className="flex flex-col items-center justify-center gap-4 group min-w-[140px] cursor-pointer">
                <div className="w-28 h-28 rounded-[2rem] bg-[#0a0a0a] border border-white/5 p-6 backdrop-blur-xl transition-all duration-500 group-hover:border-[#915EFF]/50 group-hover:shadow-[0_0_50px_rgba(145,94,255,0.3)] group-hover:-translate-y-2 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                </div>
                <p className="text-gray-400 text-sm font-medium group-hover:text-[#915EFF] transition-colors uppercase tracking-wider">{technology.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
