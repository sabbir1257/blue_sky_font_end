import Image from 'next/image'
import React from 'react'

const CertificatePage = () => {
    return (
        <div>
            <div className='flex gap-8 w-[70%] mx-auto my-10'>
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden group">
                    <Image
                        width={500}
                        height={500}
                        src={'/images/certificate.png'}
                        alt="certificate"
                        className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 inset-0 bg-blue-900 flex items-center px-6 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 h-14">
                        <p className="text-white text-xl font-semibold">National Housing Authority&apos;s Certificate</p>
                    </div>
                </div>

                <div className="relative w-full h-[400px] rounded-lg overflow-hidden group">
                    <Image
                        width={500}
                        height={500}
                        src={'/images/certificate.png'}
                        alt="certificate"
                        className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 inset-0 bg-blue-900 flex items-center px-6 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 h-14">
                        <p className="text-white text-xl font-semibold">National Housing Authority&apos;s Certificate</p>
                    </div>
                </div>
            </div>
            {/* div 2  */}
            <div className='flex gap-8 w-[80%] mx-auto mb-10'>
                <div className="relative w-full h-[500px] rounded-lg overflow-hidden group">
                    <Image
                        width={500}
                        height={500}
                        src={'/images/certificate.png'}
                        alt="certificate"
                        className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 inset-0 bg-blue-900 flex items-center px-6 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 h-14">
                        <p className="text-white text-xl font-semibold">National Housing Authority&apos;s Certificate</p>
                    </div>
                </div>

                <div className="relative w-full h-[500px] rounded-lg overflow-hidden group">
                    <Image
                        width={500}
                        height={500}
                        src={'/images/certificate.png'}
                        alt="certificate"
                        className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 inset-0 bg-blue-900 flex items-center px-6 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 h-14">
                        <p className="text-white text-xl font-semibold">National Housing Authority&apos;s Certificate</p>
                    </div>
                </div>

                <div className="relative w-full h-[500px] rounded-lg overflow-hidden group">
                    <Image
                        width={500}
                        height={500}
                        src={'/images/certificate.png'}
                        alt="certificate"
                        className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 inset-0 bg-blue-900 flex items-center px-6 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0 h-14">
                        <p className="text-white text-xl font-semibold">National Housing Authority&apos;s Certificate</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CertificatePage