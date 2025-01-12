import React, { useState } from "react";
import styles from "./SkillCard.module.css";

const SkillCard = ({ skillCategory, skills = [] }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const displayedSkills = openDetail ? skills : skills.slice(0, 2);
  return (
    <div className={styles.skillContainer}>
      <h2>{skillCategory}</h2>
      <ul>
        {displayedSkills.map((skill) => {
          return (
            <li key={skill.title} className={styles.skillList}>
              <h3>{skill.title}</h3>
              <img src={skill.logo} />
              <h3 className={styles.skillLevel}>{skill.skillLevel}</h3>
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
          <span className={styles.desktopLabel}>
            {openDetail ? "Show Less" : "Show More"}
          </span>
          <span className={styles.mobileLabel}>{openDetail ? "-" : "+"}</span>
        </button>
      )}
    </div>
  );
};

export default SkillCard;
