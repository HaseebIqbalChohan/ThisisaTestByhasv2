import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  items: Array<{
    label: string;
    href: string;
  }>;
}

export const Dropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="text-white/80 hover:text-white transition-colors relative flex items-center gap-1 group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        More
        <ChevronDown className="w-4 h-4" />
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-48 backdrop-blur-lg bg-black/90 rounded-lg border border-white/10 overflow-hidden shadow-xl"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-white/80 hover:text-white hover:bg-red-500/20 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};