import React, { useState, useEffect } from 'react';
import { ArrowUp, Clock } from 'lucide-react';

const Footer = () => {
  const [cairoTime, setCairoTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      setCairoTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-theme-border-light dark:border-theme-border-dark bg-theme-bg-light dark:bg-theme-bg-dark py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Cairo Clock Widget */}
          <div className="flex items-center space-x-2.5 px-4 py-2 rounded-full border border-theme-border-light dark:border-theme-border-dark bg-theme-card-light/20 dark:bg-theme-card-dark/20 text-theme-text-mutedLight dark:text-theme-text-mutedDark">
            <Clock className="w-4 h-4 text-theme-accent-light dark:text-theme-accent-dark animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Cairo, EG: {cairoTime || '12:00:00 AM'}
            </span>
          </div>

          {/* Typographic Center */}
          <div className="text-center md:text-left">
            <span className="font-display text-lg font-black uppercase text-theme-text-light dark:text-theme-text-dark">
              Fady Ashraf
            </span>
            <span className="block text-xs font-semibold text-theme-text-mutedLight dark:text-theme-text-mutedDark mt-1">
              &copy; {new Date().getFullYear()} — Made with passion and precision.
            </span>
          </div>

          {/* Scroll back to top */}
          <button
            onClick={handleScrollTop}
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-theme-border-light dark:border-theme-border-dark hover:border-theme-accent-light dark:hover:border-theme-accent-dark transition-colors cursor-pointer group"
            aria-label="Scroll to top"
          >
            <span className="font-display text-xs font-extrabold uppercase tracking-widest text-theme-text-light dark:text-theme-text-dark">
              To Top
            </span>
            <ArrowUp className="w-4 h-4 text-theme-accent-light dark:text-theme-accent-dark group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
