import { useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "AI Types", href: "#types" },
  { name: "Benefits", href: "#benefits" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full z-50">
      <div className="app-container flex justify-between h-16 items-center">
        {/* Logo */}
        <span className="gradient-text text-2xl font-bold">
          AI Revolution 
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="nav-item">
              {link.name}
            </a>
          ))}
          <a href="#" className="nav-btn">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg px-2 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="mobile-nav-item">
              {link.name}
            </a>
          ))}
          <a href="#" className="mobile-nav-btn">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
