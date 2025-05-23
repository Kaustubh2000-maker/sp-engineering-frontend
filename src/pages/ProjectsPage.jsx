import { div } from "framer-motion/client";
import { projectsData } from "./../constants/projectsData";
import { useState } from "react";

function ProjectsPage() {
  const [selectedProject, setselectedProject] = useState(projectsData[0]);

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
              onClick={() => setselectedProject(project)}
            >
              <p>{project.name}</p>
            </div>
          ))}
        </div>
        <div className="proj-data-view-section">
          <div>{selectedProject.name}</div>
          <div>{selectedProject.location}</div>
          <div style={{ width: "100%", height: "50rem", overflow: "hidden" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d543216.1704405624!2d72.88364169910996!3d21.619382659166018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0232e3e08b73d%3A0xad836d3bcf97023e!2sAMI%20ORGANICS%20LIMITED%20UNIT%202!5e0!3m2!1sen!2sin!4v1747981117416!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsPage;
