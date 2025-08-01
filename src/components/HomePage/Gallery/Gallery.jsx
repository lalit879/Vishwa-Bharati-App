import React from 'react';
import { Link } from 'react-router-dom';
import Gallery1 from '@assets/HomePage/Gallery/gallery1.png';
import Gallery2 from '@assets/HomePage/Gallery/gallery2.png';
import Gallery3 from '@assets/HomePage/Gallery/gallery3.png';
import Gallery4 from '@assets/HomePage/Gallery/gallery4.png';
import Gallery5 from '@assets/HomePage/Gallery/gallery5.png';
import Gallery6 from '@assets/HomePage/Gallery/gallery6.png';

const galleryImages = [
  { id: 1, src: Gallery1, alt: 'Gallery Image 1' },
  { id: 2, src: Gallery2, alt: 'Gallery Image 2' },
  { id: 3, src: Gallery3, alt: 'Gallery Image 3' },
  { id: 4, src: Gallery4, alt: 'Gallery Image 4' },
  { id: 5, src: Gallery5, alt: 'Gallery Image 5' },
  { id: 6, src: Gallery6, alt: 'Gallery Image 6' }
]

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
          Gallery
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer">
          {galleryImages.map((img) => (
            <div key={img.id} className="w-full aspect-square rounded-lg overflow-hidden shadow-md">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/gallery">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-all duration-300">
              More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;