import webDesign from "./assets/web-design.png"
import server from "./assets/server.png"
import design from "./assets/design.png"
import project1Image from "./assets/Screenshot 2023-10-09 105717.png"
import project2Image from "./assets/bd.png"
import project3Image from "./assets/form.png"
import project4Image from "./assets/url.jpg"
import project5Image from "./assets/gyronics.png"
import project6Image from "./assets/edushare.png"
import project7Image from "./assets/fyxn.png"
import project8Image from "./assets/platr.png"
import alxLogo from "./assets/alx-logo.svg"
import abuLogo from "./assets/ABU-logo.png"
import nnpcLogo from "./assets/NNPC-logo.svg"
import platrLogo from "./assets/Platr-logo.svg"
import FyxnLogo from "./assets/fyxn_logo.jpg"

export const skills = [
    {
        icon: webDesign,
        title: "Front-end Developement",
        info: "Crafting intuitive user interfaces with HTML, CSS, and JavaScript for seamless user experiences."
    },
    {
        icon: design,
        title: "Product Design",
        info: "Creating visually stunning designs and intuitive user flows for delightful user interactions."
    },
    {
        icon: server,
        title: "Back-end Developement",
        info: "Building robust server-side applications, handling data, and ensuring secure functionality."
    },
     {
        icon: server,
        title: "Software Testing",
        info: "Software testing using Selenium automates web application testing for quality assurance."
    },
];

export const projects = [
      {
        tag: "Full-stack",
        title: "FYXN – Sustainable Installer Comparison Platform",
        text: "I contributed to developing a user-friendly platform that simplifies comparing solar panels, heat pumps, home batteries, insulation options, and more in the Netherlands. It offers transparent quotes, seamless scheduling, and post-installation quality checks, empowering users to make confident, informed decisions about sustainable energy solutions.",
        image: project7Image,
        techs: [
          "Next.js",
          "TypeScript",
          "GraphQL",
          "Jest",
          "Express.js",
          "Selenium WebDriver",
          "PostgreSQL",
          "Next.js",
          "React",
          "TypeScript",
          "GraphQL",
          "Tailwind CSS",
          "Zustand",
        ],
        codeLink: "",
        liveLink: "https://fyxn-nl/",
        features: [
            "Personalized solar installer comparisons based on user input.",
            "Integrated quote request system with real-time price estimation.",
            "Installer management dashboard for tracking customer requests.",
            "Comprehensive blogs and FAQs to guide users on sustainability topics.",
            "Independent quality control checks for installations."
        ]
    },
    {
      tag: "Full-stack",
      title: "Platr Business Dashboard, Partner Dashboard & Webshop",
      text: "Contributed to developing Platr, an all-in-one platform for entrepreneurs. The Business Dashboard includes tools for order management, inventory tracking, financial insights, and storefront customization. The Partner Dashboard allows influencers to mentor businesses and earn referrals. Played a key role in creating webshop functionality and platform design.",
      image: project8Image,
      techs: [
        "Angular",
        "Express.js",
        "Firebase",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
      ],
      codeLink: "", 
      liveLink: "https://platr.ng"
    },
    {
        tag: "Front-end",
        title: "Gyronics Wearable Technology Platform",
        text: "Developed the Gyronics platform, showcasing gesture-based control, AI-powered recognition, customizable gestures, and seamless integration with hardware, empowering users with disabilities and enhancing experiences for creative professionals, gamers, and developers.",
        image: project5Image,
        techs: ["nextJs", "TypeScript", "JavaScript", "Sass", "Tailwind", "EmailJS", "Clodinary", "React Hook Form"],
        codeLink: "",
        liveLink: "https://www.gyronics.com"
    },
    {
        tag: "Full-stack",
        title: "EduShare Platform",
        text: "Developed a course material management portal for students and lecturers, featuring secure uploads, easy access, collaborative tools, and academic resources.",
        image: project6Image,
        techs: ["NextJs", "firebase", "TS"],
        codeLink: "https://github.com/Aheedjo/EduShare",
        liveLink: "https://edu-share-ashy.vercel.app"
    },
    {
        tag: "Front-end",
        title: "where in the world?",
        text: "Explore the world with my countries app—real-time data, borders, and a color theme switcher for a dynamic, informative experience",
        image: project1Image,
        techs: ["nextJs", "TypeScript", "JavaScript", "Sass", "Tailwind"],
        codeLink: "https://github.com/Aheedjo/REST-Countries-API-with-color-theme-switcher",
        liveLink: "https://rest-countries-api-with-color-theme-switcher-aheedjo.vercel.app/"
    },
    {
        tag: "Front-end",
        title: "Multi Step Form",
        text: "Created a multi-step form with validation, step indicator, and pricing logic for plan selection, enhancing user experience efficiently.",
        image: project3Image,
        techs: ["VueJs", "JavaScript", "Sass", "Tailwind"],
        codeLink: "https://github.com/Aheedjo/multi-step-form",
        liveLink: "https://multi-step-form-2mlysvi4v-aheedjo.vercel.app/"
    },
    {
        tag: "Front-end",
        title: "URL shortener",
        text: "Utilizing the Shrtcode API, my URL shortener condenses long links, enhancing web accessibility and efficiency—a simple solution for streamlined sharing.",
        image: project4Image,
        techs: ["CSS", "HTML", "JavaScript"],
        codeLink: "https://github.com/Aheedjo/url-shortening-api-master",
        liveLink: "https://fascinating-cheesecake-452b26.netlify.app/"
    },
    {
        tag: "Back-end || API",
        title: "Task Management API",
        text: "A backend API enables user authentication and CRUD operations for tasks, projects, and labels, backed by a MongoDB database",
        image: '',
        techs: ["NodeJs", "Express", "MongoDB", "Mongoose", "Docker"],
        codeLink: "https://github.com/Aheedjo/task-management-application-backend",
    },
    {
        tag: "UI/UX",
        title: "Photos app design",
        text: "UI/UX design showcasing captivating images created with Figma, harmonizing aesthetics and user-centric design principles for a visually engaging platform",
        image: '',
        techs: ["Figma"],
        designLink: "https://www.figma.com/file/04tyguplG6MnaFzuWbvstc/Photos-APp?type=design&node-id=0-1&mode=design&t=ZRPzWZ3IgF9HXffo-0",
    },
    {
        tag: "UI/UX",
        title: "OffCampus design",
        text: "UI/UX design for a housing app, simplifying student-landlord connections with intuitive features for efficient house searching and landlord engagement",
        image: '',
        techs: ["Figma"],
        designLink: "https://www.figma.com/file/Mw47LTQgFA8PeqCiFoaIYL/App-dev-project?type=design&node-id=0-1&mode=design&t=XzPNcfLynWajP0H3-0",
    },
    {
        tag: "UI/UX",
        title: "Bearded Dare design",
        text: "UI/UX design for a Hair brand company, e-commerce project-products, sales, about, contact, checkout. Demonstrates web development skills.",
        image: '',
        techs: ["Figma"],
        designLink: "https://www.figma.com/file/kew5fgxKv6PJWEqBHHo7Mf/Bearded-Dare?type=design&node-id=355-2031&mode=design&t=EDjcROLzxb3uoUeh-0",
    },
    {
      tag: "UI/UX",
      title: "NNPC Reusable Template Library",
      text: "Designed a library of reusable UI/UX templates for NNPC, including login, dashboards, tables, forms, notifications, and more. Simplified future software development workflows.",
      image: '',
      techs: ["Figma"],
      designLink: "https://www.figma.com/design/tGKar6dfa6cvlGjQuI3mez/NNPC-Design-Project?node-id=0-1&node-type=canvas&t=OtgyDslrTTV7Nrut-0"
  }
];

export const experience = [
    {
        title: "Front-end Developer",
        company: "FYXN",
        logo: FyxnLogo,
        employmentType: "Contract",
        startDate: "Dec 2023",
        endDate: "Present",
        location: "Remote",
        Description: "My initial role with the company was as a frontend developer. I was contracted to transform UI/UX designs into code using Next.js, ensuring the application looked functional and flawless.",
        techs: ["Software Development", "Front-End Web Development", "User Experience", "Responsiveness", "Next.js", "Git", "Figma", "TypeScript", "MongoDB", "Express", "Figma", "Problem Solving", "Tailwind CSS", "SCSS", "Angular"],
        linkToProject: "https://fyxn.nl/",
        extra: {
            title: "Full-Stack Engineer",
            employmentType: "Part-time",
            startDate: "Dec 2023",
            endDate: "Nov 2023",
            location: "Remote",
            Description: "After the contract was completed, I was retained part-time to continue transforming designs, enhancing app functionality, resolving bugs, and writing Selenium tests to ensure quality assurance.",
            techs: ["Selenium Webdriver", "HTML", "TyprScript", "Selenium", "Testing", "Digital Ocean", "Neon Tech", "Express", "ejs", "GitHub Actions"],
        },
        extra2: {
            title: "Full-Stack Engineer",
            employmentType: "Full-time",
            startDate: "Dec 2024",
            endDate: "Present",
            location: "Remote",
            Description: "Following my exceptional performance as a part-time developer, I was offered a full-time role immediately after completing my studies. In this capacity, I continued contributing to both the frontend and backend of the application, enhancing functionality, conducting rigorous testing, and ensuring seamless integration. Excited to tackle new challenges and further expand the project’s capabilities in the future.",
            techs: ["Hasura", "PostgreSQL", "NextJS", "NextJS API Developement", "zustand"],
        },
    },
    {
        title: "Full-Stack Developer",
        company: "PLATR",
        logo: platrLogo,
        employmentType: "Full-time",
        startDate: "Jun 2022",
        endDate: "Present",
        location: "Remote",
        Description: "Following my exceptional UI/UX design contributions at PLatr, my work ethic and dedication garnered recognition. I seamlessly transitioned into a full-time role, extending beyond design to join the development team. Tasked with frontend responsibilities using Angular and more, I continued my on-the-go learning journey, consistently improving and contributing to the application's development.",
        techs: ["Teamwork", "Back-End Web Development", "API Development", "Project Management", "Jira", "Front-End Development", "Git", "Node", "MongoDB", "Express", "Figma", "Problem Solving", "Tailwind CSS", "SCSS", "Angular", "HTML", "TyprScript"],
        linkToProject: "https://platr.ng/",
        extra: {
            title: "User Interface Designer",
            employmentType: "contract",
            startDate: "Mar 2022",
            endDate: "Jul 2022",
            location: "Remote",
            Description: "At PLatr, my initial engagement as a UI/UX Designer was a dynamic learning experience. Despite no prior expertise, I embraced the challenge, swiftly acquiring proficiency in Figma. Through proactive research and self-motivation, I honed my design skills on-the-go, ensuring robust and trend-aligned interfaces for the project.",
            techs: ["Figma", "User Experience (UX)", "Wireframing", "Prototyping", "Information Architecture", "Usability Testing", "Responsive Web Design", "Teamwork", "Communication"],
        }
    },
    {
        title: "Intern",
        company: "Nigerian National Petroleum Corporation Limited - NNPC",
        logo: nnpcLogo,
        employmentType: "Internship",
        startDate: "Jun 2023",
        endDate: "Dec 2023",
        location: "Federal Capital Territory, Nigeria",
        Description: "During my internship at NNPC, I leveraged my prior development experience to lead a team and contribute significantly. Innovating in design, I crafted solutions now integral to various company applications. Additionally, I utilized Power Apps to develop user-friendly apps and spearheaded the creation of a centralized hub for the HSE department, enhancing efficiency and information accessibility across NNPC.",
        techs: ["Requirements Analysis", "Market Analysis", "Market Research", "Competitive Analysis", "Stock Market Analysis", "Business Requirements", "BRDs", "Back-End Web Developement", "Training", "Microsoft power Apps", "Training", "Microsoft Power BI", "SharePoint", "Dataverse", "Front-End Development", "React.js"] ,
    }
]

export const education = [
    {
        logo: abuLogo,
        institution: "Ahmadu Bello University",
        degree: "Bachelor fo Engineering - BE",
        field: "Computer Engineering",
        startDate: "Jan 2018",
        endDate: "Nov 2024",
        location: "Zaria, Nigeria",
        skills: ["Machine Learning", "Embedded Systems", "Networking", " Software Development", "Electrical Engineering", "Control Systems Design"]
    },
    {
        logo: alxLogo,
        institution: "ALX_Africa",
        degree: "Course",
        field: "Software Engineering",
        startDate: "Sep 2023",
        endDate: "Jul 2024",
        location: "Zaria, Nigeria",
        skills: ["C programming language", "Shell Scripting", "Python programming language", "Data structures & algorithms", "Github"]
    },
]
