import React from 'react'
import { ImEqualizer } from "react-icons/im";
import { BsFillGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
const ShopBar = () => {
  return (
    <div className="w-full h-[130px] py-4 md:py-0 md:h-[100px] bg-[#FAF4F4] flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row items-center justify-between w-full md:mx-[50px]">
                    <div className="flex flex-row justify-center md:justify-start gap-4 items-center">
                        <ImEqualizer className="w-[28px] h-[28px]" />
                        <p className="font-normal text-xl leading-7">Filter</p>
                        <BsFillGridFill className="w-[28px] h-[28px]" />
                        <BsViewList className="w-[28px] h-[28px]" />
                        <span className="w-[2px] h-6 bg-black" />
                        <p className="poppins font-normal text-base leading-6">Showing 1-16 of 32 results</p>
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end gap-4 items-center mx-2">
                        <p className="poppins font-normal text-xl leading-[30px]">Show</p>                  
                        <input 
                            type="text" 
                            placeholder="16" 
                            className="poppins font-normal text-lg md:text-xl w-[30px] h-[30px] md:w-[55px] md:h-[55px] text-center" 
                        />
                        <p className="poppins font-normal text-xl leading-[30px]">Sort by</p>                  
                        <input 
                            type="text" 
                            placeholder="Default" 
                            className="poppins text-base md:font-normal md:text-xl w-[88px] md:w-[188px] md:h-[55px] text-center" 
                        />
                    </div>
                </div>
            </div>
  )
}

export default ShopBar
