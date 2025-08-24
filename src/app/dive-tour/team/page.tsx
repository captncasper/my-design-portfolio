import Image from 'next/image';

const teamMembers = [
  {
    name: 'Brendan Sumner',
    role: 'Lead Instructor & Photographer',
    bio: 'With over 20 years of diving experience, Brendan is our lead guide and a passionate underwater photographer. He knows the local waters like the back of his hand and is dedicated to sharing its beauty with you.',
    image: '/assets/ocean-reef-background-1.jpg',
  },
  {
    name: 'Franchesco Escobar',
    role: 'Divemaster & Marine Biologist',
    bio: 'Franschesco combines her passion for diving with a deep knowledge of marine biology. She loves pointing out the unique creatures that call our reefs home and is an expert in underwater modeling.',
    image: '/assets/ocean-reef-background-2.jpg',
  },
  {
    name: 'John "JC" Cole',
    role: 'Instructor & Gear Specialist',
    bio: 'JC is our go-to expert for all things gear-related. He ensures everything is in top condition and can help you find the perfect fit for a comfortable and safe dive. He is also a certified instructor for all levels.',
    image: '/assets/timothy-barlin-FGaknWvNbBk-unsplash.jpg',
  },
];

export default function TeamPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-12">Meet Our Team</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Image src={member.image} alt={member.name} width={200} height={200} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
            <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
            <h3 className="text-lg text-blue-600 font-semibold mb-2">{member.role}</h3>
            <p className="text-gray-600">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
