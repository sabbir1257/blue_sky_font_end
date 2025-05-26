import BlogCard from '@/components/pages/blog/BlogCard'
import BlogSidePart from '@/components/pages/blog/BlogSidePart'
import Container from '@/components/ui/Container'
import EveryPageHeroSection from '@/components/ui/EveryPageHeroSection'
import React from 'react'

const Blog = () => {
  return (
    <section>
      <EveryPageHeroSection title='BLOG' imageUrl='/images/landing.jpg'/>

      <Container className='my-10 flex lg:flex-row flex-col gap-10'>
        <div className='w-full'>
          <div className='w-full flex flex-col gap-5'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div className='mt-10 mb-10'>
            <hr />

            <div className='mt-10 flex gap-[1.3px]'>
              <button className='size-14 rounded-md border text-xl font-medium bg-blue-950 text-white shadow-sm'>1</button>
              <button className='size-14 rounded-md border text-xl font-medium shadow-sm'>2</button>
              <button className='size-14 rounded-md border text-xl font-medium shadow-sm'>{`>>`}</button>
            </div>
          </div>
        </div>

        {/* blog side part */}
        <div className='lg:w-[40%]'>
          <BlogSidePart />
        </div>
      </Container>
    </section>
  )
}

export default Blog;
