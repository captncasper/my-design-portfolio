import Image from 'next/image';
import ContactForm from "@/components/ContactForm";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// Header Component
const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-midnight-blue bg-opacity-75 backdrop-filter backdrop-blur-sm shadow-lg">
    <nav className="container mx-auto flex justify-between items-center">
      <a href="#" className="text-2xl font-bold tracking-tight text-white">
        CaptnCasper
      </a>
      <ul className="flex space-x-6 text-sm font-medium">
        <li>
          <a href="#about" className="hover:text-navy-green transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-navy-green transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#gallery" className="hover:text-navy-green transition-colors">
            Gallery
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-navy-green transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

// Hero Section Component
const HeroSection = () => (
  <main className="relative z-10 pt-24 pb-12 overflow-hidden hero-bg bg-no-repeat bg-cover bg-center">
    <div className="absolute inset-0 bg-midnight-blue bg-opacity-60"></div>
    <section className="container mx-auto text-center py-24 px-6 md:py-32 relative z-10 animate-fade-in-delay">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
        Digital Designs that Tell a Story
      </h1>
      <p className="text-lg md:text-xl text-light-slate mb-8">
        Showcasing captivating creations and designs inspired by the stunning Sydney coastline.
      </p>
      <a 
        href="#projects" 
        className="bg-navy-green text-midnight-blue px-8 py-3 rounded-full font-bold hover:bg-white transition-colors transform hover:scale-105 inline-block"
      >
        View My Work
      </a>
      <p className="mt-4 text-xs text-gray-500">Photo by Ricardo Díaz on Unsplash</p>
    </section>
  </main>
);

// About Section Component
const AboutSection = () => (
  <section id="about" className="py-20 md:py-32 about-bg bg-no-repeat bg-cover bg-center shadow-inner relative">
    <div className="absolute inset-0 bg-slate-gray bg-opacity-75"></div>
    <div className="container mx-auto px-6 max-w-4xl relative z-10">
      <h2 className="text-4xl font-bold mb-8 text-center text-navy-green animate-fade-in">
        About Me
      </h2>
      <p className="text-lg text-light-slate leading-relaxed mb-6 animate-fade-in-delay">
        Hello! I'm CaptnCasper, a digital designer with a passion for creating
        clean, professional, and memorable online experiences. I specialize in
        crafting visually stunning designs that not only look great but also
        drive business growth. My work is a blend of modern aesthetics,
        user-centered design, and robust technical implementation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mt-10 animate-fade-in-delay">
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">My Skills</h3>
          <ul className="list-none space-y-2 text-light-slate">
            <li>Web Design</li>
            <li>UI/UX</li>
            <li>Branding & Identity</li>
            <li>Front-End Development</li>
            <li>Motion Graphics</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-white">My Philosophy</h3>
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
);

// Projects Section Component
const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-32 animate-fade-in">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-navy-green">
        Featured Project
      </h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-gray rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image 
                src="/assets/ocean-reef-background-1.jpg" 
                alt="Shellharbour Dive Tour Website" 
                width={500} 
                height={350} 
                className="h-full w-full object-cover md:w-64" 
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-navy-green font-semibold">
                Web Design & Development
              </div>
              <a 
                href="/dive-tour" 
                className="block mt-1 text-lg leading-tight font-medium text-white hover:underline"
              >
                Shellharbour Dive Tour Business Website
              </a>
              <p className="mt-2 text-light-slate">
                A comprehensive, multi-page website designed to showcase a local dive tour business. 
                Featuring an interactive booking calendar, dive site map, photo gallery, and more. 
                This project demonstrates a full-stack approach to building a modern, user-friendly web application.
              </p>
              <a 
                href="/dive-tour" 
                className="mt-4 inline-block bg-navy-green text-midnight-blue px-6 py-2 rounded-full font-bold hover:bg-white transition-colors"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Gallery Section Component
const GallerySection = () => (
  <section id="gallery" className="py-20 md:py-32 bg-gradient-to-br from-slate-gray to-midnight-blue">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold mb-12 text-center text-navy-green">
        Design Gallery
      </h2>
      
      {/* Main Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Gallery Item 1 - Long Beach */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <Image
            src="/assets/turtle.jpg"
            alt="Long Beach Design Project"
            width={400}
            height={300}
            className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-midnight-blue bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
              Beach Photography & Layout Design
            </p>
          </div>
        </div>

        {/* Gallery Item 2 - Giorgia Portrait */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <Image
            src="/assets/giorgia-doglioni-3GgbJx7hg14-unsplash.jpg"
            alt="Portrait Photography Project"
            width={400}
            height={300}
            className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-midnight-blue bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
              Portrait & Branding Photography
            </p>
          </div>
        </div>

        {/* Gallery Item 3 - Abner Portrait */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <Image
            src="/assets/abner-abiu-castillo-diaz.jpg"
            alt="Creative Portrait Design"
            width={400}
            height={300}
            className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-midnight-blue bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
              Creative Portrait & Digital Art
            </p>
          </div>
        </div>

        {/* Gallery Item 4 - Iwan Portrait */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <Image
            src="/assets/iwan_stasch.jpg"
            alt="Professional Photography"
            width={400}
            height={300}
            className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-midnight-blue bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
              Professional Photography & Editing
            </p>
          </div>
        </div>

        {/* Gallery Item 5 - Ocean Landscape */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <Image
            src="/assets/olga-ga-iRgbLpf50IE-unsplash.jpg"
            alt="Ocean Landscape Design"
            width={400}
            height={300}
            className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-midnight-blue bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
              Ocean Landscape & Nature Photography
            </p>
          </div>
        </div>

        {/* Gallery Item 6 - Architecture/Digital */}
        <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <Image
            src="/assets/neom-FXJf8y_cZA0-unsplash.jpg"
            alt="Digital Architecture Design"
            width={400}
            height={300}
            className="w-full h-64 object-cover group-hover:opacity-75 transition-opacity duration-300"
          />
          <div className="absolute inset-0 bg-midnight-blue bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
              Digital Architecture & Futuristic Design
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-light-slate mb-6">
          Want to see more? Let's discuss your next project.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-navy-green text-midnight-blue px-8 py-3 rounded-full font-bold hover:bg-white transition-colors transform hover:scale-105"
        >
          Start Your Project
        </a>
      </div>
    </div>
  </section>
);

// Contact Section Component
const ContactSection = () => (
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
);

// Footer Component
const Footer = () => (
  <footer className="py-8 bg-midnight-blue text-center text-light-slate text-sm">
    <p>&copy; {new Date().getFullYear()} CaptnCasper. All rights reserved.</p>
  </footer>
);

// Main Component
export default function Home() {
  return (
    <div className={`min-h-screen ${inter.className} bg-gradient-to-br from-midnight-blue to-slate-gray text-light-slate font-sans antialiased`}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
