import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ctaBg from "./../../assets/other/epcm/epcm-1.webp";
import WhatsappLogo from "./../../assets/WhatsApp.png";

// let serviceId = "service_h2xk0wt",
//   templateId = "template_o3kz5mo",
//   publicApiKey = "WHWPKEtmLFTr18JHf";

let serviceId = "service_1xl763u",
  templateId = "template_y96ifj5",
  publicApiKey = "l0HcvRF_ClwchiEnT";

function CtaForm() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, formRef.current, publicApiKey).then(
      (result) => {
        console.log("SUCCESS!", result.text);
        alert("Message sent successfully!");
        formRef.current.reset();
      },
      (error) => {
        console.error("FAILED...", error.text);
        alert("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <>
      <div className="cta-sec" id="cta">
        <div className="cta-bg-div">
          <img className="cta-bg-img" src={ctaBg} alt="" />
        </div>
        <div className="cta-box">
          <div className="cta-form-div">
            <h3 className="cta-form-heading">Connect Us Now</h3>
            <form className="cta-form" ref={formRef} onSubmit={sendEmail}>
              <div className="cta-form-group">
                <label className="cta-label">
                  Name <span className="cta-required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="cta-input"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="cta-name-email">
                <div className="cta-form-group">
                  <label className="cta-label">
                    Phone No. <span className="cta-required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="cta-input"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="cta-form-group">
                  <label className="cta-label">
                    Email <span className="cta-required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="cta-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="cta-form-group">
                <label className="cta-label">
                  Select Services <span className="cta-required">*</span>
                </label>
                <select name="service" className="cta-select" required>
                  <option value="">Select a service</option>
                  <option value="Fire Protection Systems">
                    Fire Protection Systems
                  </option>
                  <option value="Solar">Solar</option>
                  <option value="HVAC">HVAC</option>
                  <option value="Storage Tanks">Storage Tanks</option>
                  <option value="EPCM">EPCM</option>
                  <option value="Fire Consultancy">Fire Consultancy</option>
                </select>
              </div>

              <div className="cta-form-group">
                <label className="cta-label">
                  Location <span className="cta-required">*</span>
                </label>
                <select name="location" className="cta-select" required>
                  <option value="">Select a location</option>
                  <option value="Nashik">Nashik</option>
                  <option value="Vadodara">Vadodara</option>
                </select>
              </div>

              <div className="cta-form-group">
                <label className="cta-label">
                  Message <span className="cta-required">*</span>
                </label>
                <textarea
                  name="message"
                  className="cta-textarea"
                  placeholder="Type your message"
                  required
                ></textarea>
              </div>

              <div className="cta-form-group">
                <button type="submit" className="cta-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="cta-div-2">
            <h3 className="cta-div-2-head-1">Contact Us</h3>
            <h5 className="cta-div-2-head-2">Get In Touch</h5>
            <p className="cta-div-2-head-3">
              Have questions or need a quote? Our team is here to help — reach
              out anytime!
            </p>

            <a
              href="https://wa.me/919172302137?text=Hello%20SP%20Engineering%2C%20I%20am%20interested%20in%20your%20services."
              className="cta-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={WhatsappLogo}
                alt="WhatsApp"
                style={{ width: "20px", height: "20px" }}
              />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CtaForm;
