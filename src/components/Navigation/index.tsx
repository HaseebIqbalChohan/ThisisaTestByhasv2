import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, LogIn, Phone, Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { Dropdown } from './Dropdown';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownItems = [
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="container mx-auto">
        <div className="backdrop-blur-lg bg-white/5 rounded-2xl border border-white/20 p-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-white to-red-500 animate-slide" />
          
          <div className="flex items-center justify-between">
            <Link to="/">
              <img 
                src="/ikigai-logo.png" 
                alt="Ikigai Motors" 
                className="h-12 md:h-14"
              />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <NavLink to="/showroom">Showroom</NavLink>
              <NavLink to="/appointment">Book Appointment</NavLink>
              <NavLink to="/imports">Import Car List</NavLink>
              <Dropdown items={dropdownItems} />
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <a 
                href="tel:+61390001234"
                className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition-all"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">Call Us</span>
              </a>
              <Link 
                to="/login"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-red-500 rounded-lg transition-all"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden md:inline">Login</span>
              </Link>
              <button className="relative flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-red-500 rounded-lg transition-all">
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <Link to="/showroom" className="text-white hover:text-red-500">Showroom</Link>
                <Link to="/appointment" className="text-white hover:text-red-500">Book Appointment</Link>
                <Link to="/imports" className="text-white hover:text-red-500">Import Car List</Link>
                <Link to="/services" className="text-white hover:text-red-500">Services</Link>
                <Link to="/about" className="text-white hover:text-red-500">About Us</Link>
                <Link to="/contact" className="text-white hover:text-red-500">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;