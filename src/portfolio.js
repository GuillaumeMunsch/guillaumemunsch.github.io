/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  //   googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello :)",
  title2: "Guillaume",
  logo_name: "guillaume",
  nickname: "GuillaumeMunsch",
  full_name: "Guillaume Munsch",
  subTitle: "Full Stack Developer, JavaScript Enthusiast and music lover.",
  resumeLink: "https://guillaumemunsch.github.io/public/CV.pdf",
  mail: "mailto:munschperso@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/GuillaumeMunsch",
  linkedin: "https://www.linkedin.com/in/guillaume-munsch-a014486b/",
  gmail: "munschperso@gmail.com",
  gitlab: "",
  facebook: "",
  twitter: "",
  instagram: "",
  stackoverflow: "https://stackoverflow.com/users/3683576/guillaume-munsch",
  spotify: "https://open.spotify.com/user/1116865568",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Using Firebase's tools to build serverless backends",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
        {
          skillName: "Redux Saga",
          fontAwesomeClassname: "simple-icons:reduxsaga",
          style: {
            color: "#999999",
          },
        },
        {
          skillName: "React Router",
          fontAwesomeClassname: "simple-icons:reactrouter",
          style: {
            color: "#CA4245",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Stripe",
          fontAwesomeClassname: "simple-icons:stripe",
          style: {
            color: "#008CDD",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Part time teacher",
      fileName: "TeacherImg",
      skills: [
        "⚡ React Native Development teacher for 4th year students @ EPITECH",
        // "⚡ Certifications by deeplearning.ai and Stanford Online",
        // "⚡ Experience with 10+ Projects",
      ],
      softwareSkills: [
        // {
        //   skillName: "Tensorflow",
        //   fontAwesomeClassname: "logos-tensorflow",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Keras",
        //   fontAwesomeClassname: "simple-icons:keras",
        //   style: {
        //     backgroundColor: "white",
        //     color: "#D00000",
        //   },
        // },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "ion-logo-python",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#3776AB",
        //   },
        // },
        // {
        //   skillName: "Pandas",
        //   fontAwesomeClassname: "simple-icons:pandas",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#6E6E6E",
        //   },
        // },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Graduate Diploma in Information Technology",
      subtitle: "Epitech",
      logo_path: "epitechLogo.png",
      alt_name: "EPITECH",
      duration: "2012 - 2017",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, multiple paradigms, databases, networking, etc.",
        "⚡ I studied specific topics like Web Development, Mobile App Development, etc.",
        "⚡ I did this while learning / using of several languages like C, C++, JavaScript, Java, etc.",
      ],
      website_link: "https://www.epitech.eu/",
    },
    {
      title: "Computer Engineering & Computer Science",
      subtitle: "California State University - Long Beach",
      logo_path: "csulb.png",
      alt_name: "CSULB",
      duration: "2015 - 2016",
      descriptions: ["⚡ IT & English Classes"],
      website_link: "https://www.csulb.edu/",
    },
    {
      title: "French and German A Level Diploma",
      subtitle: "Lycée Alfred Kastler - Guebwiller",
      logo_path: "school.png",
      alt_name: "HIGH SCHOOL",
      duration: "2009 - 2012",
      descriptions: [
        "⚡ French: Scientific elective, with honors",
        "⚡ German: Grade 2.3",
      ],
      website_link: "http://www.lyceekastler.fr/",
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Deep Learning Specialization",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#47A048",
    // },
    // {
    //   title: "Sequence Models",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#F6B808",
    // },
    // {
    //   title: "Convolutional Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "Structuring Machine Learning Projects",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#E2405F",
    // },
    // {
    //   title: "Machine Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "stanford_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
    //   alt_name: "Stanford University",
    //   color_code: "#8C151599",
    // },
    // {
    //   title: "Neural Networks and Deep Learning",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
    //   alt_name: "Google",
    //   color_code: "#7A7A7A",
    // },
    // {
    //   title: "Improving Deep Neural Networks",
    //   subtitle: "deeplearning.ai",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "Android Developer Nanodegree",
    //   subtitle: "Part of Google India Scholarship Program",
    //   logo_path: "100.png",
    //   certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
    //   alt_name: "Google",
    //   color_code: "#C5E2EE",
    // },
    // {
    //   title: "Google Summer of Code 2019",
    //   subtitle: "Google / Sugar Labs",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffc475",
    // },
    // {
    //   title: "Google Code-In Student",
    //   subtitle: "2014-2017",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#1e70c1",
    // },
    // {
    //   title: "Google Summer of Code Mentor",
    //   subtitle: "2017 / 2018 / 2020",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#ffbfae",
    // },
    // {
    //   title: "InOut 4.0 Winner #2",
    //   subtitle: "2017",
    //   logo_path: "ino.png",
    //   certificate_link: " ",
    //   alt_name: "InOut",
    //   color_code: "#fffbf3",
    // },
    // {
    //   title: "Google Code-In Mentor",
    //   subtitle: "2017 / 2018 / 2019",
    //   logo_path: "google_logo.png",
    //   certificate_link: " ",
    //   alt_name: "Google",
    //   color_code: "#b190b0",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Jobs & Internships",
  description:
    "I've completed two internships and then worked for 2 different companies, both based in Luxembourg. I'm a teacher at EPITECH in parallel.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Jobs",
      experiences: [
        {
          title: "Software Engineer",
          company: "Ovrsea",
          company_url: "https://www.ovrsea.com/",
          logo_path: "shawbeLogo.png",
          duration: "May 2022 - Current",
          location: "Full remote for Paris",
          description:
            "Creation of a fully functional and production ready SaaS called CheckQ with a serverless backend (Firebase), a mobile app (In React Native, « CheckQ » on the stores) and two frontends, one for the businesses subscribing to the product and one administration panel (both done in React)",
          color: "#2962FF",
        },
        {
          title: "CTO",
          company: "Shawbe",
          company_url: "https://shawbe.com/",
          logo_path: "shawbeLogo.png",
          duration: "Aug 2020 - Dec 2021",
          location: "Luxembourg City, Luxembourg",
          description:
            "Creation of a fully functional and production ready SaaS called CheckQ with a serverless backend (Firebase), a mobile app (In React Native, « CheckQ » on the stores) and two frontends, one for the businesses subscribing to the product and one administration panel (both done in React)",
          color: "#2962FF",
        },
        {
          title: "Part Time Teacher",
          company: "EPITECH",
          company_url: "https://www.epitech.eu/",
          logo_path: "epitechLogo.png",
          duration: "Oct 2020 - May 2021",
          location: "Remotely",
          description:
            "Teaching a React Native module to 4th year students. Tech presentation, workshops, follow-ups and assignment grading",
          color: "#2962FF",
        },
        {
          title: "Mobile Developer",
          company: "Shawbe",
          company_url: "https://shawbe.com/",
          logo_path: "shawbeLogo.png",
          duration: "Jun 2020 - Jul 2020",
          location: "Remotely",
          description:
            "Creation of a mobile application for Shawbe's SaaS « CheckQ »",
          color: "#2962FF",
        },
        {
          title: "Full Stack Developer",
          company: "ZAP",
          company_url: "https://zap.lu/",
          logo_path: "zapLogo.png",
          duration: "Sep. 2017 - Jul 2020",
          location: "Luxembourg City, Luxembourg",
          description:
            "Creation of a mobile application for Zap's product « Squareboard » which is a digital workplace for companies. I was in charge of the mobile app (React Native) but also worked on the web part (React)",
          color: "#2962FF",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "ZAP",
          company_url: "https://zap.lu/",
          logo_path: "zapLogo.png",
          duration: "Sep 2016 - Aug 2017",
          location: "Luxembourg City, Luxembourg",
          description:
            "Creation of a mobile application for Zap's product « Squareboard » which is a digital workplace for companies. I was in charge of the mobile app (React Native) but also worked on the web part (React)",
          color: "#2962FF",
        },
        {
          title: "Frontend Developer",
          company: "Kuhn",
          company_url: "https://www.kuhn.fr/",
          logo_path: "kuhnLogo.png",
          duration: "Mar 2015 - Jul 2015",
          location: "Saverne, France",
          description:
            "Development of a proprietary software in C# to improve efficiency of production line data access",
          color: "#2962FF",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A non exhaustive list of projects I did / worked on during either my jobs or my free time :)",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "me.png",
    description:
      "You can contact me at the places mentioned below. I'll get back to you asap! :)",
  },
  //   blogSection: {
  //     title: "Blogs",
  //     subtitle:
  //       "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Medium.",
  //     link: "https://medium.com/@hrishipatel99",
  //     avatar_image_path: "blogs_image.svg",
  //   },
};

const projects = {
  data: [
    {
      id: "0",
      name: "CheckQ",
      url: "https://github.com/GuillaumeMunsch/react-minesweeper",
      description:
        "CheckQ's full product. One mobile application available on both stores, two frontends (one for the businesses and one for the admin panel) and one serverless backend done with Firebase (Firestore, Realtime, Cloud Functions, Hosting, Storage, ...)",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "React Native",
          iconifyClass: "teenyicons:react-outline",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "Stripe",
          iconifyClass: "logos:stripe",
        },
      ],
      buttons: [
        {
          label: "View",
          link: "http://checkq.me/",
        },
      ],
    },
    {
      id: "1",
      name: "Squareboard",
      url: "https://www.squareboard.com/",
      description:
        "« Squareboard »'s mobile application. Squareboard is a digital workplace for companies.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "React Native",
          iconifyClass: "teenyicons:react-outline",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
      ],
      buttons: [
        {
          label: "View",
          link: "https://www.squareboard.com/",
        },
      ],
    },
    {
      id: "2",
      name: "My Portfolio",
      url: "https://github.com/GuillaumeMunsch/guillaumemunsch.github.io",
      description:
        "My portfolio. Forked from Hrishi1999's opensource portfolio.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/guillaumemunsch.github.io",
        },
        {
          label: "Forked from",
          link: "https://github.com/Hrishi1999/opPortfolio",
        },
      ],
    },
    {
      id: "3",
      name: "React Minesweeper",
      url: "https://github.com/GuillaumeMunsch/react-minesweeper",
      description: "The famous Minesweeper game made for fun.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/react-minesweeper",
        },
        {
          label: "Try it out",
          link:
            "https://guillaumemunsch.github.io/projects/react-minesweeper/index.html",
        },
      ],
    },
    {
      id: "4",
      name: "React Game of Life",
      url: "https://github.com/GuillaumeMunsch/react-minesweeper",
      description: "Conway's game of life made for fun.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/react-game-of-life",
        },
        {
          label: "Try it out",
          link:
            "https://guillaumemunsch.github.io/projects/react-game-of-life/index.html",
        },
      ],
    },
    {
      id: "6",
      name: "Hacker News",
      url: "https://github.com/GuillaumeMunsch/react-minesweeper",
      description:
        "A classical Hacker News Reader mobile app for both iOS and Android. Made to try Expo and NativeBase",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos:react",
        },
        {
          name: "React Native",
          iconifyClass: "teenyicons:react-outline",
        },
        {
          name: "Expo",
          iconifyClass: "logos:expo",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/my-hacker-news",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
