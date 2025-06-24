import { motion } from "framer-motion";

import RenewSysHyderabadImg from "@assets/projects/RenewSysHyderabad-1.jpg";
import AmcorImg from "@assets/projects/amcor.png";
import SieccImg from "@assets/projects/SIECC.jpg";

import { projectCard, projectText } from "@animations/projectAnimation";

function ProjectsSection() {
  return (
    <>
      <section className="section-projects">
        <div className="projects-heading-box">
          <motion.h3 className="projects-sub-heading" {...projectText("head1")}>
            Driven by Expertise and Vision
          </motion.h3>
          <motion.h2 className="projects-heading" {...projectText("head1")}>
            Projects That Showcase Our Excellence and Success
          </motion.h2>
        </div>
        <div className="projects-box">
          <motion.div className="project" {...projectCard(0)}>
            <div>
              <img className="project-img" src={AmcorImg} alt="" />
            </div>
            <div className="project-data-box">
              <motion.h3
                className="project-company-name"
                {...projectText("head1")}
              >
                Amcor Flexibles India Pvt. Ltd.
              </motion.h3>
              <motion.p
                className="project-company-work"
                {...projectText("sub1")}
              >
                Project Management Services & MEP Consulting
              </motion.p>
              <motion.div className="project-btn-div" {...projectText("sub1")}>
                <motion.a href="#" className="project-more-btn">
                  more
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="project" {...projectCard(0.2)}>
            <div>
              <img className="project-img" src={SieccImg} alt="" />
            </div>
            <div className="project-data-box">
              <motion.h3
                className="project-company-name"
                {...projectText("head2")}
              >
                The Southern Gujarat Chamber Of Commerce
              </motion.h3>
              <motion.p
                className="project-company-work"
                {...projectText("sub2")}
              >
                Fire Water Storage Tank
              </motion.p>
              <motion.div className="project-btn-div" {...projectText("sub2")}>
                <motion.a href="#" className="project-more-btn">
                  more
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div className="project" {...projectCard(0.4)}>
            <div>
              <img className="project-img" src={RenewSysHyderabadImg} alt="" />
            </div>
            <div className="project-data-box">
              <motion.h3
                className="project-company-name"
                {...projectText("head3")}
              >
                RenewSys India Pvt. Ltd.
              </motion.h3>
              <motion.p
                className="project-company-work"
                {...projectText("sub3")}
              >
                MEP Consulting
              </motion.p>
              <motion.div className="project-btn-div" {...projectText("sub3")}>
                <motion.a href="#" className="project-more-btn">
                  more
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="project-more-btn-div">
          <motion.a href="#" className="project-explore-btn">
            Explore Our Work &#8594;
          </motion.a>
        </div>
      </section>
    </>
  );
}

export default ProjectsSection;
