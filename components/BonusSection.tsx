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
            <span className="text-sm font-bold text-[#395BC7] tracking-wide">Bonus</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#323140] tracking-tight leading-[1.1] max-w-4xl">
            It's no use having a Ferrari if you don't know how to drive...
          </h2>
          
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl">
            That's why you'll get a training course included with ChatDate
          </p>
        </div>

        {/* Training Cards */}
        <div className="flex justify-center mb-16 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="w-full max-w-md group bg-white rounded-[2rem] p-4 md:p-5 shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
             <div className="aspect-video rounded-2xl overflow-hidden mb-6 bg-slate-100 relative">
               <img 
                 src="https://i.ibb.co/9mnGBGjp/Mastering-the-chat-date.avif" 
                 alt="Mastering ChatDate" 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
               />
             </div>
             <div className="px-2 pb-4 text-center md:text-left">
               <h3 className="text-xl font-bold text-[#323140] mb-3">Mastering ChatDate</h3>
               <p className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                 Course teaching you all ChatDate tricks and how to use 100% of its potential
               </p>
             </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-24">
            <button 
              onClick={onCtaClick}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95"
            >
              Master The Method Now
            </button>
        </div>

        {/* Exclusive Gifts */}
        <div className="max-w-4xl mx-auto">
           <h3 className="text-xl md:text-2xl font-bold text-[#323140] text-center mb-12 tracking-tight">
             Plus, Get 2 Exclusive Gifts
           </h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
             {/* Benefit 1 */}
             <div className="flex flex-col items-center text-center space-y-4">
               <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center text-slate-700 mb-2 transform hover:scale-110 transition-transform duration-300">
                 <Video size={30} strokeWidth={1.5} />
               </div>
               <h4 className="text-xl font-bold text-[#323140]">Monthly meetings with Murilo</h4>
               <p className="text-slate-500 font-medium max-w-[280px] leading-relaxed text-sm md:text-base">
                 Ask questions live with Murilo once a month
               </p>
             </div>

             {/* Benefit 2 */}
             <div className="flex flex-col items-center text-center space-y-4">
               <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center text-slate-700 mb-2 transform hover:scale-110 transition-transform duration-300">
                 <Globe size={30} strokeWidth={1.5} />
               </div>
               <h4 className="text-xl font-bold text-[#323140]">The Social Circle</h4>
               <p className="text-slate-500 font-medium max-w-[280px] leading-relaxed text-sm md:text-base">
                 Exclusive map with member geolocation. Find people nearby to hang out.
               </p>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};