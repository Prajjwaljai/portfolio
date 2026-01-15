const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [

  {
    id: 1,
    date: "Jan 8, 2024",
    title: "A Complete Guide to Modern React Patterns",
    image: "/images/blog11.png",
    link: "https://kentcdodds.com/blog",
  },
  
  {
    id: 2,
    date: "Nov 2, 2023",
    title: "Designing Better UI with Practical UX Principles",
    image: "/images/blog22.jpg",
    link: "https://uxdesign.cc/",
  },
  {
    id: 3,
    date: "Oct 10, 2023",
    title: "Scaling Web Applications the Right Way",
    image: "/images/blog33.png",
    link: "https://vercel.com/blog",
  },
];


const techStack = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frontend Development",
    items: ["React.js", "Next.js", "HTML", "CSS"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Jupyter Notebook"],
  },
  {
    category: "Problem Solving",
    items: ["Data Structures", "Algorithms", "380+ LeetCode Problems"],
  },
];


const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Prajjwaljai",
  },
  {
    id: 2,
    text: "Gmail",
    icon: "/icons/icon8.svg",
    bg: "#4bcb63",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=prajjwalj885@gmail.com",
  
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/prajjwal-jaiswal",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AI-Powered Stock Market Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Stock Market Platform.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-0",
          description: [
            "A full-stack stock market platform that provides real-time stock prices, company data, and personalized watchlists.",
            "Integrated third-party market APIs to fetch live data and present actionable insights in a clean, intuitive dashboard.",
            "Implemented background workflows and notifications to keep users informed about price changes and market activity.",
            "Built using Next.js, TypeScript, and Tailwind CSS with a scalable backend architecture for performance and reliability.",
          ],
        },
        {
          id: 2,
          name: "stock-platform.demo",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Prajjwaljai/Metrik-stock_tracker",
          position: "top-10 left-30",
        },
        {
          id: 3,
          name: "stock-platform.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-10 left-70",
          imageUrl: "/images/dashboard.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Splitzy – Group Expense Sharing App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-40",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Splitzy Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-0",
          description: [
            "A group expense management web application that helps users track shared spending and settle balances effortlessly.",
            "Allows creation of groups, expense entries, and automatic calculation of who owes whom in real time.",
            "Focused on clean UI and accurate calculations to simplify real-world expense sharing scenarios.",
            "Developed using Next.js, React, Tailwind CSS, and MongoDB for a smooth and responsive user experience.",
          ],
        },
        {
          id: 2,
          name: "splitzy.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://splitzy-eight.vercel.app/",
          position: "top-10 left-30",
        },
        {
          id: 3,
          name: "splitzy.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-10 left-50",
          imageUrl: "/images/project-2.png",
        },

      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Term Deposit Subscription Prediction",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "ML Prediction Model.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-0",
          description: [
            "A machine learning model designed to predict customer subscription to term deposits based on historical banking data.",
            "Performed data preprocessing, feature selection, and model training using supervised learning techniques.",
            "Evaluated model performance using accuracy, precision, and recall to ensure reliable predictions.",
            "Implemented using Python, Pandas, and Scikit-learn, demonstrating practical application of data science concepts.",
          ],
        },
        {
          id: 2,
          name: "prediction-demo.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Prajjwaljai/Term-deposit-prediction-model",
          position: "top-10 left-40",
        },

        {
          id: 3,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-10 left-70",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-0",
      imageUrl: "/images/prajjwal1.jpg",
    },
    
    {
      id: 2,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-30",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/prajjwal1.jpg",
      description: [
          "Hey, I’m Prajjwal 👋 — a web developer passionate about building modern, interactive applications that solve real problems.",
          "I specialize in JavaScript, React, and Next.js, with a strong focus on performance and clean architecture.",
          "I believe good software comes from thoughtful design, clear logic, and attention to detail in both UI and UX.",
          "Outside of development, I actively explore emerging technologies, continuously work on improving my technical skills.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      href: "/files/Resume_.pdf",
    },
  ],
};


const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-0",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-30",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  contact: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  safari: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  terminal: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  txtfile: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  imgfile: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
  resume: {
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: INITIAL_Z_INDEX,
    data: null,
  },
};


export { INITIAL_Z_INDEX, WINDOW_CONFIG };