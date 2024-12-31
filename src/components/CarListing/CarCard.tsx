import React from 'react';
import { ShoppingCart, Info } from 'lucide-react';

interface CarCardProps {
  car: {
    id: number;
    name: string;
    price: string;
    year: string;
    image: string;
    mileage: string;
  };
  isPaused: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CarCard = ({ car, isPaused, onMouseEnter, onMouseLeave }: CarCardProps) => {
  return (
    <div
      className={`backdrop-blur-lg bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 ${
        isPaused ? 'scale-105 border-red-500/50 shadow-lg shadow-red-500/10' : 'hover:border-red-500/50'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-48">
        <img 
          src={car.image} 
          alt={car.name} 
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isPaused ? 'scale-110' : ''
          }`}
        />
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
          
          <div className={`flex gap-2 transition-opacity duration-300 ${
            isPaused ? 'opacity-100' : 'opacity-0'
          }`}>
            <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-all duration-300 flex items-center gap-2">
              <Info className="w-4 h-4" />
              View
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-all duration-300 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;