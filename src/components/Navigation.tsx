import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavigationProps {
  isMobile?: boolean;
  setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navigation: React.FC<NavigationProps> = ({ 
  isMobile = false,
  setIsMobileMenuOpen
}) => {
  const location = useLocation();
  
  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    // { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/recognitions', label: 'Recognitions' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleClick = () => {
    if (isMobile && setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}`}>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={handleClick}
          className={({ isActive }) => 
            `relative px-2 py-1 text-lg transition-colors duration-300 ${
              isActive 
                ? 'text-indigo-600 font-medium' 
                : 'text-gray-700 hover:text-indigo-600'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {link.label}
              {isActive && (
                <motion.div
                  layoutId="navigation-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600"
                  initial={false}
                  animate={{opacity: 1}}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;