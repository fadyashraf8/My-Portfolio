import React, { useState, useEffect } from 'react'
import './WorkCardStyle.css'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import projectsData from '../data/projects.json'

const WorkCard = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        setProjects(projectsData)
    }, [])

    return (
        <section className='projects-section'>
            <div className='container'>
                <div className='projects-grid'>
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className='project-card-wrapper' 
                            style={{ '--project-accent': project.accentColor }}
                        >
                            <div className='mac-browser-card'>
                                {/* Browser Header */}
                                <div className='browser-header'>
                                    <div className='browser-dots'>
                                        <span className='dot dot-red'></span>
                                        <span className='dot dot-yellow'></span>
                                        <span className='dot dot-green'></span>
                                    </div>
                                    <div className='browser-address-bar'>
                                        {project.liveUrl.replace('https://', '')}
                                    </div>
                                </div>
                                {/* Screen display (Mockup or Placeholder) */}
                                <div className='browser-screen'>
                                    {project.mockupImage ? (
                                        <>
                                            <img 
                                                src={project.mockupImage} 
                                                alt={`${project.title} Preview`} 
                                                className='screenshot-img' 
                                            />
                                            <div className='screen-overlay'>
                                                <span className='view-text'>Hover to scroll</span>
                                            </div>
                                        </>
                                    ) : (
                                        <div className='screen-placeholder'>
                                            <span className='placeholder-icon'>📁</span>
                                            <span className='placeholder-text'>Click Live Demo to view</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            
                            {/* Project Meta */}
                            <div className='project-info'>
                                <h3 className='project-title'>{project.title}</h3>
                                <p className='project-desc'>{project.description}</p>
                                <div className='project-tags'>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className='tag-pill'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className='project-links'>
                                    <a 
                                        href={project.liveUrl} 
                                        target='_blank' 
                                        rel='noreferrer' 
                                        className='btn-action btn-primary'
                                    >
                                        Live Demo <FaExternalLinkAlt />
                                    </a>
                                    <a 
                                        href={project.githubUrl} 
                                        target='_blank' 
                                        rel='noreferrer' 
                                        className='btn-action btn-secondary'
                                    >
                                        Source <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WorkCard