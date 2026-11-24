import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Services from "./components/Services";
import Banner from "./components/Banner";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-20 lg:gap-32">
        <Hero />
        <Logos />
        <Services />
        <Banner />
        <CaseStudies />
        <Process />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
