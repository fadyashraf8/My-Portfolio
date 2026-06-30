import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, FileText, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    project: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill out your name and email.");
      return;
    }

    // Dynamic mailto structure
    const subject = encodeURIComponent(`Collaboration Inquiry - ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Fady,\n\n` +
      `My name is ${formData.name}${formData.company ? ` from ${formData.company}` : ''}.\n\n` +
      `I would love to collaborate on: ${formData.project || 'a new project'}.\n\n` +
      `You can reach me back at: ${formData.email}.\n\n` +
      `Best regards,\n${formData.name}`
    );

    window.open(`mailto:fadyashraf909@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const triggerConfetti = (e) => {
    e.preventDefault();
    
    // Sparkle effect
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.8 },
      colors: ['#FF5B37', '#E54B27', '#131419', '#F6F3ED']
    });

    // Open resume after short lag
    setTimeout(() => {
      window.open('https://drive.google.com/file/d/1IYwSbfyLUCb9EhsOgFwL4dsOvyGrzvrk/view?usp=sharing', '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-24 border-t border-theme-border-light/60 dark:border-theme-border-dark/60 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-20">
          <p className="font-display text-xs font-extrabold uppercase tracking-widest text-theme-accent-light dark:text-theme-accent-dark">
            05 / Connection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black uppercase mt-2 text-theme-text-light dark:text-theme-text-dark">
            Let's Collaborate
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Letter Form */}
          <div className="lg:col-span-8 p-8 md:p-12 rounded-3xl border border-theme-border-light dark:border-theme-border-dark bg-theme-card-light/10 dark:bg-theme-card-dark/10">
            <h3 className="font-display text-xl font-bold uppercase text-theme-accent-light dark:text-theme-accent-dark mb-8">
              Draft a Message
            </h3>
            
            {/* Custom Natural-Language / Letter Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="font-display text-lg md:text-2xl font-semibold leading-[2] text-theme-text-light dark:text-theme-text-dark">
                <span>Hi Fady, my name is </span>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="px-2 py-0 border-b-2 border-theme-border-light dark:border-theme-border-dark bg-transparent focus:border-theme-accent-light dark:focus:border-theme-accent-dark outline-none font-body text-base md:text-xl font-medium placeholder:text-theme-text-mutedLight/40 dark:placeholder:text-theme-text-mutedDark/40 transition-colors w-[180px] md:w-[240px]"
                />
                
                <span> from </span>
                <input 
                  type="text" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Organization"
                  className="px-2 py-0 border-b-2 border-theme-border-light dark:border-theme-border-dark bg-transparent focus:border-theme-accent-light dark:focus:border-theme-accent-dark outline-none font-body text-base md:text-xl font-medium placeholder:text-theme-text-mutedLight/40 dark:placeholder:text-theme-text-mutedDark/40 transition-colors w-[180px] md:w-[240px]"
                />
                
                <span>. I would love to collaborate with you on </span>
                <input 
                  type="text" 
                  name="project" 
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="a custom web product"
                  className="px-2 py-0 border-b-2 border-theme-border-light dark:border-theme-border-dark bg-transparent focus:border-theme-accent-light dark:focus:border-theme-accent-dark outline-none font-body text-base md:text-xl font-medium placeholder:text-theme-text-mutedLight/40 dark:placeholder:text-theme-text-mutedDark/40 transition-colors w-[260px] md:w-[350px]"
                />
                
                <span>. You can reach me back at my email </span>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@domain.com *"
                  required
                  className="px-2 py-0 border-b-2 border-theme-border-light dark:border-theme-border-dark bg-transparent focus:border-theme-accent-light dark:focus:border-theme-accent-dark outline-none font-body text-base md:text-xl font-medium placeholder:text-theme-text-mutedLight/40 dark:placeholder:text-theme-text-mutedDark/40 transition-colors w-[260px] md:w-[350px]"
                />
                <span>.</span>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="inline-flex items-center space-x-3 px-8 py-4.5 rounded-full bg-theme-accent-light text-white dark:bg-theme-accent-dark dark:text-black font-display font-extrabold uppercase tracking-widest text-sm hover:scale-[1.03] active:scale-[0.98] transition-transform shadow-lg cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Direct Connections & CV */}
          <div className="lg:col-span-4 space-y-8 w-full">
            <div className="p-8 rounded-3xl border border-theme-border-light dark:border-theme-border-dark bg-theme-card-light/20 dark:bg-theme-card-dark/20 space-y-6">
              <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-theme-text-light dark:text-theme-text-dark">
                Direct Contact
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:fadyashraf909@gmail.com"
                  className="flex items-center space-x-3 group text-theme-text-mutedLight dark:text-theme-text-mutedDark hover:text-theme-accent-light dark:hover:text-theme-accent-dark transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-semibold">fadyashraf909@gmail.com</span>
                </a>
                
                <a 
                  href="tel:+201279673566"
                  className="flex items-center space-x-3 group text-theme-text-mutedLight dark:text-theme-text-mutedDark hover:text-theme-accent-light dark:hover:text-theme-accent-dark transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-sm font-semibold">+20 127 967 3566</span>
                </a>
              </div>

              <hr className="border-theme-border-light dark:border-theme-border-dark" />

              <h3 className="font-display text-sm font-extrabold uppercase tracking-widest text-theme-text-light dark:text-theme-text-dark">
                Social Hubs
              </h3>

              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/fady-ashraf-2867b3279" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-theme-border-light dark:border-theme-border-dark hover:border-theme-accent-light dark:hover:border-theme-accent-dark hover:text-theme-accent-light dark:hover:text-theme-accent-dark transition-colors text-theme-text-light dark:text-theme-text-dark"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/fadyashraf8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-theme-border-light dark:border-theme-border-dark hover:border-theme-accent-light dark:hover:border-theme-accent-dark hover:text-theme-accent-light dark:hover:text-theme-accent-dark transition-colors text-theme-text-light dark:text-theme-text-dark"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Resume Call-to-Action with confetti */}
            <button
              onClick={triggerConfetti}
              className="w-full flex items-center justify-between p-6 rounded-3xl border border-theme-accent-light dark:border-theme-accent-dark bg-theme-accent-light/10 dark:bg-theme-accent-dark/10 hover:bg-theme-accent-light/15 dark:hover:bg-theme-accent-dark/15 transition-colors cursor-pointer group"
            >
              <div className="flex items-center space-x-3 text-theme-accent-light dark:text-theme-accent-dark">
                <FileText className="w-6 h-6" />
                <div className="text-left">
                  <span className="block font-display text-sm font-extrabold uppercase tracking-wider">
                    Download CV
                  </span>
                  <span className="block text-xs text-theme-text-mutedLight dark:text-theme-text-mutedDark">
                    Google Drive PDF Format
                  </span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-theme-accent-light text-white dark:bg-theme-accent-dark dark:text-black">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
