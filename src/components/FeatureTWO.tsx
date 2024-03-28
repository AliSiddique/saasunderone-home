"use client"

import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Authentication',
    description: 'Authentication with NextAuth.js. Magic Link, OAuth, and passwordless.',
  },
  { name: 'Stripe Subscriptions', description: 'Allow your users to pay you with only a few steps.' },
  {
    name: 'Email templates',
    description: 'Beautifully designed email templates that are easy to customize and send.',
  },
  {
    name: 'SEO Optimized',
    description: 'SEO optimized pages to help you rank higher on search engines like Google.',
  },
  { name: 'Blog', description: 'Write your blogs with ready made MDX' },
  { name: 'Error handling', description: 'Handle your errors with Next.JS' },
  {
    name: 'Ready made design system',
    description: 'Built with shadcn, a design system for building modern web applications.',
  },
  {
    name: 'Landing pages',
    description: 'Launch faster with our ready made landing pages.',
  },
]

export default function FeatureTwo() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All-in-one platform</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
              dolor cupiditate blanditiis ratione.
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
