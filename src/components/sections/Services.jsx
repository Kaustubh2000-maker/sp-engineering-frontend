import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CtaForm from "./cta";

import {
  nrmlScaleUp,
  nrmlLeft,
  nrmlRight,
  nrmlVisible,
} from "../../animations/appAnimation";
import { servicesData, steps } from "../../constants/servicesData";

function Services(props) {
  let category = props.category;
  console.log(category);

  const service = servicesData.find(
    (el) =>
      el.title.toLowerCase().replace(/\s+/g, "") === category.toLowerCase()
  );

  if (!service) {
    return <>No such service found</>;
  }

  let { title, description, services, advantages, bgImg } = service;
  const industries = [
    { name: "Residential Buildings", icon: "🏢" },
    { name: "Hospitals & Healthcare", icon: "🏥" },
    { name: "Manufacturing Units", icon: "🏭" },
    { name: "Commercial Complexes", icon: "🏬" },
    { name: "Educational Institutions", icon: "🏫" },
    { name: "Warehouses", icon: "📦" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="service-container"
        key={category}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <div className="service-section">
          <div className="service-bg-div">
            <img className="service-bg-img" src={bgImg} alt="" />
          </div>
          <div className="service-heading-box">
            <motion.h2 className="service-title" {...nrmlScaleUp(0)}>
              {title}
            </motion.h2>

            <motion.p className="service-description" {...nrmlScaleUp(0)}>
              {description}
            </motion.p>
          </div>

          <div className="services-data">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-div"
                {...nrmlScaleUp(0.3 + index * 0.1)}
              >
                <div className="service-bg-gradient"></div>
                <motion.div className="service-content">
                  <h3 className="service-heading">{service.name}</h3>
                  <p className="service-desc">{service.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="process-timeline">
          <motion.h3 className="process-title" {...nrmlVisible(0.5)}>
            Our Service Timeline
          </motion.h3>
          <div className="timeline">
            {steps.map((step, idx) => (
              <div className="timeline-step" key={idx}>
                <div className="timeline-step-break-div">
                  <motion.div className="timeline-step-number" {...nrmlLeft(0)}>
                    0{idx + 1}
                  </motion.div>
                  <motion.div
                    className="timeline-step-heading"
                    {...nrmlScaleUp(0)}
                  >
                    {step[0]}
                  </motion.div>
                </div>
                <motion.div className="timeline-step-content" {...nrmlRight(0)}>
                  {step[1]}
                </motion.div>
              </div>
            ))}
          </div>
        </section>
        {/*
        <section className="why-choose-us">
          <h3 className="section-title">Why Choose Us?</h3>
          <div className="features">
            {points.map((point, idx) => (
              <div className="feature-card" key={idx}>
                <div className="feature-icon">{point.icon}</div>
                <h4 className="feature-title">{point.title}</h4>
                <p className="feature-desc">{point.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="industries-section">
          <h3 className="section-title">Industries We Serve</h3>
          <div className="industries-grid">
            {industries.map((item, idx) => (
              <div className="industry-card" key={idx}>
                <div className="industry-icon">{item.icon}</div>
                <p className="industry-name">{item.name}</p>
              </div>
            ))}
          </div>
        </section>{" "}
        */}
      </motion.div>
      <CtaForm />
    </AnimatePresence>
  );
}

export default Services;
