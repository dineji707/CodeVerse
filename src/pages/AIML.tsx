import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Code, BarChart3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AIML = () => {
  const tracks = [
    {
      name: "Python for Data Science",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      topics: ["NumPy", "Pandas", "Matplotlib", "Data Cleaning"],
      level: "Beginner",
    },
    {
      name: "Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      topics: ["Regression", "Classification", "Clustering", "Model Evaluation"],
      level: "Intermediate",
    },
    {
      name: "Deep Learning",
      icon: Sparkles,
      color: "from-orange-500 to-red-500",
      topics: ["Neural Networks", "CNN", "RNN", "Transformers"],
      level: "Advanced",
    },
    {
      name: "Data Visualization",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      topics: ["Seaborn", "Plotly", "Dashboards", "Storytelling"],
      level: "Intermediate",
    },
  ];

  const projects = [
    { name: "House Price Prediction", difficulty: "Beginner", tech: "Linear Regression" },
    { name: "Sentiment Analysis", difficulty: "Intermediate", tech: "NLP" },
    { name: "Image Classification", difficulty: "Advanced", tech: "CNN" },
    { name: "Recommendation System", difficulty: "Advanced", tech: "Collaborative Filtering" },
  ];

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <Brain className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">AI/ML & Data Science</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Enter the World of <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI & ML</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn machine learning, deep learning, and data science from scratch
          </p>
        </div>

        {/* Learning Tracks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {tracks.map((track, index) => (
            <Card 
              key={track.name}
              className="glass-card p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${track.color} flex-shrink-0`}>
                  <track.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{track.name}</h3>
                    <span className="text-xs px-2 py-1 glass rounded-full">{track.level}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {track.topics.map((topic) => (
                      <span key={topic} className="text-xs px-3 py-1 bg-muted/50 rounded-lg">
                        {topic}
                      </span>
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

        {/* Projects Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">Hands-on Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.name}
                className="glass-card p-6 hover-lift cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs px-2 py-1 rounded-lg ${
                    project.difficulty === "Beginner" ? "bg-green-500/20 text-green-600" :
                    project.difficulty === "Intermediate" ? "bg-yellow-500/20 text-yellow-600" :
                    "bg-red-500/20 text-red-600"
                  }`}>
                    {project.difficulty}
                  </span>
                  <span className="text-xs text-muted-foreground">• {project.tech}</span>
                </div>
                <Button variant="ghost" size="sm" className="w-full" asChild>
                  <Link to="/articles">View Project →</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Libraries */}
        <div className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Popular Tools & Libraries</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "NumPy", "Pandas", "Matplotlib", "Jupyter"].map((tool) => (
              <span key={tool} className="px-4 py-2 glass rounded-xl font-medium hover:bg-primary/20 transition-colors cursor-pointer">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Start Your AI/ML Journey Today</h2>
          <p className="text-muted-foreground mb-6">
            From basics to building your own ML models
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/roadmap">Explore Courses</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AIML;
