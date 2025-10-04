import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, CheckCircle } from "lucide-react";

const Tutorial = () => {
  const { topic } = useParams();

  const tutorials: Record<string, any> = {
    "react-hooks": {
      title: "React Hooks Deep Dive",
      duration: "60 min",
      level: "Intermediate",
      description: "Master React Hooks including useState, useEffect, useContext, and custom hooks",
      sections: [
        {
          title: "Introduction to Hooks",
          content: "React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to allow functional components to have the same capabilities as class components."
        },
        {
          title: "useState Hook",
          content: "The useState hook allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it.",
          code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`
        },
        {
          title: "useEffect Hook",
          content: "useEffect lets you perform side effects in functional components. It runs after every render by default, but you can control when it runs using dependencies.",
          code: `import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []); // Empty array means run once on mount

  return <div>{data ? data.message : 'Loading...'}</div>;
}`
        },
        {
          title: "Custom Hooks",
          content: "Custom hooks let you extract component logic into reusable functions. They must start with 'use' and can call other hooks.",
          code: `function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}`
        }
      ],
      keyTakeaways: [
        "Hooks let you use state and lifecycle features in functional components",
        "useState manages local component state",
        "useEffect handles side effects and lifecycle events",
        "Custom hooks enable logic reuse across components",
        "Always follow the Rules of Hooks"
      ]
    },
    "restful-api": {
      title: "RESTful API Design",
      duration: "90 min",
      level: "Intermediate",
      description: "Learn best practices for designing scalable and maintainable RESTful APIs",
      sections: [
        {
          title: "REST Principles",
          content: "REST (Representational State Transfer) is an architectural style for designing networked applications. It uses HTTP methods explicitly and maintains stateless communication."
        },
        {
          title: "HTTP Methods",
          content: "Understanding the correct use of HTTP methods is crucial for RESTful API design.",
          code: `GET    /api/users       # Get all users
GET    /api/users/:id   # Get specific user
POST   /api/users       # Create new user
PUT    /api/users/:id   # Update entire user
PATCH  /api/users/:id   # Partial update
DELETE /api/users/:id   # Delete user`
        },
        {
          title: "URL Structure",
          content: "Design clear, hierarchical URLs that represent resources and their relationships.",
          code: `# Good URL structure
/api/v1/users
/api/v1/users/:userId/posts
/api/v1/users/:userId/posts/:postId/comments

# Avoid
/api/getUserById?id=123
/api/createUser
/api/deletePost`
        },
        {
          title: "Status Codes",
          content: "Use appropriate HTTP status codes to indicate the result of API requests.",
          code: `200 OK              # Success
201 Created         # Resource created
204 No Content      # Success, no response body
400 Bad Request     # Invalid request
401 Unauthorized    # Authentication required
403 Forbidden       # No permission
404 Not Found       # Resource not found
500 Internal Error  # Server error`
        }
      ],
      keyTakeaways: [
        "Use HTTP methods correctly (GET, POST, PUT, PATCH, DELETE)",
        "Design clear, resource-based URL structures",
        "Return appropriate HTTP status codes",
        "Implement proper error handling",
        "Version your APIs (/api/v1/...)"
      ]
    }
  };

  const tutorial = tutorials[topic || "react-hooks"] || tutorials["react-hooks"];

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Link to="/webdev" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Web Development
        </Link>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8 mb-8 animate-slide-up">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">{tutorial.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">{tutorial.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {tutorial.duration}
                  </span>
                  <span className="px-3 py-1 glass rounded-full">{tutorial.level}</span>
                </div>
              </div>
              <BookOpen className="h-12 w-12 text-primary" />
            </div>
          </Card>

          {tutorial.sections.map((section: any, index: number) => (
            <Card 
              key={index}
              className="glass-card p-6 mb-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="text-muted-foreground mb-4">{section.content}</p>
              
              {section.code && (
                <pre className="bg-background/50 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{section.code}</code>
                </pre>
              )}
            </Card>
          ))}

          <Card className="glass-card p-6 animate-slide-up">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              Key Takeaways
            </h2>
            <ul className="space-y-2">
              {tutorial.keyTakeaways.map((point: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="flex gap-4 mt-8 justify-center">
            <Button variant="glass" size="lg" asChild>
              <Link to="/webdev">Back to Tutorials</Link>
            </Button>
            <Button variant="hero" size="lg">
              Mark as Complete
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tutorial;
