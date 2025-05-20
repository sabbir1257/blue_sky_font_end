import Image from 'next/image';
import React from 'react';

const Facilities = () => {
  return (
    <div>
      <h5 className="title text-center mt-10 text-blue-900">Our Facilities</h5>
      <p className='text-center w-[50%] mx-auto pt-6 pb-20'>Electricity, gas, water, telephone, sewerage system, police station and other needs will be met as per the company’s and the government rules and regulations. The company will be responsible for the completion of these tasks in contact with the authority concerned</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[70%] mx-auto">
        {/* First Facility Div */}
        <div className="flex flex-col items-center shadow-xl p-10 rounded-2xl transition-transform transform hover:scale-110 ">
          <div className="bg-blue-300 rounded-full h-[120px] w-[120px] flex justify-center items-center">
            <Image width={100} height={100} src={'/images/electric.png'} alt="electric" className="w-[60px]" />
          </div>
          <h5 className="text-center text-2xl font-bold pt-3">Electric</h5>
        </div>

        {/* Repeat the same structure for other facilities */}
        <div className="flex flex-col items-center shadow-xl p-10 rounded-2xl transition-transform transform hover:scale-110 ">
          <div className="bg-blue-300 rounded-full h-[120px] w-[120px] flex justify-center items-center">
            <Image width={100} height={100} src={'/images/gas.png'} alt="gas" className="w-[60px]" />
          </div>
          <h5 className="text-center text-2xl font-bold pt-3">Gas</h5>
        </div>

        <div className="flex flex-col items-center shadow-xl p-10 rounded-2xl transition-transform transform hover:scale-110 ">
          <div className="bg-blue-300 rounded-full h-[120px] w-[120px] flex justify-center items-center">
            <Image width={100} height={100} src={'/images/water.png'} alt="water" className="w-[60px]" />
          </div>
          <h5 className="text-center text-2xl font-bold pt-3">Water</h5>
        </div>

        <div className="flex flex-col items-center shadow-xl p-10 rounded-2xl transition-transform transform hover:scale-110 ">
          <div className="bg-blue-300 rounded-full h-[120px] w-[120px] flex justify-center items-center">
            <Image width={100} height={100} src={'/images/call.png'} alt="call" className="w-[60px]" />
          </div>
          <h5 className="text-center text-2xl font-bold pt-3">Call</h5>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
