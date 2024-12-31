import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface Car {
  make: string;
  model: string;
  category: string;
  eligibilityCriteria: string[];
  image: string;
}

const cars: Car[] = [
  {
    make: 'Nissan',
    model: 'Skyline GT-R (R34)',
    category: 'Performance',
    eligibilityCriteria: ['RV', 'IC'],
    image: 'https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?auto=format&fit=crop&w=800&q=80'
  },
  {
    make: 'Toyota',
    model: 'Supra (A80)',
    category: 'Performance',
    eligibilityCriteria: ['RV', 'IC'],
    image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=800&q=80'
  },
  {
    make: 'Honda',
    model: 'NSX Type R',
    category: 'Performance',
    eligibilityCriteria: ['RV', 'IC'],
    image: 'https://images.unsplash.com/photo-1633509817627-5a29634475af?auto=format&fit=crop&w=800&q=80'
  }
];

const eligibilityCriteria = {
  RV: 'Rarity Value',
  IC: 'Innovative Character',
  EV: 'Environmental Value',
  SS: 'Safety Significance',
  OM: 'Original Manufacturer',
  LM: 'Low Manufacturing Volume'
};

const ImportList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCriteria, setSelectedCriteria] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter(car => {
    const matchesSearch = (car.make + car.model)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || car.category === selectedCategory;
    const matchesCriteria = selectedCriteria.length === 0 || 
      selectedCriteria.some(criteria => car.eligibilityCriteria.includes(criteria));
    
    return matchesSearch && matchesCategory && matchesCriteria;
  });

  return (
    <div className="min-h-screen bg-black/95 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Import Car List</h2>
        
        {/* Search and Filters */}
        <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by make or model..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white"
              />
            </div>
            
            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white appearance-none"
              >
                <option value="">All Categories</option>
                <option value="Performance">Performance</option>
                <option value="Luxury">Luxury</option>
                <option value="Classic">Classic</option>
              </select>
            </div>
            
            {/* Eligibility Criteria Filter */}
            <div className="flex flex-wrap gap-2">
              {Object.entries(eligibilityCriteria).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedCriteria(prev =>
                      prev.includes(key)
                        ? prev.filter(c => c !== key)
                        : [...prev, key]
                    );
                  }}
                  className={`px-3 py-1 rounded-full text-sm transition-all ${
                    selectedCriteria.includes(key)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCars.map((car, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/5 rounded-xl overflow-hidden border border-white/10 group hover:border-red-500/50 transition-all"
            >
              <div className="relative h-48">
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {car.make} {car.model}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.eligibilityCriteria.map(criteria => (
                    <span
                      key={criteria}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70"
                    >
                      {criteria}
                    </span>
                  ))}
                </div>
                <button className="w-full px-4 py-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportList;