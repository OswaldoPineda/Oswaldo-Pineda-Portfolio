import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "OswaldoPineda Portfolio", // e.g: 'Name'
  lang: "en", // e.g: en, es, fr, jp
  description: "Welcome to my website",
};

// HERO DATA
export const heroData = {
  title: "Hi, my name is",
  name: "Oswaldo Pineda",
  subtitle: "I'm Javascript developer",
  cta: "Know more",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.jpg",
  paragraphOne:
    "Dynamic and creative software developer with over 3 years of experience in producing robust code in Javascript, Eager to help customers develop web services solving product and service issues. Highly organized and self-motivated.",
  paragraphTwo:
    "Working in teams recognized for top company-wide quality satisfaction.",
  resume: "https://www.linkedin.com/in/carlos-oswaldo-pineda-rivera-92b414165/", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "project1",
    title: "Today I Learned",
    info: "Project to document my learning about tech with simple and small posts that takes less than one minute to read, in order to learn sometime new real quick.",
    info2: "You can subscribe to my newsletter and receive posts weekly!!",
    url: "http://today-i-learned-app-production.herokuapp.com/",
    repo: "https://github.com/OswaldoPineda/Today_I_learned", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Would you like to work with me? Awesome!",
  btn: "Let's Talk",
  email: "carlos.oswaldo.pineda@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "medium",
      url: "https://medium.com/@carlos.oswaldo.pineda",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/carlos-oswaldo-pineda-rivera-92b414165/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/OswaldoPineda",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
