import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import DodatniNapotki from "./components/DodatniNapotki";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Kontakt from "./components/Kontakt";
import Nasveti from "./components/Nasveti";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <DodatniNapotki />
      <FAQ />
      <Nasveti />
      <Kontakt />
      <Footer />
      </>
  );
}
