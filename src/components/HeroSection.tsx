import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Cloud, Brain } from "lucide-react";
import heroImage from "@/assets/hero-coding.jpg";

const HeroSection = () => {
  const floatingIcons = [
    { Icon: Code, delay: "0s", position: "top-20 left-[10%]" },
    { Icon: Database, delay: "0.5s", position: "top-40 right-[15%]" },
    { Icon: Cloud, delay: "1s", position: "bottom-32 left-[20%]" },
    { Icon: Brain, delay: "1.5s", position: "bottom-20 right-[10%]" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <div
            key={index}
            className={`absolute ${position} opacity-20`}
            style={{ animationDelay: delay }}
          >
            <Icon className="h-16 w-16 text-primary animate-float" />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-block glass-card px-4 py-2 text-sm font-medium text-primary">
              🚀 Welcome to the Future of Learning
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Master Coding,{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Build Your Future
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              From DSA fundamentals to advanced AI/ML, DevOps, and Cloud Computing. 
              Interactive tutorials, practice problems, and career guidance all in one place.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="glass" size="lg">
                Explore Roadmaps
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              {[
                { label: "Topics", value: "100+" },
                { label: "Practice Problems", value: "500+" },
                { label: "Learners", value: "10K+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:block hidden">
            <div className="glass-card p-4 animate-float">
              <img
                src={heroImage}
                alt="Coding and Technology Illustration"
                className="rounded-xl w-full h-auto shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-glow" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1s" }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
