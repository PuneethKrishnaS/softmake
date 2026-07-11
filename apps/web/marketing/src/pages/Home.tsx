import {
  HeroSection,
  WhatWeServe,
  SoftwareDevServices,
  TechStackShowcase,
  WhyChooseUs,
  ContactFormSection
} from '../components/landing';

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      <HeroSection />
      <WhatWeServe />
      <SoftwareDevServices />
      <TechStackShowcase />
      <WhyChooseUs />
      <ContactFormSection />
    </div>
  );
}
