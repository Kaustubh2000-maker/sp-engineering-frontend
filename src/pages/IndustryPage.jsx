import { industryData } from "@/constants/industryData";
import { useParams } from "react-router-dom";
import Contact from "@/components/sections/contact";
import { motion } from "framer-motion";

import {
  nrmlLeft,
  nrmlRight,
  nrmlScaleUp,
  nrmlVisible,
} from "@/animations/appAnimation";
export default function IndustryPage() {
  let { category } = useParams();

  let industry = industryData.find((el) => {
    const slug = el.name.toLowerCase().replace(/ /g, "-");
    return slug === category;
  });

  return (
    <>
      <div className="industryPage">
        <motion.h2 className="industry-title" {...nrmlVisible()}>
          {industry.name}
        </motion.h2>
        <div className="industry-text-img">
          <div>
            <motion.p className="industry-heading" {...nrmlScaleUp(0.1)}>
              {industry.heading}
            </motion.p>

            <motion.p className="industry-text" {...nrmlScaleUp(0.2)}>
              {industry.text}
            </motion.p>
            <ul className="industry-applicaions">
              <motion.h3
                className="industry-appli-heading"
                {...nrmlScaleUp(0.3)}
              >
                Applicaions :{" "}
              </motion.h3>
              {industry.applications.map((appli, index) => (
                <motion.li
                  className="industry-appli"
                  key={index}
                  {...nrmlScaleUp(0.3)}
                >
                  <span className="material-symbols-rounded industry-appli-icon">
                    check
                  </span>
                  <span>{appli}.</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div className="industry-img-div" {...nrmlVisible(0.2)}>
            <img
              className="industry-img"
              src={
                new URL(`../assets/industry/${category}.webp`, import.meta.url)
                  .href
              }
              alt={category}
            />
          </motion.div>
        </div>

        <div className="industry-icon-div">
          <motion.h3 className="industry-icon-heading" {...nrmlVisible(0.2)}>
            Industry's Risks
          </motion.h3>
          <ul className="industru-icon-ul">
            {industry.industryPoints.map((pointItem, index) => {
              return (
                <motion.li key={index} {...nrmlScaleUp(0.2 * index)}>
                  <span className="material-symbols-rounded industry-icon-icon">
                    {pointItem.icon}
                  </span>{" "}
                  <span className="industry-icon-point">{pointItem.point}</span>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="why-box">
          <div className="why-head-box">
            <motion.h3 className="why-heading" {...nrmlRight(0.2)}>
              Why <br />
              Sp Engineering <br />
              And Services ?
            </motion.h3>
          </div>
          <div className="why-points-box">
            <motion.ul className="why-ul" {...nrmlLeft(0.2)}>
              {industry.whyChoose.map((point, index) => (
                <li className="why-point" key={index}>
                  {" "}
                  <span class="material-symbols-rounded why-point-icon">
                    check_circle
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        <motion.div className="dyk-div" {...nrmlVisible(0.2)}>
          <p className="industry-dyk-heading">Do you know ?</p>

          <p className="industry-dyk">{industry.didYouKnow}</p>
        </motion.div>

        <Contact />
      </div>
    </>
  );
}
