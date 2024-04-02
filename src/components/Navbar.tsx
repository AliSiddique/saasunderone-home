"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Pricing', href: '#pricing' },
  { name: 'Docs', href: 'https://docs.saasunderone.com/' },
  { name: 'Changelog', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
<div
  className="mx-auto w-full bg-lila-500 2xl:border-2 justify-center sticky top-0 z-20 2xl:max-w-7xl border-y-2 border-black"
>
  <div
    className="mx-auto w-full flex flex-col lg:flex-row py-6 md:py-0 lg:items-center lg:justify-between 2xl:max-w-7xl px-8 md:px-0"
    x-data="{ open: false }"
  >
    <div className="text-black items-center flex justify-between flex-row">
      <a
        className="items-center font-bold gap-3 inline-flex text-lg tracking-tighter md:hidden"
        href="/"
        ><span>Saasunderone.</span>
      </a>
      <button
        className="focus:outline-none focus:shadow-outline md:hidden ml-auto border-2 border-black bg-red-500"
        ><svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          ><path
            className="inline-flex"
            d="M4 6h16M4 12h16M4 18h16"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"></path><path
            className="hidden"
            d="M6 18L18 6M6 6l12 12"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"></path>
        </svg>
      </button>
    </div>
    <nav
      className="flex-col items-center flex-grow hidden md:flex text-black text-lg font-medium tracking-wide md:flex-row md:justify-start md:mt-0 lg:p-0 py-2 md:py-0 md:px-0 md:pb-0 px-5"
    >
      <a
        className="duration-300 ease-in-out focus:outline-none focus:shadow-none focus:text-orange/90 hover:text-lila-900 md:my-0 px-4 py-2 transform transition md:ml-8 lg:ml-16 2xl:ml-0"
        href="/"
        >Docs
      </a>


      <a
        className="duration-300 ease-in-out focus:outline-none focus:shadow-none focus:text-orange/90 hover:text-lila-900 md:my-0 px-4 py-2 transform transition"
        href="/templates"
        >Templates
      </a>
      {/* <div className="relative" x-data="{ open: false }">
        <button
          className="duration-300 ease-in-out focus:outline-none focus:shadow-none focus:text-orange/90 hover:text-lila-900 md:my-0 px-4 py-2 transform transition inline-flex items-center gap-3"
          ><span>Style Guide</span><svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline h-4 transition-transform duration-200 transform rotate-0 icon icon-tabler icon-tabler-chevron-down"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
              d="M6 9l6 6l6 -6"></path></svg></button><div
         
          className="absolute right-0 z-10 w-auto mt-2 origin-top-right rounded-lg bg-white ring-2 ring-black focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >

        </div>
      </div> */}

      <a
        className="text-white md:ml-auto bg-black border-l-2 border-black duration-500 ease-in-out focus:outline-none ring-inset ring-offset-black focus:ring-2 focus:ring-black focus:ring-offset-2 h-12 lg:h-20 hover:bg-white hover:text-black inline-flex tracking-wide items-center justify-center px-6 text-center transform transition py-2 md:py-4"
        href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/645ac44b-ee66-4368-bb58-be869569fb88"
        ><span>Buy</span>
      </a>
    </nav>
  </div>
</div>

  )
}
