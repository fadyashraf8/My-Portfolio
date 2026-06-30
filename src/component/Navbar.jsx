import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { name: 'About', path: '/about', sectionId: 'about' },
    { name: 'Projects', path: '/project', sectionId: 'projects' },
    { name: 'Experience', path: '#experience', sectionId: 'experience' },
    { name: 'Skills', path: '#skills', sectionId: 'skills' },
    { name: 'Contact', path: '/contact', sectionId: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // If we're already on the homepage (or sub-paths that map to homepage),
    // we can scroll directly.
    const el = document.getElementById(item.sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update history state/path without reloading
      window.history.pushState(null, '', `#/${item.sectionId}`);
    } else {
      // If we need to change paths
      navigate(item.path);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-theme-bg-light/80 dark:bg-theme-bg-dark/80 backdrop-blur-md border-b border-theme-border-light dark:border-theme-border-dark' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Typographic Logo */}
        <Link 
          to="/" 
          className="font-display font-extrabold text-2xl tracking-tighter text-theme-text-light dark:text-theme-text-dark hover:text-theme-accent-light dark:hover:text-theme-accent-dark transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          fady<span className="text-theme-accent-light dark:text-theme-accent-dark">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item, idx) => {
            const isActive = location.pathname === item.path || (location.hash === `#${item.sectionId}`);
            return (
              <a
                key={item.name}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className="relative px-4 py-2 font-display text-sm font-semibold tracking-wide uppercase transition-colors duration-300 text-theme-text-light dark:text-theme-text-dark"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-theme-accent-light dark:bg-theme-accent-dark"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                {/* Hover Pill Background */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      layoutId="hoverBg"
                      className="absolute inset-0 -z-10 rounded-lg bg-theme-card-light/50 dark:bg-theme-card-dark/50"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-theme-border-light dark:border-theme-border-dark bg-theme-card-light/20 dark:bg-theme-card-dark/20 text-theme-text-light dark:text-theme-text-dark hover:border-theme-accent-light dark:hover:border-theme-accent-dark transition-colors duration-300 relative overflow-hidden group"
            aria-label="Toggle dark/light theme"
          >
            <motion.div
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-theme-accent-dark" />
              ) : (
                <Moon className="w-5 h-5 text-theme-accent-light" />
              )}
            </motion.div>
          </button>

          {/* Quick Connect CTA */}
          <a
            href="mailto:fadyashraf909@gmail.com"
            className="inline-flex items-center space-x-1 px-5 py-2.5 rounded-full border-2 border-theme-text-light dark:border-theme-text-dark text-sm font-semibold tracking-wider uppercase hover:bg-theme-text-light hover:text-theme-bg-light dark:hover:bg-theme-text-dark dark:hover:text-theme-bg-dark transition-all duration-300"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-theme-border-light dark:border-theme-border-dark text-theme-text-light dark:text-theme-text-dark"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-theme-accent-dark" /> : <Moon className="w-4 h-4 text-theme-accent-light" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full border border-theme-border-light dark:border-theme-border-dark text-theme-text-light dark:text-theme-text-dark"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-theme-bg-light dark:bg-theme-bg-dark border-b border-theme-border-light dark:border-theme-border-dark shadow-2xl z-40"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className="font-display text-lg font-bold tracking-wide uppercase py-2 text-theme-text-light dark:text-theme-text-dark border-b border-theme-border-light/40 dark:border-theme-border-dark/40"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="mailto:fadyashraf909@gmail.com"
                className="inline-flex items-center justify-between w-full p-4 mt-2 rounded-xl bg-theme-text-light text-theme-bg-light dark:bg-theme-text-dark dark:text-theme-bg-dark font-display text-sm font-extrabold uppercase tracking-widest"
              >
                <span>Hire Fady Ashraf</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;