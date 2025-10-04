import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, CheckCircle2, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";

const DSAPractice = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const topics = [
    { name: "Arrays & Strings", problems: 45, icon: "📊", difficulty: "easy", completed: 28 },
    { name: "Linked Lists", problems: 30, icon: "🔗", difficulty: "easy", completed: 18 },
    { name: "Stacks & Queues", problems: 22, icon: "📚", difficulty: "medium", completed: 12 },
    { name: "Trees & Graphs", problems: 38, icon: "🌳", difficulty: "medium", completed: 8 },
    { name: "Dynamic Programming", problems: 42, icon: "💡", difficulty: "hard", completed: 4 },
    { name: "Sorting & Searching", problems: 35, icon: "🔍", difficulty: "easy", completed: 22 },
    { name: "Recursion & Backtracking", problems: 32, icon: "🔄", difficulty: "hard", completed: 6 },
    { name: "Greedy Algorithms", problems: 28, icon: "💰", difficulty: "medium", completed: 10 },
  ];

  const difficulties = [
    { value: "all", label: "All", color: "bg-muted" },
    { value: "easy", label: "Easy", color: "bg-green-500/20 text-green-600" },
    { value: "medium", label: "Medium", color: "bg-yellow-500/20 text-yellow-600" },
    { value: "hard", label: "Hard", color: "bg-red-500/20 text-red-600" },
  ];

  const filteredTopics = selectedDifficulty === "all" 
    ? topics 
    : topics.filter(t => t.difficulty === selectedDifficulty);

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <Code className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Data Structures & Algorithms</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Master <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DSA</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Build problem-solving skills with structured practice from basics to advanced
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Problems", value: "182", icon: Code, color: "text-primary" },
            { label: "Completed", value: "68", icon: CheckCircle2, color: "text-green-500" },
            { label: "Success Rate", value: "74%", icon: TrendingUp, color: "text-secondary" },
            { label: "Rank", value: "#42", icon: Award, color: "text-accent" },
          ].map((stat) => (
            <Card key={stat.label} className="glass-card p-4 hover-lift">
              <div className="flex items-center gap-3">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Difficulty Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {difficulties.map((diff) => (
            <Button
              key={diff.value}
              variant={selectedDifficulty === diff.value ? "default" : "glass"}
              size="sm"
              onClick={() => setSelectedDifficulty(diff.value)}
              className={selectedDifficulty === diff.value ? diff.color : ""}
            >
              {diff.label}
            </Button>
          ))}
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic, index) => {
            const progress = (topic.completed / topic.problems) * 100;
            return (
              <Card 
                key={topic.name} 
                className="glass-card p-6 hover-lift cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{topic.icon}</div>
                  <Badge 
                    variant="outline" 
                    className={
                      topic.difficulty === "easy" ? "bg-green-500/20 text-green-600" :
                      topic.difficulty === "medium" ? "bg-yellow-500/20 text-yellow-600" :
                      "bg-red-500/20 text-red-600"
                    }
                  >
                    {topic.difficulty}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{topic.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {topic.problems} problems • {topic.completed} completed
                </p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-primary">{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <Button variant="ghost" className="w-full mt-4" asChild>
                  <Link to={`/dsa/${topic.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>
                    Continue Practice
                  </Link>
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="glass-card p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-2">Ready to Code?</h2>
          <p className="text-muted-foreground mb-4">
            Start solving problems with our interactive coding environment
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/sql-playground">SQL Playground</Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/leaderboard">View Leaderboard</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DSAPractice;
