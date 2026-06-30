import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-32 pb-16 flex flex-col justify-between max-w-7xl mx-auto px-6 md:px-12 relative z-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8"
      >
        {/* Left Side: Bold Typographic Headline */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          {/* Status Chip */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-theme-border-light dark:border-theme-border-dark bg-theme-card-light/30 dark:bg-theme-card-dark/30 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-theme-text-mutedLight dark:text-theme-text-mutedDark">
              Available for full-time & contracts
            </span>
          </motion.div>

          {/* Core Brand Header */}
          <motion.h1 
            variants={itemVariants}
            className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] leading-[0.9] tracking-tighter uppercase text-theme-text-light dark:text-theme-text-dark"
          >
            Fady Ashraf
            <span className="block mt-2 text-theme-accent-light dark:text-theme-accent-dark">
              Full Stack
            </span>
            <span className="block mt-2 text-stroke text-theme-text-light dark:text-theme-text-dark">
              Developer.
            </span>
          </motion.h1>

          {/* Subtext Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="max-w-xl text-lg md:text-xl font-normal leading-relaxed text-theme-text-mutedLight dark:text-theme-text-mutedDark"
          >
            MERN stack engineer crafting production-grade web systems. ITI Cairo University alumnus delivering performance-focused, clean-architecture products.
          </motion.p>
        </div>

        {/* Right Side: Editorial Context Card */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 lg:mt-16 w-full flex flex-col space-y-6"
        >
          {/* Info Card */}
          <div className="p-8 rounded-3xl border border-theme-border-light dark:border-theme-border-dark bg-theme-card-light/25 dark:bg-theme-card-dark/25 backdrop-blur-sm relative overflow-hidden group">
            {/* Background design accents */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-theme-accent-light/5 dark:bg-theme-accent-dark/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-3 text-theme-accent-light dark:text-theme-accent-dark">
                <Code2 className="w-5 h-5" />
                <h3 className="font-display text-sm font-extrabold uppercase tracking-widest">
                  Tech Focus
                </h3>
              </div>
              <p className="text-sm font-medium leading-relaxed text-theme-text-light dark:text-theme-text-dark">
                Specialized in React.js, Next.js, Node.js, Express.js, MongoDB, Nest.js & clean RESTful API integration.
              </p>
              
              <hr className="border-theme-border-light dark:border-theme-border-dark" />

              <div className="flex items-center space-x-3 text-theme-text-mutedLight dark:text-theme-text-mutedDark text-sm">
                <MapPin className="w-4 h-4 text-theme-accent-light dark:text-theme-accent-dark" />
                <span>Cairo, Egypt (GMT+3)</span>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <motion.a
            href="#projects"
            onClick={handleScrollToProjects}
            className="flex items-center justify-between px-8 py-5 rounded-full border border-theme-border-light dark:border-theme-border-dark hover:border-theme-accent-light dark:hover:border-theme-accent-dark transition-colors duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-display text-sm font-extrabold uppercase tracking-widest text-theme-text-light dark:text-theme-text-dark">
              Explore Selected Projects
            </span>
            <div className="p-2 rounded-full bg-theme-card-light dark:bg-theme-card-dark group-hover:bg-theme-accent-light dark:group-hover:bg-theme-accent-dark group-hover:text-white transition-colors duration-300">
              <ArrowDown className="w-4 h-4" />
            </div>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Typography Ticker / Animated Marquee at the bottom of hero */}
      <div className="w-full overflow-hidden py-8 border-t border-b border-theme-border-light/60 dark:border-theme-border-dark/60 mt-16 relative">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-12 px-6 select-none">
              <span className="font-display text-xs font-black uppercase tracking-widest flex items-center text-theme-text-mutedLight dark:text-theme-text-mutedDark">
                <Sparkles className="w-4.5 h-4.5 mr-2 text-theme-accent-light dark:text-theme-accent-dark" />
                Next.js Platforms
              </span>
              <span className="font-display text-xs font-black uppercase tracking-widest flex items-center text-theme-text-mutedLight dark:text-theme-text-mutedDark">
                <Sparkles className="w-4.5 h-4.5 mr-2 text-theme-accent-light dark:text-theme-accent-dark" />
                MERN Stack Architecture
              </span>
              <span className="font-display text-xs font-black uppercase tracking-widest flex items-center text-theme-text-mutedLight dark:text-theme-text-mutedDark">
                <Sparkles className="w-4.5 h-4.5 mr-2 text-theme-accent-light dark:text-theme-accent-dark" />
                Payload CMS Integrations
              </span>
              <span className="font-display text-xs font-black uppercase tracking-widest flex items-center text-theme-text-mutedLight dark:text-theme-text-mutedDark">
                <Sparkles className="w-4.5 h-4.5 mr-2 text-theme-accent-light dark:text-theme-accent-dark" />
                Performance Optimization
              </span>
            </div>
          ))}
        </div>
        
        {/* Marquee keyframes injection via inline styling to make sure it's fully self-contained */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
