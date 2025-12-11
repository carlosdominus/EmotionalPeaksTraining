import React from 'react';
import { Heart } from 'lucide-react';

interface ConversationModeSectionProps {
  onCtaClick: () => void;
}

export const ConversationModeSection: React.FC<ConversationModeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden flex flex-col items-center">
      {/* Background Gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center w-full">
        
        {/* Text Content */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 shadow-[0_0_0_1px_rgba(236,72,153,0.1)]">
              <Heart size={18} className="text-pink-500 fill-current" />
              <span className="text-sm font-bold text-pink-500 tracking-wide">Flirting Technique</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-white via-pink-100 to-pink-300 bg-clip-text text-transparent">
                Never be seen as 'just another nice guy' ever again
              </span>
            </h2>

            <p className="text-base text-slate-400 font-medium leading-relaxed max-w-lg">
              Every woman receives validation all day long, but now you'll know the exact compliments that spike her dopamine and make her crave YOUR attention.
            </p>

            <button 
              onClick={onCtaClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Master The Method Now
            </button>
        </div>

        {/* Visual Composition */}
        <div className="relative w-full max-w-[400px] mx-auto flex flex-col items-center">
             <img 
               src="https://i.ibb.co/X6CkK7R/photo-1556151994-b611e5ab3675-1.webp" 
               alt="Flirting Example" 
               className="w-full h-auto rounded-[2rem] border border-gray-800 shadow-2xl"
             />
             
             {/* Floating Badge */}
             <div className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl hidden md:block animate-float">
                <span className="text-2xl">😍</span>
             </div>
        </div>

      </div>
    </section>
  );
};