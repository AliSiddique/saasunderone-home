import React from 'react'

type Props = {}

export default function Feature3({}: Props) {
  return (
    <div>
        <section >
  <div
    className="relative items-center w-full mx-auto 2xl:max-w-7xl 2xl:border-x-2 border-b-2 border-black"
  >
    <div className="relative p-8 lg:p-20 items-center gap-12 h-full bg-yellow-500">
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-4xl lg:text-5xl  font-medium text-black">
          Navigating the digital financial frontier
        </p>
      </div>
      <div className="relative items-center w-full mx-auto mt-12">
        <img
          className="object-cover w-full lg:rounded-full h-96 border-2 border-black object-top bg-white"
          src="/images/collab.svg"
          alt=""
        />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:text-center lg:grid-cols-3 gap-6 lg:gap-12 mt-12"
      >
        <div>
          <h2 className="text-3xl  text-black font-medium">
            Secure Wallets
          </h2>
          <p className="text-lg tracking-wide text-black mt-4">
            Rest easy knowing your crypto assets are protected by
            state-of-the-art security measures and encryption, ensuring your
            safety
          </p>
        </div>
        <div>
          <h2 className="text-3xl  text-black font-medium">
            Instant Transactions
          </h2>
          <p className="text-lg tracking-wide text-black mt-4">
            Experience the convenience of near-instantaneous cryptocurrency
            transfers, allowing you to send and receive digital assets in
            real-time, eliminating delays.
          </p>
        </div>
        <div>
          <h2 className="text-3xl  text-black font-medium">
            Multi-Currency Support
          </h2>
          <p className="text-lg tracking-wide text-black mt-4">
            Access a diverse range of cryptocurrencies in one unified platform,
            enabling you to explore and manage various digital assets
            effortlessly.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}