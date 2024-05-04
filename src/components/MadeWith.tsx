import Link from "next/link";

export default function MadeWith() {
    return (
      <div className="fixed inset-x-0 bottom-0 px-6 pb-6 z-50">
         
        <Link
              href="https://twitter.com/salinash_"
              target="_blank"
              type="button"
              className="text-black items-center shadow shadow-lila-600 text-xs font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-lila-300 focus:bg-lila-600 border-lila-600 duration-300 outline-none focus:shadow-none border-2 sm:w-auto py-3 rounded-lg h-8 tracking-wide focus:translate-y-1 w-full hover:bg-lila-500"
              >Made by @salinash</Link>
      </div>
    )
  }
  