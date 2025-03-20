import { useState, useEffect } from "react";
import { productsdata } from "../../constants/productsData";
import { motion, AnimatePresence } from "framer-motion";

import { nrmlScaleUp } from "../../animations/appAnimation";

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

  let { title, description, text, products, advantages } = product;
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

          <div className="product-text-box">
            <motion.p className="product-description" {...nrmlScaleUp(0.2)}>
              {description}
            </motion.p>

            {text.map((item, index) => (
              <motion.p
                key={index}
                className="product-text"
                {...nrmlScaleUp(0.3)}
              >
                {item}
              </motion.p>
            ))}
          </div>

          <motion.h3 className="product-section-title" {...nrmlScaleUp(0.4)}>
            All basic service we that we provide
          </motion.h3>
          <div className="product-items-list-div">
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

          <motion.h3 className="product-section-title" {...nrmlScaleUp()}>
            benifits offered
          </motion.h3>
          <ul className="product-advantage-list">
            {advantages.map((advantage, index) => {
              const [strongText, ...normalText] = advantage.split(" – ");
              return (
                <motion.li
                  key={index}
                  className="product-advantage-item"
                  {...nrmlScaleUp()}
                >
                  ✅ <strong>{strongText}</strong> - {normalText.join(" – ")}
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default Products;
