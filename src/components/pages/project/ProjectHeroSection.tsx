import React from 'react'

const ProjectHeroSection = () => {
    return (
        <div 
            className='relative w-full lg:h-[80vh] h-full py-10 lg:py-0 flex flex-col justify-center items-center bg-cover bg-center parallax' 
            style={{ backgroundImage: "url('images/land.jpg')" }} 
        >

            <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>

            <div className='relative w-[80%] mx-auto text-white text-center'>
                <h1 className='text-4xl font-bold mb-20'>Blue Sky City</h1>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {[
                        { title: "Total Area", value: "560" },
                        { title: "Total Sector", value: "4" },
                        { title: "Inside Road", value: "100ft, 60ft, 40ft, 25ft" },
                        { title: "Project Status", value: "Running" }
                    ].map((item, index) => (
                        <div key={index} className='border-b-4 border-blue-400 bg-white/20 p-8 rounded-xl w-full text-center 
                            transition-transform duration-300 ease-in-out hover:scale-110 shadow-lg backdrop-blur-lg'>
                            <h5 className='text-2xl font-bold'>{item.title}</h5>
                            <p className='text-lg mt-2'>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectHeroSection;

