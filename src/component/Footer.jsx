
import React from 'react'
import './FooterStyle.css'


const Footer = () => {
    return (
        <div className='footer '>
            <div className='container'>
                <div className='row'>

                    <div className='col-md-6 my-5'>
                        <div className='row my-3'>
                            <div className='col-md-2  d-flex justify-content-end '>
                                <i class="fa-solid fa-house fa-1x text-white"></i>
                            </div>
                            <div className='col-md-3 '>
                                <p>Cairo, Egypt</p>
                            </div>
                        </div>
                        <div className='row my-3'>
                            <div className='col-md-2  d-flex justify-content-end '>
                                <i class="fa-solid fa-phone fa-1x text-white"></i>
                            </div>
                            <div className='col-md-3'>
                                <p>01279673566</p>
                            </div>
                        </div>
                        <div className='row my-4'>
                            <div className='col-md-2  d-flex justify-content-end '>
                                <i class="fa-solid fa-inbox fa-1x text-white"></i>
                            </div>
                            <div className='col-md-3 '>
                                <p>fadyashraf909@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 my-5'>
                        <div className='row'>

                            <div className='col-md-12 '>
                                <h1 className=' text-white'>About Me</h1>
                                <p>My name is Fady Ashraf.
                                    <br />
                                   ITI MERN Graduate and MERN Stack Developer experienced in building production-level web applications using
React.js, Node.js, and MongoDB. Skilled in developing scalable web solutions, integrating RESTful APIs, and
optimizing application performance. Strong focus on clean architecture, reusable components, and real-world
product delivery.
                                </p>
                            </div>
                        </div>
                        <div className='row'>

                            <div className='col-md-1  d-flex justify-content-end '>
                                <a href='https://www.linkedin.com/in/fady-ashraf-2867b3279/' target='_blank'> <i class="fa-brands fa-linkedin fa-2x text-white"></i></a>
                            </div>
                            <div className='col-md-1  d-flex justify-content-end '>
                                <a href='https://github.com/fadyashraf8' target='_blank'>
                                    <i class="fa-brands fa-github fa-2x text-white"></i>

                                </a>
                            </div>
                         
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer




