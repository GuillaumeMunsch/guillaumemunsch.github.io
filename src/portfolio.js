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
          title: "CTO",
          company: "Shawbe",
          company_url: "https://shawbe.com/",
          logo_path: "shawbeLogo.png",
          duration: "Aug 2020 - Current",
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
          duration: "Oct 2020 - Current",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
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
      name: "opPortfolio",
      url: "https://github.com/Hrishi1999/opPortfolio",
      description: "(This) A clean and full customizable portfolio template.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "1",
      name: "Cab Security System",
      url: " ",
      description:
        "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "2",
      name: "Lensinator",
      url: " ",
      description:
        "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "12",
      name: "Doorbell.io",
      url: "https://github.com/Hrishi1999/Doorbell.io",
      description:
        "A sound-classifier webapp made with ReactJS + TensorflowJS.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "TensorflowJS",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      id: "13",
      name: "Video Summarization (WIP)",
      url: "https://github.com/Hrishi1999/Video-Summarization",
      description:
        "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
      ],
    },
    {
      id: "3",
      name: "Dashboard Activity",
      url: "https://github.com/Hrishi1999/Dashboard.activity",
      description:
        "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "4",
      name: "Project Pickle",
      url: " ",
      description:
        "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Project Health Card",
      url: "",
      description:
        "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-java",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "6",
      name: "Food Classifier",
      url: " ",
      description:
        "A food classifier app using tflite which classfier over 50 Indian Dishes.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Dart",
          iconifyClass: "logos-dart",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "7",
      name: "Image Clustering",
      url: " ",
      description:
        "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "8",
      name: "Antivirus",
      url: " ",
      description:
        "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
      ],
    },
    {
      id: "9",
      name: "Sugar on Windows",
      url: " ",
      description:
        "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
      languages: [
        {
          name: "Visual Basic",
          iconifyClass: "logos-dotnet",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "10",
      name: "Object + Face Detection",
      url: " ",
      description: "2017 project. Object detection + accurate face detection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "11",
      name: "Image Captioning with Visual Attention",
      url: " ",
      description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
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
