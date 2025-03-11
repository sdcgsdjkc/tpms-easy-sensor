
import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import CustomButton from '../ui/CustomButton';

const NavLink: React.FC<{ 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ href, children, onClick }) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className="text-gray-700 hover:text-tpms-blue transition-colors duration-300 font-medium px-1 py-2"
    >
      {children}
    </a>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-navbar py-3' : 'py-5'
    )}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-tpms-blue z-20">
          TPMS Easy Sensor
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6">
          <NavLink href="#services">Услуги</NavLink>
          <NavLink href="#benefits">Преимущества</NavLink>
          <NavLink href="#about">О нас</NavLink>
          <NavLink href="#contact">Контакты</NavLink>
        </nav>

        <div className="hidden md:flex items-center">
          <a href="tel:+77781929139" className="flex items-center mr-4 text-gray-700 hover:text-tpms-blue transition-colors duration-300">
            <Phone className="h-4 w-4 mr-2" />
            <span>+7 (778) 192-9139</span>
          </a>
          <CustomButton 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            size="sm"
          >
            Записаться
          </CustomButton>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-20 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </button>

        {/* Mobile menu */}
        <div className={cn(
          'fixed inset-0 z-10 bg-white flex flex-col p-5 transition-transform duration-300 ease-in-out transform md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          <div className="pt-16 flex flex-col h-full">
            <nav className="flex flex-col space-y-4 mt-8">
              <NavLink href="#services" onClick={closeMenu}>Услуги</NavLink>
              <NavLink href="#benefits" onClick={closeMenu}>Преимущества</NavLink>
              <NavLink href="#about" onClick={closeMenu}>О нас</NavLink>
              <NavLink href="#contact" onClick={closeMenu}>Контакты</NavLink>
            </nav>
            <div className="mt-auto mb-10">
              <a href="tel:+77781929139" className="flex items-center mb-4 text-gray-700">
                <Phone className="h-4 w-4 mr-2" />
                <span>+7 (778) 192-9139</span>
              </a>
              <CustomButton 
                onClick={() => {
                  closeMenu();
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                fullWidth
              >
                Записаться
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
