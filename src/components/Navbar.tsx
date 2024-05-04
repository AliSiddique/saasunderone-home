"use client"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

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
      <Link
        href="https://saasunderone.lemonsqueezy.com/buy/db982dc5-06cf-4673-89f0-ae42cdf947e9"
        className="text-black items-center md:hidden shadow ml-auto border-2 shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none  duration-100 focus:bg-black focus:text-white  py-3 rounded-lg h-16 focus:translate-y-1  hover:text-lila-800 tracing-wide"

        // className="focus:outline-none focus:shadow-outline md:hidden ml-auto border-2 border-black bg-red-500"
        >
        Get Now
      </Link>
    </div>
    <nav
      className="flex-col items-center flex-grow hidden md:flex text-black text-lg font-medium tracking-wide md:flex-row md:justify-start md:mt-0 lg:p-0 py-2 md:py-0 md:px-0 md:pb-0 px-5"
    >
      <a
        className="duration-300 ease-in-out focus:outline-none focus:shadow-none focus:text-orange/90 hover:text-lila-900 md:my-0 px-4 py-2 transform transition md:ml-8 lg:ml-16 2xl:ml-0"
        href="https://docs.saasunderone.com"
        target='_blank'
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
        href="https://nextjs-boilerplate-magna.lemonsqueezy.com/buy/db982dc5-06cf-4673-89f0-ae42cdf947e9"
        ><span>Buy</span>
      </a>
    </nav>
  </div>
</div>

  )
}
