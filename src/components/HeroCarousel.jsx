import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { carouselSlides } from '../data/academyData';

function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1));

  return (
    // Changed h-140 to a min-height wrapper on mobile to prevent overflow/overlap issues
    <section className="relative h-[550px] sm:h-140 w-full overflow-hidden bg-slate-950">
      {carouselSlides.map((slide, index) => {
        const Icon = slide.icon;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSlide ? 'translate-x-0 opacity-100' : index < currentSlide ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'
            }`}
          >
            <img
              src={
                index === 0
                  ? 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80'
                  : index === 1
                    ? 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80'
                    : 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80'
              }
              alt={index === 0 ? 'Children learning together in a bright study space' : index === 1 ? 'Teen students studying with focus in a classroom' : 'Young learners working collaboratively in a learning hub'}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/75" />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />
            
            {/* Added bottom padding safety buffer on mobile so content clears indicators */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 text-center">
              <div className="max-w-4xl pb-10 sm:pb-0">
                <div className="mb-4 sm:mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-slate-100 backdrop-blur">
                  <Icon className="text-yale-accent animate-pulse" />
                  {slide.eyebrow}
                </div>
                <h2 className="mb-3 sm:mb-4 font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                  {slide.title}
                </h2>
                <p className="mx-auto mb-6 sm:mb-8 max-w-2xl text-sm sm:text-lg md:text-xl leading-relaxed text-slate-200">
                  {slide.description}
                </p>
                
                {/* Clean, single-row side-by-side flex layout on mobile */}
                <div className="flex flex-row justify-center gap-2 sm:gap-3">
                  <Link 
                    to={slide.ctaLink} 
                    className="rounded-sm bg-yale-accent px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white transition-colors hover:bg-blue-600 whitespace-nowrap"
                  >
                    {slide.ctaText}
                  </Link>
                  <Link 
                    to="/about" 
                    className="rounded-sm border border-white/30 bg-black/10 px-4 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-slate-100 transition-colors hover:bg-white/10 whitespace-nowrap"
                  >
                    Why us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Hide arrows on mobile to maximize horizontal spacing */}
      <button 
        onClick={prevSlide} 
        className="hidden sm:flex absolute left-4 top-1/2 z-20 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25" 
        aria-label="Previous slide"
      >
        <FaChevronLeft />
      </button>
      <button 
        onClick={nextSlide} 
        className="hidden sm:flex absolute right-4 top-1/2 z-20 h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25" 
        aria-label="Next slide"
      >
        <FaChevronRight />
      </button>

      {/* Slide indicators with responsive alignment */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-6 sm:w-8 bg-yale-accent' : 'w-2 sm:w-2.5 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;