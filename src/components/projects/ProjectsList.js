import boggleImage from "../images/boggle.png";
import countdownImage from "../images/countdownBuddyDemo.png";
import websiteImage from "../images/website.png";
import EphphathaImage from "../images/EphphathaImage.png";
import timelineImage from "../images/timeline-banner.png";
import partyPlannerImage from "../images/partyplanner.png"
import {
  faJsSquare,
  faRaspberryPi,
  faReact,
  faPython,
  faJava,
  faSass,
  faHtml5,
  faCss3,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faRobot,
  faDatabase,
  faLocationDot,
  faPepperHot,
  faFile,
  faKeyboard,
  faGear,
  faBoltLightning,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

export const PROJECTS = [
  {
    name: "Party Planner",
    image: partyPlannerImage,
    color: "#bf7394",
    githubLink: "https://github.com/NicholasLin718/party-planner",
    ActionAreaLink: "https://github.com/NicholasLin718/party-planner",
    descriptions: [
      {
        projectDescription:
          "Scheduling an event with friends can sometimes be a hassle, whether it would be finding a time where everyone is available, or figuring out how to delegate tasks in preparation to the event. Party planner is here to resolve that! With its room-based format, users can interact with one another to organize the event easily. No email required! ",
        tools: [
          {
            name: "React",
            icon: faReact,
          },
          {
            name: "Redux",
            icon: faReact,
          },
          {
            name: "TailwindCSS",
            icon: faWind,
          },
          {
            name: "Express.js",
            icon: faBoltLightning,
          },
          {
            name: "MongoDB",
            icon: faDatabase,
          }
        ],
      },
    ],
  },
  {
    name: "TimeLine",
    image: timelineImage,
    color: "#bf7394",
    githubLink: "https://github.com/NicholasLin718/TimeLine",
    ActionAreaLink: "https://github.com/NicholasLin718/TimeLine",
    DemoLink: "https://youtu.be/RT1EIRt_i2U",
    descriptions: [
      {
        projectDescription:
          "As COVID-19 health restrictions begin to relax in many countries, public spaces now seem to be home to comically long lineups. TimeLine is a solution to that problem: a real-time, community-driven foot traffic indicator to help everyone avoid busy times and busy lines wherever they go.",
        tools: [
          {
            name: "HTML",
            icon: faHtml5,
          },
          {
            name: "CSS",
            icon: faCss3,
          },
          {
            name: "Python",
            icon: faPython,
          },
          {
            name: "Flask",
            icon: faPepperHot,
          },
          {
            name: "JavaScript",
            icon: faJsSquare,
          },
          {
            name: "Google Maps APIs",
            icon: faLocationDot,
          },
        ],
      },
    ],
  },
  {
    name: "Countdown Buddy",
    image: countdownImage,
    color: "#bf7394",
    githubLink: "https://github.com/NicholasLin718/Countdown-Buddy",
    ActionAreaLink: "https://github.com/NicholasLin718/Countdown-Buddy",
    descriptions: [
      {
        projectDescription:
          "Ever wanted to create countdown for your discord server to look forward to important events? Countdown buddy is here to help! It is a discord bot that allows you to create your own customizable countdown timer that updates in real time and it comes with many other customizable features!",
        tools: [
          {
            name: "Python",
            icon: faPython,
          },
          {
            name: "Discord.py",
            icon: faDiscord,
          },
          {
            name: "MongoDB",
            icon: faDatabase,
          },
          {
            name: "JSON",
            icon: faFile,
          },
        ],
      },
    ],
  },
  {
    name: "Ephphatha",
    image: EphphathaImage,
    color: "#bf7394",
    githubLink: "https://github.com/NicholasLin718/KNIVX-SE101-Project",
    ActionAreaLink: "https://github.com/NicholasLin718/KNIVX-SE101-Project",
    DemoLink: "https://youtu.be/Kypr42PMlr0",
    descriptions: [
      {
        projectDescription:
          "In the world of silence, it is challenging to learn written English without knowing the sounds of words and letters. This project is an ASL translator built from a Raspberry Pi that recognizes ASL hand signals from a captured image and translates the signals into written English. ",
        tools: [
          {
            name: "Python",
            icon: faPython,
          },
          {
            name: "HTML",
            icon: faHtml5,
          },
          {
            name: "Flask",
            icon: faPepperHot,
          },
          {
            name: "JavaScript",
            icon: faJsSquare,
          },
          {
            name: "Machine Learning",
            icon: faRobot,
          },
          {
            name: "Raspberry Pi",
            icon: faRaspberryPi,
          },
        ],
      },
    ],
  },
  {
    name: "Personal Website",
    image: websiteImage,
    color: "#bf7394",
    githubLink: "https://github.com/NicholasLin718/NicholasLinWebsite",
    ActionAreaLink: "https://github.com/NicholasLin718/NicholasLinWebsite",
    descriptions: [
      {
        projectDescription:
          "My personal website created from scratch using React to create components and Sass to style. The cards were created using Material UI's premade attributes.",
        tools: [
          {
            name: "React",
            icon: faReact,
          },
          {
            name: "Sass",
            icon: faSass,
          },
          {
            name: "Material UI",
            icon: faKeyboard,
          },
        ],
      },
    ],
  },
  {
    name: "Boggle",
    image: boggleImage,
    color: "#bf7394",
    githubLink: "https://github.com/NicholasLin718/Boggle",
    ActionAreaLink: "https://en.wikipedia.org/wiki/Boggle",
    DemoLink: "https://youtu.be/VZ8jEPalEM8",
    descriptions: [
      {
        projectDescription:
          "Created a Boggle Game (AKA Word Hunt) using Java and Java swing for the GUI. The game offers 3 modes, singleplayer, player vs player, and player vs computer. The computer has 3 difficulties, and can select certain words from a list of predetermined words that were calculated using a trie. This list is also used to check for the validity of the user's input word.",
        tools: [
          {
            name: "Java",
            icon: faJava,
          },
          {
            name: "Java Swing",
            icon: faJava,
          },
        ],
      },
    ],
  },
  
];