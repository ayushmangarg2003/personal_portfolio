import tureblog from "./assets/TrueBlog.webp"
import crypto from "./assets/CryptoExchange.webp"
import webagent from "./assets/WebAgent.webp"
import travel from "./assets/TravelArc.webp"
import myprojects from "./assets/MyProjects.webp"
import doccare from "./assets/doccare.webp"

const Projects = [
    {
        title: "DocCARE",
        image: doccare,
        desc: "This is a Doctor Booking website build using MERN stack and showcases my skills in making user friendly interfaces, and seamless user experience",
        githubLink: "https://github.com/ayushmangarg2003/BookDoc",
        demoLink: "https://book-doc.vercel.app/",
        tags: ["MERN"]
    },
    {
        title: "TrueBloga",
        image: tureblog,
        desc: "This is a Blogging website that has been developed using MongoDB, ReactJS, and ExpressJS. It is a comprehensive project that encompasses both front-end and back-end development, offering various features such as Login/Signup option.",
        githubLink: "https://github.com/ayushmangarg2003/Blogs_MERN",
        demoLink: "https://blogs-mern-pi.vercel.app/",
        tags: ["MERN"]
    },
    {
        title: "Crypto Exchange",
        image: crypto,
        desc: "A project utilizing ReactJs and its component library, Chakra UI, was developed with an API-based approach. It enables users to track the real-time pricing of various cryptocurrencies.",
        githubLink: "https://github.com/ayushmangarg2003/crypto-exchange-react-app",
        demoLink: "https://crypto-exchange-react-app.vercel.app/",
        tags: ["ChakraUi","ReactJs","API"]
    },
    {
        title: "Web Agent",
        image: webagent,
        desc: "Web Agent is a website of a fictional web agency created using ReactJs and its component library 'Styled Components'. ",
        githubLink: "https://github.com/ayushmangarg2003/web-agent-react-styled-components",
        demoLink: "https://web-agent-react-styled-components.vercel.app/",
        tags: ["ReactJS", "Styled Comp."]
    },
    {
        title: "TravelArc",
        image: travel,
        desc: "This website, developed using React Js, is a multi-page tour and travel platform. It serves as a demonstration of my proficiency in both React and CSS design. The ensures optimal user experience across a wide range of devices and screen sizes.",
        githubLink: "https://github.com/ayushmangarg2003/TravelArc",
        demoLink: "https://travel-arc.vercel.app/",
        tags: ["ReactJs" , "CSS3"]
    },
    {
        title: "My Projects",
        image: myprojects,
        desc: "This is a website that contains all my projects, it showcases my skills in a more systematic and compact form",
        githubLink: "https://github.com/ayushmangarg2003/MyProjects",
        demoLink: "https://my-projects-smoky-two.vercel.app/",
        tags: ["HTML","CSS","Javascript"]
    },

]
export default Projects;
