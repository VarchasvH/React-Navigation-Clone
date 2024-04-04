'use client'
import {NextUIProvider} from "@nextui-org/react";
import FeatureSection from "@/components/FeatureSection";
import HeroSection from "../components/HeroSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section>
     <NextUIProvider>
      <HeroSection/>
      <FeatureSection/>
      <CommunitySection/>
      <Footer/>
    </NextUIProvider>
      
    </section>
  );
}
