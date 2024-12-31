import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

interface ViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onViewChange('grid')}
        className={`p-2 rounded-lg transition-all ${
          view === 'grid'
            ? 'bg-red-500 text-white'
            : 'bg-white/5 text-white/70 hover:bg-white/10'
        }`}
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
      <button
        onClick={() => onViewChange('list')}
        className={`p-2 rounded-lg transition-all ${
          view === 'list'
            ? 'bg-red-500 text-white'
            : 'bg-white/5 text-white/70 hover:bg-white/10'
        }`}
      >
        <List className="w-5 h-5" />
      </button>
    </div>
  );
};