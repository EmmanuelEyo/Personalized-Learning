import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Hero2 from '../components/Hero2'
import AdaptiveLearning from '../components/AdaptiveLearning'
import { GlobeDemo } from '../components/GlobeDemo'
import { BackgroundBeamsDemo } from '../components/BackgroundBeamsDemo'
import Footer from '../components/Footer'
import FooterLine from '../components/FooterLine'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <GlobeDemo />
      <Hero2 />
      <AdaptiveLearning />
      <BackgroundBeamsDemo />
      <Footer />
      <FooterLine />
    </div>
  )
}

export default LandingPage