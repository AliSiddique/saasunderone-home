"use client"
import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'

type Props = {
    params: {
        slug: string
    }
}

export default function page({params}: Props) {
    const slug = params.slug
    const templates = [
        {
            name:"Next Auth",
            description:"A template for Next Auth",
            fullDescription:"A template for Next Auth",
            image:"/techs/nextauth.png",
            url:"/templates/nextauth",
            link:"https://www.google.com",
            screenshot:"/templates/nextauth-ss.png",
            docs:"https://www.google.com"
        },
        {
            name:"Job Board",
            description:"A job board template for Next.js",
            fullDescription:"Job Board\n\nA job board template for Next.js",
            image:"/techs/jobboard-logo.webp",
            url:"/templates/job-board",
            link:"https://www.google.com",
            screenshot:"/images/templates/job-board.png",
            docs:"https://www.google.com"
        },
        {
            name:"AI Startup",
            description:"A template for AI startups",
            fullDescription:"A template for AI startups",
            image:"/techs/openai.jpeg",
            url:"/templates/ai-startup",
            link:"https://www.google.com",
            screenshot:"/images/templates/ai-startup.png",
            docs:"https://www.google.com"
        },
        {
            name:"Clerk SAAS",
            description:"A template for Clerk SAAS",
            fullDescription:"A template for Clerk SAAS",
            image:"/techs/clerk.svg",
            url:"/templates/clerk-saas",
            link:"https://www.google.com",
            screenshot:"/images/templates/clerk-saas.png",
            docs:"https://www.google.com"
        }, {
            name:"Enterprise",
            description:"A template for Enterprise",
            fullDescription:"A template for Enterprise",
            image:"/techs/turbo-logo.svg",
            url:"/templates/enterprise",
            link:"https://www.google.com",
            screenshot:"/images/templates/enterprise.png",
            docs:"https://www.google.com"
        }
        
    ]
    let matchedTemplate = null;

    for (const template of templates) {
        if (template.url.includes(slug)) {
            matchedTemplate = template;
            break;
        }
    }
    
    if (matchedTemplate) {
        console.log("Matched Template:", matchedTemplate);
    } else {
        console.log("No matching template found for the slug:", slug);
    }
  return (
    <div>
        <section
  className=" border-t-0 border-b-2 border-black 2xl:max-w-7xl mx-auto"
>
<div className="p-8 lg:p-20 2xl:border-x-2 border-black bg-lila-500">
  <div
    className="grid gird-cols-1 lg:grid-cols-5 border-2 border-black shadow-large shadow-black rounded-3xl overflow-hidden lg:divide-x-2 divide-black"
  >
    <div className="bg-yellow-500 divide-black divide-y-2">
      <div className="p-8">

        <div>
          <div className="flex gap-4 items-center">
            <img
              className="w-8 h-8 "
              src={matchedTemplate?.image}
              alt=""
            />
            <p className="text-xl lg:text-2xl font-medium text-black">{matchedTemplate?.name}</p>
          </div>
          <p className="mt-4 text-sm  max-w-xl tracking-wide text-black">
            {matchedTemplate?.description}
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="text-black items-center shadow shadow-black text-lg font-semibold inline-flex px-6 focus:outline-none justify-center text-center bg-white border-black ease-in-out transform transition-all focus:ring-lila-700 focus:shadow-none border-2 duration-100 focus:bg-black focus:text-white py-3 rounded-lg h-16 tracking-wide focus:translate-y-1 w-full hover:text-lila-800"
              >Add
            </a>
          </div>
        </div>
      </div>
      <ul
        role="list"
        className="divide-y-2 text-black font-medium  grid-cols-2 grid lg:grid-cols-1 lg:text-left text-lg divide-black"
      >
        <li className="p-8">
          <p>Buult by</p>
          <p>SaasUnderOne</p>
        </li>
        <li className="p-8">
          <p>Website</p>
          <p>
            <a className="hover:text-black text-lila-800" href="#"
              >{matchedTemplate?.link}</a
            >
          </p>
        </li>

        <li className="p-8">
          <p>Docs</p>
          <p>
            <a href={matchedTemplate?.docs} className="hover:text-black text-lila-800"
              > Docs</a
            >
          </p>
        </li>
       
      </ul>
    </div>
    <div className="lg:col-span-4 p-8 lg:p-20 bg-white">
      <img
        src={matchedTemplate?.screenshot}
        className="rounded-2xl border-2 border-black shadow-large"
        alt=""
      />
      <div className="mt-12 lg:mt-24 prose-styles">
        {matchedTemplate?.fullDescription}
      </div>
    </div>
  </div>
</div>

</section>

    </div>
  )
}