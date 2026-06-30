import React from 'react'
import './ContactContentStyle.css'

const ContactContent = () => {
    return (
        <section className='contact-section'>
            <div className='container'>
                <div className='contact-wrapper glass-panel'>
                    <div className='contact-header'>
                        <h2>Send a Message</h2>
                        <p>Have an idea or project you want to discuss? Let's build it together.</p>
                    </div>
                    <form action="https://formsubmit.co/fadyashraf909@gmail.com" method="POST" className='contact-form'>
                        <div className='form-grid'>
                            <div className='form-group'>
                                <label htmlFor='name'>Your Name</label>
                                <input 
                                    id='name'
                                    className='form-input' 
                                    type='text' 
                                    name="name" 
                                    placeholder='John Doe'
                                    required 
                                />
                            </div>
                            
                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label>
                                <input 
                                    id='email'
                                    className='form-input' 
                                    type='email' 
                                    name="email" 
                                    placeholder='john@example.com'
                                    required 
                                />
                            </div>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='subject'>Subject</label>
                            <input 
                                id='subject'
                                className='form-input' 
                                type='text' 
                                name="subject" 
                                placeholder='How can I help you?'
                                required 
                            />
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='message'>Message</label>
                            <textarea 
                                id='message'
                                className='form-input form-textarea' 
                                name="message" 
                                rows="5" 
                                placeholder='Tell me details about your project...'
                                required
                            ></textarea>
                        </div>
                        
                        {/* formsubmit hidden configurations */}
                        <input type="hidden" name="_next" value={window.location.href} />
                        
                        <div className='form-actions'>
                            <button className='button' type="submit">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactContent