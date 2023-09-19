import React from 'react'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import BackgroundImg2 from '../component/BackgroundImg2.js'
import AboutContent from '../component/AboutContent.js'

const About = () => {
  return (
    <>

      <Navbar />
      <BackgroundImg2 heading="ABOUT." text="I'm a React.js-Node.js-Full stack developer" />
      <AboutContent />
      <Footer />
    </>
  )
}

export default About