import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import Hero from '../component/Hero';
import About from '../component/About';
import Projects from '../component/Projects';
import Experience from '../component/Experience';
import Skills from '../component/Skills';
import Contact from '../component/Contact';
import Footer from '../component/Footer';

const Home = ({ scrollTarget }) => {
  // Smooth scroll logic based on route parameters
  useEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [scrollTarget]);

  // Premium Custom Mouse Glow Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const root = document.documentElement;
      root.style.setProperty('--x', `${e.clientX}px`);
      root.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-theme-bg-light text-theme-text-light dark:bg-theme-bg-dark dark:text-theme-text-dark grid-bg dark:grid-bg-dark transition-colors duration-300">
      {/* Ambient mouse glow helper */}
      <div className="cursor-glow fixed inset-0 z-0 pointer-events-none hidden md:block" />
      
      {/* Sticky Premium Navigation */}
      <Navbar />

      {/* Narrative Section Stack */}
      <main className="relative z-10 select-none md:select-text">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
};

export default Home;