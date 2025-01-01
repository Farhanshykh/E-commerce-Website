import React from 'react';
import image4 from '../../public/blog/background.png';
import Image from 'next/image';

const Hero6 = () => {
  return (
    <div className="relative w-full h-[400px] mt-10 poppins">
      <Image 
        src={image4} 
        alt='blog' 
        layout='fill' 
        objectFit='cover' 
        className='z-0' 
      />
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold leading-tight md:leading-[90px]'>Our Instagram</h1>
        <h2 className='text-lg md:text-xl font-normal leading-tight md:leading-[30px]'>Follow our store on Instagram</h2>
        <button className='mt-4 px-6 py-3 w-full max-w-[255px] h-[64px] bg-white rounded-full shadow-lg'>
          Follow Us
        </button>
      </div>
    </div>
  );
}

export default Hero6;