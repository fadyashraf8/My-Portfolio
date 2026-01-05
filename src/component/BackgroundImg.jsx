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
                        <a href='https://drive.google.com/file/d/195wqW1VWZYb3QeoHoXliIEsPWsrK3ZGT/view?usp=sharing' target='blank' className='button m-3 sora '>
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