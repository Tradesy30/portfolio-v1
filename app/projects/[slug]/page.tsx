'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { projects } from '@/app/data/projects'
import { AnimatedSection } from '@/app/components/AnimatedSection'

type Props = {
  params: { slug: string }
}

export default function ProjectPage({ params: { slug } }: Props) {
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-950 py-16 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>
      </div>

      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                {project.title}
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-6">{project.longDescription || project.description}</p>

            {/* Links */}
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>
        </AnimatedSection>

        {/* Main Image */}
        <AnimatedSection delay={0.2} className="mb-16">
          <div className="relative h-[400px] sm:h-[500px] rounded-xl overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </AnimatedSection>

        {/* Technologies */}
        <AnimatedSection delay={0.3} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-4 py-2 bg-gray-900 rounded-full text-sm"
                style={{ color: tech.color }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Features */}
        <AnimatedSection delay={0.4} className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {project.features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-gray-900 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl font-semibold mb-3 text-sky-400">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Challenges & Learnings */}
        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {project.challenges && (
            <AnimatedSection delay={0.5}>
              <h2 className="text-2xl font-bold mb-6 text-white">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-sky-400 mr-2">•</span>
                    <span className="text-gray-400">{challenge}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          )}

          {project.learnings && (
            <AnimatedSection delay={0.6}>
              <h2 className="text-2xl font-bold mb-6 text-white">Key Learnings</h2>
              <ul className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-400 mr-2">•</span>
                    <span className="text-gray-400">{learning}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          )}
        </div>

        {/* Additional Images */}
        {project.images.length > 1 && (
          <AnimatedSection delay={0.7} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-white">Project Gallery</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="space-y-2">
                  <div className="relative h-[250px] rounded-xl overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {image.caption && (
                    <p className="text-sm text-gray-400 text-center">{image.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </main>
  );
}
