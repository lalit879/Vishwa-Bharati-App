import React, {useState, useEffect} from 'react';
import schoolBackG from '@assets/schoolBackG.png';
import Canteen from '@assets/AboutPage/Canteen.png'
import Vbss from '@assets/AboutPage/Vbss.png'
import SchoolYard from '@assets/AboutPage/SchoolYard.png'
import SchoolHall from '@assets/AboutPage/SchoolHall.png'
import Library from '@assets/AboutPage/Library.png'
import Nav from '../Navbar/Nav';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// --- CHANGED: Converted to an array of objects with src and name ---
const sliderImages = [
  { src: SchoolHall, name: 'School Hall' },
  { src: Canteen, name: 'Canteen' },
  { src: Vbss, name: 'Vishwa Bharati Shiksha Sadan ' },
  { src: SchoolYard, name: 'Schoolyard' },
  { src: Library, name: 'Library' }
];

const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNext = () => {
    const isLastImage = currentImageIndex === sliderImages.length - 1;
    const newIndex = isLastImage ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstImage = currentImageIndex === 0;
    const newIndex = isFirstImage ? sliderImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const sliderInterval = setInterval(goToNext, 3000);
    return () => clearInterval(sliderInterval);
  }, [currentImageIndex]);


  return (
    <header
      className="relative w-full h-[100vh] bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${schoolBackG})` }}
    >
      <Nav/>
      {/* Black Transparent Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      {/* <Nav/> */}

      {/* Main Content */}
      <div className="relative z-20 px-6 flex flex-col items-center justify-center h-full text-center">
        {/* School Name */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-center mb-6 drop-shadow">
          VISHWA BHARATI SHIKSHA SADAN
        </h1>
        {/* --- SLIDER STRUCTURE --- */}
        <div className="relative w-full max-w-4xl mx-auto mt-8 flex items-center justify-center">
          
          <button
            onClick={goToPrevious}
            className="bg-black bg-opacity-40 hover:bg-opacity-60 text-white text-xl p-3 rounded-full shadow-lg transition duration-300"
            aria-label="Previous"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="relative h-[50vh] w-full mx-4 overflow-hidden rounded-xl shadow-2xl">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {/* --- CHANGED: Now mapping over objects --- */}
              {sliderImages.map((slide, index) => (
                <img
                  key={index}
                  src={slide.src}
                  alt={slide.name}
                  className="w-full h-full object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>

          <button
            onClick={goToNext}
            className="bg-black bg-opacity-40 hover:bg-opacity-60 text-white text-xl p-3 rounded-full shadow-lg transition duration-300"
            aria-label="Next"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        
        {/* --- ADDED: Image name display --- */}
        <h2 key={currentImageIndex} className="text-xl font-semibold mt-4 animate-fade-in">
          {sliderImages[currentImageIndex].name}
        </h2>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </header >
  );
};

export default Header;
