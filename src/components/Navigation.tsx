import React from 'react';
import { ShoppingCart, LogIn } from 'lucide-react';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-white/80 hover:text-white transition-colors relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" />
  </a>
);

const Navigation = () => {
  return (
    <nav className="top-0 left-0 right-0 z-50 px-10 py-0">
      <div className="container mx-auto">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20 p-4 relative overflow-hidden">
          {/* Animated accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-white to-red-500 animate-slide" />
          
          <div className="flex items-center justify-between">
            <img 
              src="/ikigai-logo.png" 
              alt="Ikigai Motors" 
              className="h-12 md:h-14"
            />
            
            <div className="hidden md:flex items-center space-x-6">
              <NavLink href="#showroom">Showroom</NavLink>
              <NavLink href="#appointment">Book Appointment</NavLink>
              <NavLink href="#imports">Import Car List</NavLink>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-red-500 rounded-lg transition-all">
                <LogIn className="w-4 h-4" />
                <span className="hidden md:inline">Login</span>
              </button>
              <button className="relative flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-red-500 rounded-lg transition-all">
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;