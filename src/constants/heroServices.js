import firefightinImage1 from "@assets/heroSection/fire-hero-final.webp";

import solarImage1 from "@assets/heroSection/solar-bg-12.webp";
import solarImage2 from "@assets/heroSection/blob-solar.svg";

import hvacImage1 from "@assets/heroSection/hvac-bg-1.webp";
import hvacImage2 from "@assets/heroSection/blob-hvac-1.svg";
import hvacImage3 from "@assets/heroSection/blob-hvac-2.svg";
import hvacImage4 from "@assets/heroSection/blob-hvac-3.svg";

export const HERO_SERVICES = [
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
      label: "Learn More",
      path: "/products/hvac",
    },
  },
];

export const ENERGY_IMAGE = "@assets/heroSection/hero-energy-name-1.png";
