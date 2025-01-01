'use client';
import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

interface ICardProps {
    image: string;
    title: string;
    price: string;
}

const Card = (props: ICardProps) => {
    const { image, title, price } = props;
    return (
        <div className='mx-2'>
            <div className='group bg-transparent w-full sm:w-[200px] md:w-[287px] h-auto md:h-[397px] flex flex-col  cursor-pointer relative'>
                <div className='flex flex-col items-center pb-4 h-auto md:h-[287px] '>
                    <Image 
                        src={image} 
                        alt="item image" 
                        width={287} 
                        height={287} 
                        className='w-full h-auto object-contain' 
                    />
                </div>
                <div className='flex flex-col pl-4 pb-4'>
                    <h1 style={{ fontFamily: 'Poppins' }} className='text-sm sm:text-base font-normal'>
                        {title}
                    </h1>
                    <h3 style={{ fontFamily: 'Poppins' }} className='font-medium text-lg sm:text-xl md:text-2xl leading-7 sm:leading-8 md:leading-9'>
                        {price}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Card;
