import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, CheckCircle2, Circle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Roadmap = () => {
  const roadmaps = [
    {
      title: "Software Engineer",
      duration: "6-9 months",
      difficulty: "Intermediate",
      phases: [
        {
          name: "Foundation",
          duration: "2 months",
          completed: true,
          topics: ["Programming Basics", "Data Structures", "Basic Algorithms", "Git & GitHub"],
        },
        {
          name: "Core DSA",
          duration: "2-3 months",
          completed: true,
          topics: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "Problem Solving"],
        },
        {
          name: "System Design",
          duration: "2 months",
          completed: false,
          topics: ["Scalability", "Databases", "Caching", "Load Balancing"],
        },
        {
          name: "Interview Prep",
          duration: "1-2 months",
          completed: false,
          topics: ["Mock Interviews", "Behavioral Questions", "Resume Building", "Portfolio"],
        },
      ],
    },
    {
      title: "Frontend Developer",
      duration: "4-6 months",
      difficulty: "Beginner",
      phases: [
        {
          name: "Web Fundamentals",
          duration: "1 month",
          completed: true,
          topics: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"],
        },
        {
          name: "Modern Frontend",
          duration: "2 months",
          completed: false,
          topics: ["React.js", "State Management", "Hooks", "Component Design"],
        },
        {
          name: "Advanced Tools",
          duration: "1-2 months",
          completed: false,
          topics: ["TypeScript", "Testing", "Build Tools", "Performance"],
        },
        {
          name: "Projects & Portfolio",
          duration: "1-2 months",
          completed: false,
          topics: ["Real Projects", "Portfolio Website", "GitHub Profile", "Deployment"],
        },
      ],
    },
    {
      title: "Full Stack Developer",
      duration: "8-12 months",
      difficulty: "Advanced",
      phases: [
        {
          name: "Frontend Mastery",
          duration: "3 months",
          completed: false,
          topics: ["React/Vue/Angular", "State Management", "UI/UX", "Responsive Design"],
        },
        {
          name: "Backend Development",
          duration: "3 months",
          completed: false,
          topics: ["Node.js/Django", "RESTful APIs", "Databases", "Authentication"],
        },
        {
          name: "DevOps & Deployment",
          duration: "2 months",
          completed: false,
          topics: ["Docker", "CI/CD", "Cloud Platforms", "Monitoring"],
        },
        {
          name: "Full Stack Projects",
          duration: "2-4 months",
          completed: false,
          topics: ["E-commerce App", "Social Platform", "SaaS Product", "Portfolio"],
        },
      ],
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
            <span className="text-sm font-medium">Career Roadmaps</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Your Path to <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Success</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured learning paths designed to take you from beginner to job-ready
          </p>
        </div>

        {/* Roadmaps */}
        {roadmaps.map((roadmap, roadmapIndex) => (
          <div key={roadmap.title} className="mb-16 animate-slide-up" style={{ animationDelay: `${roadmapIndex * 0.2}s` }}>
            <Card className="glass-card p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{roadmap.title}</h2>
                  <div className="flex items-center gap-3 text-sm">
                    <Badge variant="outline" className="bg-primary/10">
                      {roadmap.difficulty}
                    </Badge>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {roadmap.duration}
                    </span>
                  </div>
                </div>
                <Button variant="hero" asChild>
                  <Link to="/dsa">Start Learning</Link>
                </Button>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Overall Progress</span>
                  <span className="font-medium text-primary">
                    {Math.round((roadmap.phases.filter(p => p.completed).length / roadmap.phases.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                    style={{ width: `${(roadmap.phases.filter(p => p.completed).length / roadmap.phases.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Phases */}
              <div className="space-y-6">
                {roadmap.phases.map((phase, phaseIndex) => (
                  <div key={phase.name} className="relative">
                    {/* Connector Line */}
                    {phaseIndex < roadmap.phases.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-full bg-muted/30" />
                    )}
                    
                    <div className="flex gap-4">
                      {/* Phase Icon */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        phase.completed 
                          ? 'bg-gradient-to-br from-primary to-secondary' 
                          : 'bg-muted/30'
                      }`}>
                        {phase.completed ? (
                          <CheckCircle2 className="h-6 w-6 text-white" />
                        ) : (
                          <Circle className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>

                      {/* Phase Content */}
                      <Card className={`flex-1 p-6 transition-all ${
                        phase.completed 
                          ? 'glass-card' 
                          : 'bg-muted/10 border-muted/30'
                      }`}>
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold mb-1">{phase.name}</h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {phase.duration}
                            </p>
                          </div>
                          {phase.completed && (
                            <Badge className="bg-green-500/20 text-green-600">Completed</Badge>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {phase.topics.map((topic) => (
                            <span key={topic} className="text-xs px-3 py-1 glass rounded-full">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        ))}

        {/* CTA */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Choose Your Path</h2>
          <p className="text-muted-foreground mb-6">
            Start your journey today and track your progress along the way
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/dsa">Start DSA Practice</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/webdev">Learn Web Development</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Roadmap;
