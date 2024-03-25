import React from 'react'
function SkillList({ skill }) {
    return (
      <>
        {skill.map((el) => (
          <li className="text-white text-4xl mt-10 list-disc" key={el}>
            {el.toUpperCase()}
          </li>
        ))}
      </>
    );
  }

export default SkillList