import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Globe,
  Code2,
  Search,
  Share2,
  Palette,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Portfolio, Business & E-commerce websites that look stunning and convert visitors.",
    price: "Starting from $499",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Custom MERN stack applications built for scale and performance.",
    price: "Starting from $1,499",
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description:
      "Data-driven strategies to increase your visibility and organic traffic.",
    price: "Starting from $299/mo",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Engage your audience and grow your following with strategic content.",
    price: "Starting from $399/mo",
  },
  {
    icon: Palette,
    title: "Branding & UI/UX",
    description:
      "Create a memorable brand identity that resonates with your audience.",
    price: "Starting from $799",
  },
];

export const ServicesPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mt-4 mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Grow Online</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From stunning websites to comprehensive marketing strategies, we've
            got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold font-display mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="text-primary font-semibold text-sm">
                {service.price}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button variant="gradient" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
