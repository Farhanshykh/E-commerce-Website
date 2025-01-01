import React from 'react';
import Image from 'next/image';
import sofa from '../../public/banners/hero4.png'
import Link from 'next/link';
const Hero4 = () => {
  return (
    <>
       <div className='poppins w-full h-auto md:h-[639px] bg-[#FFF9E5] flex flex-col justify-center overflow-hidden'>
      <div className='flex flex-col md:flex-row justify-center gap-30 items-center pt-0 md:pt-[50px] mx-5 md:mx-auto'>
      
      <div className='my-8 md:mt-0 md:w-[70%]'>
          <Image src={sofa} alt='sofa' width={983} height={799} className='max-w-full h-auto' />
        </div>


        <div className='w-full md:w-[30%] h-auto items-center flex flex-col justify-center md:text-left md:pl-10'>
          <h1 className='poppins font-medium text-[14px] md:text-[24px] tracking-tight'>
            New Arrivals
          </h1>
          <h1 className='poppins mt-2 md:text-4xl font-bold text-2xl mb-10'>Asgaard sofa</h1>
          <Link href="/singleproduct"><button  className='poppins mt-0 text-lg font-normal md:text-xl border-2 border-black w-[255px] h-[64px]'>Order Now</button></Link>
        </div>
        
      </div>
    </div>
    </>
  )}

export default Hero4
