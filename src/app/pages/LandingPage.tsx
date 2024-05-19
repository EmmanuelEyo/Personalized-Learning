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
    <div className='text-[#f1e8e8]' style={{
      background: "linear-gradient(to bottom, #1a1a2e, #23236e)"
    }}>
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