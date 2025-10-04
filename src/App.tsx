import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DSAPractice from "./pages/DSAPractice";
import DSACategory from "./pages/DSACategory";
import DSAProblem from "./pages/DSAProblem";
import WebDevelopment from "./pages/WebDevelopment";
import Tutorial from "./pages/Tutorial";
import CoreCS from "./pages/CoreCS";
import Quiz from "./pages/Quiz";
import DevOps from "./pages/DevOps";
import AIML from "./pages/AIML";
import Career from "./pages/Career";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Leaderboard from "./pages/Leaderboard";
import Roadmap from "./pages/Roadmap";
import ResumeBuilder from "./pages/ResumeBuilder";
import InterviewPrep from "./pages/InterviewPrep";
import SQLPlayground from "./pages/SQLPlayground";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dsa" element={<DSAPractice />} />
          <Route path="/dsa/:category" element={<DSACategory />} />
          <Route path="/dsa/problem/:problemId" element={<DSAProblem />} />
          <Route path="/webdev" element={<WebDevelopment />} />
          <Route path="/tutorial/:topic" element={<Tutorial />} />
          <Route path="/core-cs" element={<CoreCS />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
          <Route path="/devops" element={<DevOps />} />
          <Route path="/aiml" element={<AIML />} />
          <Route path="/career" element={<Career />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:articleId" element={<ArticleDetail />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
          <Route path="/sql-playground" element={<SQLPlayground />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
