import SEO from "../components/SEO";
import {
  Hero,
  ServicesPreview,
  AboutPreview,
  TestimonialsSection,
  BenefitsSection,
  ProcessSection,
  CTASection,
  FAQSection,
  LocationsPreview,
} from "../components/sections";
import { SCHEMA_LOCAL_BUSINESS } from "../data/site";

export default function Home() {
  return (
    <>
      <SEO path="" schemaData={SCHEMA_LOCAL_BUSINESS} />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <BenefitsSection />
      <ProcessSection />
      <TestimonialsSection />
      <LocationsPreview />
      <FAQSection />
      <CTASection />
    </>
  );
}
