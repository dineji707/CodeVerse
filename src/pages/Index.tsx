import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LearningPathCard from "@/components/LearningPathCard";
import Footer from "@/components/Footer";
import { Code, Globe, BookOpen, Cloud, Brain, Briefcase, Sparkles, Trophy, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const learningPaths = [
    {
      title: "DSA Practice Hub",
      description: "Master data structures and algorithms with 180+ practice problems",
      icon: Code,
      path: "/dsa",
      gradient: "gradient-primary",
      topics: 182,
    },
    {
      title: "Web Development",
      description: "Build modern web apps with React, Node.js, and full-stack technologies",
      icon: Globe,
      path: "/webdev",
      gradient: "gradient-secondary",
      topics: 38,
    },
    {
      title: "Core CS Subjects",
      description: "Deep dive into OS, DBMS, Networks, and OOP fundamentals",
      icon: BookOpen,
      path: "/core-cs",
      gradient: "gradient-accent",
      topics: 85,
    },
    {
      title: "DevOps & Cloud",
      description: "Learn Docker, Kubernetes, CI/CD, AWS, Azure, and GCP",
      icon: Cloud,
      path: "/devops",
      gradient: "gradient-primary",
      topics: 42,
    },
    {
      title: "AI/ML & Data Science",
      description: "Explore machine learning, deep learning, and data analysis",
      icon: Brain,
      path: "/aiml",
      gradient: "gradient-secondary",
      topics: 56,
    },
    {
      title: "Career Preparation",
      description: "Interview prep, resume building, and career guidance",
      icon: Briefcase,
      path: "/career",
      gradient: "gradient-accent",
      topics: 92,
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Interactive Learning",
      description: "Hands-on coding exercises with instant feedback",
    },
    {
      icon: Trophy,
      title: "Gamification",
      description: "Earn badges, points, and climb the leaderboard",
    },
    {
      icon: Code,
      title: "Real Projects",
      description: "Build portfolio-worthy projects as you learn",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join thousands of learners on the same journey",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Learning Paths Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Learning Path</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive resources for every stage of your tech journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {learningPaths.map((path, index) => (
            <div 
              key={path.path}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <LearningPathCard {...path} />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CodeVerse</span>?
          </h2>
          <p className="text-muted-foreground text-lg">
            The complete platform for modern tech education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="glass-card p-6 text-center hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech of the Week */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass-card p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-block glass-card px-4 py-2 mb-4">
              <Sparkles className="inline h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Tech of the Week</span>
            </div>
            
            <h2 className="text-4xl font-bold mb-4">
              Artificial Intelligence & Machine Learning
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Discover how AI is transforming industries. Learn the fundamentals of ML algorithms, 
              neural networks, and build your first AI model this week.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/aiml">Explore AI/ML</Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link to="/articles">Read Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass-card p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join over 8,500 learners mastering coding, DSA, web development, 
            DevOps, and cutting-edge technologies.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-12" asChild>
            <Link to="/dsa">Get Started for Free</Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • 100+ free tutorials
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
