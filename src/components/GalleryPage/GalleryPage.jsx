import React, { useState } from 'react';
import img1 from './GalleryImg/img1.png';
import img2 from './GalleryImg/img2.png';
import img3 from './GalleryImg/img3.png';
import img4 from './GalleryImg/img4.png';
import img5 from './GalleryImg/img5.png';
import img6 from './GalleryImg/img6.png';
import img7 from './GalleryImg/img7.png';
import img8 from './GalleryImg/img8.png';
import img9 from './GalleryImg/img9.png';
import img10 from './GalleryImg/img10.png';
import img11 from './GalleryImg/img11.png';
import img12 from './GalleryImg/img12.png';
import img13 from './GalleryImg/img13.png';
import img14 from './GalleryImg/img14.png';
import img15 from './GalleryImg/img15.png';


const allGalleryImages = [
  // Page 1
  { id: 1, src: img1, alt: 'Image 1' },
  { id: 2, src: img2, alt: 'Image 2' },
  { id: 3, src: img3, alt: 'Image 3' },
  { id: 4, src: img4, alt: 'Image 4' },
  { id: 5, src: img5, alt: 'Image 5' },
  { id: 6, src: img6, alt: 'Image 6' },
  { id: 7, src: img7, alt: 'Image 7' },
  { id: 8, src: img8, alt: 'Image 8' },
  { id: 9, src: img9, alt: 'Image 9' },
  { id: 10, src: img10, alt: 'Image 10' },
  { id: 11, src: img11, alt: 'Image 11' },
  { id: 12, src: img12, alt: 'Image 12' },
  { id: 13, src: img13, alt: 'Image 13' },
  { id: 14, src: img14, alt: 'Image 14' },
  { id: 15, src: img15, alt: 'Image 15' },
];

const itemsPerPage = 9;

const GalleryPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allGalleryImages.length / itemsPerPage);
  const paginatedImages = allGalleryImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="bg-gray-50 py-20 px-12 sm:px-12 lg:px-24">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-8">
        Gallery
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 cursor-pointer">
        {paginatedImages.map((img) => (
          <div key={img.id} className="aspect-square w-full rounded-lg overflow-hidden shadow hover:scale-105 transition-transform">
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 text-lg ${currentPage === 1 ? 'text-gray-400' : 'text-blue-500 hover:text-blue-700'}`}
        >
          &laquo;
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            className={`w-8 h-8 rounded-full text-sm font-semibold ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
            } hover:bg-blue-600 hover:text-white transition`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 text-lg ${currentPage === totalPages ? 'text-gray-400' : 'text-blue-500 hover:text-blue-700'}`}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default GalleryPage;
