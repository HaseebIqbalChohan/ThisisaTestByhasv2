import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { FilterPanel } from './components/FilterPanel';
import { ViewToggle } from './components/ViewToggle';
import { CarCard } from './components/CarCard';

const cars = [
  {
    id: 1,
    make: 'Nissan',
    model: 'Skyline GT-R V-Spec II Nür',
    year: 2002,
    price: 180000,
    mileage: '45,000 km',
    image: 'https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?auto=format&fit=crop&w=800&q=80',
    description: 'Rare V-Spec II Nür edition in Millennium Jade. Single owner, full service history.'
  },
  {
    id: 2,
    make: 'Toyota',
    model: 'Supra RZ',
    year: 1997,
    price: 120000,
    mileage: '62,000 km',
    image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=800&q=80',
    description: 'Twin-turbo 2JZ-GTE engine, 6-speed manual, TRD aero package.'
  },
  {
    id: 3,
    make: 'Mazda',
    model: 'RX-7 Type RS',
    year: 1999,
    price: 85000,
    mileage: '78,000 km',
    image: 'https://images.unsplash.com/photo-1629896428945-349b754e5f80?auto=format&fit=crop&w=800&q=80',
    description: 'Factory Type RS with sequential twin-turbo 13B-REW engine.'
  }
];

const Showroom = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter(car =>
    `${car.make} ${car.model}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black/95 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Available Stock
        </h2>
        
        <div className="flex gap-8">
          {/* Left Side - Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterPanel onFilterChange={() => {}} />
          </div>
          
          {/* Right Side - Cars */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by make or model..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white"
                />
              </div>
              <ViewToggle view={view} onViewChange={setView} />
            </div>
            
            <div className={view === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              : "space-y-6"
            }>
              {filteredCars.map(car => (
                <CarCard key={car.id} car={car} view={view} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showroom;