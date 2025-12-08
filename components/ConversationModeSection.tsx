
import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ConversationModeSectionProps {
  onCtaClick: () => void;
}

export const ConversationModeSection: React.FC<ConversationModeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden flex flex-col items-center">
      {/* Background Gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center w-full">
        
        {/* Text Content */}
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#78BBFF]/30 bg-[#78BBFF]/5 shadow-[0_0_0_1px_rgba(120,187,255,0.1)]">
              <MessageCircle size={18} className="text-[#78BBFF] fill-current" />
              <span className="text-sm font-bold text-[#78BBFF] tracking-wide">Conversation Mode</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-50 to-blue-200 bg-clip-text text-transparent">
                Never get ignored for sending a cliché message again
              </span>
            </h2>

            <p className="text-base text-slate-400 font-medium leading-relaxed max-w-lg">
              Every woman receives dozens of messages daily on Tinder, but now you'll be the most creative of them all.
            </p>

            <button 
              onClick={onCtaClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Try It Now
            </button>
        </div>

        {/* Image Composition */}
        <div className="relative flex justify-center items-center w-full mb-32 md:mb-40">
            {/* Background Glow Image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -translate-y-20">
               <img 
                 src="https://framerusercontent.com/images/I43yLmhkoot8Oi97850vaNJx30.png" 
                 alt="" 
                 className="w-full max-w-[800px] opacity-40 blur-sm animate-pulse-slow"
               />
            </div>

            {/* Main Phone Image */}
            <div className="relative z-10 w-full max-w-[320px] md:max-w-[400px]">
              <img 
                src="https://i.ibb.co/1t6xr85x/u7q-AWYbaz-XCs-YU2y-IUN4g-FXdw3o-1.webp" 
                alt="App Interface Example" 
                className="w-full h-auto drop-shadow-2xl rounded-[2.5rem]"
              />

              {/* Floating Glass Message Card */}
              {/* Wrapped in a positioning div to isolate transform centering from animation */}
              <div className="absolute -bottom-28 md:-bottom-36 left-1/2 -translate-x-1/2 w-[110%] md:w-[480px] z-20">
                <div className="bg-black/60 backdrop-blur-xl border border-white/15 p-6 rounded-2xl shadow-2xl animate-float-delayed text-center">
                  <div className="space-y-3">
                    <p className="text-white font-semibold text-sm md:text-[15px] leading-relaxed">
                      Ok, you feeding the dog was cute...
                    </p>
                    <p className="text-white font-semibold text-sm md:text-[15px] leading-relaxed">
                      But now I'm curious: did he choose you or did you win him over first? 👀
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};
