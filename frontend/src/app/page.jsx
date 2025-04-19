import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import DodatniNapotki from "./components/DodatniNapotki";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Kontakt from "./components/Kontakt";
import Nasveti from "./components/Nasveti";
import AboutMe from "./components/AboutMe";
import DarilniBoni from "./components/DarilniBoni";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutMe />
      <Nasveti />
      <DodatniNapotki />
      <DarilniBoni />
      <FAQ />
      <Kontakt />
      <Footer />
    </>
  );
}
