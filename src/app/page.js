import { CTASection, Header, HeroSection, TestimonialSection } from "@/components/Home.index";
import Image from "next/image";
import JobAlert from  '../components/JobAlert'
export default function Home() {
  return (
    <div>
       <Header />
      <HeroSection />
      <JobAlert />
      <CTASection />
    </div>
  );
}
