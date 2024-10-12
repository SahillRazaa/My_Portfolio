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

export const MyProjects = [
    {
        id: '01.',
        title: "Music App",
        image : Soul_ss,
        desc1 : "● Soul Healer is a Flutter-based music app that streams music from YouTube and allows classification by artist, genre, and language.",
        desc2 : "● YouTube Integration helps Seamless music search and playback using the YouTube API.",
        desc3 : "● Favorites & Saved state are present for Users to add songs to their favorites with persistent state across sessions.",
        desc4 : "● Custom Themes offers 5-6 different theme color options for a personalized user experience.",
        desc5 : "● It isBuilt using popular packages like just_audio, provider, youtube_explode_dart, flutter_local_notifications, and more.",
    },
    {
      id: '02.',
      title: "Ecommerce Website",
      image : Ecommerce_ss,
      desc1 : "● Sahil is a full stack Ecommerce app made with MERN stack.",
      desc2 : "● Managing User and Cart States using React_Redux dependency and fetching data from MongoDB.",
      desc3 : "● Fully Responsive Web-Page for all kinds of devices.",
    },
    {
        id: '03.',
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
