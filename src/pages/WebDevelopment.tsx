import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Globe, Server, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopment = () => {
  const tracks = [
    {
      name: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular"],
      projects: 8,
      level: "Beginner to Advanced",
    },
    {
      name: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      technologies: ["Node.js", "Express", "Django", "Spring Boot", "MongoDB", "PostgreSQL"],
      projects: 7,
      level: "Intermediate",
    },
    {
      name: "Full Stack Development",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      technologies: ["MERN Stack", "MEAN Stack", "Django + React", "Spring + Angular"],
      projects: 10,
      level: "Advanced",
    },
  ];

  const tutorials = [
    { title: "Building Responsive Layouts", duration: "45 min", level: "Beginner" },
    { title: "React Hooks Deep Dive", duration: "60 min", level: "Intermediate" },
    { title: "RESTful API Design", duration: "90 min", level: "Intermediate" },
    { title: "State Management with Redux", duration: "75 min", level: "Advanced" },
    { title: "Authentication & Authorization", duration: "120 min", level: "Advanced" },
    { title: "Deploying Web Applications", duration: "50 min", level: "Intermediate" },
  ];

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <Code2 className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Web Development</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Build <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Modern Web Apps</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn frontend, backend, and full-stack development with hands-on projects
          </p>
        </div>

        {/* Learning Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {tracks.map((track, index) => (
            <Card 
              key={track.name}
              className="glass-card p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${track.color} flex items-center justify-center mb-4`}>
                <track.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{track.name}</h3>
              <Badge variant="outline" className="mb-4">{track.level}</Badge>
              
              <p className="text-sm text-muted-foreground mb-4">
                {track.projects} hands-on projects
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {track.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 glass rounded-lg">
                    {tech}
                  </span>
                ))}
                {track.technologies.length > 4 && (
                  <span className="text-xs px-2 py-1 glass rounded-lg">
                    +{track.technologies.length - 4}
                  </span>
                )}
              </div>

              <Button variant="ghost" className="w-full" asChild>
                <Link to="/roadmap">View Roadmap</Link>
              </Button>
            </Card>
          ))}
        </div>

        {/* Popular Tutorials */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Popular Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tutorials.map((tutorial, index) => (
              <Card 
                key={tutorial.title}
                className="glass-card p-4 hover-lift cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{tutorial.title}</h4>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>⏱️ {tutorial.duration}</span>
                      <Badge variant="outline" className="text-xs">
                        {tutorial.level}
                      </Badge>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/tutorial/${tutorial.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      Start
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mini Projects Section */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Build Real Projects</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Apply your skills by building portfolio-worthy projects like Todo apps, 
            Blog platforms, E-commerce sites, and more
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/articles">Browse Projects</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/roadmap">View Roadmap</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
