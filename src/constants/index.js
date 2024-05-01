import {
  python,
  learner,
  programmer,
  educator,
  pythonpng,
  java,
  cPlusPlus,
  racket,
  javascript,
  html,
  css,
  reactjs,
  mysql,
  redis,
  mongodb,
  git,
  docker,
  nasa,
  mit,
  neu,
  aerospaceNU,
  space,
  irengine,
  portfolio,
  masteryi,
  davidgoggins,
  loyalty,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Experienced Educator",
    icon: educator,
  },
  {
    title: "Lifelong Learner",
    icon: learner,
  },
  {
    title: "Software Savvy",
    icon: programmer,
  },
  {
    title: "Python Prodigy",
    icon: python,
  },
];

const technologies = [
  {
    name: "Python",
    icon: pythonpng,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C++",
    icon: cPlusPlus,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Racket",
    icon: racket,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Internship",
    company_name: "AerospaceNU",
    icon: aerospaceNU,
    iconBg: "#E6DEDD",
    date: "May 2021 - Aug 2021",
    points: [
      "Contributed to the design of a new avionics navigation system using CAD, integrating its functionality with data from the Global Positioning System (GPS) to enhance accuracy and reliability in rocket navigation.",
      "Developed the GUI to monitor the rockets’ avionics using Python and C++.",
      "Performed static analysis on the rockets' avionics source code to identify potential bugs.",
      "Integrated data collected from the propulsion pressure gauge into a centralized dashboard, displaying real-time psi levels during rocket launches.",
    ],
  },
  {
    title: "Software Engineer Internship",
    company_name: "National Aeronautics and Space Administration (NASA)",
    icon: nasa,
    iconBg: "#E6DEDD",
    date: "May 2022 - Aug 2022",
    points: [
      "Contributed to the General Mission Analysis Tool (GMAT) by integrating its space flight simulation with Debris Assessment Software (DAS), enhancing GMAT’s capabilities in planning space flight scenarios.",
      "Successfully modeled space debris ranging from 10 cm to 1 m in size within GMAT, ensuring accurate simulation results without compromising performance.",
      "Optimized GMAT by eliminating recursion to prevent runaway code, improving its suitability for deployment in space environments.",
      "Participated in mission briefings and code review sessions.",
    ],
  },
  {
    title: "Data Engineer Co-Op",
    company_name: "Massachusetts Institute of Technology (MIT)",
    icon: mit,
    iconBg: "#E6DEDD",
    date: "July 2023 - Dec 2023",
    points: [
      "Designed and implemented a custom application using Zapier to streamline the process for professors to propose new programs, decreasing time spent on administrative tasks by 40% and improving efficiency in program development and approval workflows.",
      "Authored a 20 page LaTeX report, documenting the process and outcomes of the Zapier application, including detailed analyses, methodologies employed, and recommendations for future scalability.",
      "Utilized Marketo to manage email campaigns for university recruiters and potential students, tracking responses and engagement metrics to optimize outreach strategies and improve conversion rates, resulting in a 10% increase in applicant response rate compared to the previous year.",
      "Employed Slate to develop custom JavaScripts, enabling the dynamic display of web pages tailored to different university programs.",
    ],
  },
  {
    title: "Head Teaching Assistant",
    company_name: "Northeastern University",
    icon: neu,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Built a Python application using the evolutionary machine learning model to best assign TAs office hour slots based on their availability. Used by 20+ professors.",
      "Trained and supervised 11 TAs in effective teaching methodologies, grading standards, and classroom management techniques.",
      "Gave lectures in the Large-Scale Information Storage & Retrieval class, covering topics on NoSQL technologies such as document stores and graph databases.",
    ],
  },
];

const quotes = [
  {
    quote:
      "A true master is an eternal student.",
    name: "Master Yi",
    designation: "Ionian Blademaster",
    image: masteryi,
  },
  {
    quote:
    "I don't stop when I'm tired, I stop when I'm done.",
    name: "David Goggins",
    designation: "Retired Navy SEAL",
    image: davidgoggins,
  },
  {
    quote:
      "I will take responsibility for what I have done, if I must fall, I will rise each time a better man.",
    name: "Brandon Sanderson",
    designation: "Author",
    image: loyalty,
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Created this portfolio website using ReactJS and its tilt, and motion modules to generate animations and showcase experiences and expertise.  ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/TeeChenxing/Placeholder",
  },
  {
    name: "Flight Navigation",
    // https://www.youtube.com/watch?v=jp4YbWVzawY
    description:
      "An app that is built using Python to model flight dynamics, control and nagivation systems for an aircraft. Plan to add space flight modeling in the future.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "matlab",
        color: "green-text-gradient",
      },
    ],
    image: space,
    source_code_link: "https://github.com/TeeChenxing/Placeholder",
  },
  {
    name: "IR Engine",
    description:
      "A search engine built using Python that crawls the web and indexes quality web pages using BM25, TF-IDF and Jelinek-Mercer Smoothing. Created a perl file to evaluate engine performance.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "perl",
        color: "green-text-gradient",
      },
      {
        name: "elasticsearch",
        color: "pink-text-gradient",
      },
    ],
    image: irengine,
    source_code_link: "https://github.com/TeeChenxing/Placeholder",
  },
];

export { services, technologies, experiences, quotes, projects };
