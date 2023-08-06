import foodgo from "./assets/FoodGo.png"
import crypto from "./assets/CryptoExchange.png"
import blog from "./assets/TrueBlog.png"
import webagent from "./assets/WebAgent.png"
import travel from "./assets/TravelArc.png"
import myprojects from "./assets/MyProjects.png"

const Projects = [
    {
        title: "FoodGo",
        image: foodgo,
        desc: "This is a Food Delivery website that has been developed using MongoDB, ReactJS, and ExpressJS. It is a comprehensive project that encompasses both front-end and back-end development, offering various features such as a Shopping Cart and Login/Signup option.",
        githubLink: "https://github.com/ayushmangarg2003/food_go_mern_frontend",
        demoLink: "https://food-go-mern-frontend.vercel.app/",
        tags: ["MERN" , "Bootstrap"]
    },
    {
        title: "Crypto Exchange",
        image: crypto,
        desc: "A project utilizing ReactJs and its component library, Chakra UI, was developed with an API-based approach. It enables users to track the real-time pricing of various cryptocurrencies.",
        githubLink: "",
        demoLink: "https://crypto-exchange-react-app.vercel.app/",
        tags: ["ChakraUi","ReactJs","API"]
    },
    {
        title: "TrueBlog",
        image: blog,
        desc: "This is a full-stack website created using ExpressJS, ReactJS, Node.js, and MySQL as the database. It enables users to perform CRUD operations, and also includes a login/signup feature.",
        githubLink: "https://github.com/ayushmangarg2003/Blogs_MySQL",
        demoLink: "https://blogs-my-sql.vercel.app/",
        tags: ["MySQL", "React Js" , "ExpressJs"]
    },
    {
        title: "Web Agent",
        image: webagent,
        desc: "Web Agent is a website of a fictional web agency created using ReactJs and its component library 'Styled Components'. ",
        githubLink: "https://github.com/ayushmangarg2003/web-agent-react-styled-components",
        demoLink: "https://web-agent-react-styled-components.vercel.app/",
        tags: ["ReactJS", "Styled Components"]
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