import React from 'react';
import { Search } from 'lucide-react';

interface ProfileAnalysisSectionProps {
  onCtaClick: () => void;
}

export const ProfileAnalysisSection: React.FC<ProfileAnalysisSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mb-12 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#78BBFF]/30 bg-[#78BBFF]/5 shadow-[0_0_0_1px_rgba(120,187,255,0.1)]">
              <Search size={16} className="text-[#78BBFF]" />
              <span className="text-sm font-bold text-[#78BBFF] tracking-wide">Profile Analysis</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
              Find out if your Profile is good
            </h2>

            {/* Subtitle */}
            <p className="text-base text-slate-400 font-medium leading-relaxed max-w-lg">
              Upload a screenshot of your profile and receive personalized feedback
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

        {/* Visuals Composition */}
        <div className="relative w-full max-w-6xl flex justify-center mt-4">
            {/* Image - Displayed large as it contains the full composition */}
            <div className="relative w-full md:w-[90%]">
                <img 
                  src="https://i.ibb.co/RkLMRkfz/foto-perfil.webp" 
                  alt="Profile Analysis Composition" 
                  className="w-full h-auto object-contain"
                />
            </div>
        </div>

      </div>
    </section>
  );
};