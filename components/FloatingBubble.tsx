
import React from 'react';

interface FloatingBubbleProps {
  text: string;
  className?: string;
  delay?: number;
}

export const FloatingBubble: React.FC<FloatingBubbleProps> = ({ text, className = "", delay = 0 }) => {
  return (
    <div 
      className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 shadow-xl max-w-[280px] ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-white text-sm font-medium leading-relaxed text-center">
        {text}
      </p>
    </div>
  );
};