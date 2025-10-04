import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, TrendingUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Articles = () => {
  const categories = ["All", "DSA", "Web Dev", "DevOps", "AI/ML", "Career"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const articles = [
    {
      id: 1,
      title: "Understanding Time Complexity: A Beginner's Guide",
      category: "DSA",
      readTime: "8 min",
      date: "Oct 1, 2025",
      views: "2.3k",
      excerpt: "Learn how to analyze algorithm efficiency with Big O notation and practical examples.",
      author: "CodeVerse Team",
      trending: true,
    },
    {
      id: 2,
      title: "Building Modern React Applications with TypeScript",
      category: "Web Dev",
      readTime: "12 min",
      date: "Sep 28, 2025",
      views: "1.8k",
      excerpt: "A comprehensive guide to setting up and building type-safe React applications.",
      author: "Sarah Chen",
      trending: true,
    },
    {
      id: 3,
      title: "Docker Container Best Practices for Production",
      category: "DevOps",
      readTime: "10 min",
      date: "Sep 25, 2025",
      views: "1.5k",
      excerpt: "Essential tips for optimizing Docker containers in production environments.",
      author: "Alex Kumar",
      trending: false,
    },
    {
      id: 4,
      title: "Introduction to Neural Networks and Deep Learning",
      category: "AI/ML",
      readTime: "15 min",
      date: "Sep 20, 2025",
      views: "3.1k",
      excerpt: "Dive into the fundamentals of neural networks and how they power modern AI.",
      author: "Dr. Emily Wang",
      trending: true,
    },
    {
      id: 5,
      title: "Cracking the FAANG Interview: A Strategic Approach",
      category: "Career",
      readTime: "20 min",
      date: "Sep 15, 2025",
      views: "4.2k",
      excerpt: "Complete guide to preparing for technical interviews at top tech companies.",
      author: "Michael Rodriguez",
      trending: true,
    },
    {
      id: 6,
      title: "Advanced SQL Queries Every Developer Should Know",
      category: "DSA",
      readTime: "10 min",
      date: "Sep 10, 2025",
      views: "1.9k",
      excerpt: "Master complex SQL queries including joins, subqueries, and window functions.",
      author: "CodeVerse Team",
      trending: false,
    },
    {
      id: 7,
      title: "Kubernetes Architecture Explained",
      category: "DevOps",
      readTime: "14 min",
      date: "Sep 5, 2025",
      views: "2.1k",
      excerpt: "Understanding Kubernetes components, pods, services, and deployments.",
      author: "James Thompson",
      trending: false,
    },
    {
      id: 8,
      title: "Building Your First Machine Learning Model",
      category: "AI/ML",
      readTime: "18 min",
      date: "Sep 1, 2025",
      views: "2.7k",
      excerpt: "Step-by-step guide to creating and training your first ML model with Python.",
      author: "Dr. Emily Wang",
      trending: false,
    },
  ];

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <BookOpen className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Blog & Articles</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Learn from <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Expert Articles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In-depth tutorials, guides, and insights from industry experts
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "glass"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Trending Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            Trending Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.filter(a => a.trending).slice(0, 4).map((article, index) => (
              <Link to={`/articles/${article.id}`} key={article.id}>
                <Card 
                  className="glass-card p-6 hover-lift cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Badge className="mb-3">{article.category}</Badge>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                      <span>👁️ {article.views}</span>
                    </div>
                    <span>{article.date}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* All Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Articles</h2>
          <div className="grid grid-cols-1 gap-4">
            {filteredArticles.map((article, index) => (
              <Card 
                key={article.id}
                className="glass-card p-6 hover-lift cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline">{article.category}</Badge>
                      {article.trending && (
                        <span className="flex items-center gap-1 text-xs text-primary">
                          <Sparkles className="h-3 w-3" />
                          Trending
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>By {article.author}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                      <span>👁️ {article.views}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/articles/${article.id}`}>
                      Read More →
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="glass-card p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-2">Never Miss an Article</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to get the latest tutorials and tech insights delivered to your inbox
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
