import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, Users, Trophy, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Career = () => {
  const resources = [
    {
      icon: FileText,
      title: "Resume Builder",
      description: "Create ATS-friendly resumes with tech-focused templates",
      action: "Build Resume",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Mock Interviews",
      description: "Practice with common interview questions and get feedback",
      action: "Start Practice",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Trophy,
      title: "System Design",
      description: "Master system design concepts for senior roles",
      action: "Learn More",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Briefcase,
      title: "Job Portal",
      description: "Browse curated job listings from top tech companies",
      action: "View Jobs",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const interviewTopics = [
    { category: "DSA", questions: 28 },
    { category: "System Design", questions: 12 },
    { category: "Behavioral", questions: 18 },
    { category: "HR Round", questions: 10 },
    { category: "Technical Round", questions: 24 },
    { category: "Domain Specific", questions: 16 },
  ];

  const roadmaps = [
    {
      role: "Software Engineer",
      stages: ["DSA Basics", "Web/Backend", "System Design", "Mock Interviews"],
      duration: "6-9 months",
    },
    {
      role: "Frontend Developer",
      stages: ["HTML/CSS/JS", "React/Vue", "Projects", "Portfolio"],
      duration: "4-6 months",
    },
    {
      role: "DevOps Engineer",
      stages: ["Linux/Shell", "Docker/K8s", "CI/CD", "Cloud Platforms"],
      duration: "5-8 months",
    },
    {
      role: "Data Scientist",
      stages: ["Python/Stats", "ML Algorithms", "Projects", "Kaggle Competitions"],
      duration: "8-12 months",
    },
  ];

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <Target className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Career Preparation</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Launch Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tech Career</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From interview prep to resume building - everything you need to land your dream job
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Interview Questions", value: "92+" },
            { label: "Mock Tests", value: "18+" },
            { label: "Success Stories", value: "420+" },
            { label: "Avg. Package", value: "9.5 LPA" },
          ].map((stat, index) => (
            <Card key={stat.label} className="glass-card p-4 text-center hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {resources.map((resource, index) => (
            <Card 
              key={resource.title}
              className="glass-card p-6 hover-lift cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${resource.color} flex-shrink-0`}>
                  <resource.icon className="h-6 w-6 text-white" />
                </div>
              <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={
                      resource.title === "Resume Builder" ? "/resume-builder" :
                      resource.title === "Mock Interviews" ? "/interview-prep" :
                      resource.title === "System Design" ? "/articles" :
                      "/career"
                    }>
                      {resource.action} →
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interview Topics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <TrendingUp className="h-8 w-8 text-primary" />
            Interview Preparation
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {interviewTopics.map((topic, index) => (
              <Card 
                key={topic.category}
                className="glass-card p-4 text-center hover-lift cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <Link to="/interview-prep">
                  <p className="font-bold mb-1">{topic.category}</p>
                  <p className="text-2xl font-bold text-primary">{topic.questions}</p>
                  <p className="text-xs text-muted-foreground">questions</p>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Career Roadmaps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Career Roadmaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roadmaps.map((roadmap, index) => (
              <Card 
                key={roadmap.role}
                className="glass-card p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3">{roadmap.role}</h3>
                <p className="text-sm text-muted-foreground mb-4">⏱️ {roadmap.duration}</p>
                
                <div className="space-y-2 mb-4">
                  {roadmap.stages.map((stage, idx) => (
                    <div key={stage} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-sm">{stage}</span>
                    </div>
                  ))}
                </div>

                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/roadmap">View Full Roadmap</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Start Your Journey?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of successful candidates who prepared with CodeVerse
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/interview-prep">Begin Preparation</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/articles">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Career;
