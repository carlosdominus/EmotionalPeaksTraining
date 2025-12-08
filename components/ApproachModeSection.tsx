import React from 'react';
import { MessageSquareText } from 'lucide-react';

interface ApproachModeSectionProps {
  onCtaClick: () => void;
}

export const ApproachModeSection: React.FC<ApproachModeSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-6 md:py-10 bg-[#F7F9FF] relative overflow-hidden flex flex-col items-center">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center w-full">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#BDD1FF] shadow-[0_2px_10px_rgba(57,91,199,0.05)] mb-4">
           <MessageSquareText className="w-4 h-4 text-[#395BC7]" />
           <span className="text-sm font-bold text-[#395BC7] tracking-wide">Approach Mode</span>
        </div>
 
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#323140] text-center max-w-3xl mb-3 leading-[1.15] tracking-tight">
          Want to approach a woman but don't know what to say?
        </h2>
 
        {/* Subtitle */}
        <p className="text-base text-slate-500 font-medium text-center max-w-2xl mb-6 leading-relaxed">
          Send an audio explaining the situation and ChatDate will give you the perfect line to start the conversation
        </p>
 
        {/* CTA */}
        <button 
           onClick={onCtaClick}
           className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] active:scale-95 mb-8"
         >
           Master The Method Now
        </button>
 
        {/* Visuals Container */}
        <div className="relative w-full max-w-[400px] mx-auto flex flex-col items-center">
            <img 
              src="https://i.ibb.co/sdVPqXXG/tipos-conversas-1.webp"
              alt="Approach Mode Demo"
              className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
        </div>

      </div>
    </section>
  );
};