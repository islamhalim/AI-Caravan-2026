import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { label: 'Home', path: '/' },
  { label: 'About', path: '/About' },
  { label: 'Activities', path: '/Activities' },
  { label: 'Highlights', path: '/Highlights' },
  { label: 'Partners', path: '/Partners' },
  { label: 'Timeline', path: '/Timeline' },
  { label: 'Gallery', path: '/Gallery' },
  { label: 'Contact', path: '/Contact' } // create route if you want a dedicated Contact page

  ];

  const isActive = (path: string) => {
    if (path === '#about' && location.pathname === '/') {
      return false; // We'll handle this with scroll position if needed
    }
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white backdrop-blur-md rounded-2xl border border-gray-700/50 shadow-xl">
          <div className="flex justify-between items-center px-6 py-3">
            {/* Logo Fade Animation */}
            <Link to="/" className="relative flex items-center sm:w-40 h-12 w-32  ">
              <div className="absolute inset-0 flex items-center justify-center animate-logo-fade opacity-0" style={{ animationDelay: '0s' }}>
                <img src="/imgs/logocaravanheader.png" alt="AI Caravan" className="h-18 w-18 object-contain" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center animate-logo-fade opacity-0" style={{ animationDelay: '3s' }}>
                <img src="/imgs/IEEE-CS_LogoTM-orange.png" alt="IEEE CS" className="h-64 w-64 object-contain" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center animate-logo-fade opacity-0" style={{ animationDelay: '6s' }}>
                <img src="/imgs/mga_gac_color.png" alt="GAC" className="h-64 w-64 object-contain" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center animate-logo-fade opacity-0" style={{ animationDelay: '9s' }}>
                <img src="/imgs/dvp_logo-removebg-preview.png" alt="DVP" className="h-64 w-64 object-contain" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center animate-logo-fade opacity-0" style={{ animationDelay: '12s' }}>
                <img src="/imgs/ieee_r8_cs_rgb_ko.png" alt="R8" className="h-64 w-64 object-contain" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive(item.path)
                      ? 'bg-white/10'
                      : 'text-black hover:bg-white/10'
                  }`}
                  style={isActive(item.path) ? { color: '#f9a31a' } : {}}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#f9a31a'}
                  onMouseLeave={(e) => !isActive(item.path) && (e.currentTarget.style.color = '')}
                >
                  {item.label}
                </Link>
              ))}
            </nav>



            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-black hover:text-black hover:bg-white/10 transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-700/50">
              <div className="px-4 pt-2 pb-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg ${
                      isActive(item.path)
                        ? 'bg-white/10'
                        : 'text-black hover:bg-white/10'
                    }`}
                    style={isActive(item.path) ? { color: '#f9a31a' } : {}}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#f9a31a'}
                    onMouseLeave={(e) => !isActive(item.path) && (e.currentTarget.style.color = '')}
                  >
                    {item.label}
                  </Link>
                ))}
                

               
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;