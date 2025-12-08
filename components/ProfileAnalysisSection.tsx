import React from 'react';
import { Video, Play } from 'lucide-react';

interface ProfileAnalysisSectionProps {
  onCtaClick: () => void;
}

export const ProfileAnalysisSection: React.FC<ProfileAnalysisSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Header Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mb-12 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 shadow-[0_0_0_1px_rgba(99,102,241,0.1)]">
              <Video size={16} className="text-indigo-400" />
              <span className="text-sm font-bold text-indigo-400 tracking-wide">Real Approach Video</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-white">
              Watch how Emotional Spikes work in real life <span className="text-indigo-400">(she asks for MY Instagram)</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base text-slate-400 font-medium leading-relaxed max-w-2xl">
              In this street approach you'll see me using Flirting and Teasing in real-time. Pay attention to her body language the moment I create emotional spikes - she runs her hand through her hair, crosses her legs, and asks for my contact.
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
        <div className="relative w-full max-w-4xl mx-auto mt-6 group cursor-pointer">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Main Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900 border border-white/10 shadow-2xl">
                {/* Thumbnail Image */}
                <img 
                  src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=2574&auto=format&fit=crop" 
                  alt="Real approach video thumbnail" 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                      <Play size={32} className="text-white fill-white translate-x-1" />
                   </div>
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">LIVE DEMO</div>
                   <h3 className="text-white font-bold text-lg md:text-xl">Street Approach: From "Get away" to "Give me your number"</h3>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};