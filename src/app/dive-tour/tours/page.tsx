import Link from 'next/link';

const tours = [
  {
    name: 'Introductory Scuba Dive',
    description: 'Perfect for beginners! Get a taste of the underwater world with a closely supervised dive in a calm bay.',
    price: '$150',
    duration: '3 hours',
  },
  {
    name: 'Open Water Certification',
    description: 'Become a certified diver! This course covers all the fundamentals of scuba diving.',
    price: '$550',
    duration: '2-3 Days',
  },
  {
    name: 'Advanced Adventure Dive',
    description: 'For certified divers looking to expand their skills. Includes a deep dive and a night dive.',
    price: '$450',
    duration: '2 Days',
  },
  {
    name: 'Guided Reef Dive',
    description: 'Explore the beautiful local reefs with one of our expert guides. Gear rental included.',
    price: '$120',
    duration: '4 hours',
  },
];

export default function ToursPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">Our Tours & Courses</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {tours.map((tour) => (
          <div key={tour.name} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{tour.name}</h2>
            <p className="text-gray-600 mb-4">{tour.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold text-blue-600">{tour.price}</span>
              <span className="text-gray-500">{tour.duration}</span>
            </div>
            <Link href="/dive-tour/booking" className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
