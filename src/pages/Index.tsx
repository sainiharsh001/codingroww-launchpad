import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustBadges />
      <ServicesPreview />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
