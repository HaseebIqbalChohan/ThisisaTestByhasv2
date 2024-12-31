import React from 'react';
import { Award, Users, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black/95 pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">About Ikigai Motors</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Melbourne's premier destination for premium imported vehicles and expert automotive services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-white/70 mb-4">
              Founded in Melbourne, Ikigai Motors was born from a passion for exceptional automobiles and a commitment to bringing the finest vehicles to Australian enthusiasts.
            </p>
            <p className="text-white/70">
              Our name, Ikigai, represents the Japanese concept of finding purpose and fulfillment - a philosophy we apply to every aspect of our business.
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/70">
              To provide automotive enthusiasts with access to the world's finest vehicles while delivering exceptional service, expertise, and support throughout their ownership journey.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon={<Award />}
            title="Excellence"
            description="Commitment to the highest standards in every service we provide"
          />
          <ValueCard
            icon={<Users />}
            title="Community"
            description="Building relationships with enthusiasts and experts alike"
          />
          <ValueCard
            icon={<Target />}
            title="Expertise"
            description="Specialized knowledge in import vehicles and modifications"
          />
          <ValueCard
            icon={<Globe />}
            title="Global Reach"
            description="Access to premium vehicles from markets worldwide"
          />
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
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