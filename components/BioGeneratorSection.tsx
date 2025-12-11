
import React from 'react';
import { Target, MessageCircle } from 'lucide-react';

interface BioGeneratorSectionProps {
  onCtaClick: () => void;
}

export const BioGeneratorSection: React.FC<BioGeneratorSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#F7F9FF] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
            <Target className="w-4 h-4 text-[#395BC7]" />
            <span className="text-sm font-bold text-[#395BC7] tracking-wide">Teasing Technique</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0B14] tracking-tight leading-[1.1]">
            Make her chase you <span className="text-blue-600">instead of you chasing her</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            Learn how to playfully challenge women and create the 'emotional rollercoaster' that makes her brain addicted to proving herself to you.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <button 
            onClick={onCtaClick}
            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-[#1786FF] hover:bg-blue-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(23,134,255,0.5)] hover:-translate-y-1 active:translate-y-0 active:scale-95"
          >
            Master The Method Now
          </button>
        </div>

        {/* Visual Representation of Teasing */}
        <div className="w-full max-w-md mx-auto relative">
           {/* Message Container */}
           <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(29,46,92,0.15)] border border-slate-100 p-6 md:p-8 relative z-10">
              <div className="space-y-6">
                  {/* User Message */}
                  <div className="flex items-end justify-end gap-2">
                      <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-br-sm shadow-md max-w-[85%]">
                          <p className="font-medium">Oh, you're new here huh? Don't worry, you just found yourself a tour guide 😏</p>
                      </div>
                  </div>

                  {/* Reaction/Reply */}
                  <div className="flex items-end justify-start gap-3">
                      <img 
                        src="https://c.tenor.com/r-acShkJxuoAAAAd/tenor.gif" 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full object-cover border border-pink-100"
                      />
                      <div className="space-y-1 max-w-[85%]">
                          <div className="bg-gray-100 text-slate-800 p-4 rounded-2xl rounded-bl-sm shadow-sm">
                              <p className="font-medium">Hahaha you wish! 🤣</p>
                          </div>
                          <div className="bg-gray-100 text-slate-800 p-4 rounded-2xl rounded-bl-sm shadow-sm">
                              <p className="font-medium">But I might take you up on that offer...</p>
                          </div>
                      </div>
                  </div>
              </div>
           </div>

           {/* Decorative elements */}
           <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 hidden md:block animate-float-delayed">
              <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-100">
                 <span className="text-2xl">😂</span>
              </div>
           </div>
           <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 hidden md:block animate-float">
              <div className="bg-white p-3 rounded-2xl shadow-lg border border-slate-100">
                 <span className="text-2xl">🔥</span>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};
