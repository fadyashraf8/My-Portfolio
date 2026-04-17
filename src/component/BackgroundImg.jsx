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
                    <p>HI, I'M FADY ASHRAF</p>
                    <h1> MERN STACK DEVELOPER</h1>
                    <div className=''> 
                        <a href='https://drive.google.com/file/d/1IYwSbfyLUCb9EhsOgFwL4dsOvyGrzvrk/view?usp=sharing' target='blank' className='button m-3 sora '>
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