import React from 'react';
import { Snowflake, ArrowRight } from 'lucide-react';

interface ApproachModeSectionProps {
  onCtaClick: () => void;
}

export const ApproachModeSection: React.FC<ApproachModeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#F7F9FF] relative overflow-hidden flex flex-col items-center">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center w-full">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-cyan-200 shadow-sm mb-6">
           <Snowflake className="w-4 h-4 text-cyan-600" />
           <span className="text-sm font-bold text-cyan-600 tracking-wide">Anti-Freeze Manual</span>
        </div>
 
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#323140] text-center max-w-4xl mb-6 leading-[1.15] tracking-tight">
          Want to approach a woman but freeze up and <span className="text-cyan-600">don't know what to say?</span>
        </h2>
 
        {/* Subtitle */}
        <p className="text-base md:text-lg text-slate-500 font-medium text-center max-w-3xl mb-12 leading-relaxed">
          Discover the step-by-step framework that guarantees you never run out of things to say and look up to 10x more spontaneous, funny and attractive than most guys.
        </p>

        {/* Sequence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mb-12">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm opacity-60 hover:opacity-100 transition-opacity">
               <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">The Nervous Approach</div>
               <div className="text-xl text-slate-400 italic font-medium mb-4">"Uh... hi... you're... pretty..."</div>
               <div className="flex items-center gap-2 text-red-400 text-sm font-bold">
                  <span>Awkward Silence</span>
                  <span className="text-lg">😬</span>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm opacity-80 hover:opacity-100 transition-opacity relative">
               <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-slate-200 p-1 rounded-full text-slate-500 hidden md:block">
                  <ArrowRight size={16} />
               </div>
               <div className="text-xs font-bold text-yellow-500 uppercase tracking-wider mb-2">The Boring Approach</div>
               <div className="text-xl text-slate-600 italic font-medium mb-4">"Hey, how are you? What's your name?"</div>
               <div className="flex items-center gap-2 text-yellow-500 text-sm font-bold">
                  <span>Friendzone Zone</span>
                  <span className="text-lg">😴</span>
               </div>
            </div>

            {/* Card 3 (Hero) */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 shadow-xl transform md:-translate-y-4 md:scale-105 border border-blue-400 relative">
               <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-blue-200 p-1 rounded-full text-blue-700 hidden md:block z-10">
                  <ArrowRight size={16} />
               </div>
               <div className="text-xs font-bold text-white/90 uppercase tracking-wider mb-2">The Emotional Spikes Approach</div>
               <div className="text-xl text-white font-bold mb-4">"You look like trouble. I bet you're the one starting all the fun here..."</div>
               <div className="flex items-center gap-2 text-white text-sm font-bold">
                  <span>Instant Attraction</span>
                  <span className="text-lg">😍</span>
               </div>
            </div>
        </div>
 
        {/* CTA */}
        <button 
           onClick={onCtaClick}
           className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.4)] active:scale-95"
         >
           Master The Method Now
        </button>

      </div>
    </section>
  );
};