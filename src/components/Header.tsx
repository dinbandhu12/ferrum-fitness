import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services & Pricing', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="fitness-gradient py-4 md:py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-white text-sm">
            <div className="md:flex md:items-center md:space-x-4">
              <div className="flex items-center space-x-1">
                <Phone size={14} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin size={14} />
                <span>123 Fitness Street, Health City</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 text-sm font-medium">
              <span>Mon-Fri: 06AM-10PM</span> <span className="hidden md:inline">|</span> <span>Sat-Sun: 08AM-08PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-black-svg.svg" alt="Ferrum" className="w-full h-10" />
            {/* <span className="text-2xl font-extrabold text-fitness-black pl-1">Ferrum Fitness</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors hover:text-fitness-orange ${
                  isActive(item.href) ? 'text-fitness-orange' : 'text-fitness-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="outline" className="border-fitness-orange text-fitness-orange hover:bg-fitness-orange hover:text-white">
                <Phone size={16} className="mr-2" />
                Call Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="fitness-gradient text-white hover:opacity-90">
                Join Today
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 transition-colors ${
                    isActive(item.href) ? 'text-fitness-orange' : 'text-fitness-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/contact">
                  <Button variant="outline" className="border-fitness-orange text-fitness-orange">
                    <Phone size={16} className="mr-2" />
                    Call Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button className="fitness-gradient text-white">
                    Join Today
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
