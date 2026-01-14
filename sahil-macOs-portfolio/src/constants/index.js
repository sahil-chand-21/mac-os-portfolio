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

export {navlinks,navIcons,dockApps,INITIAL_Z_INDEX,WINDOW_CONFIG,techStack};