import firefightinImage1 from "@assets/heroSection/fire-hero-final.jpg";
import firefightinImage2 from "@assets/heroSection/fire-hero-2.jpg";
import firefightinImage3 from "@assets/heroSection/fire-hero-3.jpg";

import solarImage1 from "@assets/heroSection/solar-bg-11.png";
import solarImage2 from "@assets/heroSection/blob-haikei.svg";

import hvacImage from "@assets/heroSection/444.jpg";

export const HERO_SERVICES = [
  {
    id: "fire",
    name: "fire",
    title: "Safeguarding Your Business with Our Expert",
    description:
      "Fire hazards don’t wait, and neither should you. Our expert fire protection solutions ensure safety, keeping your workplace, employees, and assets secure at all times.",
    image: [firefightinImage1, firefightinImage2, firefightinImage3],
    alignment: "center",
    color: "#af0000",
    button: {
      label: "Learn More",
      path: "/products/fire",
    },
  },
  {
    id: "solar",
    name: "solar",
    title: "Your business Needs Our Energy",
    description:
      "Transition to solar and take control of your energy expenses. Our commercial solar solutions offer significant cost savings by harnessing clean and renewable power, making your business more energy-efficient and environmentally responsible.",
    image: [solarImage1, solarImage2],
    alignment: "right",
    color: "#21549c",
    button: {
      label: "Learn More",
      path: "/products/solar",
    },
  },
  // {
  //   id: "hvac",
  //   name: "hvac",
  //   title: "Optimized Climate Control for Industrial Environments",
  //   description:
  //     "Enhance productivity with our state-of-the-art industrial HVAC systems. Designed for factories, warehouses, and large facilities, our solutions provide efficient climate control and optimal air quality.",
  //   image: hvacImage,
  //   alignment: "left",
  //   color: "#96c2ff",
  //   button: {
  //     label: "Learn More",
  //     path: "/products/hvac",
  //   },
  // },
];

export const ENERGY_IMAGE = "@assets/heroSection/hero-energy-name-1.png";
