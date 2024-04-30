"use client"

export default function CTANew() {
    return (
      <section>
      <div
        className="items-center w-full mx-auto 2xl:max-w-7xl bg-black p-8 lg:p-20 2xl:px-0 2xl:border-x-2 border-black"
      >
        <div className="items-center gap-12 h-full">
          <div className="text-center max-w-3xl mx-auto">
            <img
              className="mx-auto justify-center w-32 h-32 shadow shadow-white rounded-full"
    
              src="/images/blob1.svg"
              alt=""
            />
    
            <p
              className="text-3xl lg:text-5xl mt-8 tracking-tight font-medium text-white"
            >
              Ready to start your business? <span className="md:block lg:text-lila-600"
                >Join now!</span
              >
            </p>
            <p className="max-w-lg mx-auto mt-4 lg:text-xl tracking-wide text-white">
              Start making money with your business today. Our templates come with
              everything you need to get started.
            </p>
            <div className="mt-12">
              <a
                className="text-black items-center shadow shadow-lila-600 text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-lila-300 focus:bg-lila-600 border-lila-600 duration-300 outline-none focus:shadow-none border-2 sm:w-auto py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:bg-lila-500"
                href="/">Buy <span className="ml-3">&rarr;</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
  