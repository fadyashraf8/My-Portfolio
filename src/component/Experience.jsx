import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronDown, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default open the first one

  const experienceData = [
    {
      role: "Full Stack Developer",
      company: "Mk Grant",
      period: "01/2026 – Present",
      location: "Cairo, Egypt (Remote)",
      links: [
        { label: "mkgrant.com", url: "https://mkgrant.com" },
        { label: "racingline-agency.com", url: "https://racingline-agency.com" }
      ],
      points: [
        "Spearheaded end-to-end development of scalable web applications utilizing Next.js, React.js, Node.js, and MongoDB.",
        "Architected custom content-driven solutions via Payload CMS, integrating secure S3 media buckets and optimized delivery networks.",
        "Built modular UI libraries with TypeScript and Tailwind CSS, resulting in significantly higher SEO scoring and accessibility compliance.",
        "Managed staging and production deployments via Vercel, resolved serverless timeouts, and collaborated directly with global client nodes."
      ],
      tech: ["Next.js", "React.js", "Node.js", "MongoDB", "Payload CMS", "S3", "TypeScript", "Tailwind CSS"]
    },
    {
      role: "MERN Stack Graduate / Intern",
      company: "Information Technology Institute (ITI)",
      period: "07/2025 – 11/2025",
      location: "Giza, Egypt",
      links: [
        { label: "hidden-gems-client.vercel.app", url: "https://hidden-gems-client.vercel.app" }
      ],
      points: [
        "Completed a 4-month intensive MERN Stack development residency focused on enterprise software patterns.",
        "Graduation Project: Hidden Gems — a full-stack discovery network utilizing React, Node.js, MongoDB, JWT authentication, and REST APIs.",
        "Mastered database normalization, indexing strategies, OOP principles, and clean-architecture modular patterns."
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth", "System Design"]
    },
    {
      role: "Frontend Developer",
      company: "Cremedia Global",
      period: "01/2025 – 06/2025",
      location: "Cairo, Egypt",
      links: [
        { label: "forsetak.org/ar", url: "https://forsetak.org/ar" }
      ],
      points: [
        "Built the Forsetak LMS system from the ground up using Next.js, JavaScript (ES6+), and Tailwind CSS.",
        "Implemented rigorous mobile-first viewport styling and optimized render paths using dynamic code-splitting and asset lazy-loading.",
        "Participated in active Agile/Scrum cycles, contributing to automated builds and weekly peer code reviews."
      ],
      tech: ["Next.js", "Tailwind CSS", "JavaScript (ES6+)", "Code Splitting", "Agile Workflow", "Git"]
    },
    {
      role: "Frontend Developer",
      company: "Zentix Software",
      period: "07/2024 – 12/2024",
      location: "Cairo, Egypt",
      links: [],
      points: [
        "Engineered production-level LMS portals (including the internal Bosla LMS project) using React.js and Context API.",
        "Integrated complex REST endpoints to feed real-time analytics data into responsive client dashboards.",
        "Optimized client bundling, resulting in a 25% decrease in overall bundle sizes and improved interaction speed."
      ],
      tech: ["React.js", "Context API", "Tailwind CSS", "REST API Integration", "Performance Optimization"]
    }
  ];

  return (
    <section id="experience" className="py-24 border-t border-theme-border-light/60 dark:border-theme-border-dark/60 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-display text-xs font-extrabold uppercase tracking-widest text-theme-accent-light dark:text-theme-accent-dark">
            03 / History
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase mt-2 text-theme-text-light dark:text-theme-text-dark">
            Work Experience
          </h2>
        </div>

        {/* Asymmetric Accordion Timelines */}
        <div className="space-y-4 max-w-4xl">
          {experienceData.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-3xl border transition-all duration-300 ${
                  isExpanded 
                    ? 'border-theme-accent-light dark:border-theme-accent-dark bg-theme-card-light/40 dark:bg-theme-card-dark/40 shadow-lg' 
                    : 'border-theme-border-light dark:border-theme-border-dark bg-theme-card-light/10 dark:bg-theme-card-dark/10 hover:border-theme-border-light*2 dark:hover:border-theme-border-dark*2'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                  className="w-full text-left p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    {/* Period Badge */}
                    <div className="flex items-center space-x-2 text-theme-text-mutedLight dark:text-theme-text-mutedDark">
                      <Calendar className="w-4 h-4 text-theme-accent-light dark:text-theme-accent-dark" />
                      <span className="font-display text-sm font-semibold tracking-wider uppercase">
                        {exp.period}
                      </span>
                    </div>
                    
                    {/* Company and Title */}
                    <div>
                      <h3 className="text-xl font-bold text-theme-text-light dark:text-theme-text-dark">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-display font-extrabold uppercase tracking-wide text-theme-text-mutedLight/70 dark:text-theme-text-mutedDark/70 mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 self-end md:self-auto">
                    <span className="text-xs font-semibold text-theme-text-mutedLight dark:text-theme-text-mutedDark hidden md:inline">
                      {exp.location}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-2 rounded-full border ${
                        isExpanded 
                          ? 'border-theme-accent-light dark:border-theme-accent-dark text-theme-accent-light dark:text-theme-accent-dark' 
                          : 'border-theme-border-light dark:border-theme-border-dark text-theme-text-light dark:text-theme-text-dark'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                {/* Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-theme-border-light/40 dark:border-theme-border-dark/40 space-y-6">
                        {/* Highlights list */}
                        <ul className="space-y-3">
                          {exp.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start text-sm leading-relaxed text-theme-text-mutedLight dark:text-theme-text-mutedDark">
                              <span className="text-theme-accent-light dark:text-theme-accent-dark mr-3 mt-1.5 shrink-0 block w-1.5 h-1.5 rounded-full" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Live Links */}
                        {exp.links.length > 0 && (
                          <div className="flex flex-wrap gap-4 items-center">
                            <span className="text-xs font-extrabold uppercase tracking-widest text-theme-text-light dark:text-theme-text-dark">
                              Deployments:
                            </span>
                            {exp.links.map((link, lIdx) => (
                              <a 
                                key={lIdx} 
                                href={link.url}
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1 text-xs font-bold text-theme-accent-light dark:text-theme-accent-dark hover:underline"
                              >
                                <span>{link.label}</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            ))}
                          </div>
                        )}

                        {/* Technologies used */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.tech.map((t) => (
                            <span 
                              key={t}
                              className="px-3 py-1 rounded-lg text-xs font-semibold bg-theme-card-light dark:bg-theme-card-dark text-theme-text-light dark:text-theme-text-dark border border-theme-border-light/40 dark:border-theme-border-dark/40"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
