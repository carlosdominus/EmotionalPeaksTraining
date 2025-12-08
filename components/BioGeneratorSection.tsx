import React from 'react';
import { Layers, Trophy } from 'lucide-react';

interface BioGeneratorSectionProps {
  onCtaClick: () => void;
}

export const BioGeneratorSection: React.FC<BioGeneratorSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-10 md:py-16 bg-[#F7F9FF] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 shadow-sm">
            <Layers className="w-4 h-4 text-[#395BC7]" />
            <span className="text-sm font-semibold text-[#395BC7]">Bio Generator</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0B14] tracking-tight leading-[1.1]">
            Don't embarrass yourself with a <span className="text-[#0A0B14]">bad bio...</span>
          </h2>
          <p className="text-base text-slate-600 font-medium leading-relaxed max-w-xl mx-auto">
            ChatDate will generate a bio that makes women text you first
          </p>
        </div>

        {/* CTA Button (Moved Up) */}
        <div className="flex justify-center mb-8 md:mb-10">
          <button 
            onClick={onCtaClick}
            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-[#1786FF] hover:bg-blue-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:shadow-[0_10px_40px_-10px_rgba(23,134,255,0.5)] hover:-translate-y-1 active:translate-y-0 active:scale-95"
          >
            Master The Method Now
          </button>
        </div>

        {/* Comparison Cards Stack */}
        <div className="relative max-w-md mx-auto h-[240px] md:h-[300px] flex justify-center">
          
          {/* Card 1: Old Bio (Background) */}
          <div className="absolute top-0 w-[90%] bg-white rounded-[2rem] p-4 shadow-xl border border-slate-200 transform scale-95 opacity-60 z-0 origin-bottom pb-16">
            <div className="flex gap-4 items-start mb-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-slate-200">
                <img 
                  src="https://i.ibb.co/dJJQkvNm/imagem1.webp" 
                  alt="Old Bio" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="space-y-1 pt-1">
                <p className="text-sm font-bold text-slate-800">Your Old Bio</p>
                <p className="text-xs text-slate-500">23y</p>
                <p className="text-xs text-slate-500">📍Los Angeles</p>
                <p className="text-xs text-slate-500 mt-1">🥊✈🎸🎬</p>
              </div>
            </div>
          </div>

          {/* Card 2: ChatDate Bio (Foreground) */}
          <div className="absolute top-12 md:top-16 w-full bg-white rounded-[2rem] p-4 shadow-[0_20px_60px_-15px_rgba(23,134,255,0.3)] border-2 border-[#5B9DFF] z-10 transform hover:scale-[1.02] transition-transform duration-300">
             <div className="flex gap-4 items-start mb-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-blue-100">
                  <img 
                    src="https://i.ibb.co/bR7q5vbq/imagem2.webp" 
                    alt="ChatDate Bio" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1 pt-1">
                  <p className="text-sm font-bold text-slate-900">Your Bio with ChatDate</p>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mt-2">
                    <p className="text-sm text-slate-700 leading-snug">
                      🏆 Neighborhood champion of dad jokes
                    </p>
                    <p className="text-sm text-slate-700 leading-snug mt-2">
                      If you beat me at bad jokes, you'll get a prize 👀
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