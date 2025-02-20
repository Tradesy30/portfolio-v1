import About from './components/sections/about';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
import MobileNav from './components/layout/mobile-nav';
import { FloatingIcons } from './components/ui/floating-icons';
import { HeroIcon } from './components/ui/hero-icon';
import { Sparkles } from './components/ui/sparkles';

export default function Home() {
  return (
    <main className="bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Sparkles Effect */}
          <Sparkles
            particleColor="#38bdf8"
            particleDensity={50}
            speed={0.8}
            minSize={0.8}
            maxSize={1.8}
            particleGlow={true}
          />
          {/* Gradient Circles */}
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-3xl" />
          </div>
          {/* Floating Icons Background */}
          <div className="absolute inset-0">
            <FloatingIcons count={8} speed={0.7} minSize={40} maxSize={60} />
          </div>
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
                Portfolio
              </span>
              <div className="hidden sm:flex space-x-8">
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </a>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </div>
              <MobileNav />
            </div>
          </div>
        </nav>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl sm:text-7xl font-bold">
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Hi, I&apos;m Christopher Rodriguez
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl text-gray-300 leading-relaxed">
            A Full-Stack Developer passionate about creating beautiful, functional, and user-friendly applications
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors flex items-center justify-center"
            >
              View My Work
            </a>
            <a
              href="/Christopher-Rodriguez-CV.pdf"
              download
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2 order-last sm:order-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="inline-block"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>

          </div>
          <div className="mt-8 sm:mt-12">
            <HeroIcon />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
