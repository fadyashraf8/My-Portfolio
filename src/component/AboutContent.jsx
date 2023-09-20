import './AboutCotentStyle.css'
import React from 'react'

import react1 from '../assets/react1.jpg'
import react2 from '../assets/react2.webp'
import { Link } from 'react-router-dom'


const AboutContent = () => {
    return (
        <>

            <div className='bg-'>
                <div className='container  '>
                    <div className='row '>

                        <div className='col-md-6 my-5'>
                            <h1>Who Am I?</h1>
                            <p className='h5 text-white border border-1 border-white rounded-4 p-3 '>
                                Junior Front-End Developer who is eager to learn in software development and use new technologies in Web Applications, with a demonstrated history in developing and achieving different tasks including building huge responsive websites using React JS. I'm very passionate about tackling new problems and figuring out ways to overcome and solve them. I completed Full stack diploma in Route Academy
                            </p>

                           <Link to='/contact'>
                           <button className='btn btn-light btn-lg text-dark mt-3'>Contact</button>
                           </Link>
                        </div>
                        <div className='col-md-6'>
                            <div className='row position-relative'>
                                <div className='col-md-12'>
                                    <img src={react1} className=' img1'/>
                                </div>
                                <div className='col-md-12'>
                                <img src={react2} className=' img2'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent