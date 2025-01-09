import React, { useState } from "react";
import styles from "./Home.module.css";
import Profile from "../assets/Profile.jpg";
import { useNavigate } from "react-router-dom";
import SocialLink from "../component/SocialLink";
import SkillCard from "../component/SkillCard";
import ProjectCard from "../component/ProjectCard";
import TechStackData from "../data/mySkill.json";
import ProjectsData from "../data/myProjects.json";

const Home = () => {
  const [viewMore, setViewMore] = useState(false);
  const displayedTechStack = viewMore
    ? TechStackData.mySkills
    : TechStackData.mySkills.slice(0, 1);
  const displayedProjectsData = ProjectsData.myProjects.slice(0, 2);
  const navigate = useNavigate();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/TsoSzeLongAngus_Resume_2025.pdf";
    link.download = "TsoSzeLongAngus_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className={styles.intro}>
        <div className={styles.myIntro}>
          <h1>Angus Tso</h1>
          <h4>Software Engineer</h4>
          <SocialLink />
          <p>
            My forte lies in developing web applications and mobile apps,
            leveraging technologies like React and React Native.
          </p>
          <button onClick={() => navigate("/aboutMe")}>More about Me</button>
          <button onClick={handleDownload}>Download Resume</button>
          <button
            onClick={() =>
              (window.location.href = "mailto:angusking@link.cuhk.edu.hk")
            }
          >
            Hire Me / Need a website
          </button>
        </div>
        <div className={styles.profile}>
          <img src={Profile} />
        </div>
      </div>
      <div className={styles.techContainer}>
        <h1>What I can do</h1>
        <div className={styles.stack}>
          {displayedTechStack.map((skill) => {
            return (
              <SkillCard
                skillCategory={skill.skillCategory}
                skills={skill.skills}
                key={skill.id}
              />
            );
          })}
        </div>
        <button onClick={() => setViewMore((prev) => !prev)}>
          {viewMore ? "Show Less Category" : "Show More Category"}
        </button>
      </div>
      <div className={styles.projects}>
        <h1>Highlighted Project</h1>
        <div className={styles.projectColumn}>
          {displayedProjectsData.map((project) => {
            return (
              <ProjectCard
                cover={project.cover}
                title={project.title}
                desc={project.desc}
                tags={project.tags}
                key={project.title}
              />
            );
          })}
        </div>
        <button onClick={() => navigate("/myWork")}>View More Project</button>
      </div>
    </div>
  );
};

export default Home;
