import { Book, Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface BibleVerseProps {
  verse: string;
  reference: string;
  className?: string;
  animated?: boolean;
}

const BibleVerse = ({ verse, reference, className, animated = true }: BibleVerseProps) => {
  return (
    <div className={cn(
      "bg-card/90 backdrop-blur-sm rounded-xl p-6 shadow-blessed border border-border",
      animated && "animate-blessed-fade hover-sanctuary",
      className
    )}>
      <div className="flex items-center justify-center mb-3">
        <Star className="h-4 w-4 text-primary mr-2 animate-sanctuary-pulse" />
        <Book className="h-4 w-4 text-primary" />
        <Star className="h-4 w-4 text-primary ml-2 animate-sanctuary-pulse" />
      </div>
      <blockquote className="text-center">
        <p className="text-sm md:text-base italic text-foreground leading-relaxed mb-3">
          "{verse}"
        </p>
        <cite className="text-xs md:text-sm text-primary font-semibold not-italic">
          - {reference}
        </cite>
      </blockquote>
    </div>
  );
};

export default BibleVerse;