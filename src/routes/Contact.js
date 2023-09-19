import React from 'react'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import BackgroundImg2 from '../component/BackgroundImg2.js'
import ContactContent from '../component/ContactContent.js'

const Contact = () => {
  return (
    <>

      <Navbar />
      <BackgroundImg2 heading="CONTACT." text="Let's have a chat" />
      <ContactContent />
      <Footer />
    </>
  )
}

export default Contact