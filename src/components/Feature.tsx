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
            Get everything you need <span className="md:block">in one template</span
            >
          </p>
          <p className="xl:text-xl text-black tracking-wide max-w-xl mx-auto mt-4">
            Our templates come with everything you need to get your startup off the
            ground. From authentication to payments, we've got you covered.
          </p>
        </div>
  
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:text-center lg:grid-cols-3 gap-6 lg:gap-12 mt-12"
        >
          <div>
            <img className="w-20 h-20 mx-auto" src="/images/blob1.svg" alt="" />
            <h2 className="text-3xl text-black font-medium mt-8">Authentication</h2>
            <p className="text-lg tracking-wide text-black mt-4">
              Magic Link, OAuth, and passwordless. All the tools you need to onboard
              your users quickly.
            </p>
          </div>
          <div>
            <img className="w-20 h-20 mx-auto" src="/images/blob2.svg" alt="" />
            <h2 className="text-3xl text-black font-medium mt-8">Payment</h2>
            <p className="text-lg tracking-wide text-black mt-4">
              Get paid quickly and easily with Stripe. We handle the integration for
              you.
            </p>
          </div>
          <div>
            <img className="w-20 h-20 mx-auto"       src="/images/blob3.svg" alt="" />
            <h2 className="text-3xl text-black font-medium mt-8">
              Email Marketing
            </h2>
            <p className="text-lg tracking-wide text-black mt-4">
              Send emails to your users quickly and easily. We handle the
              integration for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  )
}
