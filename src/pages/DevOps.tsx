import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, GitBranch, Container, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const DevOps = () => {
  const topics = [
    {
      name: "Git & Version Control",
      icon: GitBranch,
      color: "from-orange-500 to-red-500",
      subtopics: ["Git Basics", "Branching", "Merge Strategies", "GitHub Actions"],
      labs: 6,
    },
    {
      name: "Docker & Containers",
      icon: Container,
      color: "from-blue-500 to-cyan-500",
      subtopics: ["Docker Basics", "Dockerfile", "Docker Compose", "Container Orchestration"],
      labs: 10,
    },
    {
      name: "Kubernetes",
      icon: Container,
      color: "from-purple-500 to-pink-500",
      subtopics: ["Pods", "Services", "Deployments", "ConfigMaps", "Helm Charts"],
      labs: 12,
    },
    {
      name: "CI/CD Pipelines",
      icon: Workflow,
      color: "from-green-500 to-emerald-500",
      subtopics: ["Jenkins", "GitHub Actions", "GitLab CI", "Automated Testing"],
      labs: 8,
    },
  ];

  const cloudPlatforms = [
    { name: "AWS", icon: "☁️", courses: 16, color: "bg-orange-500/20" },
    { name: "Azure", icon: "🔷", courses: 12, color: "bg-blue-500/20" },
    { name: "GCP", icon: "🌐", courses: 10, color: "bg-green-500/20" },
  ];

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <Cloud className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">DevOps & Cloud</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Master <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DevOps & Cloud</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn modern DevOps practices, containerization, and cloud platforms
          </p>
        </div>

        {/* Cloud Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cloudPlatforms.map((platform, index) => (
            <Card 
              key={platform.name}
              className="glass-card p-6 text-center hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-6xl mb-4 ${platform.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto`}>
                {platform.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
              <p className="text-muted-foreground mb-4">{platform.courses} courses available</p>
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/articles">Explore {platform.name}</Link>
              </Button>
            </Card>
          ))}
        </div>

        {/* DevOps Topics */}
        <h2 className="text-3xl font-bold mb-6 text-center">Core DevOps Topics</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {topics.map((topic, index) => (
            <Card 
              key={topic.name}
              className="glass-card p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${topic.color} flex-shrink-0`}>
                  <topic.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{topic.name}</h3>
                  <Badge variant="outline" className="mb-4">{topic.labs} hands-on labs</Badge>
                  
                  <div className="space-y-2 mb-4">
                    {topic.subtopics.map((subtopic) => (
                      <div key={subtopic} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{subtopic}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full" asChild>
                    <Link to="/articles">Start Learning</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Mini Labs */}
        <div className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Hands-on Mini Labs</h2>
          <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
            Practice with real-world scenarios in our interactive lab environment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Deploy a Docker Container",
              "Set up CI/CD Pipeline",
              "Kubernetes Pod Management",
            ].map((lab, index) => (
              <Card key={lab} className="glass-card p-4 hover-lift cursor-pointer">
                <p className="font-semibold mb-2">🔬 {lab}</p>
                <p className="text-xs text-muted-foreground mb-3">Interactive hands-on lab</p>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link to="/articles">Launch Lab</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Become a DevOps Engineer?</h2>
          <p className="text-muted-foreground mb-6">
            Start with the basics or jump into advanced topics
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/roadmap">Begin Your Journey</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DevOps;
