
import Card from './Card';

const products = [
    {
      image: "/products/1.png",
      title: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      id: 1,
    },
    {
      image: "/products/2.png",
      title: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      id: 2,
    },
    {
      image: "/products/3.png",
      title: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      id: 3,
    },
    {
      image: "/products/4.png",
      title: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      id: 4,
    },
    {
        image: "/products/5.png",
        title: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        id: 5,
      },
      {
        image: "/products/6.png",
        title: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
        id: 6,
      },
      {
        image: "/products/7.png",
        title: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
        id: 7,
      },
      {
        image: "/products/8.png",
        title: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
        id: 8,
      },
      {
        image: "/products/9.png",
        title: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        id: 9,
      },
      {
        image: "/products/10.png",
        title: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
        id: 10,
      },
      {
        image: "/products/11.png",
        title: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
        id: 11,
      },
      {
        image: "/products/12.png",
        title: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
        id: 12,
      },
      {
        image: "/products/13.png",
        title: "Trenton modular sofa_3",
        price: "Rs. 25,000.00",
        id: 13,
      },
      {
        image: "/products/14.png",
        title: "Granite dining table with dining chair",
        price: "Rs. 25,000.00",
        id: 14,
      },
      {
        image: "/products/15.png",
        title: "Outdoor bar table and stool",
        price: "Rs. 25,000.00",
        id: 15,
      },
      {
        image: "/products/16.png",
        title: "Plain console with teak mirror",
        price: "Rs. 25,000.00",
        id: 16,
      },
  ];
const ShopProducts = () => {
  return (
    <div className="flex flex-wrap justify-between mt-5">
    {products.map((elem) => (
      <div key={elem.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
        <Card
          image={elem.image}
          title={elem.title}
          price={elem.price}
        />
      </div>
    ))}
  </div>
  )
}

export default ShopProducts
