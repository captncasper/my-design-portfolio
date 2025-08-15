// Add this import at the top of src/app/page.tsx
import ContactForm from "@/components/ContactForm";

// ... inside the Contact Section
<section id="contact" className="py-20 md:py-32 bg-gray-800">
  <div className="container mx-auto px-6 max-w-2xl">
    {/* ... other content */}
    <ContactForm />
  </div>
</section>
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-gray-900 bg-opacity-75 backdrop-filter backdrop-blur-sm">
        <nav className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight">CaptnCasper</a>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 pt-24 pb-12 overflow-hidden">
        <section className="container mx-auto text-center py-24 px-6 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 animate-fade-in">
            Digital Designs that Tell a Story
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fade-in-delay">
            Showcasing captivating creations and designs to elevate your brand.
          </p>
          <a href="#projects" className="bg-amber-400 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-amber-500 transition-colors transform hover:scale-105 inline-block">
            View My Work
          </a>
        </section>
      </main>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gray-800">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-amber-400">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Hello! I'm CaptnCasper, a digital designer with a passion for creating
            clean, professional, and memorable online experiences. I specialize in
            crafting visually stunning designs that not only look great but also
            drive business growth. My work is a blend of modern aesthetics,
            user-centered design, and robust technical implementation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mt-10">
            <div>
              <h3 className="text-2xl font-semibold mb-2">My Skills</h3>
              <ul className="list-none space-y-2 text-gray-400">
                <li>Web Design</li>
                <li>UI/UX</li>
                <li>Branding & Identity</li>
                <li>Front-End Development</li>
                <li>Motion Graphics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">My Philosophy</h3>
              <p className="text-gray-400">
                Design should be both beautiful and functional. I believe in a
                collaborative process to ensure every project truly reflects the
                client's vision and business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-amber-400">
            Featured Projects
          </h2>
          {/* We'll dynamically generate project cards here later */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Example Project Card - This will be replaced with dynamic data */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src="/project-placeholder.jpg"
                  alt="Project Placeholder"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A brief description of the project and the technologies used.
                  This project demonstrates a professional approach to web design
                  and development.
                </p>
                <a
                  href="https://github.com/captncasper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 font-semibold hover:underline"
                >
                  View on GitHub &rarr;
                </a>
              </div>
            </div>
            {/* End of Example Project Card */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gray-800">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center text-amber-400">
            Request a Quote
          </h2>
          <p className="text-center text-lg text-gray-300 mb-10">
            Have a project in mind? Fill out the form below to get a custom
            quote and discuss your design needs.
          </p>
          {/* We'll add the form here in the next step */}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} CaptnCasper. All rights reserved.</p>
      </footer>
    </div>
  );
}
