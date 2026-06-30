import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: Globe,
      color: "text-blue-500",
      skills: [
        { name: "Next.js", level: "90%" },
        { name: "React.js", level: "95%" },
        { name: "TypeScript", level: "85%" },
        { name: "JavaScript (ES6+)", level: "95%" },
        { name: "Redux / State Management", level: "85%" },
        { name: "Tailwind CSS", level: "95%" },
        { name: "HTML5 / CSS3 / SASS", level: "95%" },
        { name: "Bootstrap / jQuery", level: "90%" }
      ]
    },
    {
      title: "Backend Architecture",
      icon: Database,
      color: "text-emerald-500",
      skills: [
        { name: "Node.js", level: "90%" },
        { name: "Express.js", level: "95%" },
        { name: "Nest.js", level: "80%" },
        { name: "MongoDB / Mongoose", level: "90%" },
        { name: "PostgreSQL", level: "80%" },
        { name: "RESTful API Integration", level: "95%" }
      ]
    },
    {
      title: "CS Fundamentals",
      icon: Cpu,
      color: "text-amber-500",
      skills: [
        { name: "Object Oriented Programming (OOP)", level: "90%" },
        { name: "Data Structures & Algorithms", level: "85%" },
        { name: "Software Design Patterns", level: "85%" },
        { name: "Clean Architecture Standards", level: "90%" }
      ]
    },
    {
      title: "Tools & Languages",
      icon: Wrench,
      color: "text-purple-500",
      skills: [
        { name: "Git & Version Control", level: "95%" },
        { name: "Postman & API Design", level: "90%" },
        { name: "Apidog Testing Suite", level: "85%" },
        { name: "Arabic (Native Language)", level: "100%" },
        { name: "English (Advanced Proficiency)", level: "90%" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 border-t border-theme-border-light/60 dark:border-theme-border-dark/60 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-display text-xs font-extrabold uppercase tracking-widest text-theme-accent-light dark:text-theme-accent-dark">
            04 / Capabilities
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase mt-2 text-theme-text-light dark:text-theme-text-dark">
            Technical Arsenal
          </h2>
        </div>

        {/* Dynamic Skill Section Grid (2x2 Asymmetric) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={catIdx}
                className="p-8 rounded-3xl border border-theme-border-light dark:border-theme-border-dark bg-theme-card-light/15 dark:bg-theme-card-dark/15 backdrop-blur-sm relative overflow-hidden group hover:border-theme-accent-light dark:hover:border-theme-accent-dark transition-colors duration-500"
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className={`p-3 rounded-2xl bg-theme-card-light dark:bg-theme-card-dark ${category.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-black uppercase tracking-wider text-theme-text-light dark:text-theme-text-dark">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Progress Grid */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-theme-text-light dark:text-theme-text-dark">
                          {skill.name}
                        </span>
                        <span className="font-display text-xs text-theme-accent-light dark:text-theme-accent-dark">
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Custom visual progress bar */}
                      <div className="h-1 w-full bg-theme-border-light/40 dark:bg-theme-border-dark/40 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-theme-accent-light dark:bg-theme-accent-dark rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: sIdx * 0.05 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
