import { projectsData } from "./../constants/projectsData";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";

import { nrmlScaleUp, nrmlVisible } from "@/animations/appAnimation";

// New animated progress bar component
// function AnimatedProgressBar({ label, value, color = "#4caf50", className }) {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({
//       width: `${value}%`,
//       transition: { duration: 1.5, ease: "easeOut" },
//     });
//   }, [value, controls]);

//   return (
//     <div
//       className={`progress-bar-container ${className || ""}`}
//       style={{ marginBottom: 20 }}
//     >
//       <div className="progress-bar-label">{label}</div>
//       <div className="progress-bar-track">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={controls}
//           className="progress-bar-fill"
//           style={{ backgroundColor: color }}
//         />
//         <motion.span
//           className="progress-bar-percentage"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 1.5, duration: 0.5 }}
//         >
//           {value}%
//         </motion.span>
//       </div>
//     </div>
//   );
// }
function AnimatedProgressBar({ label, value, color = "#4caf50", className }) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${value}%`,
        transition: { duration: 1.5, ease: "easeOut" },
      });
    }
  }, [inView, controls, value]);

  return (
    <div
      ref={ref}
      className={`progress-bar-container ${className || ""}`}
      style={{ marginBottom: 20 }}
    >
      <div className="progress-bar-label">{label}</div>
      <div className="progress-bar-track">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          className="progress-bar-fill"
          style={{ backgroundColor: color }}
        />
        <motion.span
          className="progress-bar-percentage"
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          {value}%
        </motion.span>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [selectedProject, setselectedProject] = useState(projectsData[0]);
  const detailRef = useRef(null);

  const handleProjectClick = (project) => {
    setselectedProject(project);
    setTimeout(() => {
      if (detailRef.current) {
        detailRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  return (
    <>
      <AnimatePresence>
        <div className="proj-container">
          <motion.h2 className="proj-heading" {...nrmlScaleUp()}>
            Protecting & Powering Spaces: Our Key Projects
          </motion.h2>
          <motion.p className="proj-subheading" {...nrmlScaleUp()}>
            At SP Engineering, each project is a reflection of our commitment to
            safety, precision, and excellence. From fire protection systems to
            HVAC and solar solutions, our portfolio showcases the diverse spaces
            we've empowered — on time, with quality, and with full customer
            satisfaction.
          </motion.p>

          <motion.div className="proj-select-div" {...nrmlScaleUp()}>
            {projectsData.map((project, index) => (
              <div
                className={`proj-sel-card ${
                  selectedProject.name === project.name
                    ? "proj-active-card"
                    : ""
                }`}
                key={index}
                onClick={() => handleProjectClick(project)}
              >
                <img
                  className="Proj-logo-img"
                  src={project.image}
                  alt={project.name}
                />
              </div>
            ))}
          </motion.div>

          <div className="proj-data-view-section" ref={detailRef}>
            <div className="proj-sel-databox">
              <motion.h3
                className="proj-sel-heading"
                key={selectedProject.name}
                {...nrmlVisible()}
              >
                {selectedProject.name}
              </motion.h3>
              <motion.h6
                className="proj-sel-location"
                key={selectedProject.location}
                {...nrmlScaleUp()}
              >
                {selectedProject.location}{" "}
              </motion.h6>
              <motion.p
                className="proj-sel-description"
                key={selectedProject.description}
                {...nrmlScaleUp()}
              >
                {selectedProject.description}{" "}
              </motion.p>
            </div>
            <div className="proj-sel-map">
              <motion.iframe
                src={selectedProject.mapLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                key={selectedProject.mapLink}
                {...nrmlVisible(0.5)}
              ></motion.iframe>
            </div>
          </div>

          {/* Success Metrics Section */}
          <div className="proj-mat-sec">
            <div>
              <h2 className="proj-mat-heading">Our Project Success Metrics</h2>
              <AnimatedProgressBar
                className="proj-mat-bar-1"
                label="On-Time Delivery"
                value={95}
                color="#4caf50"
              />
              <AnimatedProgressBar
                className="proj-mat-bar-2"
                label="Customer Satisfaction"
                value={98}
                color="#2196f3"
              />
              <AnimatedProgressBar
                className="proj-mat-bar-3"
                label="Project Completion Rate"
                value={95}
                color="#ff9800"
              />
            </div>
            <div className="proj-mat-disc-box">
              <motion.ul className="proj-mat-points-list" {...nrmlScaleUp(0.5)}>
                <li className="proj-mat-point">
                  {" "}
                  <ion-icon name="checkmark-outline"></ion-icon>
                  100% On-Time Project Delivery
                </li>
                <li className="proj-mat-point">
                  {" "}
                  <ion-icon name="checkmark-outline"></ion-icon> End-to-End
                  Technical Support
                </li>
                <li className="proj-mat-point">
                  {" "}
                  <ion-icon name="checkmark-outline"></ion-icon> Industry-Grade
                  Installations
                </li>
                <li className="proj-mat-point">
                  {" "}
                  <ion-icon name="checkmark-outline"></ion-icon>
                  Energy-Efficient System Designs
                </li>
                <li className="proj-mat-point">
                  {" "}
                  <ion-icon name="checkmark-outline"></ion-icon>
                  Strict Safety & Compliance Standards
                </li>
                <li className="proj-mat-point">
                  {" "}
                  <ion-icon name="checkmark-outline"></ion-icon>
                  Fast Post-Installation Assistance
                </li>
                <li className="proj-mat-point">
                  {" "}
                  <ion-icon name="checkmark-outline"></ion-icon>
                  High Customer Satisfaction Rate
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
}

export default ProjectsPage;
