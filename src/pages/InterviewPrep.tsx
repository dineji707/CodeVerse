import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Video, FileText, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const InterviewPrep = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const categories = [
    {
      name: "Technical DSA",
      icon: "💻",
      questions: 28,
      color: "from-blue-500 to-cyan-500",
      topics: ["Arrays", "Trees", "DP", "Graphs"],
    },
    {
      name: "System Design",
      icon: "🏗️",
      questions: 12,
      color: "from-purple-500 to-pink-500",
      topics: ["Scalability", "Databases", "Caching", "APIs"],
    },
    {
      name: "Behavioral",
      icon: "🗣️",
      questions: 18,
      color: "from-green-500 to-emerald-500",
      topics: ["Leadership", "Teamwork", "Conflict", "Growth"],
    },
    {
      name: "HR Round",
      icon: "👔",
      questions: 10,
      color: "from-orange-500 to-red-500",
      topics: ["Career Goals", "Strengths", "Weaknesses", "Motivation"],
    },
  ];

  const popularQuestions = [
    {
      question: "Tell me about yourself",
      category: "HR",
      difficulty: "Easy",
      answered: true,
    },
    {
      question: "Design a URL shortener like bit.ly",
      category: "System Design",
      difficulty: "Hard",
      answered: false,
    },
    {
      question: "Reverse a linked list",
      category: "DSA",
      difficulty: "Medium",
      answered: true,
    },
    {
      question: "Describe a time when you faced a challenge",
      category: "Behavioral",
      difficulty: "Medium",
      answered: false,
    },
    {
      question: "Design Instagram's newsfeed",
      category: "System Design",
      difficulty: "Hard",
      answered: false,
    },
    {
      question: "Two Sum problem",
      category: "DSA",
      difficulty: "Easy",
      answered: true,
    },
  ];

  const mockInterviews = [
    {
      type: "Technical Coding",
      duration: "45 min",
      difficulty: "Medium",
      description: "Live coding session with real-time feedback",
    },
    {
      type: "System Design",
      duration: "60 min",
      difficulty: "Hard",
      description: "Design scalable systems with architecture discussions",
    },
    {
      type: "Behavioral",
      duration: "30 min",
      difficulty: "Easy",
      description: "Practice STAR method for behavioral questions",
    },
  ];

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <MessageSquare className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Interview Preparation</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Ace Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Tech Interviews</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practice with real interview questions and get expert feedback
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Questions", value: "92+" },
            { label: "You Completed", value: "24" },
            { label: "Mock Tests", value: "18+" },
            { label: "Success Rate", value: "87%" },
          ].map((stat, index) => (
            <Card key={stat.label} className="glass-card p-4 text-center hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card 
              key={category.name}
              className="glass-card p-6 hover-lift cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{category.questions} questions</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.topics.slice(0, 2).map((topic) => (
                  <span key={topic} className="text-xs px-2 py-1 glass rounded-lg">
                    {topic}
                  </span>
                ))}
              </div>
              <Button 
                variant="ghost" 
                className="w-full" 
                size="sm"
                onClick={() => navigate('/quiz')}
              >
                Start Practice →
              </Button>
            </Card>
          ))}
        </div>

        {/* Popular Questions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Popular Interview Questions</h2>
          <div className="grid grid-cols-1 gap-4">
            {popularQuestions.map((q, index) => (
              <Card 
                key={index}
                className="glass-card p-6 hover-lift cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    {q.answered ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-muted mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">{q.question}</h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline">{q.category}</Badge>
                        <Badge className={
                          q.difficulty === "Easy" ? "bg-green-500/20 text-green-600" :
                          q.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-600" :
                          "bg-red-500/20 text-red-600"
                        }>
                          {q.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => {
                      toast({
                        title: q.answered ? "Opening Review" : "Starting Practice",
                        description: `Loading: ${q.question}`,
                      });
                      navigate('/quiz');
                    }}
                  >
                    {q.answered ? "Review" : "Practice"} →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mock Interviews */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Video className="h-8 w-8 text-primary" />
            Mock Interviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockInterviews.map((mock, index) => (
              <Card 
                key={mock.type}
                className="glass-card p-6 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-3">{mock.type}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Duration</span>
                    <span className="font-medium">{mock.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Difficulty</span>
                    <Badge className={
                      mock.difficulty === "Easy" ? "bg-green-500/20 text-green-600" :
                      mock.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-600" :
                      "bg-red-500/20 text-red-600"
                    }>
                      {mock.difficulty}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{mock.description}</p>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Mock Interview Scheduled!",
                      description: `${mock.type} session (${mock.duration}) - You'll receive a confirmation email shortly.`,
                    });
                  }}
                >
                  Schedule Interview
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card p-6 text-center hover-lift">
            <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-2">Interview Guides</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Comprehensive guides for every interview round
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/articles')}
            >
              View Guides →
            </Button>
          </Card>
          
          <Card className="glass-card p-6 text-center hover-lift">
            <Video className="h-12 w-12 text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-2">Video Solutions</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Watch detailed explanations of common questions
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://www.youtube.com/@CodeVerse', '_blank')}
            >
              Watch Videos →
            </Button>
          </Card>
          
          <Card className="glass-card p-6 text-center hover-lift">
            <MessageSquare className="h-12 w-12 text-primary mx-auto mb-3" />
            <h3 className="font-bold mb-2">Community Support</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get help from peers who've been there
            </p>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://whatsapp.com/channel/0029VaeRru3C5X9jkd9cTN1A', '_blank')}
            >
              Join Community →
            </Button>
          </Card>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Practice?</h2>
          <p className="text-muted-foreground mb-6">
            Start with common questions and work your way up
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => navigate('/quiz')}
            >
              Start Practicing
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/career">Back to Career</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InterviewPrep;
