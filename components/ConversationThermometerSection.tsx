
import React from 'react';
import { Thermometer } from 'lucide-react';

interface ConversationThermometerSectionProps {
  onCtaClick: () => void;
}

export const ConversationThermometerSection: React.FC<ConversationThermometerSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 shadow-[0_0_0_1px_rgba(34,197,94,0.1)] mb-8">
           <Thermometer className="w-5 h-5 text-green-500" />
           <span className="text-sm font-bold text-green-500 tracking-wide">Emotional Thermometer</span>
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center text-center max-w-4xl space-y-6 mb-16">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                  <span className="text-white block">
                      Is she attracted or just being polite?
                  </span>
                  <span className="bg-gradient-to-r from-green-300 to-emerald-500 bg-clip-text text-transparent block mt-2">
                       Never be in doubt again...
                  </span>
             </h2>

             <p className="text-lg text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                The Emotional Spikes Method teaches you how to read her body language in real-time. Know exactly when to escalate, when to pull back, and when to go for the kiss.
             </p>

             <button 
                onClick={onCtaClick}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] active:scale-95 mt-4"
              >
                Master The Method Now
              </button>
        </div>

        {/* Visual: Woman with Indicators */}
        <div className="relative w-full max-w-4xl mx-auto">
           {/* Image Container */}
           <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gray-900 aspect-[4/3] md:aspect-[16/9]">
              <img 
                 src="https://c.tenor.com/NDtgQabmRjEAAAAd/tenor.gif" 
                 alt="Woman showing attraction signals" 
                 className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
           </div>

           {/* Analysis Containers - Below GIF */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              
              {/* Indicator 1: Hair */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="relative shrink-0">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0 opacity-75"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white relative z-10"></div>
                  </div>
                  <div className="flex flex-col">
                      <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-1">High Interest</p>
                      <p className="text-white text-sm font-semibold">Touching hair</p>
                  </div>
              </div>

              {/* Indicator 2: Eyes */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="relative shrink-0">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0 opacity-75"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white relative z-10"></div>
                  </div>
                  <div className="flex flex-col">
                      <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-1">Connection</p>
                      <p className="text-white text-sm font-semibold">Prolonged eye contact</p>
                  </div>
              </div>

              {/* Indicator 3: Neck/Posture */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="relative shrink-0">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute inset-0 opacity-75"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-white relative z-10"></div>
                  </div>
                  <div className="flex flex-col">
                      <p className="text-green-400 text-xs font-bold uppercase tracking-wider mb-1">Openness</p>
                      <p className="text-white text-sm font-semibold">Exposed neck / Smiling</p>
                  </div>
              </div>
              
           </div>
        </div>

      </div>
    </section>
  );
};
