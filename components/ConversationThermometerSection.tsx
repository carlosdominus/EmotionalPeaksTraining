import React from 'react';
import { Gauge } from 'lucide-react';

interface ConversationThermometerSectionProps {
  onCtaClick: () => void;
}

export const ConversationThermometerSection: React.FC<ConversationThermometerSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients/Images */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         {/* Subtle colored glows matching the design vibe */}
         <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Text Content - Centered */}
        <div className="flex flex-col items-center text-center max-w-3xl space-y-8 mb-16">
             {/* Badge */}
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#78BBFF] shadow-[0_0_0_1px_rgba(120,187,255,0.2)] bg-transparent">
                <Gauge className="w-5 h-5 text-[#78BBFF]" />
                <span className="text-sm font-bold text-[#78BBFF] tracking-wide">Conversation Thermometer</span>
             </div>

             {/* Heading */}
             <div className="space-y-2">
               <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-br from-[#EEE] to-[#94B4FF] bg-clip-text text-transparent block">
                      Is she interested or just being nice?
                  </span>
               </h2>
               <h2 className="text-3xl md:text-4xl font-bold leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-br from-[#EEE] to-[#94B4FF] bg-clip-text text-transparent block">
                       Never be in doubt again...
                  </span>
               </h2>
             </div>

             {/* Description */}
             <div className="space-y-1">
               <p className="text-base text-[#B0B5BE] font-medium leading-relaxed max-w-lg mx-auto">
                  ChatDate features a real-time conversation thermometer.
               </p>
               <p className="text-base text-[#B0B5BE] font-medium leading-relaxed max-w-lg mx-auto">
                  Telling you if it's time to heat things up or tone it down.
               </p>
             </div>

             {/* CTA */}
             <button 
                onClick={onCtaClick}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95 mt-4"
              >
                Master The Method Now
              </button>
          </div>

          {/* Image Container - Fixed Dimensions as requested */}
          <div className="relative w-[300px] h-[400px] shrink-0 group">
              {/* Background Glow specific to image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[60px] rounded-full pointer-events-none"></div>
              
              {/* Cropped Container */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-gray-900/50">
                  <img 
                      src="https://i.ibb.co/qLzQ55yn/conversa-nozap.webp" 
                      alt="Thermometer Feature Interface" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Optional: Inner shadow overlay for depth */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2.5rem] pointer-events-none"></div>
              </div>
          </div>

      </div>
    </section>
  );
};