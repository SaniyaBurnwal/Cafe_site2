import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@assets/image_1784195549392.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Menu', id: 'menu' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#140802]/95 backdrop-blur-md shadow-md py-4'
          : 'bg-black/40 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            className="cursor-pointer flex items-center"
            onClick={() => scrollTo('home')}
          >
            <div className="bg-white rounded-xl overflow-hidden px-2 py-1 shadow-sm">
              <img
                src={logo}
                alt="Cup Sip Cafe"
                className="h-9 w-auto block"
              />
            </div>
          </div>

          {/* Desktop Nav — right aligned */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="font-medium text-sm text-white/85 hover:text-white transition-colors tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#140802]/97 backdrop-blur-md border-b border-white/10 shadow-xl p-4 flex flex-col space-y-1 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="text-left font-medium text-base px-4 py-3 rounded-md hover:bg-white/10 text-white/90 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
