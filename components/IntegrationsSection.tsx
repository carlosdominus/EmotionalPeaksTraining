
import React from 'react';
import { Zap, CheckCircle2 } from 'lucide-react';

const icons = [
  { src: "https://framerusercontent.com/images/C3GiTg0moWvrodHUJAk4uI22CU.svg", alt: "Tinder", scale: 0.5 },
  { src: "https://framerusercontent.com/images/5juZE7LEjwvoFBLkBrnSbTrQ3Zk.jpeg", alt: "Instagram", scale: 1 },
  { src: "https://framerusercontent.com/images/oAjUm6UY4AUQAyf0Psnsv9QEpv8.svg", alt: "WhatsApp", scale: 0.8 },
  { src: "https://framerusercontent.com/images/6mYBgWmaqqPLbDGAKpaam34HMg.svg", alt: "Messenger", scale: 0.9 },
  { src: "https://framerusercontent.com/images/WotMPPKOeX4cs9Iqu3gQ1qy44.svg", alt: "Snapchat", scale: 0.9 },
  { src: "https://framerusercontent.com/images/K2GJffY0nLsDe1BqDJKWRIlc.svg", alt: "Bumble", scale: 0.6 },
];

export const IntegrationsSection = () => {
  return (
    <section className="py-12 bg-[#F7F9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7F9FF] border border-[#BDD1FF] shadow-[0_0_0_2px_rgba(241,242,251,0.5)]">
            <Zap className="w-4 h-4 text-[#395BC7] fill-current" />
            <span className="text-sm font-bold text-[#395BC7] tracking-wide">Integrations</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#323140] tracking-tight leading-[1.1]">
            Use ChatDate with your <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-900">favorite apps</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            ChatDate works directly within WhatsApp and you can use it to analyze conversations from any app.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10 max-w-4xl mx-auto">
          {icons.map((icon, index) => (
            <div 
              key={index}
              className="group relative w-20 h-20 md:w-28 md:h-28 bg-[#FDFDFE] rounded-2xl transition-all duration-300 flex items-center justify-center p-5 hover:-translate-y-2"
              style={{
                boxShadow: `
                  inset 0px -3px 0px 2px rgba(189, 209, 255, 0.25), 
                  0px 4px 20px rgba(29, 46, 92, 0.05),
                  0px 1px 2px rgba(29, 46, 92, 0.1)
                `
              }}
            >
              <div className="w-full h-full flex items-center justify-center relative">
                 <img 
                  src={icon.src} 
                  alt={icon.alt} 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  style={{ transform: `scale(${icon.scale})` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Features Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
          <div className="flex items-center gap-3 group">
            <div className="p-2.5 bg-[#E1F0FF] rounded-lg text-[#0099FF] group-hover:scale-110 transition-transform">
              <Zap size={22} strokeWidth={2.5} />
            </div>
            <span className="text-[#0E1C29] font-bold text-base">Instant Replies</span>
          </div>
          
          <div className="hidden md:block w-px h-8 bg-slate-200"></div>
          
          <div className="flex items-center gap-3 group">
            <div className="p-2.5 bg-[#E0F2FE] rounded-lg text-[#0284C7] group-hover:scale-110 transition-transform">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              </svg>
            </div>
            <span className="text-[#0E1C29] font-bold text-base">Directly on WhatsApp</span>
          </div>
        </div>

      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#BDD1FF] to-transparent opacity-50"></div>
    </section>
  );
};
