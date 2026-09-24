import { useLocation } from "wouter";
import { Coffee } from "lucide-react";

export default function NotFound() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center p-8 bg-card rounded-2xl shadow-xl max-w-md w-full border border-border">
        <Coffee className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page <code className="bg-secondary px-2 py-1 rounded text-primary">{location}</code> you're looking for seems to have spilled. Let's get you back to the menu.
        </p>
        <a 
          href="/"
          className="inline-block bg-primary hover:bg-primary/90 text-white font-medium px-6 py-3 rounded-xl transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
