import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";
import sofa from "../../../../public/products/14.png";
import cart from "../../../../public/banners/cart.png";
import ShopBar2 from "@/components/ShopBar2";
import Banner from "@/components/Banner";
export default function Cart() {
  return (
    <div>
      <Banner title="Cart" page1="Home" page2="Cart" />

      <main className=" text-black bg-[#ffffff] p-4 md:p-8 mb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            {/* Product List Section */}
            <div className="lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className=" bg-[#FFF9E5] ">
                      <th className="pb-4 p-4 text-left font-semibold">
                        Product
                      </th>
                      <th className="pb-4 p-4 text-left font-semibold">
                        Price
                      </th>
                      <th className="pb-4 p-4 text-left font-semibold">
                        Quantity
                      </th>
                      <th className="pb-4 p-4 text-left font-semibold">
                        Subtotal
                      </th>
                      <th className="pb-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-4">
                        <div className="flex items-center gap-4">
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-yellow-100">
                            <Image
                              src={sofa}
                              alt="Asgaard sofa"
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <span className="text-gray-600">Asgaard sofa</span>
                        </div>
                      </td>
                      <td className="py-4">Rs. 250,000.00</td>
                      <td className="py-4">
                        <input
                          type="number"
                          min="1"
                          value="1"
                          className="w-16 rounded border p-1 text-center"
                          aria-label="Product quantity"
                        />
                      </td>
                      <td className="py-4">Rs. 250,000.00</td>
                      <td className="py-4">
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          aria-label="Remove item"
                        >
                          <FaTrash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cart Totals Section */}
            <div className="lg:col-span-1">
              <div className="rounded-lg bg-[#FFF9E5] p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold">Cart Totals</h2>

                <div className="space-y-4">
                  <div className="flex justify-between border-b pb-4">
                    <span className="font-medium">Subtotal</span>
                    <span>Rs. 250,000.00</span>
                  </div>

                  <div className="flex justify-between border-b pb-4">
                    <span className="font-medium">Total</span>
                    <span className="text-lg font-semibold">
                      Rs. 250,000.00
                    </span>
                  </div>
                  <Link href={"/checkout"}>
                    <button
                      className="w-full rounded-full border border-black py-3 text-black transition hover:bg-gray-800 hover:text-white"
                      aria-label="Proceed to checkout"
                    >
                      Check Out
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ShopBar2 />
    </div>
  );
}
