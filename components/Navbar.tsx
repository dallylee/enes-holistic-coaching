import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import logoImage from '../src/assets/enes-logo.png';

interface NavbarProps {
  onContactClick: () => void;
  clientLoginHref?: string;
  onClientLoginNavigate?: () => void;
  onLogoClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick, clientLoginHref = '/client-login', onClientLoginNavigate, onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() => onLogoClick?.()}
            className="flex items-center gap-3 focus:outline-none"
          >
            <img src={logoImage} alt="Enes Holistic Coaching" className="h-12 w-auto" />
            <span className={`text-xl font-serif font-bold tracking-tight ${isScrolled ? 'text-sage-900' : 'text-sage-900'}`}>
              Enes Holistic Coaching
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#meet-enes" className="text-stone-600 hover:text-sage-700 transition-colors">Meet Enes</a>
            <a href="#how-it-works" className="text-stone-600 hover:text-sage-700 transition-colors">How It Works</a>
            <a href="#is-this-4me" className="text-stone-600 hover:text-sage-700 transition-colors">Is This For Me?</a>
            <a href="#client-stories" className="text-stone-600 hover:text-sage-700 transition-colors">Client Stories</a>
            <a
              href={clientLoginHref}
              onClick={(event) => {
                if (onClientLoginNavigate) {
                  event.preventDefault();
                  onClientLoginNavigate();
                }
              }}
              className="text-stone-600 hover:text-sage-700 transition-colors"
            >
              Client Login
            </a>
            <Button onClick={onContactClick} variant="primary" className="px-5 py-2 text-sm">
              Free Consultation
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-stone-600 p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#meet-enes" className="block px-3 py-2 text-stone-600 hover:text-sage-700 hover:bg-sage-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Meet Enes</a>
            <a href="#how-it-works" className="block px-3 py-2 text-stone-600 hover:text-sage-700 hover:bg-sage-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#is-this-4me" className="block px-3 py-2 text-stone-600 hover:text-sage-700 hover:bg-sage-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Is This For Me?</a>
            <a href="#client-stories" className="block px-3 py-2 text-stone-600 hover:text-sage-700 hover:bg-sage-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>Client Stories</a>
            <a
              href={clientLoginHref}
              className="block px-3 py-2 text-stone-600 hover:text-sage-700 hover:bg-sage-50 rounded-md"
              onClick={(event) => {
                if (onClientLoginNavigate) {
                  event.preventDefault();
                  onClientLoginNavigate();
                }
                setIsMobileMenuOpen(false);
              }}
            >
              Client Login
            </a>
            <div className="px-3 py-2">
              <Button onClick={() => { onContactClick(); setIsMobileMenuOpen(false); }} className="w-full justify-center">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};