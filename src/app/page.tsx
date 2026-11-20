import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { About, Attractions, Membership, PhotoBanner, Pricing, WhyUs } from "@/components/Sections";
import RevealObserver from "@/components/RevealObserver";
import Birthday from "@/components/Birthday";
import Gallery from "@/components/Gallery";
import { BookingForm, FAQ, FloatingActions, Footer, Testimonials } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <About />
        <PhotoBanner />
        <Attractions />
        <Pricing />
        <Birthday />
        <Membership />
        <Gallery />
        <Testimonials />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
      <FloatingActions />
      <RevealObserver />
    </>
  );
}
