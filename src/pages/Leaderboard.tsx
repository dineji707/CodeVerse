import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, TrendingUp, Award, Crown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: "Alex Chen", points: 8542, solved: 156, streak: 42, badge: "🥇", level: "Grandmaster" },
    { rank: 2, name: "Sarah Kumar", points: 7890, solved: 148, streak: 38, badge: "🥈", level: "Master" },
    { rank: 3, name: "Michael Zhang", points: 7234, solved: 142, streak: 35, badge: "🥉", level: "Master" },
    { rank: 4, name: "Emily Rodriguez", points: 6891, solved: 135, streak: 30, badge: "", level: "Expert" },
    { rank: 5, name: "David Park", points: 6523, solved: 128, streak: 28, badge: "", level: "Expert" },
    { rank: 6, name: "Lisa Wang", points: 6234, solved: 124, streak: 25, badge: "", level: "Expert" },
    { rank: 7, name: "James Wilson", points: 5987, solved: 118, streak: 22, badge: "", level: "Advanced" },
    { rank: 8, name: "Anna Singh", points: 5723, solved: 112, streak: 20, badge: "", level: "Advanced" },
    { rank: 9, name: "Tom Anderson", points: 5456, solved: 108, streak: 18, badge: "", level: "Advanced" },
    { rank: 10, name: "Maria Garcia", points: 5234, solved: 105, streak: 16, badge: "", level: "Advanced" },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Grandmaster": return "text-purple-500";
      case "Master": return "text-blue-500";
      case "Expert": return "text-green-500";
      case "Advanced": return "text-yellow-500";
      default: return "text-muted-foreground";
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "Grandmaster": return "bg-purple-500/20 text-purple-600";
      case "Master": return "bg-blue-500/20 text-blue-600";
      case "Expert": return "bg-green-500/20 text-green-600";
      case "Advanced": return "bg-yellow-500/20 text-yellow-600";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen gradient-hero">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-block glass-card px-4 py-2 mb-4">
            <Trophy className="inline h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Global Leaderboard</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Top <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Coders</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compete with coders worldwide and climb the ranks
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Users", value: "8,542", icon: TrendingUp },
            { label: "Problems Solved", value: "156K+", icon: Award },
            { label: "Active Today", value: "2,341", icon: Trophy },
            { label: "New This Week", value: "428", icon: Crown },
          ].map((stat, index) => (
            <Card key={stat.label} className="glass-card p-4 text-center hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {topUsers.slice(0, 3).map((user, index) => (
            <Card 
              key={user.rank}
              className={`glass-card p-6 text-center hover-lift animate-slide-up ${
                user.rank === 1 ? 'md:order-2 md:scale-110' : 
                user.rank === 2 ? 'md:order-1' : 'md:order-3'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-3">{user.badge}</div>
              <Avatar className="w-16 h-16 mx-auto mb-3">
                <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-lg">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold mb-2">{user.name}</h3>
              <Badge className={getLevelBadgeColor(user.level)} variant="outline">
                {user.level}
              </Badge>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Points</span>
                  <span className="font-bold text-primary">{user.points.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Problems Solved</span>
                  <span className="font-bold">{user.solved}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Day Streak</span>
                  <span className="font-bold">🔥 {user.streak}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Remaining Top 10 */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Top 10 Rankings</h2>
          <div className="space-y-3">
            {topUsers.slice(3).map((user, index) => (
              <Card 
                key={user.rank}
                className="glass-card p-4 hover-lift cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-lg">
                    #{user.rank}
                  </div>
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{user.name}</h4>
                    <Badge className={getLevelBadgeColor(user.level)} variant="outline">
                      {user.level}
                    </Badge>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="font-bold text-primary">{user.points.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="font-bold">{user.solved}</p>
                    <p className="text-xs text-muted-foreground">solved</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">🔥 {user.streak}</p>
                    <p className="text-xs text-muted-foreground">streak</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Your Ranking CTA */}
        <div className="glass-card p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-2">Want to See Your Rank?</h2>
          <p className="text-muted-foreground mb-6">
            Start solving problems and track your progress on the leaderboard
          </p>
          <div className="flex gap-3 justify-center">
            <Badge className="bg-blue-500/20 text-blue-600 px-4 py-2">Your Rank: #142</Badge>
            <Badge className="bg-green-500/20 text-green-600 px-4 py-2">Your Points: 3,245</Badge>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Leaderboard;
