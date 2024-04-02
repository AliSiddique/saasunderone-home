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
          Develop with the latest technology.
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
            Next-Auth
          </h2>
          <p className="text-lg tracking-wide text-black mt-4">
            Implement user authentication with Next-Auth, a flexible and easy-to-use
            solution that supports various authentication providers.
          </p>
        </div>
        <div>
          <h2 className="text-3xl  text-black font-medium">
            Tailwind CSS
          </h2>
          <p className="text-lg tracking-wide text-black mt-4">
            Utilize Tailwind CSS to create custom designs and responsive layouts
            with minimal effort, enabling you to build visually appealing
            interfaces.
          </p>
        </div>
        <div>
          <h2 className="text-3xl  text-black font-medium">
            Prisma ORM
          </h2>
          <p className="text-lg tracking-wide text-black mt-4">
            Leverage Prisma ORM to interact with your database, enabling you to
            easily query, update, and manage your data with a type-safe API.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}