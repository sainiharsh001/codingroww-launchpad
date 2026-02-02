import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Code2,
  Search,
  Share2,
  Palette,
  ArrowRight,
  Check,
  Zap,
  Layers,
  ShoppingCart,
  Monitor,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom-designed websites that captivate visitors and drive conversions. From sleek portfolios to powerful e-commerce platforms.",
    price: "Starting from $499",
    features: [
      "Responsive Design (Mobile-First)",
      "SEO Optimized Structure",
      "Fast Loading Speed",
      "Modern UI/UX Design",
      "Content Management System",
      "Analytics Integration",
    ],
    types: [
      { icon: Monitor, name: "Portfolio Sites" },
      { icon: Layers, name: "Business Websites" },
      { icon: ShoppingCart, name: "E-commerce Stores" },
    ],
  },
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Full-stack MERN applications built for performance, scalability, and exceptional user experience.",
    price: "Starting from $1,499",
    features: [
      "Custom MERN Stack Development",
      "RESTful API Integration",
      "Real-time Features",
      "Database Design & Optimization",
      "Authentication & Security",
      "Cloud Deployment",
    ],
    types: [
      { icon: Zap, name: "SaaS Platforms" },
      { icon: Layers, name: "Custom Dashboards" },
      { icon: Smartphone, name: "Progressive Web Apps" },
    ],
  },
  {
    icon: Search,
    title: "SEO & Digital Marketing",
    description:
      "Data-driven strategies to boost your visibility, increase organic traffic, and dominate search rankings.",
    price: "Starting from $299/mo",
    features: [
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Technical SEO Audit",
      "Link Building Campaigns",
      "Content Marketing Strategy",
      "Monthly Performance Reports",
    ],
    types: [
      { icon: Search, name: "Local SEO" },
      { icon: Globe, name: "National SEO" },
      { icon: Layers, name: "E-commerce SEO" },
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Strategic social media management to grow your audience, increase engagement, and build brand loyalty.",
    price: "Starting from $399/mo",
    features: [
      "Content Strategy & Calendar",
      "Daily/Weekly Post Management",
      "Community Engagement",
      "Paid Ad Campaigns",
      "Influencer Partnerships",
      "Analytics & Reporting",
    ],
    types: [
      { icon: Share2, name: "Instagram & Facebook" },
      { icon: Zap, name: "LinkedIn & Twitter" },
      { icon: Smartphone, name: "TikTok & YouTube" },
    ],
  },
  {
    icon: Palette,
    title: "Branding & UI/UX Design",
    description:
      "Create a memorable brand identity that resonates with your audience and sets you apart from competitors.",
    price: "Starting from $799",
    features: [
      "Logo Design & Brand Identity",
      "Brand Style Guidelines",
      "UI/UX Design & Prototyping",
      "Design System Creation",
      "Marketing Collateral",
      "Social Media Templates",
    ],
    types: [
      { icon: Palette, name: "Brand Identity" },
      { icon: Monitor, name: "UI Design" },
      { icon: Layers, name: "UX Research" },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mt-4 mb-6">
              Solutions That Drive{" "}
              <span className="text-gradient">Results</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From stunning websites to comprehensive marketing strategies, we
              provide everything you need to succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-primary mb-8">
                    {service.price}
                  </div>

                  {/* Service Types */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {service.types.map((type) => (
                      <div
                        key={type.name}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-sm"
                      >
                        <type.icon className="w-4 h-4 text-primary" />
                        {type.name}
                      </div>
                    ))}
                  </div>

                  <Link to="/contact">
                    <Button variant="gradient" size="lg">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                {/* Features Card */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:order-1" : ""
                  } p-8 rounded-3xl bg-card border border-border`}
                >
                  <h3 className="text-xl font-semibold mb-6">What's Included</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and find the perfect solution for your
              needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="heroOutline" size="xl">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
