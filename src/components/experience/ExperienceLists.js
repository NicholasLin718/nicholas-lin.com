import shadImage from "../images/shadImage.png";
import catalystImage from "../images/catalyst.png";
import PIDemoImage from "../images/Demo.JPG";
import LCBODemoImage from "../images/LCBODemo.jpg";
import VerdantRobotics from "../images/VerdantRobotics.png";
import {
  faJsSquare,
  faReact,
  faPython,
  faDocker,
  faAngular,
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
    name: "Verdant Robotics",
    subheading: "Full Stack Developer",
    image: VerdantRobotics,
    color: "#bf7394",
    ActionAreaLink: "https://www.verdantrobotics.com/",
    descriptions: [
      {
        experienceDescription:
          "The next generation of transformative on-farm technology, with a mission to help growers ensure sustainable food supply through machine learning, perception, and robotics. As a full stack developer, I have been making UI and database improvements in our internal tools used for image labelling and verification. I am currently developing the tablet interface of our upcoming 2024 robot that the operator will use when operating the machine. The interface is built on FoxGlove Studios and is communicating with the robot in real time to keep track of status and analytics. ",
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
        icon: "far fa-file-video",
        target: "https://www.youtube.com/watch?v=sV0cR_Nhac0&t",
      },
    ],
  },
  {
    name: "LCBO Next",
    subheading: "Full Stack Developer",
    image: LCBODemoImage,
    color: "#bf7394",
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
    ActionAreaLink: "https://www.shad.ca/about-shad/",
    link: "https://docs.google.com/presentation/d/1k_6jDZFNFLPTgoY51hii79riYn_GcU_QEu5IXVq6Su0/edit#slide=id.g5dd95b87a5_0_0",
    descriptions: [
      {
        experienceDescription:
          "Canada's premier month-long STEAM/entrepreneurship program, featuring workshops, seminars, team building events, and opportunities to meet amazing people!",
        tools: [],
      },
      {
        experienceDescription:
          "For our final project, I formulated a solution with a team of 7 to reduce Canada's waste. The business Furnitire repurposes old tires into sustainable and visually appealing furniture. We built a prototype and composed a report analyzing the market, functionality, and impact. We were awarded with the Most Impactful Award by the panel of judges.",
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
