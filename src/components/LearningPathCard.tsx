import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LearningPathCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
  gradient: string;
  topics: number;
}

const LearningPathCard = ({ title, description, icon: Icon, path, gradient, topics }: LearningPathCardProps) => {
  return (
    <div className="glass-card p-6 hover-lift group cursor-pointer">
      <Link to={path} className="block">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl ${gradient} group-hover:scale-110 transition-transform`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-primary">
                {topics} topics
              </span>
              <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                Explore
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LearningPathCard;
