import React from 'react'

type Props = {
  params: {
    slug: string
  }
}

export default function page({params}: Props) {
  const slug = params.slug
  console.log(slug)
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
              src="/integrations/stripe.svg"
              alt=""
            />
            <p className="text-xl lg:text-2xl font-medium text-black">Stripe</p>
          </div>
          <p className="mt-4 text-sm  max-w-xl tracking-wide text-black">
            Stripe is a digital music service that gives you access to
            millions of songs.
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
          <p>Flabbergasted</p>
        </li>
        <li className="p-8">
          <p>Website</p>
          <p>
            <a className="hover:text-black text-lila-800" href="#"
              >Lexingtonthemes.com</a
            >
          </p>
        </li>
        <li className="p-8">
          <p>Cateogry</p>
          <p>
            <a className="hover:text-black text-lila-800" href="#">Media</a>,
            <a className="hover:text-black text-lila-800" href="#">Music</a>
          </p>
        </li>
        <li className="p-8">
          <p>Docs</p>
          <p>
            <a href="#_" className="hover:text-black text-lila-800"
              >Embed Docs</a
            >
          </p>
        </li>
        <li className="p-8 fe">
          <p>Contact</p>
          <p>
            <a className="hover:text-black text-lila-800" href="#_">Stripe</a>
          </p>
        </li>
      </ul>
    </div>
    <div className="lg:col-span-4 p-8 lg:p-20 bg-white">
      <img
        src="/images/stripe.png"
        className="rounded-2xl border-2 border-black shadow-large"
        alt=""
      />
      <div className="mt-12 lg:mt-24 prose-styles">
        <h2>Overview</h2>
        <p>
          The Stripe integration makes it easy to create, update, and view
          Flabbergasted issues and their data directly from Stripe.
          Notifications and synced threads keep colleagues in the loop on
          projects and issues.
        </p>
        <h2>How it works</h2>
        <p>
          Create Flabbergasted issues from Stripe by using the More actions
          menu on a Stripe message. Files and context from the root message
          will be included in the resulting window. If a default template is
          used for the team you're creating an issue in, the template's text
          will appear in the description field.
        </p>
        <p>
          Creating Flabbergasted issues from Stripe also allows syncing
          comment threads in both applications. This is particularly useful
          for keeping users reporting issues informed in Stripe even if they
          don't have a Flabbergasted account. In addition to syncing
          comments bidirectionally, the synced thread in Stripe will be
          updated when the issue is completed or cancelled.
        </p>
        <p>
          Links from Flabbergasted sent in Stripe will expand to show a
          preview with key properties such as description, status, and
          assignee for issue links and description, status, and target dates
          for project links. Expanded links will include actions when
          available so that members can update issues directly from Stripe.
        </p>
        <p>
          The app offers several types of notifications for Stripe. Enable
          personal notifications so that Inbox notifications also go to
          Stripe. Team and project notifications can be directed to
          dedicated Stripe channels to keep everyone in the company updated
          regardless of whether they have Flabbergasted accounts.
        </p>
        <h2>Configure</h2>
        <p>
          Flabbergasted admins can configure this integration in Settings.
          Completing this step enables creating issues from Stripe, message
          actions, and expandable links for every member of the workspace.
        </p>
        <h2>Learn more</h2>
        <p>
          More information about the Stripe integration is available in our <a
            href="#">documentation</a
          >.
        </p>
      </div>
    </div>
  </div>
</div>

</section>

    </div>
  )
}