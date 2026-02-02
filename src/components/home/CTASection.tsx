import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              Limited Time Offer: 20% Off All Services
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
            Ready to <span className="text-gradient">Transform</span> Your
            Digital Presence?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's build something amazing together. Get a free consultation and
            discover how we can help your brand grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="heroOutline" size="xl">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
