import CoreValues from '@/components/pages/about/CoreValues'
import OurHistories from '@/components/pages/about/OurHistories'
import WeAreBestSection from '@/components/pages/about/WeAreBestSection'
import TotalAnalysis from '@/components/shared/TotalAnalysis'
import Container from '@/components/ui/Container'
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection'
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <EveryPageHeroSection title='ABOUT US' imageUrl='/images/land3.jpg'/>
      <OurHistories />
      <WeAreBestSection />
      <Container className='flex justify-center  text-gray-600' >
        <div className='mt-80 md:pt-20 lg:mt-0'>
        <TotalAnalysis/>
        </div>
      </Container>
      <CoreValues />
    </div>
  )
}

export default AboutUs
