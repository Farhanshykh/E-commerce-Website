import React from 'react'

const ShopBar2 = () => {
  return (
    <div className='w-full h-auto md:h-[300px] flex flex-col md:flex-row justify-around items-center bg-[#FAF4F4] py-3'>
      <div className='w-[300px] h-[108px]'>
        <h1 className='font-medium text-[32px] poppins leading-[48px] '>Free Delivery</h1>
        <p className='font-normal text-base text-[#8c8c8c] leading-[30px]'>For all orders over $50 consectetur adipim scing elit.</p>
      </div>
      <div className='w-[300px] h-[108px]'>
        <h1 className='font-medium text-[32px] poppins leading-[48px] '>90 Days Return</h1>
        <p className='font-normal text-base text-[#8c8c8c] leading-[30px]'>If goods have problems, consectetur adipim scing elit.</p>
      </div>
      <div className='w-[300px] h-[108px]'>
        <h1 className='font-medium text-[32px] poppins leading-[48px] '>Secure Payment</h1>
        <p className='font-normal text-base text-[#8c8c8c] leading-[30px]'>100% secure payment, consectetur adipim scing elit.</p>
      </div>
    </div>
  )
}

export default ShopBar2
