
import React from 'react';
import { Zap, MapPin, PartyPopper, Instagram, Heart, Briefcase, Globe, MessageCircle, Users, Sparkles } from 'lucide-react';

export const IntegrationsSection = () => {
  const contexts = [
    { 
      icon: <MapPin size={32} className="text-gray-700" />, 
      label: "Street",
      color: "bg-gray-100"
    },
    { 
      icon: <PartyPopper size={32} className="text-purple-500" />, 
      label: "Parties",
      color: "bg-purple-50"
    },
    { 
      icon: <Instagram size={32} className="text-pink-500" />, 
      label: "Instagram",
      color: "bg-pink-50"
    },
    { 
      icon: <Heart size={32} className="text-red-500 fill-red-500" />, 
      label: "Dating Apps",
      color: "bg-red-50"
    },
    { 
      icon: <Users size={32} className="text-blue-600" />, 
      label: "Social/Work",
      color: "bg-blue-50"
    },
    { 
      icon: <Globe size={32} className="text-cyan-500" />, 
      label: "Anywhere",
      color: "bg-cyan-50"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F7F9FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7F9FF] border border-[#BDD1FF] shadow-[0_0_0_2px_rgba(241,242,251,0.5)]">
            <Zap className="w-4 h-4 text-[#395BC7] fill-current" />
            <span className="text-sm font-bold text-[#395BC7] tracking-wide">Versatile Method</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#323140] tracking-tight leading-[1.1]">
            Use Emotional Spikes <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">anywhere you meet women</span>
          </h2>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            The method works on the street, at parties, on dating apps, and social media. Learn how to create attraction in any situation.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16 max-w-5xl mx-auto">
          {contexts.map((ctx, index) => (
            <div 
              key={index}
              className="group relative w-24 h-24 md:w-32 md:h-32 bg-[#FDFDFE] rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 p-4 hover:-translate-y-2"
              style={{
                boxShadow: `
                  inset 0px -3px 0px 2px rgba(189, 209, 255, 0.25), 
                  0px 4px 20px rgba(29, 46, 92, 0.05),
                  0px 1px 2px rgba(29, 46, 92, 0.1)
                `
              }}
            >
              <div className={`p-3 rounded-xl ${ctx.color} transition-transform duration-300 group-hover:scale-110`}>
                 {ctx.icon}
              </div>
              <span className="text-xs font-bold text-slate-600">{ctx.label}</span>
            </div>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center space-y-2 group">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 bg-yellow-50 rounded-xl text-yellow-600 group-hover:scale-110 transition-transform shadow-sm border border-yellow-100">
                <Zap size={24} strokeWidth={2} fill="currentColor" className="text-yellow-500" />
              </div>
              <h3 className="text-[#0E1C29] font-bold text-lg">In-Person Approaches</h3>
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
              Never freeze up again when talking to women face-to-face
            </p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center space-y-2 group">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600 group-hover:scale-110 transition-transform shadow-sm border border-blue-100">
                <MessageCircle size={24} strokeWidth={2} />
              </div>
              <h3 className="text-[#0E1C29] font-bold text-lg">Online Game</h3>
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
              Create attraction through messages on any dating app
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center space-y-2 group">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 bg-purple-50 rounded-xl text-purple-600 group-hover:scale-110 transition-transform shadow-sm border border-purple-100">
                <Sparkles size={24} strokeWidth={2} />
              </div>
              <h3 className="text-[#0E1C29] font-bold text-lg">Social Situations</h3>
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xs">
              Generate sexual tension at parties, work, or social events
            </p>
          </div>

        </div>

      </div>

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#BDD1FF] to-transparent opacity-50"></div>
    </section>
  );
};
