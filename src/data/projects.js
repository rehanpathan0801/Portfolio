import projectAurora from "../assets/prescripto.jpg";
import projectPulse from "../assets/pgfinder.png";
import projectNebula from "../assets/car.png";
import projectMosaic from "../assets/Keeper.png";
import projectAtlas from "../assets/weather.png";
import projectHorizon from "../assets/project-horizon.svg"

const projects = [
  {
    id: "aurora",
    title: "Prescripto-Smart Healthcare Platform",
    description:
      "Prescripto connects doctors, patients and labs on one smart platform, enabling secure appointments, online prescriptions and real-time health insights",
    tech: ["React", "Javascript", "Express", "MongoDB","Tailwind CSS"],
    image: projectAurora,
    links: [
      //{ label: "Live Demo", href: "https://example.com/aurora", variant: "primary" },
      { label: "GitHub", href: "https://github.com/rehanpathan0801/Prescripto", variant: "secondary" },
    ],
  },
  {
    id: "pulse",
    title: "PG-Finder - PG Accomodation Platform",
    description:
      "PG-Finder is a platform that helps students find the perfect PG accommodation in their desired location with ease and convenience.",
    tech: ["React", "Javascript", "Express", "MongoDB","Tailwind CSS"],
    image: projectPulse,
    links: [
     // { label: "Live Demo", href: "https://example.com/pulse", variant: "primary" },
      { label: "GitHub", href: "https://github.com/rehanpathan0801/PGFinder", variant: "secondary" },
    ],
  },
  {
    id: "nebula",
    title: "Car Price Predictor",
    description:
      "Car Price Predictor is a machine learning model that predicts the price of a car based on its features.",
    tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning","Linear Regression"],
    image: projectNebula,
    links: [
     // { label: "Live Demo", href: "https://example.com/nebula", variant: "primary" },
      { label: "GitHub", href: "https://github.com/rehanpathan0801/car-price-prediction", variant: "secondary" },
    ],
  },
  {
    id: "mosaic",
    title: "Keeper - Note Taking App",
    description:
      "Keeper is a note taking app that helps users take notes and manage their tasks with ease and convenience.",
    tech: ["React", "Javascript","Tailwind CSS"],
    image: projectMosaic,
    links: [
      //{ label: "Live Demo", href: "https://example.com/mosaic", variant: "primary" },
      { label: "GitHub", href: "#", variant: "secondary" },
    ],
  },
  {
    id: "atlas",
    title: "Weather App",
    description:
      "Weather App is a weather app that helps users check the weather of a city with ease and convenience.",
    tech: ["Javascript","HTML","CSS","API"],
    image: projectAtlas,
    links: [
      //{ label: "Live Demo", href: "https://example.com/atlas", variant: "primary" },
      { label: "GitHub", href: "https://github.com/rehanpathan0801/Weather-apps", variant: "secondary" },
    ],
  },
 ,
];

export default projects;


