import React from 'react'
import './ContactContentStyle.css'
const ContactContent = () => {
    return (
        <>

            <div className='container my-5 border border-1 border-white p-4 rounded-3'>
                <form action="https://formsubmit.co/fadyashraf909@gmail.com" method="POST">
                    <label className='text-white h5'>Your Name</label>
                    <input className='form-control bg-transparent text-white' type='text' name="name" required />
                    
                    <label className='text-white h5 mt-4'>Email</label>
                    <input className='form-control bg-transparent text-white' type='email' name="email" required />
                    
                    <label className='text-white h5 mt-4'>Subject</label>
                    <input className='form-control bg-transparent text-white' type='text' name="subject" required />
                    
                    <label className='text-white h5 mt-4'>Message</label>
                    <textarea className='form-control bg-transparent text-white' name="message" rows="5" required></textarea>
                    
                    {/* Optional: Add a redirect URL here if you want to redirect the user after submission, e.g., value="https://yourwebsite.com/thanks" */}
                    <input type="hidden" name="_next" value={window.location.href} />
                    
                    {/* Optional: Disable the reCAPTCHA if you prefer */}
                    {/* <input type="hidden" name="_captcha" value="false" /> */}

                    <button className='btn btn-light mt-4' type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactContent