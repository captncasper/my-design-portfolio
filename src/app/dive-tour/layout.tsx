import DiveTourNav from '@/components/DiveTourNav';

export default function DiveTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100 text-gray-800">
      <DiveTourNav />
      <main className="container mx-auto p-8">
        {children}
      </main>
      <footer className="bg-blue-900 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Shellharbour Dive Tours. All rights reserved.</p>
      </footer>
    </div>
  );
}
