
import React from 'react';
import { Zap, Clock, AlertTriangle } from 'lucide-react';

interface ProfileAnalysisSectionProps {
  onCtaClick: () => void;
}

export const ProfileAnalysisSection: React.FC<ProfileAnalysisSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients - Changed to Orange/Red for "Critical" feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mb-12 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 shadow-[0_0_0_1px_rgba(249,115,22,0.1)]">
              <Zap size={16} className="text-orange-400" fill="currentColor" />
              <span className="text-sm font-bold text-orange-400 tracking-wide">BREAKTHROUGH MOMENT</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
              Master The First 30 Seconds - <span className="text-orange-500">The Make or Break Moment</span>
            </h2>

            {/* Subtext */}
            <p className="text-base text-slate-400 font-medium leading-relaxed max-w-2xl">
              Most guys lose her attention in the first 10 seconds by being boring. The method teaches you how to create an emotional spike RIGHT from the start - and keep her hooked.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
                <button 
                onClick={onCtaClick}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#1786FF] hover:bg-blue-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
                >
                Master The Method Now
                </button>
            </div>
        </div>

        {/* Video Thumbnail Composition */}
        <div className="relative w-full max-w-[500px] mx-auto mt-6 group cursor-pointer">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Main Container - Removed aspect-video to allow original size */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl">
                {/* Thumbnail GIF */}
                <img 
                  src="https://c.tenor.com/Z28js5TTM2UAAAAd/tenor.gif" 
                  alt="Real approach interaction" 
                  className="w-full h-auto object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none"></div>

                {/* Top Right Timer Overlay */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="font-mono text-white font-bold text-sm tracking-widest">00:12</span>
                </div>

                {/* Bottom Critical Window Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-black/70 backdrop-blur-xl border border-orange-500/50 p-4 rounded-xl flex items-center justify-between gap-4 shadow-xl">
                   <div className="flex flex-col gap-1 w-full">
                       <div className="flex justify-between items-center mb-1">
                          <span className="text-orange-400 text-xs font-bold uppercase flex items-center gap-1">
                            <AlertTriangle size={12} />
                            Critical Window
                          </span>
                          <span className="text-white text-xs font-bold">Create spike NOW</span>
                       </div>
                       {/* Progress Bar */}
                       <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                           <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 w-[40%] animate-pulse"></div>
                       </div>
                   </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};
