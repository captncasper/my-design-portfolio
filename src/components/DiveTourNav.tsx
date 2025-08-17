import Link from 'next/link';

export default function DiveTourNav() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dive-tour" className="text-2xl font-bold">
          Shellharbour Dive Tours
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/dive-tour/about" className="hover:underline">About</Link></li>
          <li><Link href="/dive-tour/tours" className="hover:underline">Tours</Link></li>
          <li><Link href="/dive-tour/gallery" className="hover:underline">Gallery</Link></li>
          <li><Link href="/dive-tour/testimonials" className="hover:underline">Testimonials</Link></li>
          <li><Link href="/dive-tour/booking" className="hover:underline">Booking</Link></li>
          <li><Link href="/dive-tour/team" className="hover:underline">Team</Link></li>
          <li><Link href="/dive-tour/faq" className="hover:underline">FAQ</Link></li>
          <li><Link href="/dive-tour/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
