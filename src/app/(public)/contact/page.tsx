import ShopBar2 from "@/components/ShopBar2";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import Banner from "@/components/Banner";

const ShopPage = () => {
  return (
    <div className="w-full h-auto bg-[#FFFFFF] poppins">
      <div>
        <Banner 
        title="Contact"
        page1="Home"
        page2="Contact"/>
       
      </div>
      <div className="poppins w-full flex flex-col justify-center items-center my-10">
        <h1 className="font-semibold text-4xl leading-[54px] ">
          Get In Touch With Us
        </h1>
        <p className="max-w-[644px] h-auto poppins font-normal text-[#9F9F9F] leading-6 text-center">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-auto justify-between md:w-[1058px] h-auto mx-auto pt-20 mb-20">
        <div className="flex flex-col">
          <div className="flex items-baseline flex-col gap-4">
            <div className="flex flex-row items-baseline gap-4 mb-10">
              <div className="text-[22px]">
                <HiLocationMarker />
              </div>
              <div className="w-[212px]">
                <h3 className="poppins font-medium text-2xl leading-9">
                  Address
                </h3>
                <p className="poppins font-normal text-base leading-6">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex flex-row items-baseline gap-4 mb-10">
              <div className="text-[22px]">
                <FaPhone />
              </div>
              <div className="w-[212px]">
                <h3 className="poppins font-medium text-2xl leading-9">
                  Phone
                </h3>
                <p className="poppins font-normal text-base leading-6">
                  Mobile: +(84) 546-6789 Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            <div className="flex flex-row items-baseline gap-4 mb-10">
              <div className="text-[22px]">
                <IoIosTime />
              </div>
              <div className="w-[212px]">
                <h3 className="poppins font-medium text-2xl leading-9">
                  Working Time
                </h3>
                <p className="poppins font-normal text-base leading-6">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col" >
            <div className="w-auto md:w-[550px] mx-2 flex flex-col gap-6">
            <h3 className="poppins font-medium text-base leading-6">Your name</h3>
            <input type="text" placeholder="Enter your name" className="border-2 border-gray-400 w-full h-[75px] md:w-[530px] rounded-lg pl-2"/>
            <h3 className="poppins font-medium text-base leading-6">Email address</h3>
            <input type="text" placeholder="Abc@def.com" className="border-2 border-gray-400 w-full h-[75px] md:w-[530px] rounded-lg pl-2"/>
            <h3 className="poppins font-medium text-base leading-6">Subject</h3>
            <input type="text" placeholder="This is an optional" className="border-2 border-gray-400 w-full h-[75px] md:w-[530px] rounded-lg pl-2"/>
            <h3 className="poppins font-medium text-base leading-6">Message</h3>
            <input type="text" placeholder="Hi I'd like to ask about" className="border-2 border-gray-400 w-full h-[150px] md:w-[530px] rounded-lg pl-2"/>
            <button className="w-[237px] h-[48px] rounded-2xl border-2 border-gray-400 hover:bg-gray-400 hover:font-bold">Submit</button>
            </div>
        </div>
      </div>

      <ShopBar2 />
    </div>
  );
};

export default ShopPage;
