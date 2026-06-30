import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, CheckCircle, AlertCircle } from 'lucide-react';

// Import vector illustrations from projectImages.js
import { 
  projectEcommerce, 
  projectRestaurant, 
  projectGameOver, 
  projectYummy, 
  projectHiddenGems 
} from '../assets/projectImages';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const projectsData = [
    {
      title: "Fresh Cart E-Commerce",
      category: "Full Stack (MERN)",
      image: projectEcommerce,
      liveUrl: "https://fresh-cart-e-commerce-three.vercel.app/",
      githubUrl: "https://github.com/fadyashraf8/E-Commerce-Backend",
      problem: "Traditional grocery storefronts are sluggish and suffer from poor conversion rates due to slow state syncs and complex checkout funnels.",
      built: "A high-performance e-commerce platform with custom JWT authentication, reactive shopping cart state, dynamic product filtering, and a unified payment/checkout flow.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "REST API", "Tailwind CSS"],
      outcome: "An instantaneous shopping experience featuring 40% faster product updates and clean API routing for payment integration."
    },
    {
      title: "Hidden Gems Platform",
      category: "ITI Graduation Project",
      image: projectHiddenGems,
      liveUrl: "https://hidden-gems-client.vercel.app/",
      githubUrl: "https://github.com/fadyashraf8", // base profile if none specific
      problem: "Travelers struggle to find authentic local spots because mainstream platforms prioritize commercial sponsored listings, obscuring true local culture.",
      built: "A collaborative portal for discovering and reviewing off-the-beaten-path locations, complete with JWT secure sessions, rating calculations, maps, and responsive media grids.",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Context API", "Tailwind CSS"],
      outcome: "Awarded top honors at ITI Cairo University, proving structural clean architecture and secure session handling under load."
    },
    {
      title: "Forsetak LMS",
      category: "Cremedia Global",
      image: projectRestaurant, // using restaurant asset to render different layouts
      liveUrl: "https://forsetak.org/ar",
      githubUrl: "",
      problem: "LMS solutions suffer from high dropout rates because mobile performance is poor and lesson-loading blocks the browser thread.",
      built: "A highly responsive mobile-first educational management system featuring asynchronous code splitting, dynamic lesson rendering, and optimized media delivery.",
      stack: ["Next.js", "Tailwind CSS", "JavaScript (ES6+)", "Git", "Responsive Design"],
      outcome: "Deployed to thousands of active learners with a 95+ Mobile performance score on Google Lighthouse."
    },
    {
      title: "Game Over Portal",
      category: "Interactive Platform",
      image: projectGameOver,
      liveUrl: "https://game-over-eosin.vercel.app/#/login",
      githubUrl: "https://github.com/fadyashraf8",
      problem: "Gaming review hubs suffer from static layouts that fail to engage visual-first audiences searching for rapid game releases.",
      built: "A dynamic gaming platform fetching live data feeds from gaming APIs, with interactive UI transitions, game state search filtering, and responsive gaming library modules.",
      stack: ["React.js", "Tailwind CSS", "REST APIs", "Context API", "Git"],
      outcome: "An engaging, high-fidelity landing and gaming hub with synced search queries and smooth, game-trailer visual grids."
    },
    {
      title: "Yummy Recipes",
      category: "API Integration Project",
      image: projectYummy,
      liveUrl: "https://yummy-website-seven.vercel.app/",
      githubUrl: "https://github.com/fadyashraf8",
      problem: "Cooking apps are often bloated with text and have laggy search synchronization when pulling thousands of recipes.",
      built: "A fluid culinary web application pulling live recipe payloads from external REST endpoints, supporting quick ingredient filtering and layout state caching.",
      stack: ["React.js", "Bootstrap CSS", "RESTful APIs", "AJAX", "Git"],
      outcome: "A minimalist search interface showing zero search-delay UI blocks by offloading API pagination."
    }
  ];

  // Track mouse coordinates to feed into the floating preview
  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="py-24 border-t border-theme-border-light/60 dark:border-theme-border-dark/60 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-display text-xs font-extrabold uppercase tracking-widest text-theme-accent-light dark:text-theme-accent-dark">
              02 / Showcase
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase mt-2 text-theme-text-light dark:text-theme-text-dark">
              Selected Projects
            </h2>
          </div>
          <p className="max-w-xs text-sm text-theme-text-mutedLight dark:text-theme-text-mutedDark">
            Hover over a project to reveal its visual interface. Each project reads as a brief case study.
          </p>
        </div>

        {/* Floating Mouse-Follow Image Preview Container (Desktop Only) */}
        <div className="hidden lg:block pointer-events-none absolute left-0 top-0 w-full h-full overflow-hidden">
          <AnimatePresence>
            {activeProject !== null && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0,
                  x: mousePosition.x + 30, // Offset horizontally
                  y: mousePosition.y - 150 // Offset vertically to center roughly
                }}
                exit={{ opacity: 0, scale: 0.8, rotate: 4 }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.6 }}
                className="fixed z-50 w-[380px] h-[240px] rounded-2xl overflow-hidden border-2 border-theme-accent-light dark:border-theme-accent-dark shadow-2xl bg-theme-card-light dark:bg-theme-card-dark"
              >
                <img 
                  src={projectsData[activeProject].image} 
                  alt={projectsData[activeProject].title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Case Studies Asymmetric List */}
        <div className="space-y-16">
          {projectsData.map((project, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setActiveProject(idx)}
              onMouseLeave={() => setActiveProject(null)}
              className="py-10 border-b border-theme-border-light dark:border-theme-border-dark group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                
                {/* Visual / Details Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="font-display text-sm font-black text-theme-accent-light dark:text-theme-accent-dark">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold tracking-widest uppercase text-theme-text-mutedLight dark:text-theme-text-mutedDark">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-3xl font-black uppercase text-theme-text-light dark:text-theme-text-dark group-hover:text-theme-accent-light dark:group-hover:text-theme-accent-dark transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Fallback image display for mobile devices */}
                  <div className="lg:hidden w-full h-[200px] rounded-xl overflow-hidden mt-4 border border-theme-border-light dark:border-theme-border-dark">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Stack pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full text-xs font-semibold border border-theme-border-light dark:border-theme-border-dark bg-theme-card-light/20 dark:bg-theme-card-dark/20 text-theme-text-mutedLight dark:text-theme-text-mutedDark"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-sm font-bold uppercase tracking-wider text-theme-text-light dark:text-theme-text-dark hover:text-theme-accent-light dark:hover:text-theme-accent-dark transition-colors"
                    >
                      <span>Live Site</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-sm font-bold uppercase tracking-wider text-theme-text-mutedLight dark:text-theme-text-mutedDark hover:text-theme-accent-light dark:hover:text-theme-accent-dark transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Case Study Core Column */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:pl-8">
                  {/* Problem Statement */}
                  <div className="p-6 rounded-2xl bg-theme-card-light/10 dark:bg-theme-card-dark/10 border border-theme-border-light/40 dark:border-theme-border-dark/40">
                    <div className="flex items-center space-x-2 text-red-500 mb-2">
                      <AlertCircle className="w-4 h-4" />
                      <h4 className="text-xs font-extrabold uppercase tracking-widest">
                        The Challenge
                      </h4>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-theme-text-mutedLight dark:text-theme-text-mutedDark">
                      {project.problem}
                    </p>
                  </div>

                  {/* Development / Outcome */}
                  <div className="p-6 rounded-2xl bg-theme-card-light/10 dark:bg-theme-card-dark/10 border border-theme-border-light/40 dark:border-theme-border-dark/40">
                    <div className="flex items-center space-x-2 text-emerald-500 mb-2">
                      <CheckCircle className="w-4 h-4" />
                      <h4 className="text-xs font-extrabold uppercase tracking-widest">
                        Solution & Outcome
                      </h4>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-theme-text-mutedLight dark:text-theme-text-mutedDark">
                      {project.built} <span className="block mt-2 font-semibold text-theme-text-light dark:text-theme-text-dark">{project.outcome}</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
