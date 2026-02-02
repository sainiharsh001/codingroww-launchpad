import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and personal brands",
    price: "$499",
    period: "one-time",
    popular: false,
    features: [
      "5-Page Responsive Website",
      "Mobile-First Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Social Media Links",
      "1 Month Free Support",
      "Google Analytics Setup",
    ],
    notIncluded: [
      "Custom Web Application",
      "E-commerce Features",
      "Advanced SEO",
      "Social Media Marketing",
    ],
  },
  {
    name: "Growth",
    description: "Ideal for growing businesses and startups",
    price: "$1,499",
    period: "one-time",
    popular: true,
    features: [
      "10-Page Custom Website",
      "Advanced UI/UX Design",
      "Full SEO Optimization",
      "E-commerce Integration",
      "CMS (Content Management)",
      "3 Months Free Support",
      "Speed Optimization",
      "Blog Setup",
      "Email Newsletter Integration",
    ],
    notIncluded: [
      "Custom Web Application",
      "Ongoing Marketing",
    ],
  },
  {
    name: "Premium",
    description: "Complete solution for established brands",
    price: "$3,999",
    period: "one-time",
    popular: false,
    features: [
      "Unlimited Pages Website",
      "Custom Web Application",
      "Premium UI/UX Design",
      "Full E-commerce Store",
      "Advanced SEO Strategy",
      "6 Months Free Support",
      "Custom Integrations",
      "Performance Optimization",
      "Security Hardening",
      "Priority Support",
      "Brand Style Guidelines",
    ],
    notIncluded: [],
  },
];

const monthlyPlans = [
  {
    name: "SEO Essentials",
    price: "$299",
    features: ["Keyword Optimization", "Monthly Reports", "Technical SEO"],
  },
  {
    name: "Social Growth",
    price: "$399",
    features: ["Content Calendar", "Community Management", "Analytics"],
  },
  {
    name: "Full Marketing",
    price: "$799",
    features: ["SEO + Social", "Ad Campaigns", "Conversion Tracking"],
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Pricing
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mt-4 mb-6">
              Simple, Transparent{" "}
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. No hidden fees, no
              surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Plans */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                  plan.popular
                    ? "bg-card border-primary shadow-glow scale-105"
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-white text-sm font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-display mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground mb-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground/90">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 opacity-40"
                    >
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">—</span>
                      </div>
                      <span className="text-sm line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="block">
                  <Button
                    variant={plan.popular ? "gradient" : "outline"}
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Monthly Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-4 mb-4">
              Ongoing Marketing Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Keep your brand growing with our monthly marketing packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {monthlyPlans.map((plan) => (
              <div
                key={plan.name}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-foreground mb-4">
                  {plan.price}
                  <span className="text-base text-muted-foreground font-normal">
                    /month
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Plan CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Need a Custom Plan?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Every business is unique. Let's create a tailored solution that
              fits your specific needs and budget.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Contact Us for Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
