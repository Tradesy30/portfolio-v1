import { Project } from '@/app/types/project';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'portfolio-v1',
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing my projects and skills, built with Next.js 14.',
    longDescription: 'A personal portfolio website that demonstrates modern web development practices. Features include server-side rendering, smooth animations, theme persistence, responsive design, and a component-driven architecture. The site showcases both technical proficiency and attention to user experience.',
    coverImage: '/portfolio.png',
    images: [
      {
        url: '/portfolio.png',
        alt: 'Portfolio Website Homepage',
        caption: 'Modern and responsive homepage design with animated sections'
      }
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    technologies: [
      { name: 'Next.js 14', color: '#000000' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind CSS', color: '#38B2AC' },
      { name: 'Framer Motion', color: '#FF0066' },
      { name: 'Zustand', color: '#764ABC' },
      { name: 'Lucide Icons', color: '#5B21B6' }
    ],
    features: [
      {
        title: 'Dynamic Project Pages',
        description: 'Detailed project pages with rich content and smooth navigation'
      },
      {
        title: 'Animated Sections',
        description: 'Smooth scroll-triggered animations using Framer Motion'
      },
      {
        title: 'Theme System',
        description: 'Persistent theme preferences with Zustand state management'
      },
      {
        title: 'Contact Integration',
        description: 'Integrated contact form with FormSpree and form validation'
      },
      {
        title: 'Project Filtering',
        description: 'Dynamic project filtering by technology tags'
      },
      {
        title: 'Responsive Design',
        description: 'Mobile-first approach with optimal viewing on all devices'
      }
    ],
    challenges: [
      'Implementing smooth scroll-triggered animations while maintaining performance',
      'Creating a responsive design that maintains visual appeal across all devices',
      'Building a theme system with persistent storage and smooth transitions',
      'Developing a dynamic project showcase with filtering capabilities',
      'Integrating contact form with proper validation and error handling'
    ],
    learnings: [
      'Next.js 14 app router and server components architecture',
      'Advanced animation techniques with Framer Motion',
      'State management patterns with Zustand',
      'TypeScript type safety and best practices',
      'Modern CSS techniques with Tailwind',
      'Form handling and validation with Zod'
    ],
    link: 'https://portfolio-v1-delta-five.vercel.app/',
    github: 'https://github.com/Tradesy30/portfolio-v1',
    date: '2024-02'
  },
  {
    id: 2,
    slug: 'task-management-app',
    title: 'Task Management App',
    description: 'A full-stack task management application with real-time updates and collaborative features.',
    longDescription: 'A comprehensive task management solution that helps teams organize and track their projects efficiently. Features include real-time updates, collaborative workspaces, and detailed analytics.',
    coverImage: '/portfolio.png',
    images: [
      {
        url: '/task-app.png',
        alt: 'Task Management App Dashboard',
        caption: 'Interactive dashboard with task analytics'
      }
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    technologies: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Node.js', color: '#339933' },
      { name: 'MongoDB', color: '#47A248' },
      { name: 'Socket.io', color: '#010101' },
      { name: 'Express', color: '#000000' },
      { name: 'Chart.js', color: '#FF6384' }
    ],
    features: [
      {
        title: 'Real-time Collaboration',
        description: 'Live updates and collaborative editing using WebSocket technology'
      },
      {
        title: 'Task Analytics',
        description: 'Detailed insights and progress tracking with interactive charts'
      },
      {
        title: 'Smart Categories',
        description: 'AI-powered task categorization and priority suggestions'
      },
      {
        title: 'Team Management',
        description: 'Role-based access control and team workspace organization'
      }
    ],
    challenges: [
      'Implementing real-time synchronization across multiple clients',
      'Designing an efficient database schema for complex task relationships',
      'Building a scalable WebSocket architecture',
      'Optimizing performance for large datasets'
    ],
    learnings: [
      'WebSocket implementation best practices',
      'MongoDB schema design and optimization',
      'State management in real-time applications',
      'Building scalable Node.js backend services'
    ],
    link: 'https://task-management-demo.vercel.app',
    github: 'https://github.com/Tradesy30/task-management',
    date: '2024-01'
  }
];
