import About from './components/sections/about';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
import MobileNav from './components/layout/mobile-nav';

export default function Home() {
  return (
    <main className="bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-3xl" />
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
              className="px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-sky-500 text-sky-400 hover:bg-sky-500/10 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
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
