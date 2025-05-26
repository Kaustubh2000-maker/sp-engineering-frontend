const projectImages = import.meta.glob(
  "/src/assets/projects/projectsPage/*.png",
  {
    eager: true,
  }
);

function getImageByProjectName(name) {
  const fileName = `${name}.png`;
  const path = `/src/assets/projects/projectsPage/${fileName}`;
  return projectImages[path]?.default || null;
}
{
  /* <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235450.47534840886!2d72.03164029453124!3d22.768584600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9557299e39ad%3A0x896514f295dc9009!2sDharmaj%20Crop%20Guard%20Limited!5e0!3m2!1sen!2sin!4v1748234421084!5m2!1sen!2sin"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>; */
}
export const projectsData = [
  {
    name: "Ami Organics Ltd.",
    image: getImageByProjectName("Ami Organics Ltd."),
    location: "Ankleshwar, Gujarat",
    description:
      "Ami Organics Ltd. is a pharmaceutical company specializing in the production of advanced pharmaceutical intermediates and specialty chemicals. The company emphasizes research and innovation, with cGMP-compliant production facilities and R&D laboratories. Ami Organics is committed to the healthcare industry by supporting the development and commercialization of pharmaceutical intermediate products. Built on a foundation of quality and innovation, the company has established itself as a reliable partner in the pharmaceutical sector.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12475.499918564592!2d73.00878528819486!3d21.625378926867878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0232e3e08b73d%3A0xad836d3bcf97023e!2sAMI%20ORGANICS%20LIMITED%20UNIT%202!5e0!3m2!1sen!2sin!4v1748234027466!5m2!1sen!2sin",
  },
  {
    name: "Intas Pharmaceuticals Ltd.",
    image: getImageByProjectName("Intas Pharmaceuticals Ltd."),
    location: "Ankleshwar, Gujarat",
    description:
      "Intas Pharmaceuticals Ltd. is a leading, vertically integrated global pharmaceutical formulation development, manufacturing, and marketing company. Intas is committed to challenging the unmet medical and societal needs through a comprehensive pharmaceutical value chain spanning across the world. The company has set up a network of subsidiaries, under the umbrella name of Accord Healthcare, to operate in global markets.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235098.2640090469!2d72.34938748260436!3d22.97193227409314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e835b12b9a1a3%3A0x2777d1a734a0bf00!2sIntas%20Pharmaceuticals%20Limited!5e0!3m2!1sen!2sin!4v1748233785503!5m2!1sen!2sin",
  },
  {
    name: "Yasho Industries Ltd.",
    image: getImageByProjectName("Yasho Industries Ltd."),
    location: "Pakhajan, Dahej, Gujarat",
    description:
      "Yasho Industries Limited manufactures performance chemicals for industries as diverse as rubber & latex, food & flavors, perfumery, lubricants, and other specialty applications since 1993. The company's portfolio of products includes aroma chemicals, antioxidants, rubber chemicals, cosmetic chemicals, lube additives, and other specialty chemicals. Yasho Industries is committed to delivering high-quality products to its global clientele.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29640.307363245272!2d72.71792180907508!3d21.778773996367722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f815995131a83%3A0x297f55d47d91c8d9!2sYasho%20Industries%20Limited!5e0!3m2!1sen!2sin!4v1748233863654!5m2!1sen!2sin",
  },
  {
    name: "Dharmaj Crop Guard Ltd.",
    image: getImageByProjectName("Dharmaj Crop Guard Ltd."),
    location: "Saykha G.I.D.C., Gujarat",
    description:
      "Dharmaj Crop Guard Ltd. is engaged in the business of manufacturing and dealing in pesticides, including concessionaires of public health products. The company is involved in the manufacturing, distributing, and marketing of a range of agrochemical formulations such as insecticides, fungicides, herbicides, plant growth regulators, micro fertilizers, and antibiotics to B2C and B2B customers. Dharmaj Crop Guard operates through the Agri-Inputs segment.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235450.47534840886!2d72.03164029453124!3d22.768584600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9557299e39ad%3A0x896514f295dc9009!2sDharmaj%20Crop%20Guard%20Limited!5e0!3m2!1sen!2sin!4v1748234421084!5m2!1sen!2sin",
  },
  {
    name: "Hindprakash Overseas Pvt. Ltd.",
    image: getImageByProjectName("Hindprakash Overseas Pvt. Ltd."),
    location: "Saykha G.I.D.C., Gujarat",
    description:
      "Hindprakash Overseas Pvt. Ltd. is involved in the manufacturing of dyestuffs, dye intermediates, textile chemicals, auxiliaries, adhesives, and paint binders. The company has expanded its operations with a significant land acquisition at GIDC Saykha. Hindprakash continues to innovate and strive to add value to its products and services.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14504.634191895426!2d72.79946607492435!3d21.785238479246672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f87adb962c38f%3A0x9077dc2d6300a8b0!2sHindprakash%20overseas%20Private%20Limited%20-%20Saykha!5e0!3m2!1sen!2sin!4v1748234498103!5m2!1sen!2sin",
  },
  {
    name: "Torrent Power Ltd.",
    image: getImageByProjectName("Torrent Power Ltd."),
    location: "Ahmedabad, Gujarat",
    description:
      "Torrent Power is an integrated power utility company involved in power generation, transmission, and distribution. It serves over 3.85 million customers across various regions in India, including Ahmedabad, Gandhinagar, Surat, and others. The company has a unique mix of coal-based, gas-based, and renewable power plants, and operates 400 kV double circuit transmission lines implemented by it, for evacuating power generated at its plants to various off-take centers.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117510.96196764542!2d72.39878089726561!3d23.015782699999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e849949ed92c5%3A0x36a15e65d2be746f!2sTorrent%20Power%20Limited!5e0!3m2!1sen!2sin!4v1748234588585!5m2!1sen!2sin",
  },
  {
    name: "Vidhi Specialty Food Ingredients Ltd.",
    image: getImageByProjectName("Vidhi Specialty Food Ingredients Ltd."),
    location: "Dahej SEZ, Gujarat",
    description:
      "Vidhi Specialty Food Ingredients Ltd. is a leading manufacturer of synthetic food-grade colors used in food, beverages, pharmaceuticals, cosmetics, and other industries. The company has commenced trial production at its new plant in Dahej SEZ. Vidhi is an ISO 9001:2008, ISO 22000:2018, GMP, HACCP & FSSC 22000 certified company, with manufacturing facilities audited and found satisfactory by the U.S. FDA.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.0709906639236!2d72.63206857505118!3d21.699967580122625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f7d004b6c05db%3A0x8b2d66f96ebe624b!2sVIDHI%20SPECIALITY%20FOOD%20INGREDIENTS%20LTD.!5e0!3m2!1sen!2sin!4v1748234677091!5m2!1sen!2sin",
  },
  {
    name: "PI Industries Ltd.",
    image: getImageByProjectName("PI Industries Ltd."),
    location: "Jambusar, Gujarat",
    description:
      "PI Industries is an agri-sciences company specializing in the manufacturing of agrochemicals like insecticides, fungicides, and herbicides. The company operates multiple manufacturing facilities in Gujarat and has a strong presence in both domestic and export markets. PI Industries is known for its technological capabilities in chemistry and engineering-related services, and has built leading brands over the last 75 years.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3694.6002916999187!2d72.78768067506563!3d22.17928207977377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fa6bb1cac895f%3A0x86680d5aca695e8a!2sPI%20Industries%20Ltd!5e0!3m2!1sen!2sin!4v1748234730154!5m2!1sen!2sin",
  },
  {
    name: "GSP Crop Science Pvt. Ltd.",
    image: getImageByProjectName("GSP Crop Science Pvt. Ltd."),
    location: "Nandesari & Saykha G.I.D.C., Gujarat",
    description:
      "GSP Crop Science specializes in providing innovative crop protection solutions, including pesticides, herbicides, fungicides, and fertilizers. The company serves farmers with products tailored to modern agricultural needs. GSP Crop Science has a strong presence in the Indian market and continues to expand its product portfolio to meet the evolving demands of the agriculture industry.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d472110.56678407354!2d72.4788477890625!3d22.4153289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fca77ede1f39f%3A0x5f71fb24321cb6e3!2sGSP%20Crop%20Science%20Limited!5e0!3m2!1sen!2sin!4v1748234864413!5m2!1sen!2sin",
  },
  {
    name: "Shree Sulphurics Pvt. Ltd.",
    image: getImageByProjectName("Shree Sulphurics Pvt. Ltd."),
    location: "Ankleshwar, Gujarat",
    description:
      "Established in 1979, Shree Sulphurics Pvt. Ltd. manufactures sulfur and chlorine derivatives, including sulfuric acid, oleum, and chlorosulfonic acid, catering to various industrial applications. The company has gradually expanded into new value-added products through continuous R&D, and is one of the most reputed plants for sulfur and chlorine derivatives in Western India.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3708.9597770469645!2d73.02128777504896!3d21.626490980176655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023db74204b35%3A0x70a2ab709084844a!2sShree%20Sulphurics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1748234939803!5m2!1sen!2sin",
  },
  {
    name: "Subhasri Pigments Pvt. Ltd.",
    image: getImageByProjectName("Subhasri Pigments Pvt. Ltd."),
    location: "Ankleshwar, Gujarat",
    description:
      "Founded in 1989, Subhasri Pigments Pvt. Ltd. specializes in the production of phthalocyanine pigments, serving both domestic and international markets with a focus on quality and consistency. The company prides itself on its professional setup and has always aimed at quality, consistency, and integrity in its operations.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.1681942011955!2d73.01966917504875!3d21.618368680182574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be023c3fe8f665b%3A0xfc5968e1125b4e8!2sSubhasri%20Pigments%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1748234981832!5m2!1sen!2sin",
  },
  {
    name: "Ecoplast Ltd.",
    image: getImageByProjectName("Ecoplast Ltd."),
    location: "Valsad, Gujarat",
    description:
      "Ecoplast Ltd. is a leading supplier of multilayer co-extruded polyethylene and co-polymer films, serving industries like construction, packaging, and automotive with high-quality film solutions. The company specializes in producing high-quality, multilayer coextruded polyethylene and co-polymer films with an annual capacity of 7800 MT. Ecoplast's advanced, automated production facility ensures consistent quality to meet the rigorous demands of various industries.",
    mapLink:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.802608869488!2d72.94872137914079!3d20.596117131820588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c2646f553721%3A0x818c94f740d27849!2sEcoplast%20Limited!5e0!3m2!1sen!2sin!4v1748235023804!5m2!1sen!2sin",
  },
  // {
  //   name: "Kolte Industries",
  //   image: getImageByProjectName("Kolte Industries"),
  //   location: "Jalgaon, Maharashtra",
  //   description:
  //     "Established in 2016, Kolte Industries (now VoltX Solar and Electricals LLP) provides solar solutions for commercial, industrial, and residential projects across India, promoting renewable energy adoption. The company has gained immense expertise in supplying and trading LED light housing, solar LED lights, and sheet metal press components, and is one of the leading sellers of listed products.",
  // },
  // {
  //   name: "Patil Industries",
  //   image: getImageByProjectName("Patil Industries"),
  //   location: "Jalgaon, Maharashtra",
  //   description:
  //     "Patil Industries is known for manufacturing PVC pipes and related products, serving the construction and infrastructure sectors in the region. The company deals in SPM, material handling solutions, liquid filling systems, capping and labeling machines, packaging machines, and industrial storage solutions, catering to a wide range of industrial needs.",
  // },
];
