import React from 'react'
import './FooterStyle.css'
import { FaHome, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container footer-grid'>
                <div className='footer-left'>
                    <h3>Get In Touch</h3>
                    <div className='footer-contact-item'>
                        <FaHome />
                        <p>Cairo, Egypt</p>
                    </div>
                    <div className='footer-contact-item'>
                        <FaPhone />
                        <p>01279673566</p>
                    </div>
                    <div className='footer-contact-item'>
                        <FaEnvelope />
                        <p>fadyashraf909@gmail.com</p>
                    </div>
                </div>
                <div className='footer-right'>
                    <h3>About Me</h3>
                    <p className='footer-bio'>
                        I am Fady Ashraf, a MERN Stack Developer experienced in building scalable, production-level web applications using React.js, Node.js, and MongoDB. Focused on clean architecture, reusable components, and polished user interfaces.
                    </p>
                    <div className='footer-socials'>
                        <a href='https://www.linkedin.com/in/fady-ashraf-2867b3279/' target='_blank' rel='noreferrer'>
                            <FaLinkedin />
                        </a>
                        <a href='https://github.com/fadyashraf8' target='_blank' rel='noreferrer'>
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; {new Date().getFullYear()} Fady Ashraf. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
