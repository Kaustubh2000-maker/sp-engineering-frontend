import { motion } from "framer-motion";

import RenewSysHyderabadImg from "@assets/projects/RenewSysHyderabad-1.jpg";
import AmcorImg from "@assets/projects/amcor.png";
import SieccImg from "@assets/projects/SIECC.jpg";

import { projectCard, projectText } from "@animations/projectAnimation";

function Products() {
  return (
    <>
      <section class="section-projects">
        <div class="projects-heading-box">
          <motion.h3 class="projects-sub-heading" {...projectText("head1")}>
            Driven by Expertise and Vision
          </motion.h3>
          <motion.h2 class="projects-heading" {...projectText("head1")}>
            Projects That Showcase Our Excellence and Success
          </motion.h2>
        </div>
        <div class="projects-box">
          <motion.div class="project" {...projectCard(0)}>
            <div>
              <img class="project-img" src={AmcorImg} alt="" />
            </div>
            <div class="project-data-box">
              <motion.h3 class="project-company-name" {...projectText("head1")}>
                Amcor Flexibles India Pvt. Ltd.
              </motion.h3>
              <motion.p class="project-company-work" {...projectText("sub1")}>
                Project Management Services & MEP Consulting
              </motion.p>
              <motion.div {...projectText("sub1")}>
                <motion.a href="#" class="project-more-btn">
                  more
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div class="project" {...projectCard(0.2)}>
            <div>
              <img class="project-img" src={SieccImg} alt="" />
            </div>
            <div class="project-data-box">
              <motion.h3 class="project-company-name" {...projectText("head2")}>
                The Southern Gujarat Chamber Of Commerce
              </motion.h3>
              <motion.p class="project-company-work" {...projectText("sub2")}>
                Fire Water Storage Tank
              </motion.p>
              <motion.div {...projectText("sub2")}>
                <motion.a href="#" class="project-more-btn">
                  more
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div class="project" {...projectCard(0.4)}>
            <div>
              <img class="project-img" src={RenewSysHyderabadImg} alt="" />
            </div>
            <div class="project-data-box">
              <motion.h3 class="project-company-name" {...projectText("head3")}>
                RenewSys India Pvt. Ltd.
              </motion.h3>
              <motion.p class="project-company-work" {...projectText("sub3")}>
                MEP Consulting
              </motion.p>
              <motion.div {...projectText("sub3")}>
                <motion.a href="#" class="project-more-btn">
                  more
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div class="project-more-btn-div">
          <a href="#" class="project-explore-btn">
            Explore Our Work &#8594;
          </a>
        </div>
      </section>
    </>
  );
}

export default Products;
