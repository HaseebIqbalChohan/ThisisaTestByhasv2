import React from 'react';
import { useCarSlider } from './useCarSlider';
import CarCard from './CarCard';
import SliderControls from './SliderControls';
import SliderProgress from './SliderProgress';

const cars = [
  {
    id: 1,
    name: 'Nissan Skyline GT-R R34',
    price: '$85,000',
    year: '1999',
    image: 'https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?auto=format&fit=crop&w=800&q=80',
    mileage: '78,000 km'
  },
  {
    id: 2,
    name: 'Toyota Supra MK4',
    price: '$95,000',
    year: '1998',
    image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=800&q=80',
    mileage: '62,000 km'
  },
  {
    id: 3,
    name: 'Mazda RX-7 FD',
    price: '$75,000',
    year: '1995',
    image: 'https://images.unsplash.com/photo-1629896428945-349b754e5f80?auto=format&fit=crop&w=800&q=80',
    mileage: '85,000 km'
  },
  {
    id: 4,
    name: 'Honda NSX Type R',
    price: '$125,000',
    year: '1992',
    image: 'https://images.unsplash.com/photo-1633509817627-5a29634475af?auto=format&fit=crop&w=800&q=80',
    mileage: '92,000 km'
  }
];

const CarListing = () => {
  const {
    currentSlide,
    isPaused,
    hoveredCard,
    progress,
    nextSlide,
    previousSlide,
    handleCardHover,
    handleCardLeave,
  } = useCarSlider(cars.length);

  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Featured JDM Legends</h2>
          <p className="text-lg text-white/70">Explore our handpicked selection of premium vehicles</p>
        </div>
        
        <div className="relative px-8">
          <SliderControls onPrevious={previousSlide} onNext={nextSlide} />
          
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 25}%)` }}
            >
              {cars.map((car, index) => (
                <div key={car.id} className="w-full lg:w-1/4 flex-shrink-0 px-3">
                  <CarCard
                    car={car}
                    isPaused={hoveredCard === index}
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={handleCardLeave}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <SliderProgress current={currentSlide} total={cars.length} progress={progress} />
        </div>
      </div>
    </section>
  );
};

export default CarListing;