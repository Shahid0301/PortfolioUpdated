// skillProgress.js

import { motion } from "framer-motion";
const SkillProgress = ({ skillName, percentage }) => {
  return (
    <div className="skill mb-4 ">
      <div className="skill-name font-bold mb-2 text-white ">{skillName}</div>
      <div className="progress-bar bg-gray-200 h-8 rounded overflow-hidden ">
        <motion.div
          className="progress-bar-inner bg-gray-500 text-white text-center leading-8 "
          style={{ width: `${percentage}%` }}
                  initial={ { width: 0 } }
                  whileInView={ { width: `${percentage}%` } }
                  transition={{duration:2}}
        >
          {percentage}%
        </motion.div>
      </div>
    </div>
  );
};

export default SkillProgress;
