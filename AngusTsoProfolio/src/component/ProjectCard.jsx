import React from "react";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ cover, title, desc, tags = [], link }) => {
  const imagePath = `${import.meta.env.BASE_URL}${cover}`;
  return (
    <div className={styles.cardContainer}>
      <img src={imagePath} />
      <div className={styles.projectInfo}>
        <Link className={styles.link} to={`${link}`}>
          <h2>{title}</h2>
        </Link>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
