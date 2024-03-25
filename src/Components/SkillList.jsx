import SkillProgress from "./SkillProgress";

function SkillList({ skill }) {
    return (
      <>
        {skill.map((el) => (
          <SkillProgress key={ el } skillName={el} percentage={85}/>
        ))}
      </>
    );
  }

export default SkillList