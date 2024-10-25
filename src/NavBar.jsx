import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "./assets/ISTELogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="ISTE Logo" className="w-12 h-12" />
              <span className="ml-2 text-xl font-bold text-white">ISTE</span>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="/" className="text-white">
              Home
            </NavLink>
            <NavLink href="/events" className="text-white">
              Events
            </NavLink>
            <NavLink href="/organize-talk" className="text-white">
              Organize Talk
            </NavLink>

            <a
              href="/events"
              className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition duration-200"
            >
              View Events
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          <MobileNavLink href="/" onClick={toggleMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/events" onClick={toggleMenu}>
            Events
          </MobileNavLink>
          <MobileNavLink href="/organize-talk" onClick={toggleMenu}>
            Organize Talk
          </MobileNavLink>
          <div className="pt-2">
            <a
              href="/events"
              onClick={toggleMenu}
              className="block w-full text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-base font-medium transition duration-200"
            >
              View Events
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

const NavLink = ({ href, children, className }) => {
  return (
    <a
      href={href}
      className={`text-gray-300 hover:text-white font-medium transition duration-200 px-3 py-2 rounded-md ${className}`}
    >
      {children}
    </a>
  );
};

import PropTypes from 'prop-types';

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const MobileNavLink = ({ href, onClick, children }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-700 hover:bg-indigo-600 hover:text-white block px-4 py-2 rounded-md text-base font-medium transition duration-200 top-52"
    >
      {children}
    </a>
  );
};

MobileNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Navbar;
