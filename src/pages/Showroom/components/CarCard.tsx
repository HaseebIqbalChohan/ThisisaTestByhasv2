import React from 'react';
import { Calendar, Gauge, DollarSign } from 'lucide-react';

interface CarCardProps {
  car: {
    id: number;
    make: string;
    model: string;
    year: number;
    price: number;
    mileage: string;
    image: string;
    description: string;
  };
  view: 'grid' | 'list';
}

export const CarCard = ({ car, view }: CarCardProps) => {
  if (view === 'list') {
    return (
      <div className="backdrop-blur-lg bg-white/5 rounded-xl overflow-hidden border border-white/10 group hover:border-red-500/50 transition-all">
        <div className="flex">
          <div className="w-48 h-48 relative">
            <img
              src={car.image}
              alt={`${car.make} ${car.model}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </div>
          
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {car.make} {car.model}
                </h3>
                <p className="text-white/70">{car.description}</p>
              </div>
              <span className="text-2xl font-bold text-red-500">
                ${car.price.toLocaleString()}
              </span>
            </div>
            
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-2 text-white/70">
                <Calendar className="w-4 h-4" />
                {car.year}
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Gauge className="w-4 h-4" />
                {car.mileage}
              </div>
            </div>
            
            <button className="mt-4 px-6 py-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-all">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="backdrop-blur-lg bg-white/5 rounded-xl overflow-hidden border border-white/10 group hover:border-red-500/50 transition-all">
      <div className="relative h-48">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-white">
            {car.make} {car.model}
          </h3>
          <span className="text-xl font-bold text-red-500">
            ${car.price.toLocaleString()}
          </span>
        </div>
        
        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2 text-white/70">
            <Calendar className="w-4 h-4" />
            {car.year}
          </div>
          <div className="flex items-center gap-2 text-white/70">
            <Gauge className="w-4 h-4" />
            {car.mileage}
          </div>
        </div>
        
        <button className="w-full px-4 py-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};