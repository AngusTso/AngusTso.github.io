import React, { useState } from "react";
import styles from "./SkillCard.module.css";

const SkillCard = ({ skillCategory, skills = [] }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const displayedSkills = openDetail ? skills : skills.slice(0, 1);
  return (
    <div className={styles.skillContainer}>
      <h2>{skillCategory}</h2>
      <ul>
        {displayedSkills.map((skill) => {
          return (
            <li key={skill.title} className={styles.skillList}>
              <h3>{skill.title}</h3>
              <img src={skill.logo} />
              <h3>{skill.skillLevel}</h3>
            </li>
          );
        })}
      </ul>
      {skills.length > 2 && (
        <button
          onClick={() => {
            setOpenDetail((prev) => !prev);
          }}
        >
          {openDetail ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default SkillCard;
