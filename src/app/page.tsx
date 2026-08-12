import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Opportunities from "@/components/Opportunities/Opportunities";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import VisionMission from "@/components/VisionMission/VisionMission";
import OurValues from "@/components/OurValues/OurValues";
import Cta from "@/components/CTA/Cta";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Opportunities /> */}
        
        <WhyChooseUs />
        <VisionMission />
        
        <OurValues />
        {/* <HowItWorks /> */}
        {/* <InvestmentPlans /> */}
        {/* <Testimonials /> */}
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}