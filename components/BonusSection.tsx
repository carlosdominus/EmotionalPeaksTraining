import React from 'react';
import { Gift, Video, Globe } from 'lucide-react';

interface BonusSectionProps {
  onCtaClick: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#F7F9FF] relative overflow-hidden border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 border border-[#BDD1FF] shadow-[0_0_0_2px_rgba(241,242,251,0.5)]">
            <Gift className="w-5 h-5 text-[#395BC7]" />
            <span className="text-sm font-bold text-[#395BC7] tracking-wide">Community Bonuses</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#323140] tracking-tight leading-[1.1] max-w-4xl">
            Join the Exclusive Community
          </h2>
          
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl">
            Beyond the method, get access to ongoing support and our private network
          </p>
        </div>

        {/* Exclusive Gifts */}
        <div className="max-w-4xl mx-auto mb-16">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
             {/* Benefit 1 */}
             <div className="flex flex-col items-center text-center space-y-4 group">
               <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center text-blue-600 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                 <Video size={36} strokeWidth={1.5} />
               </div>
               <h4 className="text-xl font-bold text-[#323140]">Monthly Hotseats</h4>
               <p className="text-slate-500 font-medium max-w-[280px] leading-relaxed text-sm md:text-base">
                 Live Q&A sessions where you can ask specific questions about your situation directly to the experts.
               </p>
             </div>

             {/* Benefit 2 */}
             <div className="flex flex-col items-center text-center space-y-4 group">
               <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center text-purple-600 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                 <Globe size={36} strokeWidth={1.5} />
               </div>
               <h4 className="text-xl font-bold text-[#323140]">The Social Circle</h4>
               <p className="text-slate-500 font-medium max-w-[280px] leading-relaxed text-sm md:text-base">
                 Exclusive member map. Find wingmen nearby to go out and practice the method with.
               </p>
             </div>
           </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
            <button 
              onClick={onCtaClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Master The Method Now
            </button>
        </div>

      </div>
    </section>
  );
};