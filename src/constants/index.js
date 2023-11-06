import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ensar,
  update,
  foodorder,
  expensetracker,
  quizpage,
  newsgrid,
  thankyou,
  todolist,
  uipagedesign,
  hotelwebsite,
  edgeledger,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "HTML & CSS",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Ensar Solutions(Trainee)",
    icon: ensar,
    iconBg: "white",
    date: "June 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Will Be Update Soon",
    company_name: "Unknown",
    icon: update,
    iconBg: "white",
    date: "____ - ____",
    points: [
      "As Of Now No Data"
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hotel Website",
    description:
      "This website uses to book rooms in hotels this is the private own hotel website.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "15-06-2023",
        color: "pink-text-gradient",
      },
    ],
    image: hotelwebsite,
    source_code_link: "https://hotel-website-brown-omega.vercel.app/",
    source_code_git_link: "https://github.com/DeepakPachipala/Hotel-website",
  },
  {
    name: "Edge Ledger",
    description:
      "EdgeLedger is a one page Accounting Consultant page that provides the user with information on what they do, who they are, their clients and a contact for to reach out to the company for more info.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "20-06-2023",
        color: "pink-text-gradient",
      },
    ],
    image: edgeledger,
    source_code_link: "https://edge-ledger-taupe.vercel.app/",
    source_code_git_link: "https://github.com/DeepakPachipala/Edge-Ledger",
  },
  {
    name: "New Grid",
    description:
      "This is a new grid website where the news data present",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "28-06-2023",
        color: "pink-text-gradient",
      },
    ],
    image: newsgrid,
    source_code_link: "https://news-grid-website-opal.vercel.app/",
    source_code_git_link: "https://github.com/DeepakPachipala/News-Grid-website",
  },

  {
    name: "Food Ordering App",
    description:
      "Web-based platform that allows users to search, Add, and manage food items from various restaurents, providing a convenient and efficient solution for delivey needs.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "emailjs",
        color: "green-text-gradient",
      },
      {
        name: "10-07-2023",
        color: "pink-text-gradient",
      },
    ],
    image: foodorder,
    source_code_link: "https://food-order-website-gamma.vercel.app/",
    source_code_git_link: "https://github.com/DeepakPachipala/Sample-Quiz-UI",

  },
  {
    name: "Expense Tracker",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "green-text-gradient",
      },
      {
        name: "22-07-2023",
        color: "pink-text-gradient",
      },
    ],
    image: expensetracker,
    source_code_link: "https://expense-app-tool.vercel.app/",
    source_code_git_link: "https://github.com/DeepakPachipala/expense-app-tool",
  },
  {
    name: "TO-DO List",
    description:
      "We can add the deatails with names and with there age.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "green-text-gradient",
      },
      {
        name: "28-07-2023",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://to-do-form-seven.vercel.app/",
    source_code_git_link: "https://github.com/DeepakPachipala/To-Do-Form",
  },
  {
    name: "Quiz Page",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "green-text-gradient",
      },
      {
        name: "10-08-2023",
        color: "pink-text-gradient",
      },
    ],
    image: quizpage,
    source_code_link: "https://sample-quiz-ui.vercel.app/",
    source_code_git_link: "https://github.com/DeepakPachipala/Food-Order-Website",
  },
  {
    name: "Thanking UI",
    description:
      "Thank you UI page ",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "green-text-gradient",
      },
      {
        name: "15-08-2023",
        color: "pink-text-gradient",
      },
    ],
    image: thankyou,
    source_code_link: "https://thanking-page-o5af.vercel.app/",
    source_code_git_link: "https://github.com/DeepakPachipala/Thank-page",
  },
  
  {
    name: "UI page design",
    description:
      "These are just an another example UI page",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "HTML & CSS",
        color: "green-text-gradient",
      },
      {
        name: "20-08-2023",
        color: "pink-text-gradient",
      },
    ],
    image: uipagedesign,
    source_code_link: "https://ui-page-design.vercel.app/",
    source_code_git_link: "https://github.com/DeepakPachipala/UI-page-design",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
