import React from "react";

import SkillBox from "./SkillBox";
import SkillList from "./SkillList";

function Skills() {
  const frontend = ["Html", "Css", "JavaScript", "ReactJs", "Tailwind Css"];
  const backend = ["NodeJs", "ExpressJs", "MongoDB", "Mongoose"];
  const AdditionalSkill = ["Java", "data Structure and Algo", "git"];
  return (
    <div className="w-full flex   mt-36 justify-around flex-wrap">
      <h1 className="absolute  text-white text-[180px] font-extrabold tracking-widest opacity-[0.2]">
        SKILLS
      </h1>
      <div className="w-full mt-56  flex justify-around">
        <SkillBox skill={frontend}>FrontEnd</SkillBox>
        <SkillBox skill={backend}>Backend</SkillBox>
      </div>
      <div className="w-[85%] mt-10">
        <h1 className="text-white text-7xl font-bold">Additional</h1>
        <ul className="flex justify-between">
          <SkillList skill={AdditionalSkill} />
        </ul>
      </div>
    </div>
  );
}





export default Skills;
