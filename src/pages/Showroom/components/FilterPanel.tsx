import React from 'react';
import { Filter, DollarSign, Calendar, Gauge } from 'lucide-react';

interface FilterPanelProps {
  onFilterChange: (filters: any) => void;
}

export const FilterPanel = ({ onFilterChange }: FilterPanelProps) => {
  return (
    <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 space-y-6">
      <h3 className="text-xl font-semibold text-white flex items-center gap-2">
        <Filter className="w-5 h-5" />
        Filters
      </h3>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Price Range</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <select className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white appearance-none">
              <option value="">Any Price</option>
              <option value="0-25000">Under $25,000</option>
              <option value="25000-50000">$25,000 - $50,000</option>
              <option value="50000-100000">$50,000 - $100,000</option>
              <option value="100000+">$100,000+</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Year</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <select className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white appearance-none">
              <option value="">Any Year</option>
              {Array.from({ length: 30 }, (_, i) => 2024 - i).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/80">Mileage</label>
          <div className="relative">
            <Gauge className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <select className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white appearance-none">
              <option value="">Any Mileage</option>
              <option value="0-50000">Under 50,000 km</option>
              <option value="50000-100000">50,000 - 100,000 km</option>
              <option value="100000+">100,000+ km</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};