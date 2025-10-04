import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Cpu, Database, Network } from "lucide-react";
import { Link } from "react-router-dom";

const CoreCS = () => {
  const subjects = [
    {
      name: "Operating Systems",
      icon: Cpu,
      topics: ["Process Scheduling", "Memory Management", "File Systems", "Deadlocks", "Threading"],
      color: "from-orange-500 to-red-500",
      articles: 18,
      quizzes: 8,
    },
    {
      name: "Database Management",
      icon: Database,
      topics: ["ER Diagrams", "Normalization", "SQL Queries", "Transactions", "Indexing"],
      color: "from-blue-500 to-indigo-500",
      articles: 22,
      quizzes: 10,
    },
    {
      name: "Computer Networks",
      icon: Network,
      topics: ["OSI Model", "TCP/IP", "Routing Algorithms", "Network Security", "Protocols"],
      color: "from-green-500 to-teal-500",
      articles: 20,
      quizzes: 9,
    },
    {
      name: "Object-Oriented Programming",
      icon: BookOpen,
      topics: ["Classes & Objects", "Inheritance", "Polymorphism", "Abstraction", "Design Patterns"],
      color: "from-purple-500 to-pink-500",
      articles: 16,
      quizzes: 6,
    },
  ];

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <BookOpen className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Core Computer Science</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Master <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">CS Fundamentals</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dive into operating systems, databases, networks, and OOP concepts
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {subjects.map((subject, index) => (
            <Card 
              key={subject.name}
              className="glass-card p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${subject.color} flex-shrink-0`}>
                  <subject.icon className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{subject.name}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {subject.topics.map((topic) => (
                      <span key={topic} className="text-xs px-3 py-1 glass rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>📚 {subject.articles} articles</span>
                    <span>❓ {subject.quizzes} quizzes</span>
                  </div>

                  <Button variant="ghost" className="w-full" asChild>
                    <Link to={`/quiz/${subject.name.toLowerCase().replace(/\s+/g, '-')}`}>
                      Take Quiz
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Learning Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card p-6 text-center hover-lift">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold mb-2">Visual Diagrams</h3>
            <p className="text-sm text-muted-foreground">
              Understand concepts with interactive diagrams and flowcharts
            </p>
          </Card>
          
          <Card className="glass-card p-6 text-center hover-lift">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="font-bold mb-2">Practice MCQs</h3>
            <p className="text-sm text-muted-foreground">
              Test your knowledge with instant feedback and explanations
            </p>
          </Card>
          
          <Card className="glass-card p-6 text-center hover-lift">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-bold mb-2">Code Examples</h3>
            <p className="text-sm text-muted-foreground">
              Learn with practical implementations in multiple languages
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Master CS Concepts?</h2>
          <p className="text-muted-foreground mb-6">
            Start with fundamentals or jump to advanced topics
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/articles">Begin Learning</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoreCS;
