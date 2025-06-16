import { useState, useEffect } from "react";
import { productsdata } from "../../constants/productsData";
import { motion, AnimatePresence } from "framer-motion";

import { nrmlScaleUp } from "../../animations/appAnimation";
// import { image } from "framer-motion/dist/types/client";
import fireMul from "./../../assets/other/tank/tank-multi.jpg";

import CtaForm from "./cta";

function Products(props) {
  let category = props.category;
  let imgAni = {
    initial: { opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };
  const product = productsdata.find(
    (el) =>
      el.title.toLocaleLowerCase().replace(/\s+/g, "") ==
      category.toLocaleLowerCase()
  );

  if (!product) {
    return <>no such product found </>;
  }

  let { title, description, text, products, advantages, image, icon } = product;
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  useEffect(() => {
    setSelectedProduct(products[0]);
  }, [category, products]);

  // Import all images dynamically
  const images = import.meta.glob("/src/assets/products/**/*.png", {
    eager: true,
  });

  // Construct the dynamic path
  const imagePath =
    images[
      `/src/assets/products/${category.toLowerCase()}/${selectedProduct}.png`
    ]?.default;

  // <motion.img
  //   src={imagePath}
  //   alt={selectedProduct}
  //   className="product-img"
  //   key={selectedProduct}
  //   {...imgAni}
  // />;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          className="product-container"
          key={category}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <motion.h2 className="product-title" {...nrmlScaleUp()}>
            {title}
          </motion.h2>

          <div className="product-disc-box">
            <div className="product-text-box">
              <div className="product-text-img-div">
                <div className="product-image-div">
                  <motion.img
                    className="product-image"
                    src={image}
                    alt=""
                    {...nrmlScaleUp(0.5)}
                  />
                </div>
                <div className="product-description-box">
                  <div className="">
                    {description.map((item, index) => (
                      <motion.p
                        key={index}
                        className="product-description"
                        {...nrmlScaleUp(0.3 + index * 0.1)}
                      >
                        {item}
                      </motion.p>
                    ))}
                  </div>
                </div>
              </div>

              {text.map((item, index) => (
                <motion.p
                  key={index}
                  className="product-text"
                  {...nrmlScaleUp(1)}
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </div>
          <div className="product-adv-box">
            <motion.h3 className="product-section-title" {...nrmlScaleUp()}>
              Smart Solutions, Real Benefits
            </motion.h3>
            <div className="product-adv-text-box">
              <ul className="product-adv-list">
                {advantages.map((advantage, index) => {
                  const [firstText, ...secondText] = advantage.split(" – ");
                  return (
                    <motion.li
                      key={index}
                      className="product-adv-item"
                      {...nrmlScaleUp()}
                    >
                      <motion.div {...nrmlScaleUp(0.3 + index * 0.1)}>
                        <ion-icon
                          class="product-adv-icon"
                          name={icon[index]}
                        ></ion-icon>
                      </motion.div>
                      <motion.p {...nrmlScaleUp(0.3 + index * 0.1)}>
                        <strong>{firstText}</strong> <br />
                        {secondText}
                      </motion.p>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
            <div className="product-adv-img-box">
              <img src={fireMul} alt="" />
            </div>
          </div>
          <div className="product-items-sec">
            {/* <motion.h3 className="product-section-title" {...nrmlScaleUp(0.2)}>
              All basic {title} service we that we provide
            </motion.h3> */}
            <div className="product-items-list-div">
              <motion.h3
                className="product-section-title"
                {...nrmlScaleUp(0.2)}
              >
                All basic {title} service we that we provide
              </motion.h3>
              <div className="product-itmes-list">
                {products.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`product-item-div ${
                      selectedProduct === item ? "active" : ""
                    }`}
                    {...nrmlScaleUp(0.1)}
                    onClick={() => setSelectedProduct(item)}
                  >
                    <p className="product-item">{item}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div className="product-item-img-div" {...nrmlScaleUp()}>
                <AnimatePresence mode="wait">
                  {/* <motion.img
                  src={`/src/assets/products/${category.toLowerCase()}/${selectedProduct}.png`}
                  alt={selectedProduct}
                  className="product-img"
                  key={selectedProduct}
                  {...imgAni}
                /> */}
                  <motion.img
                    src={imagePath}
                    alt={selectedProduct}
                    className="product-img"
                    key={selectedProduct}
                    {...imgAni}
                  />
                  ;
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div>
          <CtaForm />
        </div>
      </AnimatePresence>
    </>
  );
}

export default Products;
