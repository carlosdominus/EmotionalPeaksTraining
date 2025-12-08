
import React from 'react';

interface FloatingBubbleProps {
  text: string;
  label?: string;
  labelColor?: string;
  className?: string;
  delay?: number;
}

export const FloatingBubble: React.FC<FloatingBubbleProps> = ({ 
  text, 
  label,
  labelColor = "text-blue-300",
  className = "", 
  delay = 0 
}) => {
  return (
    <div 
      className={`backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 shadow-xl w-full ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {label && (
        <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${labelColor}`}>
          {label}
        </p>
      )}
      <p className="text-white text-sm font-medium leading-relaxed">
        {text}
      </p>
    </div>
  );
};
