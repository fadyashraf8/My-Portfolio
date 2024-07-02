import React from 'react'
import './BackgroundImgStyle.css'
import IntroImg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'

const BackgroundImg = () => {
    return (
        <>
            <div className='hero'>
                <div className='mask'>
                    <img className='into-img' src={IntroImg} alt='IntroImg' />
                </div>
                <div className='content'>
                    <p>HI, I'M A FREELANCER</p>
                    <h1>REACT.JS-NODE.JS-FULL STACK DEVELOPER</h1>
                    <div className=''> 
                        <a href='https://drive.google.com/file/d/1tvMwsdqNnnCVe9K99xtHPL9QD5wVgYtE/view?usp=drive_link' target='_blank' className='button m-3 sora w-50'>
                            My Resume
                        </a>
                        <Link to='/contact' className='button button-light'>
                            Contact
                        </Link>
                    </div>
                </div>

            </div>

        </>

    )
}

export default BackgroundImg