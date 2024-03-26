import { config } from "../../config";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features1 from "@/components/Feature";
import CTAHome from "@/components/CTA";
import FeatureTwo from "@/components/FeatureTWO";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTANew from "@/components/CTa2";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Home",
  description: "Home Page",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: config.opengraphTitle,
    description: config.opengraphDescription,
    url: config.siteUrl,
    siteName: config.opengraphSiteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.twitterTitle,
    description: config.twitterDescription,
    creator: config.twitterHandle,
  },
  category: config.category,
};
export default function page() {
  return (
    <div>
          <Navbar/>

      <Hero/>
      <Features1/>
      <CTAHome/>
      <FeatureTwo/>
      <Pricing/>
      <FAQ/>
      <CTANew/>
      <Footer/>
    </div>
  )
}
