import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Users,
  Heart,
  Award,
  Rocket,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We focus on delivering measurable outcomes that directly impact your business growth.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of industry trends to bring cutting-edge solutions to every project.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients, treating every project as a true partnership.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We love what we do, and it shows in every pixel, line of code, and strategy we create.",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Started as a freelance developer" },
  { year: "2020", title: "First 10 Clients", description: "Built a loyal client base" },
  { year: "2021", title: "Team Expansion", description: "Grew to a team of 5 specialists" },
  { year: "2022", title: "100+ Projects", description: "Delivered 100+ successful projects" },
  { year: "2023", title: "Global Reach", description: "Serving clients in 15+ countries" },
  { year: "2024", title: "Full-Service Agency", description: "Complete digital solutions" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mt-4 mb-6">
              The Story Behind{" "}
              <span className="text-gradient">CodingRoww</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a team of passionate developers, designers, and marketers
              dedicated to helping brands grow in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-6">
                      <span className="text-5xl font-bold text-white font-display">C</span>
                    </div>
                    <h3 className="text-2xl font-bold font-display">CodingRoww</h3>
                    <p className="text-muted-foreground">Founder & Lead Developer</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center animate-float">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                From Passion Project to Digital Agency
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  CodingRoww started as a one-person mission: to help small
                  businesses and startups compete in the digital world without
                  breaking the bank.
                </p>
                <p>
                  What began as freelance web development quickly grew into
                  something bigger. As clients started seeing real results—more
                  traffic, more leads, more sales—word spread.
                </p>
                <p>
                  Today, we're a full-service digital agency with a team of
                  talented developers, designers, and marketers. But our mission
                  remains the same: <strong className="text-foreground">to help brands grow digitally.</strong>
                </p>
                <p>
                  We believe every brand deserves a stunning online presence,
                  regardless of size or budget. That's why we combine premium
                  quality with accessible pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              "To empower businesses of all sizes with world-class digital
              solutions that drive growth, build brand loyalty, and create
              lasting impact in the digital landscape."
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold font-display mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display mt-4">
              Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className="relative p-6 rounded-2xl bg-card border border-border"
                >
                  <div className="text-3xl font-bold text-primary font-display mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's work together to create something amazing. Your success story
              starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Start a Project
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
    </Layout>
  );
};

export default About;
