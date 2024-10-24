import Eco_mobile from '../assets/Videos/Ecommerce_mobile.mp4';
import Eco_laptop from '../assets/Videos/Ecommerce_laptop.mp4';
import Port_mobile from '../assets/Videos/Portfolio_mobile.mp4';
import Port_laptop from '../assets/Videos/Portfolio_laptop.mp4';
import Soul_mobile from '../assets/Videos/soul_mob.mp4';
import React from '../assets/Images/react.png'
import JavaScript from '../assets/Images/javascript.png'
import HtmlImage from '../assets/Images/html.png'
import CssImage from '../assets/Images/css.png'
import NodeJsImage from '../assets/Images/nodejs.png'
import MongoDBImage from '../assets/Images/mongo.png'
import PortFolio_ss from '../assets/Images/portfolio_ss.jpg'
import Ecommerce_ss from '../assets/Images/ecommerce_ss.jpg'
import Soul_ss from '../assets/Images/soul_ss.jpg'
import Dart from '../assets/Images/dart.png'
import Flutter from '../assets/Images/flutter.png'
import GoogleApi from '../assets/Images/GApi.png'

import Proj1_1 from '../assets/ProjectImage/proj1_1.png'
import Proj1_2 from '../assets/ProjectImage/proj1_2.png'
import Proj1_3 from '../assets/ProjectImage/proj1_3.png'
import Proj1_4 from '../assets/ProjectImage/proj1_4.png'
import Proj1_5 from '../assets/ProjectImage/proj1_5.png'
import Proj1_6 from '../assets/ProjectImage/proj1_6.jpg'

import Proj3_1 from '../assets/ProjectImage/proj3_1.png'
import Proj3_2 from '../assets/ProjectImage/proj3_2.png'
import Proj3_3 from '../assets/ProjectImage/proj3_3.png'
import Proj3_4 from '../assets/ProjectImage/proj3_4.png'
import Proj3_5 from '../assets/ProjectImage/proj3_5.png'
import Proj3_6 from '../assets/ProjectImage/proj3_6.png'
import Proj3_7 from '../assets/ProjectImage/proj3_7.png'
import Proj3_8 from '../assets/ProjectImage/proj3_8.png'
import Proj3_9 from '../assets/ProjectImage/proj3_9.png'
import Proj3_10 from '../assets/ProjectImage/proj3_10.jpg'

export const MyProjects = [
    {
        id: '01.',
        currIdx : 1,
        title: "WAMS 2025",
        image : Proj1_1,
        desc1 : "● Soul Healer is a Flutter-based music app that streams music from YouTube and allows classification by artist, genre, and language.",
        desc2 : "● YouTube Integration helps Seamless music search and playback using the YouTube API.",
        desc3 : "● Favorites & Saved state are present for Users to add songs to their favorites with persistent state across sessions.",
       
    },
    {
        id: '02.',
        currIdx : 2,
        title: "Music App",
        image : Soul_ss,
        desc1 : "● Soul Healer is a Flutter-based music app that streams music from YouTube and allows classification by artist, genre, and language.",
        desc2 : "● YouTube Integration helps Seamless music search and playback using the YouTube API.",
        desc3 : "● Favorites & Saved state are present for Users to add songs to their favorites with persistent state across sessions.",
        desc4 : "● Custom Themes offers 5-6 different theme color options for a personalized user experience.",
        desc5 : "● It isBuilt using popular packages like just_audio, provider, youtube_explode_dart, flutter_local_notifications, and more.",
    },
    {
      id: '03.',
      currIdx : 3,
      title: "Ecommerce Website",
      image : Ecommerce_ss,
      desc1 : "● Sahil is a full stack Ecommerce app made with MERN stack.",
      desc2 : "● Managing User and Cart States using React_Redux dependency and fetching data from MongoDB.",
      desc3 : "● Fully Responsive Web-Page for all kinds of devices.",
    },
    {
        id: '04.',
        currIdx : 4,
        title: "Portfolio Website",
        image : PortFolio_ss,
        desc1 : "● Sahil Raza, a Portfolio Web app is made with ReactJs.",
        desc2 : "● Fresh UI Experience and Smooth transitions between each sections of the WebPage.",
        desc3 : "● Minimalist color selection to highlight essential part of the Portfolio.",
    },
]

export const DemoData = [
  {
    id: 0,
    title: 'Music App',
    desk: Flutter,
    mob: Soul_mobile,
    frontend_link: 'https://github.com/SahillRazaa/Sahil_Ecommerce_frontend',
    backend_link: '',
    techStack: [
      { tech: Flutter },
      { tech: Dart },
      { tech: GoogleApi },
    ],
  },
  {
    id: 1,
    title: 'Ecommerce',
    desk: Eco_laptop,
    mob: Eco_mobile,
    frontend_link: 'https://github.com/SahillRazaa/Sahil_Ecommerce_frontend',
    backend_link: 'https://github.com/SahillRazaa/Sahil_Ecommerce_backend',
    techStack: [
      { tech: React },
      { tech: JavaScript },
      { tech: HtmlImage },
      { tech: CssImage },
      { tech: NodeJsImage },
      { tech: MongoDBImage },
    ],
  },
  {
    id: 2,
    title: 'My-Portfolio',
    desk: Port_laptop,
    mob: Port_mobile,
    frontend_link: 'https://github.com/SahillRazaa/My-Portfolio',
    backend_link: '',
    techStack: [
      { tech: React },
      { tech: JavaScript },
      { tech: HtmlImage },
      { tech: CssImage },

    ],
  },
];

export const ProjectData = [
  {
    id : 1,
    title : 'Wams 2025',
    desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed at impedit quisquam. Officia ab architecto, quas facere magni omnis minus? Temporibus, sapiente rerum, saepe, nulla odit est dolores atque aspernatur minima labore illum cupiditate molestias molestiae eveniet asperiores tenetur consectetur necessitatibus alias nobis beatae? Atque voluptates autem qui placeat.',
    duration : 'Two months',
    dates : 'Sept 2023 - Nov 2023',
    stacks : 'ReactJs, HTML, CSS, JavaScript, NodeJs, JWT',
    frontEnd : 'https://github.com/SahillRazaa/Sahil_Ecommerce_frontend',
    backEnd : 'https://github.com/SahillRazaa/Sahil_Ecommerce_frontend',
    explainations : [
      {
        id1 : 1,
        explain : [
          {
            id11 : 1,
            image : Proj1_1,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
          {
            id11 :2,
            image : Proj1_2,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Proj1_3,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
          {
            id11 : 2,
            image : Proj1_4,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
        ],
      },
      {
        id1 : 3,
        explain : [
          {
            id11 : 1,
            image : Proj1_5,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
          {
            id11 : 2,
            image : Proj1_6,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
        ],
      },
    ]
  },
  {
    id : 2,
    title : 'Soul Healer',
    desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed at impedit quisquam. Officia ab architecto, quas facere magni omnis minus? Temporibus, sapiente rerum, saepe, nulla odit est dolores atque aspernatur minima labore illum cupiditate molestias molestiae eveniet asperiores tenetur consectetur necessitatibus alias nobis beatae? Atque voluptates autem qui placeat.',
    duration : 'Two months',
    dates : 'Sept 2023 - Nov 2023',
    stacks : 'ReactJs, HTML, CSS, JavaScript, NodeJs, JWT',
    frontEnd : 'https://github.com/SahillRazaa/Sahil_Ecommerce_frontend',
    backEnd : 'https://github.com/SahillRazaa/Sahil_Ecommerce_frontend',
    explainations : [
      {
        id1 : 1,
        explain : [
          {
            id11 : 1,
            image : Soul_ss,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
          {
            id11 :2,
            image : Soul_ss,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Soul_ss,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
          {
            id11 : 2,
            image : Soul_ss,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
        ],
      },
    ]
  },
  {
    id : 3,
    title : 'Ecommerce website',
    desc : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus sed at impedit quisquam. Officia ab architecto, quas facere magni omnis minus? Temporibus, sapiente rerum, saepe, nulla odit est dolores atque aspernatur minima labore illum cupiditate molestias molestiae eveniet asperiores tenetur consectetur necessitatibus alias nobis beatae? Atque voluptates autem qui placeat.',
    duration : 'Two months',
    dates : 'Sept 2023 - Nov 2023',
    stacks : 'ReactJs, HTML, CSS, JavaScript, NodeJs, JWT',
    frontEnd : 'https://github.com/SahillRazaa/Sahil_Ecommerce_frontend',
    backEnd : 'https://github.com/SahillRazaa/Sahil_Ecommerce_frontend',
    explainations : [
      {
        id1 : 1,
        explain : [
          {
            id11 : 1,
            image : Proj3_1,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
          {
            id11 :2,
            image : Proj3_2,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Proj3_3,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
          {
            id11 : 2,
            image : Proj3_4,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
        ],
      },
      {
        id1 : 4,
        explain : [
          {
            id11 : 1,
            image : Proj3_5,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
          {
            id11 : 2,
            image : Proj3_6,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Proj3_7,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
          {
            id11 : 2,
            image : Proj3_8,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Proj3_9,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
          {
            id11 : 2,
            image : Proj3_10,
            explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
            explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
          },
        ],
      },
    ]
  }
]