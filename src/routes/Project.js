import React from 'react'
import Navbar from '../component/Navbar.js'
import Footer from '../component/Footer.js'
import BackgroundImg2 from './../component/BackgroundImg2';
import WorkCard from '../component/WorkCard.js';

const Project = () => {
  return (

    <>
      <Navbar />
      <BackgroundImg2 heading="PROJECTS." text="Some of my most recent works" />
      <WorkCard />
      <Footer />
    </>



  )
}

export default Project