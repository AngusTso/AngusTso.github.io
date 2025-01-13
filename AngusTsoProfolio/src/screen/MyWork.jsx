import React from "react";
import ProjectsData from "../data/myProjects.json";
import ProjectCard from "../component/ProjectCard";

const MyWork = () => {
  return (
    <div>
      <div style={{ textAlign: "center", fontSize: "2rem" }}>
        You can all my project here
      </div>
      {ProjectsData.myProjects.map((project) => {
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
  );
};

export default MyWork;
