import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'
import BackgroundImg2 from '../component/BackgroundImg2.jsx'
import AboutContent from '../component/AboutContent.jsx'

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