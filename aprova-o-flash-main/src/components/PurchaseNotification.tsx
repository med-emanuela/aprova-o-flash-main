import { useState, useEffect } from "react";

const names = [
  "Maria S.", "João P.", "Ana C.", "Lucas R.", "Fernanda M.",
  "Pedro H.", "Camila A.", "Bruno L.", "Juliana F.", "Rafael T.",
  "Larissa O.", "Gabriel N.", "Beatriz K.", "Thiago V.", "Carolina D.",
];

const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Salvador",
  "Recife", "Fortaleza", "Brasília", "Porto Alegre", "Goiânia",
];

const PurchaseNotification = () => {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState({ name: "", city: "", time: "" });

  useEffect(() => {
    const show = () => {
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const mins = Math.floor(Math.random() * 15) + 1;
      setCurrent({ name, city, time: `${mins} min atrás` });
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };

    const interval = setInterval(show, 15000);
    const initial = setTimeout(show, 5000);
    return () => { clearInterval(interval); clearTimeout(initial); };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-notification-slide">
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg max-w-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          <p className="text-sm text-foreground">
            <span className="font-semibold">{current.name}</span> de {current.city}
          </p>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Acabou de comprar · {current.time}
        </p>
      </div>
    </div>
  );
};

export default PurchaseNotification;
