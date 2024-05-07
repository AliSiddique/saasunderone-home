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
import Feature3 from "@/components/Feature3";
import Feature4 from "@/components/Feature4";
import Test1 from "@/components/Test1";
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

      <Hero/>
      <Features1/>
      <FeatureTwo/>
      <Feature3/>
      <Feature4/>
      <Pricing/>
      <CTANew/>
    </div>
  )
}
