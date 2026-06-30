import './AboutCotentStyle.css'
import React from 'react'
import { Link } from 'react-router-dom'

const AboutContent = () => {
    const skills = [
        { name: "React JS", color: "#61dafb" },
        { name: "JavaScript (ES6)", color: "#f7df1e" },
        { name: "Node JS", color: "#68a063" },
        { name: "Redux / Toolkit", color: "#764abc" },
        { name: "Bootstrap 5", color: "#7952b3" },
        { name: "HTML5 / CSS3", color: "#e34f26" },
        { name: "Git / GitHub", color: "#f05032" },
        { name: "REST APIs", color: "#14b8a6" }
    ]

    return (
        <section className='about-section'>
            <div className='container'>
                <div className='about-bento-grid'>
                    
                    {/* Bio Card (Span 2) */}
                    <div className='bento-card bio-card'>
                        <h2>Who Am I?</h2>
                        <p>
                            Junior Front-End Developer who is eager to learn software development and integrate new technologies into Web Applications. I have a demonstrated history of building responsive, clean user interfaces using the React ecosystem.
                        </p>
                        <p>
                            I am passionate about tackling complex front-end problems, writing clean modular components, and crafting readable and maintainable code.
                        </p>
                    </div>

                    {/* Quick Stats / Info Card */}
                    <div className='bento-card stats-card'>
                        <h3>Passions</h3>
                        <ul className='passions-list'>
                            <li><span>☕</span> Coding clean interfaces</li>
                            <li><span>⚡</span> Optimizing performance</li>
                            <li><span>🎨</span> Modern UI & layout design</li>
                            <li><span>🧠</span> Solving coding problems</li>
                        </ul>
                    </div>

                    {/* Skills Card (Span 2) */}
                    <div className='bento-card skills-card'>
                        <h3>Tech Stack & Tools</h3>
                        <p className='section-subtitle'>My core toolbox for crafting digital solutions:</p>
                        <div className='skills-grid'>
                            {skills.map((skill, index) => (
                                <div 
                                    key={index} 
                                    className='skill-badge-wrapper'
                                    style={{ '--skill-color': skill.color }}
                                >
                                    <span className='skill-dot'></span>
                                    <span className='skill-name'>{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & CTA Card */}
                    <div className='bento-card education-card'>
                        <h3>Education</h3>
                        <div className='education-content'>
                            <h4 className='degree-title'>Full-Stack Development Diploma</h4>
                            <p className='school-name'>Route Academy</p>
                            <p className='education-desc'>
                                Intensive training covering JavaScript, React, Node.js, database integration, and modern frontend software design practices.
                            </p>
                        </div>
                        <div className='about-cta-container'>
                            <Link to='/contact' className='button'>
                                Contact Me
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutContent