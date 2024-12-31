import React from 'react';
import { Search, CarFront, Calendar, DollarSign } from 'lucide-react';

const SearchFilter = () => {
  return (
    <div className="w-full max-w-4xl animate-float">
      <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl shadow-2xl border border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Make & Model</label>
            <div className="relative">
              <CarFront className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Any make or model"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Year</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <select className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all appearance-none">
                <option>Any year</option>
                {Array.from({ length: 30 }, (_, i) => 2024 - i).map(year => (
                  <option key={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Price Range</label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
              <select className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all appearance-none">
                <option>Any price</option>
                <option>Under $20,000</option>
                <option>$20,000 - $40,000</option>
                <option>$40,000 - $60,000</option>
                <option>$60,000+</option>
              </select>
            </div>
          </div>
          
          <button className="bg-red-500 hover:bg-red-600 text-white rounded-lg px-6 py-2 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
            <Search className="h-5 w-5" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;