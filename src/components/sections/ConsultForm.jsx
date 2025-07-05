import React, { useState } from "react";
import { serviceConfig } from "@/constants/consultForm";
import { motion } from "framer-motion";
import {
  nrmlScaleUp,
  nrmlLeft,
  nrmlRight,
  nrmlVisible,
} from "@/animations/appAnimation";

function ConsultForm({ service, product }) {
  const usageOptions = Object.keys(serviceConfig[service] || {});
  const [usageType, setUsageType] = useState(usageOptions[0] || "");
  const fields = usageType ? serviceConfig[service][usageType] : [];
  console.log(product);
  return (
    <div className="consult-form-section">
      <div className="consult-form-bg">
        <img className="consult-form-bg-img" src={product.image} alt="" />
      </div>

      <div className="consult-form-section-grid">
        <div className="consult-content-div">
          <motion.h1 className="consult-content-heading" {...nrmlVisible()}>
            {product.title}
          </motion.h1>
          <motion.img
            className="consult-content-img"
            {...nrmlScaleUp(0.2)}
            src={product.image}
            alt=""
          />
          <motion.p className="consult-content-desc" {...nrmlScaleUp(0.3)}>
            {product.description[0]}
          </motion.p>
          <motion.p className="consult-content-desc" {...nrmlScaleUp(0.4)}>
            {product.description[1]}
          </motion.p>
        </div>

        <motion.div className="consult-form-div" {...nrmlVisible()}>
          <h2 className="consult-form-heading">Inquiry Form</h2>

          {/* Usage Type Selector as Flex Buttons */}
          {usageOptions.length > 0 && (
            <div className="consult-form-feild-div">
              {usageOptions.map((type) => (
                <button
                  className={`consult-form-feild-type-btn ${
                    usageType === type
                      ? "consult-form-feild-selected-usage-type"
                      : ""
                  }`}
                  key={type}
                  type="button"
                  onClick={() => setUsageType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          )}

          {/* Dynamic Form Fields */}
          <form className="consult-form-box">
            <div className="consult-form-label-input-div">
              <label className="consult-form-label">
                Name <span className="cta-required">*</span>{" "}
              </label>
              <input
                type="text"
                placeholder="Name"
                className="consult-form-input"
              />
            </div>
            <div className="consult-form-label-input-div">
              <label className="consult-form-label">
                {usageType === "Commercial"
                  ? "Company Name"
                  : usageType === "Industrial"
                  ? "Factory / Plant Name"
                  : usageType === "HousingSociety"
                  ? "Society Name"
                  : usageType === "Residential"
                  ? "Building Name"
                  : "Organization Name"}
                <span className="cta-required">*</span>{" "}
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="consult-form-input"
              />
            </div>
            <div className="consult-from-contact-pincode-div">
              <div className="consult-form-label-input-div">
                <label className="consult-form-label">
                  Contact Number <span className="cta-required">*</span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="consult-form-input"
                />
              </div>

              <div className="consult-form-label-input-div">
                <label className="consult-form-label">
                  Pincode <span className="cta-required">*</span>{" "}
                </label>
                <input
                  type="text"
                  placeholder="Pincode"
                  className="consult-form-input"
                />
              </div>
            </div>
            {fields.map((field, index) => (
              <div key={index} className="consult-form-label-input-div">
                <label className="consult-form-label">
                  {field.label} <span className="cta-required">*</span>{" "}
                </label>
                {field.type === "select" ? (
                  <select className="consult-form-select">
                    <option
                      className="consult-form-option consult-form-option-default"
                      value=""
                    >
                      --Select--
                    </option>
                    {field.options.map((opt, i) => (
                      <option
                        key={i}
                        value={opt}
                        className="consult-form-option"
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.label}
                    className="consult-form-input"
                  />
                )}
              </div>
            ))}

            <button type="submit" className="consult-form-submit-btn">
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default ConsultForm;
