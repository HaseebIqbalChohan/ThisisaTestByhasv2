import React from 'react';
import { Wrench, Shield, Calendar, Tool, Car, Settings } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-black/95 pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive automotive solutions for import, maintenance, and enhancement of premium vehicles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          <ServiceCard
            icon={<Car />}
            title="Vehicle Import"
            description="Complete import service including sourcing, compliance, and registration for JDM and European vehicles."
          />
          <ServiceCard
            icon={<Wrench />}
            title="Mechanical Repairs"
            description="Expert diagnostics and repairs by certified technicians specializing in imported vehicles."
          />
          <ServiceCard
            icon={<Settings />}
            title="Performance Upgrades"
            description="Custom performance enhancements and modifications to maximize your vehicle's potential."
          />
          <ServiceCard
            icon={<Tool />}
            title="Maintenance"
            description="Regular servicing and preventive maintenance to keep your vehicle in optimal condition."
          />
          <ServiceCard
            icon={<Shield />}
            title="Compliance Services"
            description="Ensuring your imported vehicle meets all Australian regulations and standards."
          />
          <ServiceCard
            icon={<Calendar />}
            title="Pre-Purchase Inspection"
            description="Thorough vehicle inspections before purchase to ensure quality and reliability."
          />
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
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