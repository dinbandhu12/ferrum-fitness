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
      <div className="fitness-gradient-green py-4 md:py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-black text-sm font-medium">
            <div className="md:flex md:items-center md:space-x-4">
              <div className="flex items-center text-lg md:text-base space-x-1">
                <Phone size={14} />
                <span>+91 9148549144</span>
              </div>
              <div className="flex items-center text-base space-x-1">
                <MapPin size={14} />
                <div className='flex flex-col md:flex-row gap-0 md:gap-1'>
                  <span>Kempapura Main Road, </span>
                  <span> Bhuvaneswari Nagar</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:gap-2 text-sm font-medium">
              <span className='text-lg md:text-base'>Mon-Sat: 05AM-10PM</span> <span className="hidden md:inline">|</span> <span className='text-lg md:text-base'>Sun: 08AM-01PM</span>
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
                className={`font-medium transition-colors hover:text-fitness-dakestgreen ${
                  isActive(item.href) ? 'text-fitness-dakestgreen font-bold' : 'text-fitness-black'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="outline" className="border-fitness-dakestgreen text-fitness-dakestgreen hover:bg-fitness-dakestgreen hover:text-white font-bold">
                <Phone size={16} className="mr-1" />
                Call Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="fitness-gradient-green text-white font-bold hover:opacity-90">
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
                    isActive(item.href) ? 'text-fitness-dakestgreen font-bold' : 'text-fitness-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link to="/contact">
                  <Button variant="outline" className="border-fitness-dakestgreen text-fitness-dakestgreen">
                    <Phone size={16} className="mr-1" />
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
