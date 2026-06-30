import React from 'react'
import './BackgroundImgStyle.css'
import { Link } from 'react-router-dom'

const BackgroundImg = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <p className='greeting'>HI, I'M FADY ASHRAF</p>
                <h1 className='main-title'>MERN STACK DEVELOPER</h1>
                <p className='hero-sub'>
                    I build web applications using React.js, Node.js, Express, and MongoDB. Focused on creating clean, responsive user interfaces and solving coding challenges.
                </p>
                <div className='cta-buttons'> 
                    <a href='https://drive.google.com/file/d/1IYwSbfyLUCb9EhsOgFwL4dsOvyGrzvrk/view?usp=sharing' target='_blank' rel='noreferrer' className='button'>
                        My Resume
                    </a>
                    <Link to='/contact' className='button button-light'>
                        Contact Me
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BackgroundImg