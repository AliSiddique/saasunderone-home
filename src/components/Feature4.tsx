import React from 'react'

type Props = {}

export default function Feature4({}: Props) {
  return (
    <div>
        <section className="relative flex items-center w-full ">
  <div
    className="relative items-center w-full mx-auto 2xl:max-w-7xl divide-y-2 border-b-2  divide-black 2xl:border-x-2 border-black">
    <div
      className="grid grid-cols-1 md:grid-cols-2 divide-y divide-black md:divide-y-0 md:divide-x-2">
      <div className="grid grid-cols-1 divide-y-2 divide-black">
        <div
          className="relative p-8 lg:px-20 py-12  items-center gap-12 h-full lg:inline-flex bg-white">
          <div className="max-w-xl text-center mx-auto">
            <p className="text-3xl lg:text-5xl 2xl:text-4xl tracking-tight font-medium text-black       ">
              Multi-currency support
            </p>
            <p className=" mt-4 text-lg tracking-wide text-black  font-normal mx-auto">
              Access a diverse range of cryptocurrencies in one unified platform, enabling you to explore and manage various digital assets.
            </p>

          </div>
        </div>
        <div className="w-full aspect-square h-full bg-green-400">
          <img
            className="border-b-0 object-cover"
            src="/images/thumbnail6.svg"
            alt="#"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 divide-y-2 divide-black">
        <div
          className="relative p-8 lg:px-20 py-12  items-center gap-12 h-full lg:inline-flex bg-white">
          <div className="max-w-xl text-center mx-auto">
            <p className="text-3xl lg:text-5xl 2xl:text-4xl tracking-tight font-medium text-black       ">
              Decentralized exchanges
            </p>
            <p className=" mt-4 text-lg tracking-wide text-black  font-normal mx-auto">
              Embrace peer-to-peer trading without intermediaries. Trade directly with other users on our platform and enjoying the benefits.
            </p>

          </div>
        </div>
        <div className="w-full aspect-square lg:mt-0 bg-lila-500 h-full">
          <img
            className="border-b-0 object-cover"
            src="/images/thumbnail5.svg"
            alt="#"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}