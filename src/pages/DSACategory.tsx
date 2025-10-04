import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Code2, Clock, CheckCircle } from "lucide-react";

const DSACategory = () => {
  const { category } = useParams();
  
  const categoryData: Record<string, any> = {
    "arrays": {
      name: "Arrays",
      description: "Master array manipulation, sorting, and searching algorithms",
      problems: [
        { id: 1, title: "Two Sum", difficulty: "Easy", solved: true, time: "20 min" },
        { id: 2, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", solved: true, time: "15 min" },
        { id: 3, title: "Contains Duplicate", difficulty: "Easy", solved: false, time: "25 min" },
        { id: 4, title: "Product of Array Except Self", difficulty: "Medium", solved: false, time: "30 min" },
        { id: 5, title: "Maximum Subarray", difficulty: "Medium", solved: false, time: "35 min" },
        { id: 6, title: "Merge Intervals", difficulty: "Medium", solved: false, time: "40 min" },
        { id: 7, title: "3Sum", difficulty: "Medium", solved: false, time: "45 min" },
        { id: 8, title: "Container With Most Water", difficulty: "Medium", solved: false, time: "30 min" },
      ]
    },
    "linked-lists": {
      name: "Linked Lists",
      description: "Learn pointer manipulation and linked list operations",
      problems: [
        { id: 9, title: "Reverse Linked List", difficulty: "Easy", solved: true, time: "20 min" },
        { id: 10, title: "Merge Two Sorted Lists", difficulty: "Easy", solved: false, time: "25 min" },
        { id: 11, title: "Linked List Cycle", difficulty: "Easy", solved: false, time: "20 min" },
        { id: 12, title: "Remove Nth Node From End", difficulty: "Medium", solved: false, time: "30 min" },
        { id: 13, title: "Reorder List", difficulty: "Medium", solved: false, time: "35 min" },
        { id: 14, title: "Add Two Numbers", difficulty: "Medium", solved: false, time: "30 min" },
      ]
    },
    "trees": {
      name: "Trees",
      description: "Understand tree traversals, BST operations, and tree algorithms",
      problems: [
        { id: 15, title: "Maximum Depth of Binary Tree", difficulty: "Easy", solved: true, time: "15 min" },
        { id: 16, title: "Same Tree", difficulty: "Easy", solved: false, time: "20 min" },
        { id: 17, title: "Invert Binary Tree", difficulty: "Easy", solved: true, time: "15 min" },
        { id: 18, title: "Binary Tree Level Order Traversal", difficulty: "Medium", solved: false, time: "30 min" },
        { id: 19, title: "Validate Binary Search Tree", difficulty: "Medium", solved: false, time: "35 min" },
        { id: 20, title: "Lowest Common Ancestor", difficulty: "Medium", solved: false, time: "40 min" },
        { id: 21, title: "Binary Tree Maximum Path Sum", difficulty: "Hard", solved: false, time: "50 min" },
      ]
    },
    "graphs": {
      name: "Graphs",
      description: "Master graph traversal algorithms and graph theory concepts",
      problems: [
        { id: 22, title: "Number of Islands", difficulty: "Medium", solved: false, time: "35 min" },
        { id: 23, title: "Clone Graph", difficulty: "Medium", solved: false, time: "40 min" },
        { id: 24, title: "Pacific Atlantic Water Flow", difficulty: "Medium", solved: false, time: "45 min" },
        { id: 25, title: "Course Schedule", difficulty: "Medium", solved: false, time: "40 min" },
        { id: 26, title: "Graph Valid Tree", difficulty: "Medium", solved: false, time: "35 min" },
      ]
    },
    "dynamic-programming": {
      name: "Dynamic Programming",
      description: "Solve optimization problems using memoization and tabulation",
      problems: [
        { id: 27, title: "Climbing Stairs", difficulty: "Easy", solved: true, time: "20 min" },
        { id: 28, title: "House Robber", difficulty: "Medium", solved: false, time: "30 min" },
        { id: 29, title: "Longest Increasing Subsequence", difficulty: "Medium", solved: false, time: "40 min" },
        { id: 30, title: "Coin Change", difficulty: "Medium", solved: false, time: "35 min" },
        { id: 31, title: "Word Break", difficulty: "Medium", solved: false, time: "40 min" },
        { id: 32, title: "Longest Common Subsequence", difficulty: "Medium", solved: false, time: "35 min" },
      ]
    },
    "strings": {
      name: "Strings",
      description: "Pattern matching, string manipulation, and text processing",
      problems: [
        { id: 33, title: "Valid Anagram", difficulty: "Easy", solved: true, time: "15 min" },
        { id: 34, title: "Valid Palindrome", difficulty: "Easy", solved: true, time: "15 min" },
        { id: 35, title: "Longest Substring Without Repeating", difficulty: "Medium", solved: false, time: "35 min" },
        { id: 36, title: "Longest Palindromic Substring", difficulty: "Medium", solved: false, time: "40 min" },
        { id: 37, title: "Group Anagrams", difficulty: "Medium", solved: false, time: "30 min" },
      ]
    }
  };

  const data = categoryData[category || ""] || categoryData["arrays"];

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "Easy": return "bg-green-500/20 text-green-600";
      case "Medium": return "bg-yellow-500/20 text-yellow-600";
      case "Hard": return "bg-red-500/20 text-red-600";
      default: return "bg-gray-500/20 text-gray-600";
    }
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <Link to="/dsa" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to DSA Practice
        </Link>

        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl font-bold mb-4">
            {data.name} <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Problems</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {data.description}
          </p>
        </div>

        <div className="grid gap-4 mb-12">
          {data.problems.map((problem: any, index: number) => (
            <Card 
              key={problem.id}
              className="glass-card p-6 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  {problem.solved ? (
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <Code2 className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                  
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{problem.title}</h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className={getDifficultyColor(problem.difficulty)}>
                        {problem.difficulty}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {problem.time}
                      </span>
                    </div>
                  </div>
                </div>

                <Button 
                  variant={problem.solved ? "ghost" : "hero"} 
                  size="sm"
                  asChild
                >
                  <Link to={`/dsa/problem/${problem.id}`}>
                    {problem.solved ? "Review" : "Solve"}
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DSACategory;
