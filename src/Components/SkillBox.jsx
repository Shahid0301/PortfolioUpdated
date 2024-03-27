
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import SkillList from "./SkillList";
import { easeInOut, motion } from "framer-motion";
import SkillProgress from "./SkillProgress";
function SkillBox({ children, skill }) {
  return (
    <motion.div
      className="w-2/6  relative"
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.h1
        className="absolute   text-gray-600 text-[30vw] font-extrabold opacity-[0.2]"
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
      <h1 className="text-white text-[5vw] font-bold">{children}</h1>

      <ul className="mt-9">
      {skill.map((el) => (
          <SkillProgress key={ el } skillName={el.name} percentage={el.percentage}/>
        ))}
      </ul>
      
    </motion.div>
  );
}

export default SkillBox;
