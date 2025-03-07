'use client';

import { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '../AnimatedSection';
import { ProjectsSkeleton } from '../skeletons/section-skeletons';
import { projects } from '@/app/data/projects';
import { ExternalLink, Github } from 'lucide-react';

const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

function ProjectsContent() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        {/* Filter Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <AnimatedSection delay={0.1}>
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
          </AnimatedSection>
          {allTags.map((tag, index) => (
            <AnimatedSection key={tag} delay={0.2 + index * 0.1}>
              <button
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  selectedTag === tag
                    ? 'bg-sky-500 text-white'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800'
                }`}
              >
                {tag}
              </button>
            </AnimatedSection>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={0.4 + index * 0.1}
              className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-sky-500/50 transition-colors"
            >
              <div className="relative">
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.coverImage}
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
                  </div>
                </Link>
                <div className="px-6 pb-6">
                  <div className="flex gap-4">
                    {project.link && (
                      <button
                        onClick={() => window.open(project.link, '_blank', 'noopener,noreferrer')}
                        className="inline-flex items-center text-sky-400 hover:text-sky-300 text-sm font-medium"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live
                      </button>
                    )}
                    {project.github && (
                      <button
                        onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                        className="inline-flex items-center text-gray-400 hover:text-gray-300 text-sm font-medium"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-950/50">
      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectsContent />
      </Suspense>
    </section>
  );
}