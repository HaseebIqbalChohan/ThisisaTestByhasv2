import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  onPrevious: () => void;
  onNext: () => void;
}

const SliderControls = ({ onPrevious, onNext }: SliderControlsProps) => {
  return (
    <>
      <button
        onClick={onPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center text-white transition-all z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </>
  );
};

export default SliderControls;