import { CTASection, Header, HeroSection, TestimonialSection,Footer } from "@/components/Home.index";
import Image from "next/image";
import JobAlert from  '../components/JobAlert'
import ReviewList from '../components/ReviewList'
export default function Home() {
  return (
    <div>
       <Header />
      <HeroSection />
      <JobAlert />
      {/* <ReviewList/> */}
      <CTASection />
      <Footer/>
    </div>
  );
}
