import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import SkillList from "./SkillList";
import { easeInOut, motion } from "Framer-motion";
function SkillBox({ children, skill }) {
  return (
    <motion.div
      className="w-1/3 "
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.h1
        className="absolute  text-gray-600 text-[500px] font-extrabold tracking-widest opacity-[0.2]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 2, ease: easeInOut }}
      >
        {children === "FrontEnd" ? (
          <FontAwesomeIcon icon={faReact} />
        ) : (
          <FontAwesomeIcon icon={faNodeJs} />
        )}
      </motion.h1>
      <h1 className="text-white text-7xl font-bold">{children}</h1>

      <ul className="mt-9">
        <SkillList skill={skill} />
      </ul>
    </motion.div>
  );
}

export default SkillBox;
