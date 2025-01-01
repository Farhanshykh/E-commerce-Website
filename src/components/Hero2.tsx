import React from 'react';
import Image from 'next/image';
import sidetable from '../../public/banners/hero2image2.png';
import sofa2 from '../../public/banners/hero2image1.png';

const Hero2 = () => {
  return (
    <div className='w-full h-auto bg-[#FAF4F4] flex flex-col justify-center pb-10'>
      <div className='flex flex-col md:flex-row justify-center items-center pt-5 md:pt-10 mx-5 md:mx-auto gap-8 md:gap-0'>
        
        {/* Side Table Section */}
        <div className='w-full md:w-1/2 h-auto text-center md:text-left relative mb-8 md:mb-0'>
          <Image 
            src={sidetable} 
            alt='Side Table' 
            width={653} 
            height={0} 
            className='max-w-full h-auto'
            style={{ objectFit: 'contain' }}
          />
          <h1 className='poppins absolute bottom-20 left-4 md:left-8 font-semibold text-2xl md:text-3xl'>
            Side Table
          </h1>
          <button className='absolute bottom-6 left-4 md:left-8 pt-2 text-xl md:text-2xl border-b-2 pb-4 border-black hover:scale-110 hover:font-bold'>
            View More
          </button>
        </div>

        {/* Sofa Section */}
        <div className='w-full md:w-1/2 h-auto text-center md:text-left relative'>
          <Image 
            src={sofa2} 
            alt='Sofa' 
            width={653} 
            height={0} 
            className='max-w-full h-auto'
            style={{ objectFit: 'contain' }}
          />
          <h1 className='poppins absolute bottom-16 left-4 md:left-8 font-semibold text-2xl md:text-3xl'>
            Side Table
          </h1>
          <button className='absolute bottom-2 left-4 md:left-8 pt-2 text-xl md:text-2xl border-b-2 pb-4 border-black hover:scale-110 hover:font-bold'>
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
