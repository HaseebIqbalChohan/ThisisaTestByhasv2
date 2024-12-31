import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all group">
    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-all">
      <div className="text-red-500 group-hover:text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);