import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <CaseStudies />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}