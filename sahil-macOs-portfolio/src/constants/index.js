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


export {navlinks,navIcons,dockApps};