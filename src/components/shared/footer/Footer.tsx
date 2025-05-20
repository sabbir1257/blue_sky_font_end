/* eslint-disable @next/next/no-img-element */
import React from 'react'
import OurPartners from './OurPartners'
import BottomFooter from './BottomFooter'
import Container from '@/components/ui/Container'
import { CalenderIcon, EmailSendIcon, PhoneCallIcon, WhatsAppIcon } from '@/components/Icons/Icons'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import RecentPostCard from '@/components/pages/blog/RecentPostCard'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      {/* our partners  */}
      <OurPartners />
      {/* main footer  */}
      <section className='py-10 bg-blue-900 text-gray-50'>
        <Container >
          <div className='grid lg:grid-cols-7 md:grid-cols-4 grid-cols-1 gap-8 lg:gap-3'>
            {/* div 1  */}
            <div className='col-span-2'>
              <h5 className='title1 mb-6'>Our Office</h5>
              <div className=''>
                <h4>Dhaka Office : MuktoBangla Shpping Complex,Space # 49/50 (5th Floor), Plot- 04, Mirpur-1, Dhaka-1216, Bangladesh.</h4>
                <div className='flex items-center pt-2 text-xl gap-3 group'>
                  <PhoneCallIcon />
                  <div className="relative">
                    <a href="tel:01984867459" className="inline-block relative" target='_blank'>01984867459</a>
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </div>
                </div>

                <div className='flex items-center pt-2 text-xl gap-3 group'>
                  <EmailSendIcon />
                  <div className="relative">
                    <a href="mailto:DeveloperOvi@gmail.com" className="inline-block relative" target='_blank'>DeveloperOvi@gmail.com</a>
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </div>
                </div>

                <div className='flex items-center pt-2 text-xl gap-3 group'>
                  <WhatsAppIcon />
                  <div className="relative">
                    <a href="" className="inline-block relative" target='_blank'>01984867459</a>
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                  </div>
                </div>

              </div>

            </div>
            {/* div 2  */}
            <div className='lg:px-0 px-4 col-span-2 lg:ml-10'>
              <h1 className='title1 mb-6'>Services</h1>
              <ul className='flex flex-col gap-1 font-medium list-none'>
                {[
                  { href: '/', text: 'Real Estate Service' },
                  { href: '/', text: 'Project Map Location' },
                  { href: '/', text: 'Infrastructure Facilities' },
                  { href: '/', text: 'Download Forms' }
                ].map((item, index) => (
                  <li key={index} className="relative group">
                    <Link href={item.href} className="inline-block relative">
                      {item.text}
                      <span className="absolute left-0 bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out w-0 group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* div 3  */}
            <div className='col-span-1'>
              <h1 className='title1 mb-6'>Legel</h1>
              <div className=''>
                <RecentPostCard />
              </div>
            </div>

            {/* div 4  */}
            <div className='col-span-2 lg:ml-6'>
              <h1 className='title1 mb-6'>NEWSLETTER</h1>
              <form className='flex flex-col gap-2'>
                <Input className='bg-transparent' placeholder='Name*' />
                <Input className='bg-transparent' placeholder='Email*' />
                <Button className='bg-gray-100 mt-3 w-fit text-black rounded-md'>SUBSCRIBE</Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
      {/* bottom part  */}
      <BottomFooter />
    </footer>
  )
}

export default Footer
