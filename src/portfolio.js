import React from "react";
/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
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
  subTitle:
    "Full Stack Developer, JavaScript Enthusiast, climber and music lover. Currently specialized in React",
  resumeLink: "https://guillaumemunsch.github.io/CV.pdf",
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
        // {
        //   skillName: "HTML5",
        //   fontAwesomeClassname: "simple-icons:html5",
        //   style: {
        //     color: "#E34F26",
        //   },
        // },
        // {
        //   skillName: "CSS3",
        //   fontAwesomeClassname: "fa-css3",
        //   style: {
        //     color: "#1572B6",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#2F73BF",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React Hook Form",
          fontAwesomeClassname: "simple-icons:reacthookform",
          style: {
            color: "#E4568C",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DD34A6",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Jest",
          fontAwesomeClassname: "simple-icons:jest",
          style: {
            color: "#C21325",
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
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
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
          logo_path: "ovrseaLogo.png",
          duration: "May 2022 - Current",
          location: "Full remote for Paris",
          description:
            "Development of several features (dashboards, emails customizations, forms, automation, …) for 2 internal tools with React, React Hook Form, Typescript, NodeJS, and GraphQL. I also worked on an internal design system based on Emotion. Applying principles like Test Driven Development and Domain Driven Design for code reliability and maintainability.",
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

const DoneWithMathieu = ({ theme }) => (
  <div>
    Done with{" "}
    <a
      style={{ color: theme.link }}
      target="_blank"
      href="https://github.com/mathieueveillard"
      rel="noreferrer"
    >
      Mathieu Eveillard
    </a>
  </div>
);

const projects = {
  data: [
    {
      name: "2048",
      url: "https://github.com/GuillaumeMunsch/dart-cricket-score-calculator",
      description: ({ theme }) => <>A 2048 game developed for fun in TDD.</>,
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
          link: "https://github.com/GuillaumeMunsch/dart-cricket-score-calculator",
        },
        {
          label: "Try it out",
          link: "https://guillaumemunsch.github.io/darts-cricket/index.html",
        },
      ],
    },
    {
      name: "2048",
      url: "https://github.com/GuillaumeMunsch/2048",
      description: ({ theme }) => <>A 2048 game developed for fun in TDD.</>,
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
          link: "https://github.com/GuillaumeMunsch/2048",
        },
        {
          label: "Try it out",
          link: "https://guillaumemunsch.github.io/2048/index.html",
        },
      ],
    },    {
      name: "Redux Basis",
      url: "https://github.com/GuillaumeMunsch/redux-basis",
      description: ({ theme }) => (
        <>
          A very simple and light test of the implementation of redux.
          <DoneWithMathieu theme={theme} />
        </>
      ),
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/redux-basis",
        },
      ],
    },
    {
      name: "Game of Life",
      url: "https://github.com/GuillaumeMunsch/js-kata-game-of-life",
      description: ({ theme }) => (
        <>
          Clean implementation of Conway's game of life.
          <DoneWithMathieu theme={theme} />
        </>
      ),
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
          link: "https://github.com/GuillaumeMunsch/js-kata-game-of-life",
        },
        {
          label: "Try it out",
          link:
            "https://guillaumemunsch.github.io/js-kata-game-of-life/index.html",
        },
      ],
    },
    {
      name: "Snail",
      url: "https://github.com/GuillaumeMunsch/snail",
      description: ({ theme }) => (
        <div>
          A{" "}
          <a
            style={{ color: theme.link }}
            target="_blank"
            href="https://github.com/mathieueveillard/snail"
            rel="noreferrer"
          >
            snail kata
          </a>
          .<DoneWithMathieu theme={theme} />
        </div>
      ),
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/snail",
        },
      ],
    },
    {
      name: "Pyramid Slide Down",
      url: "https://github.com/GuillaumeMunsch/js-pyramid-slide-down",
      description: ({ theme }) => (
        <div>
          The{" "}
          <a
            style={{ color: theme.link }}
            href="https://velog.io/@gtfo/Pyramid-Slide-Down"
            target="_blank"
            rel="noreferrer"
          >
            Pyramid Slide Down
          </a>{" "}
          kata.
          <DoneWithMathieu theme={theme} />
        </div>
      ),
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/js-pyramid-slide-down",
        },
      ],
    },
    {
      name: "Jest",
      url: "https://github.com/GuillaumeMunsch/my-jest",
      description: ({ theme }) => (
        <div>
          A homemade simplistic implementation of Jest.
          <DoneWithMathieu theme={theme} />
        </div>
      ),
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/my-jest",
        },
      ],
    },
    {
      name: "Property Base Testing",
      url: "https://github.com/GuillaumeMunsch/min-max-pbt",
      description: ({ theme }) => (
        <div>
          A kata to try out property base testing.
          <DoneWithMathieu theme={theme} />
        </div>
      ),
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/min-max-pbt",
        },
      ],
    },
    {
      name: "RPN (Reverse Polish Notation)",
      url: "https://github.com/GuillaumeMunsch/js-kata-rpn",
      description: ({ theme }) => (
        <div>
          A kata implementing an{" "}
          <a
            href="https://en.wikipedia.org/wiki/RPN"
            target="_blank"
            style={{ color: theme.link }}
            rel="noreferrer"
          >
            RPN
          </a>
          .
          <DoneWithMathieu theme={theme} />
        </div>
      ),
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/js-kata-rpn",
        },
      ],
    },
    {
      name: "ATM",
      url: "https://github.com/GuillaumeMunsch/js-kata-atm",
      description: ({ theme }) => (
        <div>
          A kata simulating an ATM.
          <DoneWithMathieu theme={theme} />
        </div>
      ),
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/js-kata-atm",
        },
      ],
    },
    {
      name: "Diamond",
      url: "https://github.com/GuillaumeMunsch/js-kata-diamond",
      description: ({ theme }) => (
        <div>
          A kata drawing a diamond shape.
          <DoneWithMathieu theme={theme} />
        </div>
      ),
      languages: [
        {
          name: "TypeScript",
          iconifyClass: "logos:typescript-icon",
        },
      ],
      buttons: [
        {
          label: "View code",
          link: "https://github.com/GuillaumeMunsch/js-kata-diamond",
        },
      ],
    },
    {
      name: "Coffee Machine",
      url: "https://github.com/GuillaumeMunsch/js-kata-coffee-machine",
      description: ({ theme }) => (
        <div>
          A kata simulating a coffee machine.
          <DoneWithMathieu theme={theme} />
        </div>
      ),
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
          link: "https://github.com/GuillaumeMunsch/js-kata-coffee-machine",
        },
      ],
    },
    {
      name: "CheckQ",
      description: ({ theme }) =>
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
    },
    {
      name: "Squareboard",
      url: "https://www.squareboard.com/",
      description: ({ theme }) =>
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
      name: "My Portfolio",
      url: "https://github.com/GuillaumeMunsch/guillaumemunsch.github.io",
      description: ({ theme }) =>
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
      name: "React Minesweeper",
      url: "https://github.com/GuillaumeMunsch/react-minesweeper",
      description: ({ theme }) => "The famous Minesweeper game made for fun.",
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
            "https://guillaumemunsch.github.io/react-minesweeper/index.html",
        },
      ],
    },
    {
      name: "React Game of Life",
      url: "https://github.com/GuillaumeMunsch/react-minesweeper",
      description: ({ theme }) => (
        <div>"Conway's game of life made for fun."</div>
      ),
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
            "https://guillaumemunsch.github.io/react-game-of-life/index.html",
        },
      ],
    },
    {
      name: "Hacker News",
      url: "https://github.com/GuillaumeMunsch/my-hacker-news",
      description: ({ theme }) =>
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
