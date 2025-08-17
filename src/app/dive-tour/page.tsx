import Link from 'next/link';

export default function DiveTourHome() {
  return (
    <div>
      <section className="text-center py-20 bg-cover bg-center" style={{ backgroundImage: "url('/assets/ocean-reef-background-1.jpg')" }}>
        <div className="bg-black bg-opacity-50 p-12 rounded-lg">
          <h1 className="text-5xl font-bold text-white mb-4">Explore the Underwater World with Us</h1>
          <p className="text-xl text-white mb-8">Your adventure into the stunning marine life of Shellharbour starts here.</p>
          <Link href="/dive-tour/tours" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition-colors">
            View Our Tours
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Your Premier Dive Experience</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Shellharbour Dive Tours is dedicated to providing the safest, most enjoyable, and most memorable scuba diving experiences. Whether you're a seasoned diver or trying it for the first time, our expert team is here to guide you through the vibrant reefs and fascinating wrecks of the NSW South Coast.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Expert Guides</h3>
            <p>Our certified and experienced instructors prioritize your safety and enjoyment on every dive.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Amazing Dive Sites</h3>
            <p>Discover a variety of sites, from shallow bays perfect for beginners to challenging deep-water wrecks.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Quality Gear</h3>
            <p>We provide top-of-the-line, regularly serviced scuba gear to ensure a comfortable and safe dive.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
