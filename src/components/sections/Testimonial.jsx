import React from "react";
import { motion } from "framer-motion";

import tesimonialBg from "./../../assets/other/fire/fire-7.jpg";

import { nrmlScaleUp } from "@/animations/appAnimation";

function Testimonials() {
  return (
    <>
      <section className="section-testimonial">
        <div className="section-testimonial-bg">
          <img
            className="section-testimonial-bg-img"
            src={tesimonialBg}
            alt=""
          />
        </div>
        <div className="testimonial-grid">
          <div className="testimonial-heading-box">
            <h4 className="testimonial-section-heading">Testimonial</h4>
            <h2 className="tesimonial-heading">
              what people <br /> say about us!{" "}
            </h2>
            <h3 className="tesimonial-subheading">
              <em> The impact we’ve made together. </em>
            </h3>
          </div>
          <div className="testimonial-sparkles-box--1">
            <svg
              className="testimonial-sparkle-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="testimonial-sparkles-box--2">
            <svg
              className="testimonial-sparkle-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>

          <motion.div className="c c1" {...nrmlScaleUp(0.1)}>
            <div>
              <blockquote>
                "We look at other consultant and review their capabilities, but
                GnP has always been the consultant we prefer because they
                understand our operations and deliver to our standards on
                ground"
              </blockquote>
              <p>-Mr. Ashok, Director Amcor</p>
            </div>
          </motion.div>
          <motion.div className="c c2" {...nrmlScaleUp(0.2)}>
            <div>
              <blockquote>
                " The new Epoxy Coated tanks will serve this community extremely
                well by providing low-maintenance benefits for many years to
                come"
              </blockquote>
              <p>-Mr. Ram Sharma, BVR Consulting</p>
            </div>
          </motion.div>
          <motion.div className="c c3" {...nrmlScaleUp(0.3)}>
            <div>
              <blockquote>
                "They consistently build a quality product that’s extremely
                competitive and they’re always accommodating and a pleasure to
                work with.”
              </blockquote>
              <p>-Mr. Vipul Solanki, MD Shayona</p>
            </div>
          </motion.div>
          <motion.div className="c c4" {...nrmlScaleUp(0.4)}>
            <div>
              <blockquote>
                "Project executed with super speed from delivery to installation
                without disturbing normal operation of company adhering company
                safety policy, Highly appreciated."
              </blockquote>
              <p>- Mr. Nandlal Panchal, Engg. Manager</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
