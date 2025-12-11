import React from 'react';
import { Check, ShieldCheck, Zap } from 'lucide-react';

interface PricingSectionProps {
  onCtaClick?: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = () => {
  const features = [
    "Complete Emotional Spikes System",
    "Anti-Freeze Manual",
    "Flirting & Teasing Modules",
    "Bonus: Date Chat AI",
    "Bonus: Perfect Sex Map",
    "Bonus: Magnetic Instagram",
    "Access to Private Community"
  ];

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `url("https://framerusercontent.com/images/FAYi3psR2wCxdiS3d7ulhxNVvg.svg")`, backgroundSize: '250px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-10 text-center space-y-2">
          <h3 className="text-lg font-bold text-gray-200 uppercase tracking-wider">Emotional Spikes Method</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Choose Your Plan:
            </span>
          </h2>
        </div>

        {/* Plans Grid - Single Card Centered */}
        {/* Added id="oferta" here so the scroll focuses on the card/price */}
        <div id="oferta" className="max-w-[400px] mx-auto mb-20 scroll-mt-8">
          
          {/* Card Container */}
          <div className="relative rounded-[2rem] overflow-hidden bg-[#020308] border border-blue-900/50 shadow-[0_0_50px_-10px_rgba(37,99,235,0.2)] flex flex-col">
            
            {/* Header Image */}
            <div className="relative w-full">
              <img 
                src="https://i.ibb.co/n8RdMyrz/Emotional-Spikes-Method.webp" 
                alt="Emotional Spikes Method" 
                className="w-full h-auto object-cover"
              />
              {/* Optional gradient overlay at bottom of image to blend with card */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#020308] to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 pt-2 flex-1 flex flex-col">
              
              {/* Features List */}
              <div className="space-y-3 mb-8 pl-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600/20 flex items-center justify-center mt-0.5">
                      <Check size={12} className="text-blue-400" strokeWidth={3} />
                    </div>
                    <span className="text-gray-200 font-medium text-[15px] leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Price Section */}
              <div className="text-center mt-auto">
                <div className="mb-1">
                   <p className="text-red-500 font-bold text-xs uppercase tracking-wider line-through decoration-2">FROM $ 87 TO</p>
                </div>
                
                <div className="flex items-baseline justify-center gap-1 mb-6 text-white">
                  <span className="text-2xl font-bold text-white">$</span>
                  <span className="text-6xl font-bold text-white tracking-tighter">27</span>
                </div>

                {/* Button */}
                <a 
                  href="https://go.centerpag.com/PPU38CQ3E3H?src=lead1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-[#2563EB] hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 mb-4"
                >
                  Subscribe Now
                </a>
                
                {/* Guarantee Text */}
                <div className="flex flex-col items-center gap-1 opacity-70">
                   <div className="flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-gray-300" />
                      <span className="text-xs text-gray-300 font-medium">15-Day Guarantee</span>
                   </div>
                   <span className="text-[10px] text-gray-500">Secure Purchase • Weekly Updates</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Guarantee Seal Section - Simplified */}
        <div className="flex flex-col items-center justify-center text-center pb-8">
            {/* Spinning Text Ring Seal */}
            <div className="relative w-40 h-40">
               <div className="absolute inset-0 animate-[spin_12s_linear_infinite] opacity-30">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      id="textPath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text fill="white" fontSize="6.2" fontWeight="700" letterSpacing="1.2">
                      <textPath href="#textPath" startOffset="0%">
                        15 DAY UNCONDITIONAL GUARANTEE • 15 DAY UNCONDITIONAL GUARANTEE •
                      </textPath>
                    </text>
                  </svg>
               </div>

               <div className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-gradient-to-b from-blue-900/40 to-black border border-blue-500/20 flex items-center justify-center z-10 backdrop-blur-sm">
                   <Zap size={32} className="text-blue-500" fill="currentColor" fillOpacity={0.2} />
               </div>
            </div>
        </div>

      </div>
    </section>
  );
};