import React from "react";
// import Navbar from "./Navbar";
import Hero from "./Hero";
import LogoCloud from "./LogoCloud";
import BentoGridSection from "./BentoGrid";
import Footer from "./Footer";
import CTA from "./CTA";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import('./Navbar'), {ssr: false})

type Props = {};

export default function LandingPageOne({}: Props) {
  return (
    <div>
        <Navbar />
        <Hero />
      <LogoCloud />
      <BentoGridSection />
      <CTA />
      <Footer />
    </div>
  );
}
