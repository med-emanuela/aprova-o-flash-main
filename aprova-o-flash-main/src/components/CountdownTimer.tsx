import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 2, minutes: 47, seconds: 33 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 justify-center w-full sm:w-auto px-2">
      <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider whitespace-nowrap">Oferta expira em:</span>
      <div className="flex gap-1 sm:gap-1.5 flex-wrap sm:flex-nowrap justify-center">
        {[
          { val: time.hours, label: "h" },
          { val: time.minutes, label: "m" },
          { val: time.seconds, label: "s" },
        ].map((t, i) => (
          <div key={i} className="flex items-center gap-0.5">
            <span className="bg-primary/20 text-primary font-bold text-sm sm:text-lg px-1.5 sm:px-2 py-1 rounded font-display whitespace-nowrap">
              {pad(t.val)}
            </span>
            <span className="text-muted-foreground text-xs sm:text-xs whitespace-nowrap">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
