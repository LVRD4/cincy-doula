import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoIAm from "@/components/WhoIAm";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Blog from "@/components/Blog";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "68px" }}>
        <Hero />
        <WhoIAm />
        <Services />
        <Philosophy />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
