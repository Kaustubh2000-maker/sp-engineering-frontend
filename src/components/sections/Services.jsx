import { motion, AnimatePresence } from "framer-motion";
import { nrmlScaleUp } from "../../animations/appAnimation";
import { servicesData } from "../../constants/servicesData";
import { p } from "framer-motion/client";

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

  let { title, description, services, advantages } = service;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="service-container"
        key={category}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        <motion.h2 className="service-title" {...nrmlScaleUp()}>
          {title}
        </motion.h2>

        <div className="service-text-box">
          <motion.p className="service-description" {...nrmlScaleUp(0)}>
            {description}
          </motion.p>
        </div>

        <motion.h3 className="service-section-title" {...nrmlScaleUp(0)}>
          what we offer here
        </motion.h3>
        <ul className="service-list">
          {services.map((item, index) => (
            <motion.li key={index} className="service-item" {...nrmlScaleUp(0)}>
              ✅ {item}
            </motion.li>
          ))}
        </ul>

        {category == "fireconsultancy" ? (
          <motion.div className="service-img-box" {...nrmlScaleUp(0)}>
            <img
              className="service-img"
              src="/src/assets/services/fireconsultancy/fire-1.png"
              alt=""
            />
            <img
              className="service-img"
              src="/src/assets/services/fireconsultancy/fire-2.png"
              alt=""
            />
          </motion.div>
        ) : (
          <motion.div className="service-img-box epcm-box" {...nrmlScaleUp(0)}>
            <img
              className="service-img "
              src="/src/assets/services/epcm/epcm.png"
              alt=""
            />
          </motion.div>
        )}

        <motion.h3 className="service-section-title" {...nrmlScaleUp()}>
          Advantages of Service
        </motion.h3>
        <ul className="service-advantage-list">
          {advantages.map((advantage, index) => {
            const [strongText, ...normalText] = advantage.split(" – ");
            return (
              <motion.li
                key={index}
                className="service-advantage-item"
                {...nrmlScaleUp()}
              >
                ✅ <strong>{strongText}</strong> - {normalText.join(" – ")}
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default Services;
