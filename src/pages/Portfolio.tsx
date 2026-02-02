import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Code2 } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Website", "Web App", "E-commerce", "Branding"];

const projects = [
  {
    title: "TechVenture Dashboard",
    category: "Web App",
    description:
      "A comprehensive SaaS dashboard for startup analytics and team management.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "#",
  },
  {
    title: "Artisan Coffee Co.",
    category: "E-commerce",
    description:
      "Modern e-commerce platform with subscription features for specialty coffee.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    tech: ["Next.js", "Stripe", "Sanity CMS"],
    link: "#",
  },
  {
    title: "Fitness Pro",
    category: "Website",
    description:
      "Personal trainer portfolio with booking system and client testimonials.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    tech: ["React", "Tailwind", "Calendly"],
    link: "#",
  },
  {
    title: "Urban Architecture",
    category: "Website",
    description:
      "Stunning portfolio site for an award-winning architecture firm.",
    image:
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=600&fit=crop",
    tech: ["React", "Framer Motion", "Three.js"],
    link: "#",
  },
  {
    title: "HealthTrack App",
    category: "Web App",
    description:
      "Health monitoring web application with real-time data visualization.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    tech: ["React", "D3.js", "Firebase"],
    link: "#",
  },
  {
    title: "Luxe Fashion",
    category: "E-commerce",
    description:
      "High-end fashion e-commerce with AR try-on features.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
    tech: ["Next.js", "Shopify", "Three.js"],
    link: "#",
  },
  {
    title: "Bloom Wellness",
    category: "Branding",
    description:
      "Complete brand identity for a holistic wellness center.",
    image:
      "https://images.unsplash.com/photo-1600618528240-fb9fc964b853?w=800&h=600&fit=crop",
    tech: ["Figma", "Illustrator", "Brand Guidelines"],
    link: "#",
  },
  {
    title: "Crypto Exchange",
    category: "Web App",
    description:
      "Real-time cryptocurrency trading platform with advanced charts.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    tech: ["React", "WebSocket", "TradingView"],
    link: "#",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-display mt-4 mb-6">
              Our <span className="text-gradient">Creative Work</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our portfolio of stunning websites, web applications, and
              brand identities we've created for clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold font-display mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-muted-foreground" />
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
              Let's Create Something Amazing
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to start your project? Let's discuss how we can bring your
              vision to life.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
