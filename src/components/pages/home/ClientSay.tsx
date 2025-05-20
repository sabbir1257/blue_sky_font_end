import Container from '@/components/ui/Container'
import React from 'react'

const ClientSay = () => {
  return (
    <div className="relative w-full h-[80vh] mb-20 parallax"
        style={{
            backgroundImage: "url('/images/land2.jpg')"
        }}
        >
            <div className="absolute top-0 w-full h-full text-white bg-[#000000b2]">
                <Container className='w-full h-full flex justify-start items-center'>
                    <div className='bg-white md:w-[55%] text-gray-800 lg:px-16 px-6 lg:py-14 py-6 text-center rounded-md shadow-md relative'>
                        <p className='paragraph mb-8'>“ A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by the government they survive as soldiers of fortune to a deluxe apartment in the sky moving on up to the east side a family. ”</p>
                        <h1 className='font-medium '>Mahafuzur Rahaman</h1>
                        <p className='text-sm '>Software Developer</p>
                        {/* sign  */}
                        <div className='size-6 rounded-sm bg-white absolute top-10 -right-3 rotate-[135deg]'>

                        </div>
                    </div>
                </Container>
            </div>
        </div>
  )
}

export default ClientSay
