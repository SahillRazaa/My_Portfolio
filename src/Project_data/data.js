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

import Proj2_1 from '../assets/ProjectImage/proj2_1.jpg'
import Proj2_2 from '../assets/ProjectImage/proj2_2.jpg'
import Proj2_3 from '../assets/ProjectImage/proj2_3.jpg'
import Proj2_4 from '../assets/ProjectImage/proj2_4.jpg'
import Proj2_5 from '../assets/ProjectImage/proj2_5.jpg'
import Proj2_6 from '../assets/ProjectImage/proj2_6.jpg'
import Proj2_7 from '../assets/ProjectImage/proj2_7.jpg'
import Proj2_8 from '../assets/ProjectImage/proj2_8.jpg'
import Proj2_9 from '../assets/ProjectImage/proj2_9.jpg'
import Proj2_10 from '../assets/ProjectImage/proj2_10.jpg'
import Proj2_11 from '../assets/ProjectImage/proj2_11.jpg'
import Proj2_12 from '../assets/ProjectImage/proj2_12.jpg'
import Proj2_13 from '../assets/ProjectImage/proj2_13.jpg'
import Proj2_14 from '../assets/ProjectImage/proj2_14.jpg'
import Proj2_15 from '../assets/ProjectImage/proj2_15.jpg'
import Proj2_16 from '../assets/ProjectImage/proj2_16.jpg'
import Proj2_17 from '../assets/ProjectImage/proj2_17.jpg'
import Proj2_18 from '../assets/ProjectImage/proj2_18.jpg'

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
        desc1 : "● Developed WAMS 2025, a live website for the IEEE upcoming conference, using React to deliver real-time updates and notifications, enhancing attendee engagement.",
        desc2 : "● Built a fully responsive and user-friendly interface, ensuring accessibility across devices with a streamlined, intuitive navigation experience.",
        desc3 : '● Implemented a dynamic "Call for Papers" section, VIP accommodation info, and sponsor highlights, providing essential details for conference participants.',
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
        desc5 : "● It is Built using popular packages like just_audio, provider, youtube_explode_dart, flutter_local_notifications, and more.",
    },
    {
      id: '03.',
      currIdx : 3,
      title: "Ecommerce Website",
      image : Ecommerce_ss,
      desc1 : "● Developed Sahil, a MERN-based full-stack eCommerce app with secure user authentication, login features, and data persistence using JWT and Express for session management.",
      desc2 : "● Implemented React Redux for efficient state management of user and cart states, with data saved in MongoDB for seamless user experience and persistent cart functionality.",
      desc3 : "● Integrated product filtering, allowing users to search and filter products based on various criteria,enhancing usability and product discovery.",
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
    desc : 'WAMS 2025 is a live, interactive website built with React for the upcoming IEEE conference. The application leverages real-time data fetching to provide users with timely updates and important notifications, enhancing overall engagement.\n\nThe site features a responsive design, ensuring seamless usability across various devices. Utilizing React’s component-based architecture, the interface is optimized for performance and user experience, with dynamic elements that keep content fresh and visually appealing.\n\nData management is efficiently handled, allowing for easy navigation through a well-structured layout. This setup supports essential features like submission guidelines and accommodation information for attendees.\n\nOverall, WAMS 2025 integrates advanced web technologies to create an essential resource for conference participants, promoting collaboration and accessibility.',
    duration : 'Two months',
    youtubeId: 'https://www.youtube.com/embed/xRRgVEVYqg8',
    dates : 'March 2024 - June 2024',
    stacks : 'ReactJs, HTML, CSS, JavaScript, React-router-dom',
    frontEnd : '',
    backEnd : '',
    explainations : [
      {
        id1 : 1,
        explain : [
          {
            id11 : 1,
            image : Proj1_1,
            title: "Home Page",
            flag : 'false',
            explain1 : '● The home page features a user-friendly navigation bar, allowing easy access to various sections of WAMS 2025, enhancing overall site usability.',
            explain2 : '● A prominent heading clearly displays "WAMS," establishing the websites identity while creating an inviting atmosphere for users.',
            explain3 : '● The announcement section dynamically fetches data from an Excel sheet, providing real-time updates and information, while a moving banner highlights important notifications like "user can register now," ensuring key messages are prominently displayed.',
          },
          {
            id11 :2,
            image : Proj1_2,
            title: "About Section",
            flag : 'false',
            explain1 : '● The section dedicated to WAMS and the college features an engaging layout with alternating text and image placements, enhancing visual interest and making the content easily digestible for users.',
            explain2 : '● The information about WAMS is presented on the left side, accompanied by a dynamic slider on the right, showcasing relevant images that automatically transition every 3 seconds, keeping the presentation fresh and engaging.',
            explain3 : '● For the college section, the layout reverses, with text on the right and a slider on the left, ensuring a balanced and visually appealing design that captures users’ attention while providing important insights.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Proj1_3,
            title: "Drop-Down and Sponsors",
            flag : 'false',
            explain1 : '● The dropdown menu enhances site navigation by providing users with easy access to various categories and subcategories, streamlining the user experience and ensuring important information is just a click away.',
            explain2 : '● Each item in the dropdown is intuitively organized, allowing users to quickly find specific content related to WAMS 2025, enhancing overall engagement and usability.',
            explain3 : '● The sponsor page highlights partnerships and support for WAMS, showcasing logos and descriptions of sponsors, fostering a sense of community and recognition for those contributing to the success of event.',
          },
          {
            id11 : 2,
            image : Proj1_4,
            title: "Call for Papers",
            flag : 'false',
            explain1 : '● The "Call for Papers" section invites submissions with a clear and engaging layout, designed to encourage participation and highlight important details.',
            explain2 : '● Users can easily download a PDF brochure, providing them with comprehensive information about submission guidelines and event specifics, enhancing accessibility to essential resources.',
            explain3 : '● The page is visually appealing, featuring a well-thought-out color scheme that contributes to an attractive user interface, ensuring a pleasant browsing experience while emphasizing key content.',
          },
        ],
      },
      {
        id1 : 3,
        explain : [
          {
            id11 : 1,
            image : Proj1_5,
            title: "Accomodation Page",
            flag : 'false',
            explain1 : '● The accommodation page highlights 5-6 five-star hotels located near the college, specifically tailored for VIP guests, providing a touch of luxury and convenience.',
            explain2 : '● Each hotel section includes an informative overview alongside a dynamic image slider that showcases various aspects of the hotel, with images transitioning every 2-3 seconds to maintain visual interest.',
            explain3 : '● Users can access official links to each hotel website, allowing for easy bookings and additional information, ensuring a seamless experience for VIPs planning their stay.',
          },
          {
            id11 : 2,
            image : Proj1_6,
            title: "Responsiveness",
            flag : 'true',
            explain1 : '● The website is designed with full responsiveness in mind, ensuring that all elements adapt seamlessly across various devices, including desktops, tablets, and smartphones.',
            explain2 : '● Users enjoy a consistent experience, with layouts automatically adjusting to fit screen sizes, allowing for intuitive navigation and easy access to content no matter the device used.',
            explain3 : '● Dynamic elements, such as sliders and menus, maintain functionality and visual appeal, providing a cohesive and engaging experience that enhances usability on all platforms.',
          },
        ],
      },
    ]
  },
  {
    id : 2,
    title : 'Soul Healer',
    desc : 'Soul Healer is a Flutter-based music app that integrates with the YouTube API to provide a seamless listening experience. Users are greeted with a splash screen, followed by a home page showcasing trending songs and recently played tracks. \n\nThe app features real-time song searching, genre filtering, and year-based playlists, all managed using provider for smooth state management. Users can personalize their experience with customizable themes and easily access a persistent music player controller for quick playback controls. \n\nAn engaging feedback system allows users to share their thoughts in a game-like format, contributing to ongoing app enhancements. Leveraging packages like just_audio and cached_network_image, Soul Healer combines performance and user-friendly design for an immersive music experience.',
    duration : 'Three months',
    youtubeId: 'https://www.youtube.com/embed/nVIWqs9LsBQ',
    dates : 'July 2024 - Sept 2024',
    stacks : 'Flutter, Dart, Youtube Api, provider, just audio',
    frontEnd : 'https://github.com/SahillRazaa/Soul-Healer',
    backEnd : '',
    explainations : [
      {
        id1 : 1,
        explain : [
          {
            id11 : 1,
            image : Proj2_1,
            extraImg : Proj2_2,
            title: "Home and Splash Screen",
            explain1 : '● The splash screen leverages smooth animations, introducing "Soul Healer" with Cupertino and Google Fonts for a sleek, minimal load screen.',
            explain2 : '● Home page integrates smooth_page_indicator with a cached image slider showcasing top hits, supported by cached_network_image for efficient loading.',
            explain3 : '● Recently played section dynamically updates with provider for state management, ensuring real-time access to user history.',
          },
          {
            id11 :2,
            image : Proj2_3,
            extraImg : Proj2_4,
            title: "Trending and Artist-Specific Play Options",
            explain1 : '● Trending songs are fetched and filtered using the YouTube API, displayed with cached images for optimized performance.',
            explain2 : '● Row of artist options offers dynamic, filtered playback, facilitated by youtube_explode_dart for precise artist-based song retrieval.',
            explain3 : '● Artist-specific page leverages provider to manage state, ensuring smooth access to curated content for the selected artist.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Proj2_5,
            extraImg : Proj2_6,
            title: "Year and Language-Based Song Filtering",
            explain1 : '● Year-based song lists (e.g., 2000-2010, 2010-2020) provide easy access to decade-specific music, leveraging API filtering.',
            explain2 : '● Language selection row uses dynamic filters to offer music playback in preferred languages.',
            explain3 : '● Language-specific song list is managed with provider, allowing users to seamlessly explore and play music by language.',
          },
          {
            id11 : 2,
            image : Proj2_7,
            extraImg : Proj2_8,
            title: "Song Search and Genre-Based Exploration",
            explain1 : '● The search functionality utilizes the YouTube API to fetch songs in real-time, allowing users to quickly locate desired tracks.',
            explain2 : '● Recent search history is stored and displayed, providing easy access to past queries for a smoother user experience.',
            explain3 : '● Explore section offers genre-based song recommendations, enabling users to discover music by various styles and moods.',
          },
        ],
      },
      {
        id1 : 3,
        explain : [
          {
            id11 : 1,
            image : Proj2_9,
            extraImg : Proj2_10,
            title: "Managing Search History and Genre-Specific Song Lists",
            explain1 : '● Recent search history includes an option to delete entries, giving users control over their search records.',
            explain2 : '● Genre-based song filtering allows users to explore music within a specific genre, enhancing personalized discovery.',
            explain3 : '● The YouTube API and provider work together to ensure smooth, dynamic loading of songs tailored to selected genres.',
          },
          {
            id11 : 2,
            image : Proj2_11,
            extraImg : Proj2_12,
            title: "Favorites Management and Access",
            explain1 : '● Users can easily add songs to their favorites list, enabling quick access to preferred tracks for later playback.',
            explain2 : '● The favorites screen displays recently added songs, providing a personalized collection for user convenience.',
            explain3 : '● Leveraging provider for state management, the app ensures real-time updates and seamless integration of the favorites feature.',
          },  
        ],
      },
      {
        id1 : 4,
        explain : [
          {
            id11 : 1,
            image : Proj2_13,
            extraImg : Proj2_14,
            title: "Favorites Deletion and Theme Customization",
            explain1 : '● Users can delete songs from their favorites list, providing flexibility and control over their preferred music collection.',
            explain2 : '● The theme selection feature offers a variety of customizable themes, allowing users to personalize the app’s appearance to their liking.',
            explain3 : '● Both functionalities are managed through provider, ensuring smooth updates and a cohesive user experience across the app.',
          },
          {
            id11 : 2,
            image : Proj2_15,
            extraImg : Proj2_16,
            title: "Theme Customization and Song Player Interface",
            explain1 : '● The home page showcases a newly selected theme, demonstrating the apps customizable aesthetic to suit user preferences.',
            explain2 : '● The song player page provides intuitive controls for playback, including play, pause, and track changes, ensuring a user-friendly experience.',
            explain3 : '● Leveraging the just_audio package, the player interface guarantees smooth audio playback and responsive controls for seamless music enjoyment.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Proj2_17,
            extraImg : Proj2_18,
            title: "Persistent Music Controls and Interactive Feedback System",
            explain1 : '● A mini music player controller remains visible above the navigation bar, allowing users to quickly manage playback without interrupting their navigation.',
            explain2 : '● The feedback system introduces an engaging game-like experience, where users can interact and provide insights about the apps performance.',
            explain3 : '● This innovative feedback mechanism enhances user engagement while collecting valuable data for future app improvements.',
          },
        ],
      },
    ]
  },
  {
    id : 3,
    title : 'Ecommerce website',
    desc : 'E-Commerce Website is a React.js-based platform that features an elegant login/register UI connected to a robust backend using Express and MongoDB Atlas, with JWT for secure authentication.\n\nThe homepage showcases products through an interactive slider and a user-friendly navigation bar. A comprehensive products page allows sorting and filtering, while a "Best Deals" section highlights discounted items for quick access.\n\nWith a persistent cart managed by React Persist and Redux for state management, users enjoy a seamless shopping experience. The Stripe integration ensures secure payment processing, and the profile page offers easy access to order history and account settings.\n\nFully responsive, the website provides a consistent experience across all devices, maintaining accessibility and visual appeal.',
    duration : 'Three months',
    youtubeId: 'https://www.youtube.com/embed/JzMKZMPphPs',
    dates : 'Nov 2023 - Jan 2024',
    stacks : 'ReactJs, HTML, CSS, JavaScript, NodeJs, JWT, express, mongoDb, stripe api, axios, postman',
    frontEnd : 'https://github.com/SahillRazaa/Sahil_Ecommerce_frontend',
    backEnd : 'https://github.com/SahillRazaa/Sahil_Ecommerce_backend',
    explainations : [
      {
        id1 : 1,
        explain : [
          {
            id11 : 1,
            image : Proj3_1,
            title: "Login / Register Page",
            flag : 'false',
            explain1: "● Elegant, user-friendly login UI designed in React.js, connected to a robust backend with Express and MongoDB Atlas for seamless, real-time data interaction, utilizing JWT for secure session management.",
            explain2: "● Secure authentication flow with JWT, allowing users to register, log in, and recover passwords, complemented by backend validation to ensure data integrity and privacy.",
            explain3: "● Responsive and fully integrated system where frontend inputs are processed and stored in the backend using JWT, showcasing end-to-end functionality from UI to database."
          },
          {
            id11 :2,
            image : Proj3_2,
            title: "Home Page",
            flag : 'false',
            explain1 : '● Interactive slider feature on the homepage, showcasing products with clear images and descriptions for an engaging user experience.',
            explain2 : '● Visually appealing layout with dynamic pricing and discount display, providing users with relevant information at a glance.',
            explain3 : '● Intuitive navigation bar with quick links to essential sections like Products, About Us, and Daily Deals, allowing users to explore the site easily.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Proj3_3,
            title: "Products Page",
            flag : 'false',
            explain1 : '● Comprehensive product listing page featuring an organized display of items, with clear visuals and prices for easy browsing.',
            explain2 : '● Interactive sorting and filtering options by brand and category, allowing users to quickly find products that match their preferences.',
            explain3 : '● Consistent and user-friendly layout with a search bar and navigation links, enhancing the shopping experience across the platform.',
          },
          {
            id11 : 2,
            image : Proj3_4,
            title: "Best Deals Page",
            flag : 'false',
            explain1 : '● Highlighted "Best Deals" section displaying products with the highest discounts, making it easy for users to find the best offers.',
            explain2 : '● Clear presentation of discounted prices alongside original prices, allowing users to see savings at a glance.',
            explain3 : '● Engaging layout with visually appealing product cards, ensuring a seamless browsing experience focused on value and savings.',
          },
        ],
      },
      {
        id1 : 4,
        explain : [
          {
            id11 : 1,
            image : Proj3_5,
            title: "Add to Cart Page",
            flag : 'false',
            explain1 : '● Detailed product view page with options to select color and quantity, providing a customizable shopping experience for each item.',
            explain2 : '● Persistent cart functionality using React Persist, ensuring items remain in the cart even after page reloads or revisits.',
            explain3 : '● State management powered by Redux, enabling efficient handling of product selections and cart updates across the application.',
          },
          {
            id11 : 2,
            image : Proj3_6,
            title: "Cart Page",
            flag : 'false',
            explain1 : '● The cart icon dynamically displays the number of items present, providing users with an at-a-glance overview of their selections without needing to navigate away from the current page.',
            explain2 : '● Users can easily manipulate the quantity of items in the cart, with real-time updates reflecting changes immediately in both the cart display and total price, enhancing the shopping experience.',
            explain3 : '● All changes to item quantities are persisted using React Persist, ensuring that user selections remain intact across sessions and browser refreshes, allowing for a seamless shopping experience.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Proj3_7,
            title: "Buying Page",
            flag : 'false',
            explain1 : '● The buying page provides a comprehensive summary, displaying the total quantity of items being purchased, ensuring users have a clear understanding of their order.',
            explain2 : '● Users can view the total amount to pay, including detailed breakdowns of any applicable discounts and shipping charges, allowing for transparent pricing before finalizing their purchase.',
            explain3 : '● A user-friendly interface guides customers through the payment process, enhancing their experience and ensuring all financial information is clearly presented.',
          },
          {
            id11 : 2,
            image : Proj3_8,
            title: "Stripe Payment Gateway",
            flag : 'false',
            explain1 : '● The buying page integrates Stripe for a secure and seamless payment process, ensuring user transactions are protected with industry-standard encryption.',
            explain2 : '● Users can easily enter their payment details with an intuitive interface, allowing for a smooth checkout experience without unnecessary complexity.',
            explain3 : '● Real-time feedback during the payment process informs users of transaction status, providing reassurance and clarity as they complete their purchase.',
          },
        ],
      },
      {
        id1 : 2,
        explain : [
          {
            id11 : 1,
            image : Proj3_9,
            title: "Profile Page",
            flag : 'false',
            explain1 : '● The profile page displays a comprehensive list of the user’s placed orders, including essential details such as the time and date of each order, product photos, quantity, color, and price, providing a clear order history.',
            explain2 : '● Users can upload and update their profile photo, along with viewing their current username, fostering a personalized experience that reflects their identity on the platform.',
            explain3 : '● The page includes access to basic settings, allowing users to easily manage their account preferences, enhancing overall usability and convenience.',
          },
          {
            id11 : 2,
            image : Proj3_10,
            title: "Responsiveness",
            flag : 'true',
            explain1 : '● The website is designed with a fully responsive layout, ensuring that all elements adapt seamlessly to various screen sizes, from desktops to mobile devices.',
            explain2 : '● Users enjoy a consistent and engaging experience across all platforms, with intuitive navigation and appropriately scaled visuals that enhance usability.',
            explain3 : '● Dynamic content adjustments ensure that text, images, and interactive elements remain accessible and visually appealing, providing a cohesive experience regardless of device.',
          },
          
        ],
      },
    ]
  },
  {
    id : 4,
    title : 'Portfolio: Sahil Raza',
    desc : 'The portfolio web app for Sahil Raza is a sleek and modern single-page application built using ReactJS, focusing on delivering a seamless user experience with a fresh, visually appealing UI. It employs a minimalist design philosophy, using a carefully selected color palette to emphasize key sections. Smooth transitions enhance the user journey as they navigate through each segment, offering a cohesive browsing experience.\n\nLeveraging tools like Framer Motion and React Spring, the site incorporates fluid animations that bring life to the interface, while the @mui/material library provides modular and responsive components that are both aesthetically pleasing and efficient. styled-components and @emotion libraries are used for custom styling, ensuring that every detail aligns with the apps minimalistic design goals. The inclusion of axios allows easy handling of data interactions, while emailjs facilitates seamless email services directly from the website.\n\nTo optimize navigation, react-router-dom and react-router-hash-link enable smooth internal linking, while react-scroll and react-parallax enhance user interaction with subtle scrolling effects. This app is deployable with gh-pages for easy GitHub hosting and performance tracking using web-vitals, ensuring both smooth functionality and effective online presence for Sahil’s portfolio.',
    duration : 'Two months',
    youtubeId: 'https://www.youtube.com/embed/mWaC6yPiF5U',
    dates : 'Sept 2023 - Oct 2023',
    stacks : 'ReactJs, HTML, CSS, JavaScript, react-router-dom, react-scroll',
    frontEnd : 'https://github.com/SahillRazaa/My_Portfolio',
    backEnd : '',
    explainations : [
      // {
      //   id1 : 1,
      //   explain : [
      //     {
      //       id11 : 1,
      //       image : Proj2_1,
      //       extraImg : Proj2_2,
      //       title: "My new title",
      //       flag : 'false',
      //       explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //     },
      //     {
      //       id11 :2,
      //       image : Proj2_3,
      //       extraImg : Proj2_4,
      //       title: "My new title",
      //       flag : 'false',
      //       explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //     },
      //   ],
      // },
      // {
      //   id1 : 2,
      //   explain : [
      //     {
      //       id11 : 1,
      //       image : Proj2_5,
      //       extraImg : Proj2_6,
      //       title: "My new title",
      //       flag : 'false',
      //       explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //     },
      //     {
      //       id11 : 2,
      //       image : Proj2_7,
      //       extraImg : Proj2_8,
      //       title: "My new title",
      //       flag : 'false',
      //       explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //     },
      //   ],
      // },
      // {
      //   id1 : 3,
      //   explain : [
      //     {
      //       id11 : 1,
      //       image : Proj2_9,
      //       extraImg : Proj2_10,
      //       title: "My new title",
      //       flag : 'false',
      //       explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //     },
      //     {
      //       id11 : 2,
      //       image : Proj2_11,
      //       extraImg : Proj2_12,
      //       title: "My new title",
      //       flag : 'false',
      //       explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //     },
      //   ],
      // },
      // {
      //   id1 : 4,
      //   explain : [
      //     {
      //       id11 : 1,
      //       image : Proj2_13,
      //       extraImg : Proj2_14,
      //       title: "My new title",
      //       flag : 'false',
      //       explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //     },
      //     {
      //       id11 : 2,
      //       image : Proj2_15,
      //       extraImg : Proj2_16,
      //       title: "My new title",
      //       flag : 'false',
      //       explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //     },
      //   ],
      // },
      // {
      //   id1 : 2,
      //   explain : [
      //     {
      //       id11 : 1,
      //       image : Proj2_17,
      //       extraImg : Proj2_18,
      //       title: "My new title",
      //       flag : 'false',
      //       explain1 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain2 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //       explain3 : '● Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, neque.',
      //     },
      //   ],
      // },
    ]
  },
]