import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, User, Calendar, Eye } from "lucide-react";

const ArticleDetail = () => {
  const { articleId } = useParams();

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
      content: `
        <h2>Introduction to Time Complexity</h2>
        <p>Time complexity is a fundamental concept in computer science that helps us analyze and compare the efficiency of algorithms. Understanding time complexity allows you to write better, more efficient code.</p>
        
        <h2>What is Big O Notation?</h2>
        <p>Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity. In computer science, we use it to classify algorithms according to how their running time or space requirements grow as the input size grows.</p>
        
        <h2>Common Time Complexities</h2>
        <ul>
          <li><strong>O(1) - Constant Time:</strong> The algorithm takes the same amount of time regardless of input size</li>
          <li><strong>O(log n) - Logarithmic Time:</strong> The algorithm's time grows logarithmically with input size</li>
          <li><strong>O(n) - Linear Time:</strong> Time grows linearly with input size</li>
          <li><strong>O(n log n) - Linearithmic Time:</strong> Common in efficient sorting algorithms</li>
          <li><strong>O(n²) - Quadratic Time:</strong> Time grows quadratically with input size</li>
        </ul>
        
        <h2>Practical Examples</h2>
        <p>Let's look at some practical examples to understand these concepts better...</p>
      `
    },
    {
      id: 2,
      title: "Building Modern React Applications with TypeScript",
      category: "Web Dev",
      readTime: "12 min",
      date: "Sep 28, 2025",
      views: "1.8k",
      author: "Sarah Chen",
      content: `
        <h2>Why TypeScript with React?</h2>
        <p>TypeScript brings type safety to React applications, catching errors at compile time rather than runtime. This guide will walk you through setting up and building a modern React application with TypeScript.</p>
        
        <h2>Setting Up Your Project</h2>
        <p>Start by creating a new React project with TypeScript support using Vite or Create React App...</p>
        
        <h2>Type-Safe Components</h2>
        <p>Learn how to create properly typed React components with interfaces and props...</p>
      `
    },
    {
      id: 3,
      title: "Docker Container Best Practices for Production",
      category: "DevOps",
      readTime: "10 min",
      date: "Sep 25, 2025",
      views: "1.5k",
      author: "Alex Kumar",
      content: `
        <h2>Production-Ready Docker Containers</h2>
        <p>Running Docker containers in production requires careful consideration of security, performance, and reliability.</p>
        
        <h2>Essential Best Practices</h2>
        <ul>
          <li>Use official base images</li>
          <li>Keep images small and efficient</li>
          <li>Implement proper health checks</li>
          <li>Use multi-stage builds</li>
          <li>Never run containers as root</li>
        </ul>
      `
    },
    {
      id: 4,
      title: "Introduction to Neural Networks and Deep Learning",
      category: "AI/ML",
      readTime: "15 min",
      date: "Sep 20, 2025",
      views: "3.1k",
      author: "Dr. Emily Wang",
      content: `
        <h2>Understanding Neural Networks</h2>
        <p>Neural networks are the foundation of modern artificial intelligence, inspired by the biological neural networks in our brains.</p>
        
        <h2>How Neural Networks Work</h2>
        <p>Learn about layers, neurons, activation functions, and how they process information...</p>
      `
    },
    {
      id: 5,
      title: "Cracking the FAANG Interview: A Strategic Approach",
      category: "Career",
      readTime: "20 min",
      date: "Sep 15, 2025",
      views: "4.2k",
      author: "Michael Rodriguez",
      content: `
        <h2>Preparing for FAANG Interviews</h2>
        <p>Landing a job at top tech companies requires strategic preparation across multiple areas.</p>
        
        <h2>Key Focus Areas</h2>
        <ul>
          <li>Data Structures and Algorithms</li>
          <li>System Design</li>
          <li>Behavioral Questions</li>
          <li>Company-Specific Preparation</li>
        </ul>
      `
    },
    {
      id: 6,
      title: "Advanced SQL Queries Every Developer Should Know",
      category: "DSA",
      readTime: "10 min",
      date: "Sep 10, 2025",
      views: "1.9k",
      author: "CodeVerse Team",
      content: `
        <h2>Master Complex SQL Queries</h2>
        <p>SQL is essential for any developer working with databases. This guide covers advanced queries that will level up your database skills.</p>
        
        <h2>Topics Covered</h2>
        <ul>
          <li>Complex JOINs</li>
          <li>Subqueries and CTEs</li>
          <li>Window Functions</li>
          <li>Query Optimization</li>
        </ul>
      `
    },
    {
      id: 7,
      title: "Kubernetes Architecture Explained",
      category: "DevOps",
      readTime: "14 min",
      date: "Sep 5, 2025",
      views: "2.1k",
      author: "James Thompson",
      content: `
        <h2>Understanding Kubernetes</h2>
        <p>Kubernetes has become the de facto standard for container orchestration. This article breaks down its architecture.</p>
      `
    },
    {
      id: 8,
      title: "Building Your First Machine Learning Model",
      category: "AI/ML",
      readTime: "18 min",
      date: "Sep 1, 2025",
      views: "2.7k",
      author: "Dr. Emily Wang",
      content: `
        <h2>Your First ML Model</h2>
        <p>This step-by-step guide will help you create and train your first machine learning model using Python.</p>
      `
    },
  ];

  const article = articles.find(a => a.id === parseInt(articleId || "1"));

  if (!article) {
    return (
      <div className="min-h-screen gradient-hero">
        <Navbar />
        <main className="container mx-auto px-4 pt-24 pb-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <Button asChild>
              <Link to="/articles">Back to Articles</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/articles">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </Button>

        {/* Article Header */}
        <Card className="glass-card p-8 mb-8">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {article.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              {article.views}
            </span>
          </div>

          <p className="text-lg text-muted-foreground">{article.excerpt}</p>
        </Card>

        {/* Article Content */}
        <Card className="glass-card p-8 mb-8">
          <div 
            className="prose prose-lg max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: article.content || "" }}
          />
        </Card>

        {/* Related Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles
              .filter(a => a.category === article.category && a.id !== article.id)
              .slice(0, 3)
              .map((relatedArticle) => (
                <Card 
                  key={relatedArticle.id}
                  className="glass-card p-4 hover-lift cursor-pointer"
                >
                  <Link to={`/articles/${relatedArticle.id}`}>
                    <Badge className="mb-2">{relatedArticle.category}</Badge>
                    <h3 className="font-bold mb-2 hover:text-primary transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
