import { div } from "framer-motion/client";
import { projectsData } from "./../constants/projectsData";

function ProjectsPage() {
  console.log(projectsData);

  return (
    <>
      <div className="proj-conatiner">
        <h2 className="proj-heading">
          Protecting & Powering Spaces: Our Key Projects
        </h2>
        <div className="proj-select-div">
          {projectsData.map((project, index) => (
            <div className="proj-sel-card" key={index}>
              <p>{project.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
