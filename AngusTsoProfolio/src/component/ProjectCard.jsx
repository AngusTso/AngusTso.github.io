import React from "react";
import styles from "./ProjectCard.module.css";
import Placeholder from "../assets/gameDevPic.avif";
const ProjectCard = ({ cover, title, desc, tags = [] }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={Placeholder} />
      <div className={styles.projectInfo}>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
