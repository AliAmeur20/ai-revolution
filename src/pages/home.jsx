import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/heroSection'
import AiTypes from '../components/aiTypes'
import AiBenefits from '../components/aiBenefits'
import Contact from '../components/contact'
import Footer from '../components/footer'

function Home() {
  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 to-gray-100 text-dark">
      <Navbar />
      <main>
        <HeroSection />
        <AiTypes />
        <AiBenefits />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home