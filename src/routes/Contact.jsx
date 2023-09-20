import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'
import BackgroundImg2 from '../component/BackgroundImg2.jsx'
import ContactContent from '../component/ContactContent.jsx'

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