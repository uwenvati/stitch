import { useState } from 'react';
import { Link } from 'react-router-dom';
import WhiteLogo from '../assets/icons/white-logo.svg'; 
import BlackLogo from '../assets/icons/black-logo.svg';

const Navbar = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <nav
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-7xl 
                  px-6 py-3 flex items-center justify-between
                  ${hovered ? 'bg-white' : 'bg-white/10 backdrop-blur-md'} 
                  rounded-full transition-all duration-300 z-50`}
    >
      {/* Logo */}
      <Link to="/">
        <img 
          src={hovered ? BlackLogo : WhiteLogo} 
          alt="Stitch Logo" 
          className="h-8 w-auto"
        />
      </Link>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        {['Products', 'Solutions', 'Company', 'Resources', 'Docs'].map((item) => (
          <a 
            key={item}
            href="#"
            className={`transition-colors ${hovered ? 'text-black' : 'text-white'}`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Button */}
      <button 
        className={`hidden md:block px-6 py-2 rounded-full text-sm font-semibold
                   ${hovered ? 'bg-orange-500 text-white' : 'bg-orange-500 text-white'}
                  `}
      >
        CONTACT SALES
      </button>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button>
          <svg
            className={`${hovered ? 'text-black' : 'text-white'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width={28}
            height={28}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
