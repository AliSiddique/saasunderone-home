"use client"

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Authentication',
    description:
      'Magic Link, OAuth, and passwordless. All the tools you need to onboard your users quickly.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Stripe integration',
    description: 'Get paid quickly and easily with Stripe. We handle the integration for you.',
    icon: LockClosedIcon,
  },
  {
    name: 'Serverless functions',
    description: 'We handle the backend so you can focus on building your product.',
    icon: ServerIcon,
  },
]

export default function Features1() {
  return (
    <section className="relative flex items-center w-full">
    <div
      className="relative items-center w-full mx-auto 2xl:max-w-7xl 2xl:border-x-2 border-b-2 border-black"
    >
      <div className="relative p-8 lg:p-20 items-center gap-12 h-full bg-yellow-500">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-3xl lg:text-5xl font-medium text-black">
            Navigating the <span className="md:block">digital financial frontier</span
            >
          </p>
          <p className="xl:text-xl text-black tracking-wide max-w-xl mx-auto mt-4">
            Join us on our journey to transform the financial landscape with
            cutting-edge cryptocurrency solutions and groundbreaking blockchain
            technologies.
          </p>
        </div>
  
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:text-center lg:grid-cols-3 gap-6 lg:gap-12 mt-12"
        >
          <div>
            <img className="w-20 h-20 mx-auto" src="/images/blob1.svg" alt="" />
            <h2 className="text-3xl text-black font-medium mt-8">Secure Wallets</h2>
            <p className="text-lg tracking-wide text-black mt-4">
              Rest easy knowing your crypto assets are protected by
              state-of-the-art security measures and encryption.
            </p>
          </div>
          <div>
            <img className="w-20 h-20 mx-auto" src="/images/blob2.svg" alt="" />
            <h2 className="text-3xl text-black font-medium mt-8">Instant Transactions</h2>
            <p className="text-lg tracking-wide text-black mt-4">
              Experience the convenience of near-instantaneous cryptocurrency
              transfers, allowing you to send .
            </p>
          </div>
          <div>
            <img className="w-20 h-20 mx-auto"       src="/images/blob3.svg" alt="" />
            <h2 className="text-3xl text-black font-medium mt-8">
              Multi-Currency Support
            </h2>
            <p className="text-lg tracking-wide text-black mt-4">
              Access a diverse range of cryptocurrencies in one unified platform,
              enabling you to explore.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
