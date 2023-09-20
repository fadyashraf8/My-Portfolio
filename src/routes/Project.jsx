import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'
import BackgroundImg2 from '../component/BackgroundImg2.jsx';
import WorkCard from '../component/WorkCard.jsx';

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