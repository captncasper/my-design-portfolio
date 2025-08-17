"use client";

import { useState } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/assets/ocean-reef-background-1.jpg', title: 'Vibrant Coral Reef', category: 'Reef' },
  { src: '/assets/ocean-reef-background-2.jpg', title: 'Coastal Overview', category: 'Landscape' },
  { src: '/project-placeholder.jpg', title: 'Curious Turtle', category: 'Marine Life' },
  { src: '/assets/ocean-reef-background-1.jpg', title: 'Sunken Wreck', category: 'Wreck' },
  { src: '/assets/ocean-reef-background-2.jpg', title: 'Rocky Shoreline', category: 'Landscape' },
  { src: '/project-placeholder.jpg', title: 'School of Fish', category: 'Marine Life' },
  { src: '/assets/ocean-reef-background-1.jpg', title: 'Deep Blue', category: 'Reef' },
  { src: '/assets/ocean-reef-background-2.jpg', title: 'The Gutter', category: 'Landscape' },
  { src: '/project-placeholder.jpg', title: 'Weedy Seadragon', category: 'Marine Life' },
];

const categories = ['All', 'Reef', 'Landscape', 'Marine Life', 'Wreck'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');

  const filteredPhotos = filter === 'All'
    ? photos
    : photos.filter((photo) => photo.category === filter);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full font-semibold transition-colors ${
              filter === category
                ? 'bg-blue-600 text-white'
                : 'bg-white text-blue-600 hover:bg-blue-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {filteredPhotos.map((photo, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={photo.src} alt={photo.title} width={400} height={300} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
