import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import image1 from '../../public/blog/1.png';
import image2 from '../../public/blog/2.png';
import image3 from '../../public/blog/3.png';
import { MdOutlineAccessTime } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";


const Hero5 = () => {
  return (
    <>
    <div
     
      className="poppins w-full h-auto bg-white flex flex-col justify-center items-center mb-20" >
      <div className="w-full md:w-[80%]flex flex-col justify-between items-center mt-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-base text-2xl leading-6 tracking-wide">
            Our Blogs
          </h1>
          <p className="font-base text-xs leading-6 tracking-wide text-gray-600 mt-4">
            Find a bright ideal to suit your taste with our great selection
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-5 md:mx-[100px] justify-center items-center gap-7">
          <div className='flex flex-col justify-center items-center'>
            <Image src={image1} alt='blog' width={320} height={320}/>
            <h3 className='mt-[33px] font-normal leading-[30px] text-lg'>Going all-in with millennial design</h3>
            <Link href='/blog'><button className="w-[130px] h-[36px] border-b-2 border-black font-medium text-2xl leading-9 mt-2 hover:bg-gray-300">Read More</button></Link>
            <p className='flex justify-center gap-1 items-center mt-4'><span><MdOutlineAccessTime/></span> 5 min  <span><CiCalendar/></span> 12<sup className='text-[8px]'>th</sup>, Oct 2022</p>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <Image src={image2} alt='blog' width={320} height={320}/>
            <h3 className='mt-[33px] font-normal leading-[30px] text-lg'>Going all-in with millennial design</h3>
            <Link href='/blog'><button className="w-[130px] h-[36px] border-b-2 border-black font-medium text-2xl leading-9 mt-2 hover:bg-gray-300">Read More</button></Link>
            <p className='flex justify-center gap-1 items-center mt-4'><span><MdOutlineAccessTime/></span> 5 min  <span><CiCalendar/></span> 12<sup className='text-[8px]'>th</sup>, Oct 2022</p>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <Image src={image3} alt='blog' width={320} height={320}/>
            <h3 className='mt-[33px] font-normal leading-[30px] text-lg'>Going all-in with millennial design</h3>
            <Link href='/blog'><button className="w-[130px] h-[36px] border-b-2 border-black font-medium text-2xl leading-9 mt-2 hover:bg-gray-300">Read More</button></Link>
            <p className='flex justify-center gap-1 items-center mt-4'><span><MdOutlineAccessTime/></span> 5 min  <span><CiCalendar/></span> 12<sup className='text-[8px]'>th</sup>, Oct 2022</p>
          </div>

        </div>
        <div className="flex justify-center items-center mt-12 hover:text-gray-600">
        <Link href='/blog'><button className="w-[115px] h-[49px] border-b-2 border-black">View More</button></Link>
        </div>
      </div>

      
    </div>
  </>
  )
}

export default Hero5
