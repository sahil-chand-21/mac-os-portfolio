// contains all data

const navlinks=[
    {id:1,name: "Projects",type:"finder"},
    {id:2,name: "Contacts",type:"contact"},
    {id:3,name: "Resume",type:"resume"}
];

const navIcons=[
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

const dockApps=[
    {   id:"finder",
    name:"Portfolio",
    icon: "finder.png",
    canOpen :true,
    },
    {   id:"safari",
    name:"Articles",
    icon: "safari.png",
    canOpen :true,
    },
    {   id:"photos",
    name:"Gallery",
    icon: "photos.png",
    canOpen :true,
    },
    {   id:"contact",
    name:"Contact",
    icon: "contact.png",
    canOpen :true,
    },
    {   id:"terminal",
    name:"Skills",
    icon: "terminal.png",
    canOpen :true,
    },
    {   id:"trash",
    name:"Archieve",
    icon: "trash.png",
    canOpen :false,
    },
];

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

const techStack = [
  {
    category: "Frontend",
    items: ["React.js , ",  "JavaScript ."],
  },
  {
    category: "Mobile",
    items: ["Loading  ,", "learning ."],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS ,", "Sass ,", "CSS ."],
  },
  {
    category: "Backend",
    items: ["Node.js ."],
  },
  {
    category: "Database",
    items: ["MongoDB ."],
  },
  {
    category: "Dev Tools",
    items: ["Git ,", "GitHub ."],
  },
];



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
      name: "sahil mac-os portfolio",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "Description.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          heading:"Mac-OS Inspired Portfolio – Description",
          description: [
            "This project is a Mac-OS inspired portfolio built using React, where I focused on creating a clean, interactive, and user-friendly interface that mimics the look and feel of a real operating system. Through this project, I strengthened my understanding of component-based architecture, state management, and dynamic UI rendering in React.",
            "I used technologies like React.js, JavaScript (ES6+), HTML, and CSS to build responsive and reusable components. I also learned how to manage routing, handle events efficiently, and structure a scalable frontend project. Additionally, I improved my skills in designing smooth user experiences, working with assets, and organizing code for better maintainability.",
            "Overall, this project helped me gain practical experience in frontend development and deepened my confidence in building modern web applications using React.",
          ],
        },
        {
          id: 2,
          name: "sahil-macos-portfolio.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://sahil-mac-os-portfolio-e.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "sahil-macos-portfolio.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/macos_screenshot.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "project2",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "project2",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "",
            "",
            "",
            "",
          ],
        },
        {
          id: 2,
          name: "project_2.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "project_2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Project 3",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Project 3.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "",
            "",
            "",
          ],
        },
        {
          id: 2,
          name: "Project 3.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "Project 3.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
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
      name: "mountain_love.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/sahil_3forest.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/sahil_IIM.jpeg",
    },
    {
      id: 3,
      name: "sunset.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/sahil_1mount (1).jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/sahil_3forest.jpeg",
      description: [
        "Hey! I’m Sahil Chand👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me listening music at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
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
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
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
      position: "top-10 left-10",
      imageUrl: "/images/sahil_1mount (6).jpeg",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/sahil_1mount (5).jpeg",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};
export {navlinks,navIcons,dockApps,INITIAL_Z_INDEX,WINDOW_CONFIG,techStack,};
