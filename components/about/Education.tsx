import { education } from "@/lib/data";
import EducationCard from "./EducationCard";

import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      className="pb-4 max-xl:px-8 max-xl:flex max-xl:flex-col max-xl:items-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
    >
      <h2 className="h3 max-xl:text-center text-accent">My Education</h2>
      <div className="max-w-[680px] mt-8 gap-8 grid grid-cols-2 max-md:grid-cols-1 max-xl:px-4 max-xl:w-full max-md:max-w-[400px]">
        {education.map((card, index) => (
          <EducationCard
            key={index}
            year={card.year}
            course={card.course}
            platform={card.platform}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
