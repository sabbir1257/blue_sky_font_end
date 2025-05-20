import Facilities from '@/components/pages/project/Facilities'
import ImageGallery from '@/components/pages/project/ImageGallery'
import Living from '@/components/pages/project/Living'
import ProjectHeroSection from '@/components/pages/project/ProjectHeroSection'
import VideoShowSection from '@/components/pages/project/VideoShowSection'
import React from 'react'

const Project = () => {
  return (
    <section>
    <ProjectHeroSection/>
    <Facilities/>
    <VideoShowSection/>
    <Living/>
    <ImageGallery/>
    </section>
  )
}

export default Project
