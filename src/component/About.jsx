import React from 'react';
import { Award, GraduationCap, Server, Layers } from 'lucide-react';

const About = () => {
  const statItems = [
    { value: '3+', label: 'Industry Roles', icon: Layers },
    { value: '5+', label: 'Case Studies', icon: Server },
    { value: 'ITI', label: 'MERN Graduate', icon: Award },
    { value: 'B.Sc.', label: 'Computer Science', icon: GraduationCap },
  ];

  return (
    <section className="py-24 border-t border-theme-border-light/60 dark:border-theme-border-dark/60 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-display text-xs font-extrabold uppercase tracking-widest text-theme-accent-light dark:text-theme-accent-dark">
            01 / Who I Am
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase mt-2 text-theme-text-light dark:text-theme-text-dark">
            About Me
          </h2>
        </div>

        {/* Asymmetric Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Bold Statement & Fast Stats */}
          <div className="lg:col-span-5 flex flex-col space-y-12">
            <h3 className="font-display text-2xl md:text-3xl font-extrabold leading-tight text-theme-text-light dark:text-theme-text-dark">
              "I build scalable backend structures and integrate premium UI frontends."
            </h3>

            {/* Asymmetric Statistics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {statItems.map((stat, idx) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 rounded-2xl border border-theme-border-light dark:border-theme-border-dark bg-theme-card-light/20 dark:bg-theme-card-dark/20 flex flex-col space-y-4 hover:border-theme-accent-light dark:hover:border-theme-accent-dark transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg bg-theme-card-light dark:bg-theme-card-dark w-fit text-theme-accent-light dark:text-theme-accent-dark">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-display text-3xl font-black text-theme-text-light dark:text-theme-text-dark">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-theme-text-mutedLight dark:text-theme-text-mutedDark mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Confident Narrative Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-base md:text-lg leading-relaxed text-theme-text-mutedLight dark:text-theme-text-mutedDark">
            <p>
              I am a MERN Stack Developer with a background rooted in Computer Science and rigorous software training. I graduate from the <span className="font-semibold text-theme-text-light dark:text-theme-text-dark">Information Technology Institute (ITI) at Cairo University</span> MERN program, where I spent months refining my skills in full-stack architecture, clean coding practices, and production deployment cycles.
            </p>
            <p>
              My coding philosophy revolves around modular components, scalable services, and clean RESTful API contracts. Having engineered systems at startups like Zentix Software, Cremedia Global, and Mk Grant, I have hands-on experience building educational LMS systems, headless corporate websites, and optimized payment configurations.
            </p>
            <p>
              I hold a B.Sc. in Computer Science from <span className="font-semibold text-theme-text-light dark:text-theme-text-dark">Beni Suef University</span> (2020–2024), providing me with solid foundations in algorithms, OOP principles, design patterns, and database normalization techniques.
            </p>
            <p>
              I thrive in collaborative environments where performance, accessibility, and clean design are treated as non-negotiable standards. When I am not writing Node.js services or React views, I am testing APIs or learning new architectures.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
