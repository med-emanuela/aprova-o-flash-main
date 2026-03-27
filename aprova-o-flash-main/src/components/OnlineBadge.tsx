import { useState, useEffect } from "react";
import { Users } from "lucide-react";

const OnlineBadge = () => {
  const [count, setCount] = useState(147);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 5) - 2);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm border border-border rounded-full px-3 py-1.5">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <Users className="w-3.5 h-3.5 text-primary" />
        <span className="text-xs text-muted-foreground font-medium">
          <span className="text-foreground font-bold">{Math.max(count, 80)}</span> pessoas online
        </span>
      </div>
    </div>
  );
};

export default OnlineBadge;
