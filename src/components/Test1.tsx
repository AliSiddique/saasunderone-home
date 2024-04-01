import React from 'react'

type Props = {}

export default function Test1({}: Props) {
  return (
    <div>
        <section      >
  <div
    className="relative items-center w-full mx-auto 2xl:max-w-7xl border-b-2 2xl:border-x-2 border-black"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className="relative p-8 lg:px-20 items-center gap-12 h-full lg:inline-flex bg-yellow-500"
      >
        <div      >
          <p className="text-4xl tracking-tight font-medium text-black">
            "I've been using Flabbergasted for over a year now, and it has truly
            been a game-changer in my crypto journey. The platform's
             interface helped me understand  the complex world of
            digital finance. "
          </p>
          <p className="max-w-xl mt-4 xl:text-xl tracking-tight text-black">
            Matt Lenoir Head of Design Ops at FRII-ends
          </p>

        </div>
      </div>
      <div className="block w-full aspect-square lg:mt-0 bg-yellow-500 h-full">
        <img
          className="h-full object-cover border-black"
          alt="testimonial"
          src="/images/testimonial.png"
        />
      </div>
    </div>
  </div>
</section>

    </div>
  )
}