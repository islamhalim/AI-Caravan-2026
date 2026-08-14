// components/Navbar.tsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/About' },
  { label: 'Activities', path: '/Activities' },
  { label: 'Highlights', path: '/Highlights' },
  { label: 'Partners', path: '/Partners' },
  { label: 'Timeline', path: '/Timeline' },
  { label: 'Gallery', path: '/Gallery' },
  { label: 'Registration', path: '/Registration' },
  { label: 'Contact', path: '/Contact' } // create route if you want a dedicated Contact page
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-ieee-blue underline' : 'text-gray-800 hover:text-[#f9a31a]'}`;

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  <img src="/imgs/caravanlogo.png" height={48} width={48} alt="AI Caravan" />
                </NavLink>
              </motion.div>
              <div className="hidden sm:flex items-center space-x-3">
                <a href="https://www.computer.org/" target="_blank" rel="noreferrer"><img src="/imgs/IEEE-CS_LogoTM-orange.png" height={48} width={48} alt="IEEE CS" /></a>
                <a href="https://www.computer.org/volunteering/boards-and-committees/member-geographic-activities" target="_blank" rel="noreferrer"><img src="/imgs/mga_gac_color.png" height={48} width={48} alt="GAC" /></a>
                <a href="https://www.computer.org/volunteering/boards-and-committees/member-geographic-activities" target="_blank" rel="noreferrer"><img src="/imgs/ieee_r8_cs_rgb_ko.png" height={48} width={48} alt="R8" /></a>
              </div>
            </div>

            {/* Desktop nav: always navigates */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {NAV_ITEMS.map(({ label, path }) => (
                  <NavLink key={label} to={path} className={navLinkClass} onClick={() => setIsOpen(false)}>
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation" className="inline-flex items-center justify-center p-2 rounded-md text-gray-800">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white pt-20 overflow-auto">
            <div className="px-4 space-y-1">
              {NAV_ITEMS.map(({ label, path }) => (
                <NavLink
                  key={label}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `text-gray-800 hover:text-[#f9a31a] block px-3 py-3 rounded-md text-base font-medium w-full text-left ${isActive ? 'text-ieee-blue underline' : ''}`}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </motion.nav>

      {/* Spacer so fixed navbar doesn't cover content */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
