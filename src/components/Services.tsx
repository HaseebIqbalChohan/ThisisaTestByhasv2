import React from 'react';
import { Wrench, Shield, Calendar } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black/95 to-black/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-3">Our Services</h2>
          <p className="text-lg text-white/70">Premium vehicles and expert mechanical services in Melbourne</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Workshop Services */}
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all group">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-all">
              <Wrench className="text-red-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Professional Workshop</h3>
            <p className="text-white/70 mb-6">Expert maintenance and modifications for your JDM vehicle by certified technicians.</p>
            <button className="px-6 py-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-all w-full">
              Book Service
            </button>
          </div>
          
          {/* Compliance Services */}
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all group">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-all">
              <Shield className="text-red-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Import & Compliance</h3>
            <p className="text-white/70 mb-6">Complete import compliance and registration assistance for your JDM and European imports.</p>
            <button className="px-6 py-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-all w-full">
              Learn More
            </button>
          </div>
          
          {/* Appointments */}
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all group">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-all">
              <Calendar className="text-red-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Schedule Appointment</h3>
            <p className="text-white/70 mb-6">Book a consultation for vehicle inspection, maintenance, or compliance services.</p>
            <button className="px-6 py-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-all w-full">
              Book Now
            </button>
          </div>
          
          {/* Car Sales */}
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-6 border border-white/10 hover:border-red-500/50 transition-all group">
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 transition-all">
              <Calendar className="text-red-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Vehicle Sales</h3>
            <p className="text-white/70 mb-6">Find your perfect vehicle from our premium selection of Local and Import Cars</p>
            <button className="px-6 py-2 bg-white/10 hover:bg-red-500 rounded-lg text-white transition-all w-full">
              View Current Stock
            </button>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Services;