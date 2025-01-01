import ShopBar from "@/components/ShopBar";
import ShopProducts from "@/components/ShopProducts";
import ShopBar2 from "@/components/ShopBar2";
import Banner from "@/components/Banner";

const ShopPage = () => {
  return (
    <div className="w-full h-auto bg-white poppins">
      <div>
        <Banner 
        title="Shop"
        page1="Home"
        page2="Shop"/>
       
      </div>
      <ShopBar />
      <ShopProducts />
      <div className="flex flex-row justify-center items-center gap-4 my-10">
        <button className="bg-[#FBEBB5] h-[60px] w-[60px] rounded-xl ">
          1
        </button>
        <button className="bg-[#FFF9E5] h-[60px] w-[60px] rounded-xl ">
          2
        </button>
        <button className="bg-[#FFF9E5] h-[60px] w-[60px] rounded-xl ">
          3
        </button>
        <button className="bg-[#FFF9E5] h-[60px] w-[98px] rounded-xl ">
          Next
        </button>
      </div>
      <ShopBar2 />
    </div>
  );
};

export default ShopPage;
