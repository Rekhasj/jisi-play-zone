import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { About, Attractions, Membership, PhotoBanner, Pricing, WhyUs } from "@/components/Sections";
import RevealObserver from "@/components/RevealObserver";
import Birthday from "@/components/Birthday";
import Shop from "@/components/Shop";
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
        <Shop />
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
