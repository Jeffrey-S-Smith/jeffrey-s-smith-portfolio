const logotext = "Jeffrey S Smith";
const meta = {
    title: "Jeffrey S Smith",
    description: "I’m Jeffrey S Smith United States Veteran |Full Stack Developer, currently in Seattle, WA gggg",
};

const introdata = {
    title: "I’m Jeffrey Smith",
    animated: {
        first: "I am enthusiastic about technology.",
        second: "I code because I like to analyze and solve complex technical information.",
        third: "CARPE DIEM! (SEIZE THE DAY!)",
        four: `A Quote that inspires me by Thomas Edison "I have not failed. I've just found 10,000 ways that won't work."`,
    },
    description: "Veteran | Full Stack Developer | IT Specialist | Logistics Management, currently in Seattle, WA",
    your_img_url: "https://cdn.pixabay.com/photo/2017/06/04/20/23/binary-2372130_960_720.jpg",
};

const dataabout = {
    title: "About me",
    aboutme: "I am a Full Stack Developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best developer that I can be and to  contribute to the technology industry.",
};


const worktimeline = [{
        jobtitle: "Information Management Configuration Analyst (Remote)",
        where: "Molina Healthcare",
        date: "2021",
    },
    {
        jobtitle: "Logistic Support Specialist ",
        where: "Military and Civilian",
        date: "2015",
    },
    
];
const education = [{
    school: "Code Fellows",
    degree: " Advanced Software Development in Full-Stack JavaScript",
    fieldofstudy: "Software Development",
    date: "2022",
},
{
    school: "Bryant and Stratton College",
    degree: "Associate of Arts and Sciences - AAS",
    fieldofstudy: "Information Technology",
    date: "2002",
},
];

const skills = [{
    
        name: "HTML/CSS",
        // value: 80,

    },
    {
    
        name: "CSS",
        value: 80,

    },
    {
        name: "Javascript",
        value: 75,
    },
    {
        name: "React",
        value: 65,
    },
    
    
        
   ];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://as1.ftcdn.net/v2/jpg/02/96/71/88/1000_F_296718820_m6ZeC2WwhKrOAhc6VxIWL73xeBzWu11W.jpg",
        desctiption: "C++ Tic Tac Toe Game. Tic Tac Toe is an integral part of our childhood memories. It is a fun game consisting of two players who battle each other using Xs and Os.",
        link: "https://github.com/Jeffrey-S-Smith/c-tic-tac-toe",
    },
    {
        img: "https://miro.medium.com/max/409/1*o1WI_Lzbi8fiL9ULb4nhuw.jpeg",
        desctiption: "The Airline registration system is in C++ allows a user to book a flight to a specific nation of choice. They will obtain the ticket by filling in all the necessary details. User may also choose the day and time of the trip.",
        link: "https://github.com/Jeffrey-S-Smith/cplus-Airline-Registration-System",
    },
    {
        img: "	https://i0.wp.com/www.vampiretools.com/wp-content/uploads/2018/09/psr.jpg?fit=908%2C490&ssl=1",
        desctiption: "Rock-Paper-Scissors is a simple game that people love to play. I created the game in C++ while I was in college. I decided to see if I could code it into Python.",
        link: "https://github.com/Jeffrey-S-Smith/python-rock-paper-scissors",
        
    },
    {
        img: "https://www.sourcecodester.com/sites/default/files/styles/large/public/images/razormist/billing-system-using-python.png?itok=9MylNknQ",
        desctiption: "Python Billing System Created a simple billing system where I can expand my knowledge to composing a program in python of an electronic store that offers electronic machines like phone, laptop and HDD.",
        link: "https://github.com/Jeffrey-S-Smith/python-billing-system",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://miro.medium.com/max/409/1*o1WI_Lzbi8fiL9ULb4nhuw.jpeg",
        desctiption: "This project on the Airline registration system in C++ will allow a user to book a flight to a specific nation of their choice, and they will obtain the ticket by filling in all the necessary details. The user may also choose the day and time of the trip. This project will employ many C++ principles to help you understand the concepts of C++ programming practically.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        desctiption: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "jeffrey.s.smith.dev@gmail.com",
    YOUR_FONE: "(206)237-8504",
    description: "I would love to hear from you! Please fill out the form and I will respond within 24 hours. ",
    // create an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.REACT_APP_SERVICE_TEMPLATE_ID,
    YOUR_USER_ID:  process.env.REACT_APP_SERVICE_USER_ID,
};

const socialprofils = {
    github: "https://github.com/Jeffrey-S-Smith",
    linkedin: "https://www.linkedin.com/in/jeffrey-s-smith",
    
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    education,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};