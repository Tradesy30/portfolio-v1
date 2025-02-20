'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="space-y-4 text-gray-300">
            <p>
              I&apos;m embarking on an exciting journey into frontend development, driven by a passion for creating beautiful and functional web experiences.
              My background in customer service has given me a strong foundation in understanding user needs and attention to detail, which I&apos;m now
              applying to web development.
            </p>
            <p>
              Currently, I&apos;m dedicating my time to learning modern web development through hands-on projects and structured online courses.
              I&apos;m particularly excited about building responsive websites and learning how to create engaging user interfaces.
            </p>
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4 text-white">Learning Journey</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sky-400 font-medium mb-2">Currently Learning</h4>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-800/50 rounded-full text-sm text-sky-400 border border-sky-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-indigo-400 font-medium mb-2">Fundamentals</h4>
                  <div className="flex flex-wrap gap-3">
                    {['HTML', 'CSS', 'JavaScript', 'Git', 'github', 'vercel'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-800/50 rounded-full text-sm text-indigo-400 border border-indigo-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}