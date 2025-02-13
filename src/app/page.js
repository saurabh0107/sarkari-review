import { CTASection, Header, HeroSection, TestimonialSection } from "@/components/Home.index";
import Image from "next/image";
export default function Home() {
  return (
    <div>
       <Header />
      <HeroSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
