

import SkillBox from "./SkillBox";
import SkillList from "./SkillList";
import SkillProgress from "./SkillProgress";

function Skills() {
// Frontend skills
const frontendSkills = [
  { name: "HTML", percentage: 80 },
  { name: "CSS", percentage: 70 },
  { name: "JavaScript", percentage: 90 },
  { name: "ReactJs", percentage: 85 },
  { name: "Tailwind CSS", percentage: 75 }
];

// Backend skills
const backendSkills = [
  { name: "NodeJs", percentage: 75 },
  { name: "ExpressJs", percentage: 60 },
  { name: "MongoDB", percentage: 80 },
  { name: "Mongoose", percentage: 75 }
  ];
  const additionalSkills = [
    { name: "Java", percentage: 70 },
    { name: "Data Structures and Algorithms", percentage: 60 }
  ];
  
  return (
    <div id="skills" className="w-full flex   mt-20 justify-around flex-wrap phone:mt-5">
      <h1 className="absolute  text-white text-[10vw] font-extrabold tracking-widest opacity-[0.2]">
        SKILLS
      </h1>
      <div className="w-full mt-56  flex justify-around flex-wrap phone:mt-20">
        <SkillBox skill={frontendSkills}>FrontEnd</SkillBox>
        <SkillBox skill={backendSkills}>Backend</SkillBox>
      </div>
      <div className="w-[85%] mt-10">
        <h1 className="text-white text-[5vw] font-bold">Additional</h1>
        <ul className=" ">
        {additionalSkills.map((el) => (
          <SkillProgress key={ el } skillName={el.name} percentage={el.percentage}/>
        ))}
        </ul>
      </div>
    </div>
  );
}





export default Skills;
