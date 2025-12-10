import { motion } from "framer-motion";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { config } from "../../constants/config";
import { fadeIn, textVariant } from "../../utils/motion";
import { TExperience } from "../../types";

const ExperienceCard = ({ experience, index }: { experience: TExperience; index: number }) => {
  return (
    <div
      className={`flex justify-between items-center w-full mb-8 flex-col md:flex-row ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="hidden md:block w-5/12" />

      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full border-4 border-[#915EFF] mb-4 md:mb-0 justify-center relative shrink-0">
         <div className="w-3 h-3 bg-white rounded-full" />
      </div>

      <motion.div
        variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", index * 0.2, 0.75)}
        className="order-1 bg-[#1d1836] rounded-lg shadow-xl w-full md:w-5/12 px-6 py-8 border border-white/10 backdrop-blur-sm bg-opacity-60 hover:bg-opacity-80 transition-all duration-300 hover:shadow-[0_0_30px_rgba(145,94,255,0.3)] relative group"
      >
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
        
        <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center border border-white/10 p-2 shrink-0">
                <img src={experience.icon} alt={experience.companyName} className="w-full h-full object-contain" />
            </div>
            <div>
                <h3 className="font-bold text-white text-[20px] group-hover:text-[#915EFF] transition-colors">
                {experience.title}
                </h3>
                <p className="text-secondary text-[14px] font-semibold">
                {experience.companyName}
                </p>
            </div>
        </div>
        
        <p className="text-xs text-gray-400 mb-4 font-mono">
          {experience.date}
        </p>
        
        <ul className="list-disc ml-5 space-y-2">
          {experience.points.map((point, i) => (
            <li key={i} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="text-[18px] text-secondary uppercase tracking-wider text-center">
          {config.sections.experience.p}
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-16">
          <span className="text-gradient">{config.sections.experience.h2}</span>
        </h2>
      </motion.div>

      <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
        <div className="absolute border-opacity-20 border-white h-full border left-[50%] hidden md:block" style={{ left: "50%" }}>
          <div className="absolute top-0 left-[-2px] w-1 h-full bg-gradient-to-b from-transparent via-[#915EFF] to-transparent opacity-50" />
        </div>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
