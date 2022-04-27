import boggleImage from "../images/boggle.png";
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
} from "@fortawesome/free-solid-svg-icons";

export const PROJECTS = [
  {
    name: "TimeLine",
    image: boggleImage,
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
            name: "JavaScript",
            icon: faJsSquare,
          },
          {
            name: "Flask",
            icon: faPepperHot,
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
    image: boggleImage,
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
    name: "Personal Website",
    image: boggleImage,
    color: "#bf7394",
    githubLink: "https://github.com/NicholasLin718/NicholasLinWebsite",
    descriptions: [
      {
        projectDescription:
          "My personal website created using the React.js library to create components and Sass to style. The cards were created using Material UI's premade attributes.",
        tools: [
          {
            name: "React.js",
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
  {
    name: "Ephphatha",
    image: boggleImage,
    color: "#bf7394",
    githubLink: "https://github.com/NicholasLin718/TimeLine",
    ActionAreaLink: "https://github.com/NicholasLin718/TimeLine",
    DemoLink: "https://youtu.be/Kypr42PMlr0",
    descriptions: [
      {
        projectDescription:
          "My personal website created using the React.js library to create components and Sass to style. The cards were created using Material UI's premade attributes.",
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
];