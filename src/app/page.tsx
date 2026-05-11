import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoIAm from "@/components/WhoIAm";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Blog from "@/components/Blog";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { getSiteSettings } from "@/sanity/lib/queries";

export const revalidate = 300;

export default async function Home() {
  const settings = await getSiteSettings();

  return (
    <>
      <Header />
      <main style={{ paddingTop: "68px" }}>
        <Hero heroImageUrl={settings.heroImageUrl} />
        <WhoIAm portraitUrl={settings.portraitUrl} />
        <Services />
        <Philosophy />
        <Blog />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
