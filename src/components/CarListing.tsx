import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Featured JDM Legends</h2>
          <p className="text-lg text-white/70">Explore our handpicked selection of premium vehicles</p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cars.map((car) => (
              <div
                key={car.id}
                className="backdrop-blur-lg bg-white/5 rounded-xl overflow-hidden border border-white/10 group hover:border-red-500/50 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{car.name}</h3>
                  <div className="flex justify-between text-white/70 mb-4">
                    <span>{car.year}</span>
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-500">{car.price}</span>
                    <button className="px-4 py-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarListing;