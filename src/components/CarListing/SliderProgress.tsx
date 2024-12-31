import React from 'react';

interface SliderProgressProps {
  current: number;
  total: number;
  progress: number;
}

const SliderProgress = ({ current, total, progress }: SliderProgressProps) => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 py-4">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="relative w-12 h-1 rounded-full bg-white/20 overflow-hidden"
        >
          {index === current && (
            <div
              className="absolute inset-0 bg-red-500 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          )}
          {index !== current && index < current && (
            <div className="absolute inset-0 bg-red-500" />
          )}
        </div>
      ))}
    </div>
  );
}

export default SliderProgress;