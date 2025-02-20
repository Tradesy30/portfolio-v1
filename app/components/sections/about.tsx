'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500 to-indigo-500 rounded-3xl blur-2xl opacity-30" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              {/* Replace the src with your actual image */}
              <Image
                src="/image.png"
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm a passionate Full-Stack Developer with expertise in modern web technologies.
                My journey in software development started [your background]. I specialize in
                building scalable web applications using React, Next.js, and Node.js.
              </p>
              <p>
                When I'm not coding, you can find me [your interests/hobbies]. I believe in
                continuous learning and staying up-to-date with the latest technologies.
              </p>
              <div className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Core Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {['TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800/50 rounded-full text-sm text-sky-400 border border-sky-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}