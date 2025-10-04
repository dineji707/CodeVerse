import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Database, Play, RotateCcw, BookOpen, CheckCircle } from "lucide-react";
import { useState } from "react";

const SQLPlayground = () => {
  const [query, setQuery] = useState("SELECT * FROM users WHERE age > 25;");
  const [results, setResults] = useState([
    { id: 1, name: "Alice Johnson", age: 28, email: "alice@example.com" },
    { id: 2, name: "Bob Smith", age: 32, email: "bob@example.com" },
    { id: 3, name: "Carol White", age: 26, email: "carol@example.com" },
  ]);

  const sampleQueries = [
    {
      title: "Select all users",
      query: "SELECT * FROM users;",
      difficulty: "Easy",
    },
    {
      title: "Join tables",
      query: "SELECT u.name, o.order_id FROM users u\nJOIN orders o ON u.id = o.user_id;",
      difficulty: "Medium",
    },
    {
      title: "Group by with count",
      query: "SELECT country, COUNT(*) as user_count\nFROM users\nGROUP BY country;",
      difficulty: "Medium",
    },
    {
      title: "Subquery example",
      query: "SELECT name FROM users\nWHERE age > (SELECT AVG(age) FROM users);",
      difficulty: "Hard",
    },
  ];

  const challenges = [
    { title: "Find top 5 customers", completed: true },
    { title: "Calculate average order value", completed: true },
    { title: "Find duplicate records", completed: false },
    { title: "Complex join with multiple tables", completed: false },
  ];

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <Database className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">SQL Playground</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Practice <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SQL Queries</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive SQL editor to practice queries and learn database concepts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Editor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Query Editor */}
            <Card className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Query Editor
                </h2>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" onClick={() => setQuery("")}>
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Clear
                  </Button>
                  <Button variant="hero" size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    Run Query
                  </Button>
                </div>
              </div>
              <Textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="font-mono text-sm min-h-[200px] bg-background/50"
                placeholder="Write your SQL query here..."
              />
            </Card>

            {/* Results */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">Query Results</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-muted">
                      <th className="text-left p-2">ID</th>
                      <th className="text-left p-2">Name</th>
                      <th className="text-left p-2">Age</th>
                      <th className="text-left p-2">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((row) => (
                      <tr key={row.id} className="border-b border-muted/30 hover:bg-muted/20">
                        <td className="p-2">{row.id}</td>
                        <td className="p-2">{row.name}</td>
                        <td className="p-2">{row.age}</td>
                        <td className="p-2">{row.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                {results.length} rows returned • Query executed in 0.12s
              </p>
            </Card>

            {/* Database Schema */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">Database Schema</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    📊 users
                  </h3>
                  <div className="text-sm text-muted-foreground ml-4 space-y-1">
                    <p>• id (INT, PRIMARY KEY)</p>
                    <p>• name (VARCHAR)</p>
                    <p>• age (INT)</p>
                    <p>• email (VARCHAR)</p>
                    <p>• country (VARCHAR)</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    📦 orders
                  </h3>
                  <div className="text-sm text-muted-foreground ml-4 space-y-1">
                    <p>• order_id (INT, PRIMARY KEY)</p>
                    <p>• user_id (INT, FOREIGN KEY)</p>
                    <p>• amount (DECIMAL)</p>
                    <p>• order_date (DATE)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Challenges */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4">SQL Challenges</h2>
              <div className="space-y-2">
                {challenges.map((challenge, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/20 cursor-pointer transition-colors"
                  >
                    {challenge.completed ? (
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-muted flex-shrink-0" />
                    )}
                    <span className="text-sm">{challenge.title}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Sample Queries */}
            <Card className="glass-card p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Sample Queries
              </h2>
              <div className="space-y-3">
                {sampleQueries.map((sample, index) => (
                  <Card 
                    key={index}
                    className="bg-muted/20 p-3 hover-lift cursor-pointer"
                    onClick={() => setQuery(sample.query)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-sm font-semibold">{sample.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        sample.difficulty === "Easy" ? "bg-green-500/20 text-green-600" :
                        sample.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-600" :
                        "bg-red-500/20 text-red-600"
                      }`}>
                        {sample.difficulty}
                      </span>
                    </div>
                    <code className="text-xs text-muted-foreground block overflow-x-auto">
                      {sample.query.split('\n')[0]}...
                    </code>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Tips */}
            <Card className="glass-card p-6">
              <h3 className="font-bold mb-3">💡 SQL Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use uppercase for SQL keywords</li>
                <li>• Always end queries with semicolon</li>
                <li>• Use aliases for better readability</li>
                <li>• Test queries on sample data first</li>
                <li>• Watch for NULL values in comparisons</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SQLPlayground;
