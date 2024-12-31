import React from 'react';
import { MapPin, Phone, Mail, Clock, Car } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black/95 pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Get in touch with our team for inquiries about our vehicles, services, or to schedule a visit
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white"
              />
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-white"
              />
              <button
                type="submit"
                className="w-full py-3 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-all font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <ContactInfo
                  icon={<MapPin />}
                  title="Location"
                  content="123 Performance Drive, Melbourne VIC 3000"
                />
                <ContactInfo
                  icon={<Phone />}
                  title="Phone"
                  content="+61 3 9000 1234"
                />
                <ContactInfo
                  icon={<Mail />}
                  title="Email"
                  content="info@ikigaimotors.com.au"
                />
                <ContactInfo
                  icon={<Clock />}
                  title="Business Hours"
                  content="Mon-Sat: 9:00 AM - 6:00 PM"
                />
                <ContactInfo
                  icon={<Car />}
                  title="Showroom"
                  content="By Appointment Only"
                />
              </div>
            </div>

            {/* Map placeholder - Replace with actual map implementation */}
            <div className="backdrop-blur-lg bg-white/5 rounded-xl p-8 border border-white/10 h-64 flex items-center justify-center">
              <p className="text-white/70">Map Integration Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
      <div className="text-red-500">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-white font-medium">{title}</h3>
      <p className="text-white/70">{content}</p>
    </div>
  </div>
);