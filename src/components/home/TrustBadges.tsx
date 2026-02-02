import { Shield, Clock, Award, Headphones } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your data and projects are safe with us",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We meet deadlines, every time",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Premium results or your money back",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're always here when you need us",
  },
];

export const TrustBadges = () => {
  return (
    <section className="py-16 border-y border-border/50 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
