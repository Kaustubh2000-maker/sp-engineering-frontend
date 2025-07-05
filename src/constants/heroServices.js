import firefightinImage1 from "@assets/heroSection/fire-hero-final.webp";

import solarImage1 from "@assets/heroSection/solar-bg-12.webp";
import solarImage2 from "@assets/heroSection/blob-solar.svg";

import hvacImage1 from "@assets/heroSection/hvac-bg-1.webp";
import hvacImage2 from "@assets/heroSection/blob-hvac-1.svg";
import hvacImage3 from "@assets/heroSection/blob-hvac-2.svg";
import hvacImage4 from "@assets/heroSection/blob-hvac-3.svg";

export const HERO_SERVICES = [
  {
    id: "fire",
    name: "fire",
    title: "Safeguarding Your Business with Our Expert",
    description:
      "Fire hazards don’t wait, and neither should you. Our expert fire protection solutions ensure safety, keeping your workplace, employees, and assets secure at all times.",
    image: [firefightinImage1],
    alignment: "center",
    color: "#af0000",
    button: {
      link: "/products/fireFightingSystems",
    },
  },
  {
    id: "solar",
    name: "solar",
    title: "Your business Needs Our",
    description:
      "Transition to solar and take control of your energy expenses. Our commercial solar solutions offer significant cost savings by harnessing clean and renewable power, making your business more energy-efficient and environmentally responsible.",
    image: [solarImage1, solarImage2],
    alignment: "right",
    color: "#21549c",
    button: {
      link: "/products/solar",
    },
  },
  {
    id: "hvac",
    name: "hvac",
    title: "Optimized Climate Control for Industrial Environments",
    description:
      "Enhance productivity with our state-of-the-art industrial HVAC systems. Designed for factories, warehouses, and large facilities, our solutions provide efficient climate control and optimal air quality.",
    image: [hvacImage1, hvacImage2, hvacImage3, hvacImage4],
    alignment: "left",
    color: "#96c2ff",
    button: {
      link: "/products/hvac",
    },
  },
];

export const ENERGY_IMAGE = "@assets/heroSection/hero-energy-name-1.png";
