import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Revolution
              </span>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <a href="#home" className="text-gray-900 hover:text-primary px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#types" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">
              AI Types
            </a>
            <a href="#benefits" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">
              Benefits
            </a>
            <a href="#contact" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium">
              Contact
            </a>
            <a
              href="#"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition"
            >
              Get Started
            </a>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              id="mobile-menu-button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg rounded-b-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-primary hover:bg-gray-50"
          >
            Home
          </a>
          <a
            href="#types"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50"
          >
            AI Types
          </a>
          <a
            href="#benefits"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50"
          >
            Benefits
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-primary hover:bg-gray-50"
          >
            Contact
          </a>
          <a
            href="#"
            className="block w-full text-center bg-primary text-white px-4 py-2 rounded-md text-base font-medium hover:bg-primary/90 transition mt-2"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;