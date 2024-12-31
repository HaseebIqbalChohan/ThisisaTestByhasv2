import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';
import { facts } from './facts';

const JDMFact = () => {
  const [fact, setFact] = useState('');

  useEffect(() => {
    setFact(facts[Math.floor(Math.random() * facts.length)]);
  }, []);

  return (
    <div className="fixed left-4 bottom-4 z-50 animate-float">
      <div className="w-48 h-48 rounded-full backdrop-blur-lg bg-white/10 border border-white/20 p-4 shadow-lg flex items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent" />
        <div className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-white/20" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-white/10" />
        <div className="text-center z-10">
          <div className="bg-red-500/20 p-2 rounded-full mx-auto w-10 h-10 flex items-center justify-center mb-2">
            <Lightbulb className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-white/90 text-sm">{fact}</p>
        </div>
      </div>
    </div>
  );
};

export default JDMFact;