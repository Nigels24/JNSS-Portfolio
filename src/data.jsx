import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project1.jpg";
import Work2 from "./assets/project2.png";
import Work3 from "./assets/project3.png";
import Work4 from "./assets/project4.png";
import Work5 from "./assets/project5.png";
import Work6 from "./assets/project6.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "John Nigels",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Sipe",
  },

  {
    id: 3,
    title: "Age : ",
    description: "22 y/o",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Filipino",
  },

  {
    id: 5,
    title: "Address : ",
    description: "Philippines",
  },

  {
    id: 6,
    title: "Phone : ",
    description: "+63 9667 705 924",
  },

  {
    id: 7,
    title: "Email : ",
    description: "nigesipe@gmail.com",
  },

  {
    id: 8,
    title: "Linkedin : ",
    description: "John Nigels Sipe",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "John Nigels Sipe",
  },
  {
    id: 10,
    title: "Languages : ",
    description: "Tagalog, English, Cebuano",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "4+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "4+",
    title: "Happy <br /> Clients",
  },

  {
    id: 4,
    no: "8+",
    title: " Technical <br /> Skills",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2023",
    title: "Frontend Developer <span> Landing Page </span>",
    desc: "A Responsive Landing Page that has a CRUD functionality",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "December 9, 2022",
    title: "Tester <span> Resider App </span>",
    desc: "A mobile application that can assist people in locating a rental home",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "December 10, 2022",
    title: "Analyst <span> Car Shopee </span>",
    desc: "A web application that has a CRUDS functionality",
  },

  {
    id: 4,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - 2023",
    title: "Asst. Programmer <span> Pension House Reservation System </span>",
    desc: "A web application that can perform CRUDS funtionality",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2020 - Present",
    title: "College <span> WMSU-ESU Pagadian </span>",
    desc: "MAKAPASAR IN GOD'S NAME",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2018 - 2020",
    title: "Senior High School <span> MVTS </span>",
    desc: "With Honor",
  },

  {
    id: 7,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2014 - 2018",
    title: "High School <span> MVTS </span>",
    desc: "STEM-Curriculum ",
  },

  {
    id: 8,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009 - 2014",
    title: "Elementary School <span>MRPS-South Regular </span>",
    desc: "With Honor",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "40",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "50",
  },

  {
    id: 3,
    title: "Css",
    percentage: "40",
  },

  {
    id: 4,
    title: "Php",
    percentage: "30",
  },

  {
    id: 5,
    title: "React-Native",
    percentage: "20",
  },

  {
    id: 6,
    title: "Jquery",
    percentage: "10",
  },

  {
    id: 7,
    title: "Angular",
    percentage: "10",
  },

  {
    id: 8,
    title: "React",
    percentage: "60",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Mobile Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project Name : ",
        desc: "Resider App",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Ms. Darllaine Lincopinis",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React Native",
      },
      {
        icon: <FiExternalLink />,
        title: "Role : ",
        desc: "Tester ",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Web Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project Name : ",
        desc: "Reservation System",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Darllain Lincopinis",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "JavaScript",
      },
      {
        icon: <FiExternalLink />,
        title: "Role : ",
        desc: "Asst. Programmer",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "MYMG Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Landing Page",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "MYMG",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "ReactJS, TailwindCSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Role : ",
        desc: "Frontend Developer",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "SK-Landing Page",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Landing Page",
      },
      {
        icon: <FiUser />,
        title: "Client : ",

        desc: "Brgy. Makuguihon",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "ReactJS, TailwindCSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Role : ",
        desc: "Programmer",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Portfolio",
    details: [
      {
        title: "Project : ",
        desc: "My Portfolio",
      },
      {
        title: "Client : ",
        desc: "John Nigels Sipe",
      },
      {
        title: "Language : ",
        desc: "ReactJS",
      },
      {
        title: "Role : ",
        desc: "Programmer",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Mini Portfolio",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "My Portfolio",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Yours Truly",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "ReactJS",
      },
      {
        icon: <FiExternalLink />,
        title: "Role : ",
        desc: "Programmer",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
