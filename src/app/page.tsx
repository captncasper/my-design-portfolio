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
                <li className="flex items-center justify-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>Web Design</li>
                <li className="flex items-center justify-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21v-2.5M12 11l-2 1m2-1l2-1m-2 1v-2.5M12 21a9 9 0 110-18 9 9 0 010 18z"></path></svg>UI/UX</li>
                <li className="flex items-center justify-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>Branding & Identity</li>
                <li className="flex items-center justify-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>Front-End Development</li>
                <li className="flex items-center justify-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4"></path></svg>Motion Graphics</li>
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
                  <Image src="/project-placeholder.jpg" alt={project.name} width={400} height={250} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{project.name}</h3>
                    <p className="text-light-slate text-sm mb-4 h-20 overflow-hidden">
                      {project.description || "No description provided."}
                    </p>
                    <div className="flex justify-between items-center text-sm font-medium text-light-slate">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        {project.stargazers_count}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.898-.632l4-12a1 1 0 011.265-.633zM5.734 6.051a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.898-.632l4-12a1 1 0 011.265-.633zm11.265 0a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.898-.632l4-12a1 1 0 011.265-.633z" clipRule="evenodd"></path></svg>
                        {project.language}
                      </span>
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
      
      {/* Design Flow Section */}
      <section id="design-flow" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-navy-green">My Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-navy-green rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-midnight-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">1. Consultation</h3>
              <p className="text-light-slate">We start with a conversation to understand your vision, goals, and requirements for the project.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-navy-green rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-midnight-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">2. Design & Development</h3>
              <p className="text-light-slate">I create mockups and prototypes, then bring them to life with clean, efficient code.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-navy-green rounded-full p-4 mb-4">
                <svg className="w-8 h-8 text-midnight-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white">3. Launch & Support</h3>
              <p className="text-light-slate">After rigorous testing, I deploy the project and provide ongoing support to ensure its success.</p>
            </div>
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
