import React from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import background from '../../public/banners/heroShop.png' 

interface IBannerProp {
    title: string;
    page1: string;
    page2: string;
}
const Banner = (Props: IBannerProp) => {
    const { title, page1, page2 } = Props;
  return (
    <div className="pt-[100px]">
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="py-16 text-center">
            {/* Small Logo  */}
            <div className="w-16 h-16 mx-auto mb-2">
              <Image
                src="/banners/minilogo.png"
                alt="logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            {/* \Shop Heading  */}
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>

            {/* Breadcrumb  */}
            <p className="text-sm text-gray-500 mt-2 flex items-center justify-center space-x-2">
              <span>{page1}</span>
              <FaAngleRight  className="text-gray-900 h-3 w-3 text-xs" />
              <span>{page2}</span>
            </p>
          </div>
        </div>

        {/* Background Image  */}
        <div className="absolute inset-0 z-0">
            <Image src={background} alt="background" layout="fill" objectFit="cover" className="pointer-events-none opacity-50"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
