
import React from 'react';
import { Check, ShieldCheck, Flame, Zap } from 'lucide-react';

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
    <section id="oferta" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: `url("https://framerusercontent.com/images/FAYi3psR2wCxdiS3d7ulhxNVvg.svg")`, backgroundSize: '250px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center space-y-2">
          <h3 className="text-lg font-bold text-gray-200 uppercase tracking-wider">Emotional Spikes Method</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
              Choose Your Plan:
            </span>
          </h2>
        </div>

        {/* Plans Grid - Single Card Centered */}
        <div className="max-w-lg mx-auto mb-20">
          
          {/* Global Plan (Dark Card) */}
          <div className="relative group rounded-[2.5rem] overflow-hidden border border-blue-500/30 bg-[#0A0B14] shadow-2xl flex flex-col hover:border-blue-500/50 transition-colors duration-300">
            <div className="relative w-full">
              <img 
                src="https://i.ibb.co/n8RdMyrz/Emotional-Spikes-Method.webp" 
                alt="Emotional Spikes Method" 
                className="w-full h-auto object-cover opacity-100 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-8 pt-4 flex-1 flex flex-col">
              <div className="space-y-4 mb-8 flex-1">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Check size={12} className="text-blue-300" strokeWidth={3} />
                    </div>
                    <span className="text-gray-200 font-medium text-sm md:text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6 text-center">
                <p className="text-red-400 font-bold text-sm mb-1 line-through">FROM $ 87 TO</p>
                <div className="flex items-end justify-center gap-1 mb-6 text-white">
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">$</span>
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">27</span>
                  <span className="text-lg font-medium text-gray-400 mb-1">/year</span>
                </div>

                <a 
                  href="https://pay.hotmart.com/S98957382H?off=ghf5xpef" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all transform hover:scale-[1.02] shadow-[0_4px_20px_-5px_rgba(37,99,235,0.4)] active:scale-95"
                >
                  Subscribe Now
                </a>
                
                <div className="mt-4 flex flex-col items-center gap-1 opacity-60">
                   <div className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-blue-300" />
                      <span className="text-xs text-blue-200 font-medium">15-Day Guarantee</span>
                   </div>
                   <span className="text-[10px] text-blue-200/70">Secure Purchase • Weekly Updates</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* New Guarantee Section Design */}
        <div className="flex flex-col items-center justify-center text-center">
            
            {/* Animated Seal */}
            <div className="relative w-48 h-48 mb-8 scale-110">
               {/* Spinning Text Ring */}
               <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
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

               {/* Center Badge */}
               <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-gradient-to-b from-[#1e40af] to-[#0f172a] shadow-[0_0_40px_rgba(30,64,175,0.6)] border border-blue-400/30 flex items-center justify-center z-10">
                   <div className="relative transform translate-y-1">
                      <Zap size={44} className="text-blue-300 fill-blue-500/10" strokeWidth={2.5} />
                      <Flame size={20} className="text-blue-100 fill-blue-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]" />
                   </div>
               </div>
            </div>

            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
               <Flame size={16} className="text-blue-400 fill-blue-400" />
               <span className="text-sm font-semibold text-blue-100">Zero Risk</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
               15-Day Guarantee
            </h3>

            {/* Description */}
            <p className="text-base text-slate-400 font-medium leading-relaxed max-w-xl mx-auto">
               <strong className="text-white block md:inline">Try the Emotional Spikes Method for 15 days risk-free,</strong>{" "}
               if you don't like it we'll refund 100% of your investment
            </p>

        </div>

      </div>
    </section>
  );
};
