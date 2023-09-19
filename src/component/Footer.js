
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
                                <p>10 Fekry Tawfik  Shubra,Cairo</p>
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
                                    I am a Web developer with experience in
                                    React.js, Node.js, Redux.js and JavaScript,
                                    but my skills are not limited to these. I'm
                                    also skilled in HTML, CSS, Bootstrap.
                                    Beside these skills I'm good at MongoDB,
                                    API, AJAX... Being a curious developer,
                                    I'm constantly expanding my skill set and
                                    learning something new.
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
                            <div className='col-md-1  d-flex justify-content-end '>
                                <a href='https://www.facebook.com/fady.ashraf.923?mibextid=LQQJ4d' target='_blank'>
                                    <i class="fa-brands fa-facebook fa-2x text-white"></i>
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




