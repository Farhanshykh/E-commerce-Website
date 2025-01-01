import Image from "next/image";
import React from "react";
import ShopBar2 from "@/components/ShopBar2";
import Banner from "@/components/Banner";

export default function MyAccount() {
  return (
    <>
      <div className="h-auto">
        <Banner title="Account" page1="Home" page2="Account" />
      </div>
      <main className="min-h-screen w-full bg-[#ffffff] text-black flex flex-col md:flex-row">
        {/* Login Column */}
        <div className="w-full md:w-1/2 max-w-lg mx-auto p-8 md:p-16">
          <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
            Log In
          </h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="username" className="block mb-2">
                Username or email address
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 border border-gray-300 rounded-sm focus:ring-0"
              />
              <label htmlFor="remember" className="ml-2">
                Remember me
              </label>
            </div>
            <div className="flex flex-wrap items-center space-x-4">
              <button
                type="submit"
                className="px-8 py-2 border border-black rounded-lg hover:bg-gray-100"
              >
                Log In
              </button>
              <a className="text-black hover:underline">Lost Your Password?</a>
            </div>
          </form>
        </div>

        {/* Register Column */}
        <div className="w-full md:w-1/2 max-w-lg mx-auto p-8 md:p-16 bg-[#ffffff]">
          <h1 className="text-4xl font-bold mb-8 text-center md:text-left">
            Register
          </h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <p className="text-gray-600">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-gray-600 text-justify">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and
              for other purposes described in our{" "}
              <a className="underline hover:text-black">privacy policy</a>.
            </p>
            <button
              type="submit"
              className="px-8 py-2 border border-black rounded-lg hover:bg-gray-100"
            >
              Register
            </button>
          </form>
        </div>
      </main>
      <ShopBar2 />
    </>
  );
}
