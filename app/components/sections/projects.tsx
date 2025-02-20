'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of your first project and its key features.',
    image: '/image.png',
    tags: ['React', 'Next.js', 'TypeScript'],
    link: 'https://portfolio-v1-delta-five.vercel.app/',
    github: 'https://github.com/Tradesy30/portfolio-v1?tab=readme-ov-file',
  },
  // Add more projects here
];

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <section id="projects" className="py-20 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          {/* Filter Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedTag === null
                  ? 'bg-sky-500 text-white'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? 'bg-sky-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-sky-500/50 transition-colors"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800 rounded-md text-xs text-sky-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-sky-300 text-sm font-medium"
                    >
                      View Project →
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-300 text-sm font-medium"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}