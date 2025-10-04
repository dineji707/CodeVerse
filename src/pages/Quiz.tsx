import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, Award } from "lucide-react";
import { useState } from "react";

const Quiz = () => {
  const { subject } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const quizzes: Record<string, any> = {
    "operating-systems": {
      title: "Operating Systems Quiz",
      description: "Test your knowledge of OS concepts",
      questions: [
        {
          question: "What is the main function of an operating system?",
          options: [
            "To compile programs",
            "To manage hardware and software resources",
            "To browse the internet",
            "To create documents"
          ],
          correctAnswer: 1,
          explanation: "The main function of an operating system is to manage hardware and software resources, acting as an intermediary between users and computer hardware."
        },
        {
          question: "Which scheduling algorithm has the potential for starvation?",
          options: [
            "First-Come, First-Served (FCFS)",
            "Round Robin",
            "Priority Scheduling",
            "Shortest Job First (SJF)"
          ],
          correctAnswer: 2,
          explanation: "Priority Scheduling can lead to starvation where low-priority processes may never execute if high-priority processes keep arriving."
        },
        {
          question: "What is thrashing in the context of virtual memory?",
          options: [
            "Fast processing speed",
            "Excessive page swapping between memory and disk",
            "CPU overheating",
            "Memory fragmentation"
          ],
          correctAnswer: 1,
          explanation: "Thrashing occurs when a system spends more time swapping pages in and out of memory than executing actual processes, severely degrading performance."
        },
        {
          question: "Which of the following is NOT a deadlock condition?",
          options: [
            "Mutual Exclusion",
            "Hold and Wait",
            "Preemption",
            "Circular Wait"
          ],
          correctAnswer: 2,
          explanation: "Preemption is actually a way to PREVENT deadlock. The four necessary conditions for deadlock are: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait."
        },
        {
          question: "What does RAID stand for?",
          options: [
            "Random Access of Independent Disks",
            "Redundant Array of Independent Disks",
            "Rapid Array of Intelligent Data",
            "Remote Access and Integrated Devices"
          ],
          correctAnswer: 1,
          explanation: "RAID stands for Redundant Array of Independent Disks, a data storage technology that combines multiple disk drives for redundancy and performance."
        }
      ]
    },
    "database-management": {
      title: "Database Management Quiz",
      description: "Test your DBMS knowledge",
      questions: [
        {
          question: "What is the purpose of normalization in databases?",
          options: [
            "To increase data redundancy",
            "To reduce data redundancy and improve data integrity",
            "To make queries slower",
            "To increase storage space"
          ],
          correctAnswer: 1,
          explanation: "Normalization is the process of organizing data to reduce redundancy and improve data integrity by dividing larger tables into smaller ones and defining relationships."
        },
        {
          question: "Which normal form eliminates transitive dependencies?",
          options: [
            "First Normal Form (1NF)",
            "Second Normal Form (2NF)",
            "Third Normal Form (3NF)",
            "Boyce-Codd Normal Form (BCNF)"
          ],
          correctAnswer: 2,
          explanation: "Third Normal Form (3NF) eliminates transitive dependencies, where a non-key attribute depends on another non-key attribute."
        },
        {
          question: "What is ACID in database transactions?",
          options: [
            "A type of database",
            "Atomicity, Consistency, Isolation, Durability",
            "A query language",
            "A backup method"
          ],
          correctAnswer: 1,
          explanation: "ACID represents the four key properties that guarantee database transactions are processed reliably: Atomicity, Consistency, Isolation, and Durability."
        }
      ]
    }
  };

  const quiz = quizzes[subject || "operating-systems"] || quizzes["operating-systems"];
  const currentQ = quiz.questions[currentQuestion];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQ.correctAnswer;
    setAnswers([...answers, isCorrect]);
    if (isCorrect) setScore(score + 1);

    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  if (showResult) {
    const percentage = Math.round((score / quiz.questions.length) * 100);
    
    return (
      <div className="min-h-screen gradient-hero">
        <Navbar />
        
        <main className="container mx-auto px-4 pt-24 pb-12">
          <div className="max-w-2xl mx-auto">
            <Card className="glass-card p-8 text-center animate-slide-up">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
              
              <div className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {percentage}%
              </div>

              <p className="text-xl text-muted-foreground mb-8">
                You scored {score} out of {quiz.questions.length} questions correctly
              </p>

              <div className="flex gap-4 justify-center">
                <Button variant="glass" size="lg" onClick={handleRestart}>
                  Try Again
                </Button>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/core-cs">Back to Core CS</Link>
                </Button>
              </div>
            </Card>
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
        <Link to="/core-cs" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Core CS
        </Link>

        <div className="max-w-2xl mx-auto">
          <Card className="glass-card p-8 mb-6 animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">{quiz.title}</h1>
              <span className="text-muted-foreground">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </span>
            </div>

            <div className="w-full bg-muted/30 rounded-full h-2 mb-8">
              <div 
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
              />
            </div>

            <h2 className="text-xl font-semibold mb-6">{currentQ.question}</h2>

            <div className="space-y-3 mb-8">
              {currentQ.options.map((option: string, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg transition-all ${
                    selectedAnswer === index
                      ? "bg-primary/20 border-2 border-primary"
                      : "glass hover:bg-primary/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index ? "border-primary bg-primary" : "border-muted-foreground"
                    }`}>
                      {selectedAnswer === index && <div className="w-3 h-3 rounded-full bg-white" />}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {selectedAnswer !== null && (
              <div className={`p-4 rounded-lg mb-6 ${
                selectedAnswer === currentQ.correctAnswer
                  ? "bg-green-500/20 border border-green-500/50"
                  : "bg-red-500/20 border border-red-500/50"
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {selectedAnswer === currentQ.correctAnswer ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-600">Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-red-600" />
                      <span className="font-semibold text-red-600">Incorrect</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{currentQ.explanation}</p>
              </div>
            )}

            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quiz;
