export type Experience = {
  start: string;
  end: string;
  title: string;
  company: string;
  url?: string;
  location: string;
  summary: string[];
  tags: string[];
};

export type Education = {
  start: string;
  end: string;
  degree: string;
  school: string;
  url?: string;
  note?: string;
};

export type ProjectThumb = 'minesweeper' | '2048' | 'life' | 'darts';

export type Project = {
  name: string;
  description: string;
  thumb: ProjectThumb;
  play: string;
  code: string;
  tags: string[];
};

export const profile = {
  name: 'Guillaume Munsch',
  title: 'Software Engineer',
  tagline: 'I build web and mobile products with TypeScript.',
  email: 'munschperso@gmail.com',
  github: 'https://github.com/GuillaumeMunsch',
  linkedin: 'https://www.linkedin.com/in/guillaume-munsch-a014486b/',
};

export const experiences: Experience[] = [
  {
    start: 'Apr 2024',
    end: 'Present',
    title: 'Software Engineer',
    company: 'Zefir',
    url: 'https://www.zefir.fr',
    location: 'Paris, remote',
    summary: [
      'Full-stack engineer on the whole product: the GraphQL API in NestJS, the React web apps and the React Native app.',
      'Built the sync of our listings with the real estate portals and its daily checks, visit booking features, and AI features with OpenAI.',
      'Set up part of the production tooling: Grafana dashboards, alerts, and an AI routine that analyses production incidents.',
    ],
    tags: ['TypeScript', 'Node', 'React', 'GraphQL'],
  },
  {
    start: 'May 2022',
    end: 'Apr 2024',
    title: 'Software Development Engineer',
    company: 'OVRSEA',
    url: 'https://www.ovrsea.com',
    location: 'Paris, remote',
    summary: [
      'Built features for 2 internal tools: dashboards, email customization, forms and automation.',
      'Worked on the internal design system, based on Emotion. Applied TDD and DDD to keep the code reliable and maintainable.',
    ],
    tags: ['TypeScript', 'Node', 'React', 'GraphQL'],
  },
  {
    start: 'Aug 2020',
    end: 'May 2022',
    title: 'Chief Technology Officer',
    company: 'SHAWBE',
    location: 'Luxembourg',
    summary: [
      'Built CheckQ from scratch and took it to production: a SaaS that helps businesses manage their customer flow.',
      'Shipped a Firebase serverless backend, a React Native app on the stores, and two React frontends: one for subscribing businesses, one admin panel.',
    ],
    tags: ['React', 'React Native', 'Redux', 'TypeScript', 'Firebase', 'Stripe'],
  },
  {
    start: 'Sep 2016',
    end: 'Aug 2020',
    title: 'Full Stack Developer / Software Engineer',
    company: 'ZAP s.a.',
    location: 'Luxembourg',
    summary: [
      'Built the React Native app of Squareboard, the digital workplace made by ZAP, and worked on its React web app.',
    ],
    tags: ['TypeScript', 'Node.js', 'React', 'React Native', 'Redux'],
  },
];

export const education: Education[] = [
  {
    start: '2012',
    end: '2017',
    degree: 'Master in Information Technology',
    school: 'Epitech, Strasbourg',
    url: 'https://www.epitech.eu',
  },
  {
    start: '2015',
    end: '2016',
    degree: 'Computer Engineering and Computer Science',
    school: 'California State University, Long Beach',
    url: 'https://www.csulb.edu',
    note: 'IT and English classes.',
  },
  {
    start: '2009',
    end: '2012',
    degree: 'French and German A Level',
    school: 'Lycée Alfred Kastler, Guebwiller',
  },
];

export const languages = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'German', level: 'C1' },
];

export const projects: Project[] = [
  {
    name: 'Minesweeper',
    description:
      'Classic Minesweeper with visual effects on every move. Plain TypeScript, domain-driven design, no UI framework.',
    thumb: 'minesweeper',
    play: '/minesweeper-2026/',
    code: 'https://github.com/GuillaumeMunsch/minesweeper-2026',
    tags: ['TypeScript', 'Vite', 'Canvas'],
  },
  {
    name: '2048',
    description: 'The 2048 game, built test first.',
    thumb: '2048',
    play: '/2048/index.html',
    code: 'https://github.com/GuillaumeMunsch/2048',
    tags: ['React', 'TypeScript'],
  },
  {
    name: 'Game of Life',
    description: "Conway's Game of Life.",
    thumb: 'life',
    play: '/react-game-of-life/index.html',
    code: 'https://github.com/GuillaumeMunsch/react-game-of-life',
    tags: ['React', 'TypeScript'],
  },
  {
    name: 'Darts Cricket',
    description: 'Score calculator for the cricket darts game.',
    thumb: 'darts',
    play: '/darts-cricket/index.html',
    code: 'https://github.com/GuillaumeMunsch/dart-cricket-score-calculator',
    tags: ['React', 'TypeScript', 'Radix UI'],
  },
];

export const about = [
  'I started in 2016 at ZAP in Luxembourg, building React Native apps. I then became CTO of SHAWBE, where we built CheckQ from scratch. Since 2022 I have worked with Paris teams, first at OVRSEA, now at Zefir.',
  'I also taught React Native to 4th-year students at Epitech.',
  "When I'm not coding, I climb and listen to music.",
];
