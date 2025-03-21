import { div } from "framer-motion/client";
import { projectsData } from "./../constants/projectsData";
import { useState } from "react";

function ProjectsPage() {
  //   console.log(projectsData);

  const [seletctedProject, setseletctedProject] = useState(projectsData[0]);

  return (
    <>
      <div className="proj-conatiner">
        <h2 className="proj-heading">
          Protecting & Powering Spaces: Our Key Projects
        </h2>
        <div className="proj-select-div">
          {projectsData.map((project, index) => (
            <div
              className="proj-sel-card"
              key={index}
              onClick={() => setseletctedProject(project)}
            >
              <p>{project.name}</p>
            </div>
          ))}
        </div>

        <div>{seletctedProject.name}</div>
        <div>{seletctedProject.location}</div>
      </div>
    </>
  );
}

export default ProjectsPage;
