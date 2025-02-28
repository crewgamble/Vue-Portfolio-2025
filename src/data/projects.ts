// src/data/projects.ts
export interface Project {
    name: string;
    desc: string;
    category: string;
    url: string;
    repo: string;
    image: string; // Path to the logo image or URL
    skills: string[]; // List of skills used in the project
  }
  
  export const projects: Project[] = [
    // Professional Work
    {
      name: 'Padberg Law',
      category: 'Professional',
      desc: 'A professional, user-friendly website designed for a law firm specializing in personal injury cases. Built for clarity and accessibility, it ensures clients can easily find legal information and connect with the firm.',
      url: 'https://www.padberglaw.com/',
      repo: '',
      image: '/images/pak.png',
      skills: ['HTML', 'CSS', 'SCSS', 'PHP', 'Bootstrap', 'JavaScript', 'WordPress'],
    },
    {
      name: 'Express Mulch',
      category: 'Professional',
      desc: 'A sleek and efficient website built for a mulch delivery service, streamlining the ordering process and providing customers with a seamless way to schedule deliveries.',
      url: 'https://expressmulchcompany.com/',
      repo: '',
      image: '/images/mulch.png',
      skills: ['HTML', 'CSS', 'SCSS', 'PHP', 'Bootstrap', 'JavaScript', 'WordPress'],
    },
    {
      name: 'S&M Moving',
      category: 'Professional',
      desc: 'A modern and responsive website developed for a moving company, featuring an intuitive layout to help customers book services and find essential moving resources with ease.',
      url: 'https://www.sm-moving.com/',
      repo: '',
      image: '/images/sm.png',
      skills: ['HTML', 'CSS', 'SCSS', 'PHP', 'Bootstrap', 'JavaScript', 'WordPress'],
    },
    {
      name: 'Confident Smiles & Implants',
      category: 'Professional',
      desc: 'A welcoming and visually appealing website for a dental practice, designed to provide easy access to appointment booking, services, and patient resources while maintaining a professional and inviting aesthetic.',
      url: 'https://www.confidentsmilesandimplants.com/',
      repo: '',
      image: '/images/confident.png',
      skills: ['HTML', 'CSS', 'SCSS', 'PHP', 'Bootstrap', 'JavaScript', 'WordPress'],
    },
  
    // Personal Projects
    {
      name: 'Daily Doodle',
      category: 'Personal',
      desc: 'A fun and interactive web app that provides a new drawing prompt each day. Users can sketch their ideas on a virtual canvas and easily export their creations. \n\nBuilt with TypeScript and Next.js to refine front-end development skills while delivering a smooth and engaging user experience.',
      url: 'https://dailydoodle.netlify.app/',
      repo: 'https://github.com/crewgamble/Daily-Doodle',
      image: '/images/doodle-preview.png',
      skills: ['React', 'TypeScript', 'Next.js', 'CSS'],
    },
    {
      name: 'Mushroom Classification Neural Net',
      category: 'Personal',
      desc: 'An AI-powered classifier that determines whether a mushroom is edible or poisonous based on its characteristics. \n\nAchieves 100% accuracy in classification by leveraging PyTorch for deep learning. \n\nA practical exploration of neural networks and their real-world applications.',
      skills: ['Python', 'PyTorch',],
      url: '',
      image: '/images/mushroom.jpg',
      repo: 'https://github.com/crewgamble/Mushroom-Neural-net'
  },
  ];