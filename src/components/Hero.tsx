"use client"

import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Hero() {
  return (
    <section className="overflow-hidden relative">
    <div
      className="mx-auto 2xl:max-w-7xl border-b-2 border-black 2xl:border-x-2 bg-lila-500 relative overflow-hidden"
    >
      <img
        className="absolute shadow-large rounded-full shadow-black w-72 h-72 -top-20 -right-20"
        src="/images/blob3.svg"
        alt=""
      />
  
      <img
        className="absolute shadow-large rounded-full shadow-black w-72 h-72 -bottom-20 left-12"
        src="/images/blob4.svg"
        alt=""
      />
      <img
        className="absolute w-96 shadow-large rounded-full shadow-black h-96 -bottom-32 -right-20"
        src="/images/blob1.svg"
        alt=""
      />
      <img
        className="absolute shadow-large rounded-full shadow-black w-72 h-72 bottom-12 -left-20"
        src="/images/blob2.svg"
        alt=""
      />
      <img
        className="absolute shadow-large rounded-full shadow-black w-72 h-72 -top-48 left-52 right-52"
        src="/images/blob5.svg"
        alt=""
      />
  
      <div className="text-center mx-auto p-8 lg:p-20 lg:py-48 relative">
        <div className="mx-auto">
          <h2 className="text-3xl lg:text-5xl font-medium text-black">
            Pioneering the future of <span className="md:block"
              >decentralized finance
            </span>
          </h2>
          <p className="xl:text-xl text-black tracking-wide max-w-xl mx-auto mt-4">
            Join us on our journey to transform the financial landscape with
            cutting-edge cryptocurrency solutions and groundbreaking blockchain
            technologies.
          </p>
        </div>
        <div className=" flex mt-10 justify-center">
  
          <a
            className="text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white sm:w-auto py-3 rounded-lg h-16 focus:translate-y-1 w-full hover:text-lila-800 tracing-wide"
            href="/"
            >Explore all pages
          </a>
        </div>
      </div>
    </div>
  </section>
  
  )
}