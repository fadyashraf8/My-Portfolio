import React from 'react'
import './ContactContentStyle.css'
const ContactContent = () => {
    return (
        <>

            <div className='container my-5 border border-1 border-white p-4 rounded-3'>
                <form>
                    <label className='text-white h5'>Your Name</label>
                    <input className='form-control bg-transparent text-white' type='text' />
                    <label className='text-white h5 mt-4'>Email</label>
                    <input className='form-control bg-transparent text-white'  type='email'/>
                    <label className='text-white h5 mt-4'>Subject</label>
                    <input className='form-control bg-transparent text-white' type='text' />
                    <label className='text-white h5 mt-4'>Message</label>
                    <textarea className='form-control bg-transparent text-white' type='text'>

                    </textarea>
                    <button className='btn btn-light mt-4'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default ContactContent