import shadImage from "../images/shadImage.png";
import PIDemoImage from "../images/Demo.JPG";
import LCBODemoImage from "../images/LCBODemo.jpg";
import VerdantRobotics from "../images/VerdantRobotics.png";
import Waabi from "../images/Waabi.jpg";
import {
  faJsSquare,
  faReact,
  faPython,
  faDocker,
  faAngular,
  faGolang,
  faRust,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

import {
  faUserPlus,
  faBrain,
  faTools,
  faHammer,
  faDatabase,
  faCircleNodes,
  faServer,
  faHashtag,
  faPersonChalkboard,
  faPepperHot,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export const EXPERIENCE = [
  {
    name: "Waabi Innovation Inc.",
    subheading: "Software Engineer",
    image: Waabi,
    color: "#bf7394",
    ActionAreaLink: "https://waabi.ai/",
    location: "Toronto, ON",
    descriptions: [
      {
        experienceDescription:
          "Waabi is the next generation of autonomous trucking powered by generative AI. As a member of the internal tools team, I was responsible for developing and maintaining services that solve Waabi-specific problems. I helped design a new lightweight and portable visualization of our final map layer, built as a relation of lane cells, allowing many visualization features to be extended off it for visibility and validations. I also created an interface for our new internal events system, which would speed up curation and triaging of our trucking events.",
        tools: [
          {
            name: "React",
            icon: faReact,
          },
          {
            name: "TypeScript/JavaScript",
            icon: faJsSquare,
          },
          {
            name: "Python",
            icon: faPython,
          },
          {
            name: "Golang",
            icon: faGolang,
          },
          {
            name: "Rust",
            icon: faRust,
          },
          {
            name: "PostgreSQL",
            icon: faDatabase,
          },
          {
            name: "Vue.js",
            icon: faVuejs,
          },
          {
            name: "FoxGlove Studios",
            icon: faCircleNodes,
          },
        ],
      },
    ],
    footer: [
      {
        name: "Learn more",
        icon: "fab fa-youtube",
        target: "https://www.youtube.com/watch?v=_VvRlhVpRzA",
      },
    ],
  },
  {
    name: "Verdant Robotics",
    subheading: "Full Stack Developer",
    image: VerdantRobotics,
    color: "#bf7394",
    ActionAreaLink: "https://www.verdantrobotics.com/",
    location: "Hayward, CA",
    descriptions: [
      {
        experienceDescription:
          "The next generation of on-farm tech, with a mission to promote sustainable agriculture through ML, perception, and robotics. I have made improvements to the UI and database of our internal tools used for image labelling and verification. Migrated from a CLI to React UI for the tablet interface of our upcoming 2024 robot that the operator will use during operation. The interface receives live messaging from the robot to keep track of status and analytics. ",
        tools: [
          {
            name: "React",
            icon: faReact,
          },
          {
            name: "TypeScript/JavaScript",
            icon: faJsSquare,
          },
          {
            name: "Python",
            icon: faPython,
          },
          {
            name: "PostgreSQL",
            icon: faDatabase,
          },
          {
            name: "MongoDB",
            icon: faDatabase,
          },
          {
            name: "Flask",
            icon: faPepperHot,
          },
          {
            name: "C++",
            icon: faPlus,
          },
          {
            name: "FoxGlove Studios",
            icon: faCircleNodes,
          },
        ],
      },
    ],
    footer: [
      {
        name: "Learn more",
        icon: "fab fa-youtube",
        target: "https://www.youtube.com/watch?v=sV0cR_Nhac0&t",
      },
    ],
  },
  {
    name: "LCBO Next",
    subheading: "Full Stack Developer",
    image: LCBODemoImage,
    color: "#bf7394",
    location: "Toronto, ON",
    ActionAreaLink: "https://www.lcbonext.com/",
    descriptions: [
      {
        experienceDescription:
          "The innovation outpost to enhance LCBO's tech initiatives on operations and customer experience. I collaborated with a team of 4 to develop an end-to-end theft prevention web application for LCBO stores. The alpha version of the project was demoed to the CEO and the CRO of LCBO, which exceeded expectations and effectively showcased the product's capabilities before launch.",
        tools: [
          {
            name: "React",
            icon: faReact,
          },
          {
            name: "TypeScript/JavaScript",
            icon: faJsSquare,
          },
          {
            name: "Python",
            icon: faPython,
          },
          {
            name: "PostgreSQL",
            icon: faDatabase,
          },
          {
            name: "GraphQL",
            icon: faCircleNodes,
          },
          {
            name: "Docker",
            icon: faDocker,
          },
          {
            name: "Kubernetes",
            icon: faServer,
          },
        ],
      },
    ],
  },
  {
    name: "Portable Intelligence Inc.",
    subheading: "Software Developer",
    image: PIDemoImage,
    color: "#bf7394",
    ActionAreaLink: "https://portable-intelligence.com/",
    location: "Markham, ON",
    descriptions: [
      {
        experienceDescription:
          "A mission to optimize warehouse processes through the use of various technologies to eliminate inefficiencies associated with inventory management. As a software developer, I expanded the tracking capability of our real-time location tracking prototype. I created a new positional tracking floor plan and introduced several new UI features. I also contributed in presenting the product demo to the Ontario Minister of Economic Development and international attendees from the Collision Tech Conference. ",
        tools: [
          {
            name: "Angular",
            icon: faAngular,
          },
          {
            name: "C#",
            icon: faHashtag,
          },
          {
            name: "SQL Server",
            icon: faDatabase,
          },
          {
            name: "Presentation",
            icon: faPersonChalkboard,
          },
        ],
      },
    ],
  },
  {
    name: "Shad Canada",
    subheading: "Ryerson University",
    image: shadImage,
    color: "#bf7394",
    location: "Toronto, ON",
    ActionAreaLink: "https://www.shad.ca/about-shad/",
    link: "https://docs.google.com/presentation/d/1k_6jDZFNFLPTgoY51hii79riYn_GcU_QEu5IXVq6Su0/edit#slide=id.g5dd95b87a5_0_0",
    descriptions: [
      {
        experienceDescription:
          "Canada's premier month-long STEAM/entrepreneurship program, featuring workshops, seminars, team building events, and opportunities to meet amazing people! For our final project, I formulated a solution with a team of 7 to reduce Canada's waste. The business Furnitire repurposes old tires into sustainable and visually appealing furniture. We built a prototype and composed a report analyzing the market, functionality, and impact. We were awarded with the Most Impactful Award by the panel of judges.",
        tools: [
          {
            name: "Problem Solving",
            icon: faBrain,
          },
          {
            name: "Prototyping",
            icon: faHammer,
          },
          {
            name: "Networking",
            icon: faUserPlus,
          },
          {
            name: "Workshops",
            icon: faTools,
          },
        ],
      },
    ],
    footer: [
      {
        name: "Presentation",
        icon: "far fa-file-powerpoint",
        target:
          "https://docs.google.com/presentation/d/1k_6jDZFNFLPTgoY51hii79riYn_GcU_QEu5IXVq6Su0/edit#slide=id.g5dd95b87a5_0_0",
      },
    ],
  },
];
