import Image from 'next/image';
import ContactForm from "@/components/ContactForm";
import { getProjects } from "@/lib/github";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className={`min-h-screen ${inter.className} bg-gradient-to-br from-midnight-blue to-slate-gray text-light-slate font-sans antialiased`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-midnight-blue bg-opacity-75 backdrop-filter backdrop-blur-sm shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight text-white">CaptnCasper</a>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-navy-green transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-navy-green transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-navy-green transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 pt-24 pb-12 overflow-hidden hero-bg bg-no-repeat bg-cover bg-center">
        <div className="absolute inset-0 bg-midnight-blue bg-opacity-60"></div>
        <section className="container mx-auto text-center py-24 px-6 md:py-32 relative z-10 animate-fade-in-delay">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Digital Designs that Tell a Story
          </h1>
          <p className="text-lg md:text-xl text-light-slate mb-8">
            Showcasing captivating creations and designs inspired by the stunning Sydney coastline.
          </p>
          <a href="#projects" className="bg-navy-green text-midnight-blue px-8 py-3 rounded-full font-bold hover:bg-white transition-colors transform hover:scale-105 inline-block">
            View My Work
          </a>
          <p className="mt-4 text-xs text-gray-500">Photo by Ricardo Díaz on Unsplash</p>
        </section>
      </main>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 about-bg bg-no-repeat bg-cover bg-center shadow-inner relative">
        <div className="absolute inset-0 bg-slate-gray bg-opacity-75"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-center text-navy-green animate-fade-in">About Me</h2>
          <p className="text-lg text-light-slate leading-relaxed mb-6 animate-fade-in-delay">
            Hello! I'm CaptnCasper, a digital designer with a passion for creating
            clean, professional, and memorable online experiences. I specialize in
            crafting visually stunning designs that not only look great but also
            drive business growth. My work is a blend of modern aesthetics,
            user-centered design, and robust technical implementation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mt-10 animate-fade-in-delay">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-white">My Skills</h3>
              <ul className="list-none space-y-2 text-light-slate">
                <li>Web Design</li>
                <li>UI/UX</li>
                <li>Branding & Identity</li>
                <li>Front-End Development</li>
                <li>Motion Graphics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-white">My Philosophy</h3>
              <p className="text-light-slate">
                Design should be both beautiful and functional. I believe in a
                collaborative process to ensure every project truly reflects the
                client's vision and business goals.
              </p>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-400 text-center">Photo by Angus Gray on Unsplash</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 animate-fade-in">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-navy-green">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div key={project.id} className="bg-slate-gray rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{project.name}</h3>
                    <p className="text-light-slate text-sm mb-4">
                      {project.description || "No description provided."}
                    </p>
                    <div className="flex justify-between items-center text-sm font-medium text-light-slate">
                      <span>{project.language}</span>
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-green font-semibold hover:underline"
                      >
                        View on GitHub &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-light-slate col-span-full">No projects found. Please ensure your GitHub token is valid and your repositories are public.</p>
            )}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-slate-gray">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-navy-green">
            Request a Quote
          </h2>
          <p className="text-center text-lg text-light-slate mb-10">
            Have a project in mind? Fill out the form below to get a custom
            quote and discuss your design needs.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-midnight-blue text-center text-light-slate text-sm">
        <p>&copy; {new Date().getFullYear()} CaptnCasper. All rights reserved.</p>
      </footer>
    </div>
  );
}
