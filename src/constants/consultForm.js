// config.js or inside your component
export const serviceConfig = {
  fireFightingSystems: {
    Commercial: [
      {
        label: "Type of Property",
        type: "select",
        options: ["Office", "Mall", "Hotel", "School", "Warehouse", "Other"],
      },
      { label: "Property Name", type: "text" },
      {
        label: " Is Construction Done ?",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        label: "Existing Fire System Installed?",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        label: "Do you have a building layout/floor plan?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
    Industrial: [
      {
        label: "Type of Industry",
        type: "select",
        options: [
          "Manufacturing",
          "Chemical",
          "Oil & Gas",
          "Warehouse",
          "Textile",
          "Other",
        ],
      },
      {
        label: "Existing Fire System Installed?",
        type: "select",
        options: ["Yes", "No"],
      },
      {
        label: "Do you have a building layout/floor plan?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
  },
  solar: {
    Residential: [
      { label: "Monthly Electricity Bill (₹)", type: "number" },
      {
        label: "Property Type",
        type: "select",
        options: ["Apartment Flat", "Row House", "Banglow"],
      },
      { label: "Building Name (if flat)", type: "text" },
      { label: "Flat Number / Row House Number", type: "text" },
      {
        label: "Is Previous HVAC System Installed?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
    Commercial: [
      { label: "Monthly Electricity Bill (₹)", type: "number" },
      {
        label: "Type of Commercial Space",
        type: "select",
        options: ["Office", "Mall", "Hospital", "Hotel", "School", "Other"],
      },
      {
        label: "Is Previous HVAC System Installed?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],

    Industrial: [
      { label: "Monthly Electricity Bill (₹)", type: "number" },
      {
        label: "Type of Industry",
        type: "select",
        options: [
          "Manufacturing",
          "Chemical",
          "Textile",
          "Pharma",
          "Food Processing",
          "Other",
        ],
      },
    ],

    Building: [
      { label: "Monthly Electricity Bill (₹)", type: "number" },
      { label: "Number of Flats", type: "number" },
      {
        label: "Is Previous HVAC System Installed?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
  },
  hvac: {
    Commercial: [
      {
        label: "Type of Commercial Space",
        type: "select",
        options: [
          "Office",
          "Mall",
          "Hotel",
          "Hospital",
          "Retail Store",
          "Other",
        ],
      },
      {
        label: "Is Previous HVAC System Installed?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
    Industrial: [
      {
        label: "Type of Industry",
        type: "select",
        options: [
          "Manufacturing",
          "Pharma",
          "Food",
          "Chemical",
          "Warehouse",
          "Other",
        ],
      },
      {
        label: "Is Previous HVAC System Installed?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
  },
  storageTanks: {
    Industrial: [
      { label: "Tank Capacity (Litres)", type: "number" },
      { label: "Stored Material", type: "text" },
      {
        label: "Type of Tank",
        type: "select",
        options: ["Underground", "Overhead", "Horizontal", "Vertical", "Other"],
      },
      {
        label: "Is Previous Tank System Installed?",
        type: "select",
        options: ["Yes", "No"],
      },
    ],
  },
};
