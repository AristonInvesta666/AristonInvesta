import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Opportunities from "@/components/Opportunities/Opportunities";
import WhyChoose from "@/components/WhyChooseUs/WhyChoose";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import InvestmentPlans from "@/components/InvestmentPlans/InvestmentPlans";
import Testimonials from "@/components/Testimonials/Testimonials";
import Cta from "@/components/CTA/Cta";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Opportunities />
        <WhyChooseUs />
        <HowItWorks />
        <InvestmentPlans />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
