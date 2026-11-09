import { Pricing } from "@/components/pricing";
import { Audience } from "@/components/audience";
import { Benefits } from "@/components/benefits";
import { Cta } from "@/components/cta";
import { Hero } from "@/components/hero";
import { ProductShowcase } from "@/components/product-showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Steps } from "@/components/steps";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProductShowcase />
        <Steps />
        <Benefits />
        <Audience />
        <Pricing />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
