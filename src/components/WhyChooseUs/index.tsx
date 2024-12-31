import React from 'react';
import { Shield, Clock, Award, HeartHandshake } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-16 text-center">
          Why Import with Ikigai Motors Australia
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Shield />}
            title="Compliance Guaranteed"
            description="We handle all compliance requirements and documentation for a smooth import process."
          />
          <FeatureCard 
            icon={<Clock />}
            title="Fast Processing"
            description="Efficient import process with regular updates on your vehicle's status."
          />
          <FeatureCard 
            icon={<Award />}
            title="Quality Assured"
            description="Every vehicle undergoes thorough inspection before purchase and import."
          />
          <FeatureCard 
            icon={<HeartHandshake />}
            title="Melbourne Based"
            description="Local support and service from our Melbourne workshop and showroom."
          />
        </div>
        
        <div className="mt-16 backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Your Dream JDM Car Is Just a Click Away
          </h3>
          <p className="text-white/70 text-center max-w-3xl mx-auto mb-8">
            At Ikigai Motors, we specialize in importing premium Japanese vehicles to Australia. 
            Our team handles everything from sourcing your dream car to ensuring it meets all 
            Australian compliance requirements. With years of experience and a passion for JDM 
            vehicles, we make the import process seamless and stress-free.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-all">
              Start Your Import Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;