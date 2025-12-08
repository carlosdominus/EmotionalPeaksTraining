
import React from 'react';
import { Heart, Target, Thermometer, Snowflake, Tent, Video, Bot, Camera, Flame, Box } from 'lucide-react';

const features = [
  // Bonuses - Moved to top
  {
    icon: <Bot size={28} className="text-yellow-500" />,
    title: "Date Chat AI",
    description: "AI tool that generates perfect messages with emotional spikes for any situation - never send boring texts again",
    badge: "BONUS",
    image: "https://i.ibb.co/Pv6YZM5K/CHATDATE-v3.webp"
  },
  {
    icon: <Camera size={28} className="text-orange-500" />,
    title: "Attractive Instagram",
    description: "The 3 photos that create a 'boomerang effect' making women check your profile multiple times per day",
    badge: "BONUS",
    image: "https://i.ibb.co/xttRFLJW/Magnetic-Profile-Method.webp"
  },
  {
    icon: <Flame size={28} className="text-red-500 fill-red-500/10" />,
    title: "Perfect Sex Map",
    description: "Techniques to have unforgettable sex and make her obsessed with you after the first night",
    badge: "BONUS",
    image: "https://i.ibb.co/SwF2F5Vg/sexmap.webp"
  },
  // Standard Features
  {
    icon: <Heart size={28} className="text-pink-500 fill-pink-500/10" />,
    title: "Flirting Technique",
    description: "Learn the 3 types of compliments that generate positive emotional spikes and make her see you as different",
    badge: null
  },
  {
    icon: <Target size={28} className="text-blue-500" />,
    title: "Teasing Technique",
    description: "Master the art of playful challenge that creates sexual tension and makes her chase your validation",
    badge: null
  },
  {
    icon: <Thermometer size={28} className="text-green-500" />,
    title: "Emotional Thermometer",
    description: "Read her subtle body language signals to know exactly when she wants you to approach, escalate or kiss",
    badge: null
  },
  {
    icon: <Snowflake size={28} className="text-cyan-500" />,
    title: "Anti-Freeze Manual",
    description: "Never run out of things to say during an approach. Stay spontaneous, funny and attractive effortlessly",
    badge: null
  },
  {
    icon: <Tent size={28} className="text-purple-500" />,
    title: "The Rollercoaster Effect",
    description: "Combine Flirting + Teasing to manipulate her dopamine system and create an emotional loop only YOU can trigger",
    badge: null
  },
  {
    icon: <Video size={28} className="text-indigo-500" />,
    title: "Real Street Approaches",
    description: "Watch real demonstrations of the method in action with beautiful women and see the exact moment they become interested",
    badge: null
  }
];

export const FeaturesGridSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F7F9FF] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7F9FF] border border-[#BDD1FF] shadow-[0_0_0_2px_rgba(241,242,251,0.5)]">
            <Box className="w-5 h-5 text-[#395BC7]" />
            <span className="text-sm font-bold text-[#395BC7] tracking-wide">Complete Training</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#323140] tracking-tight leading-[1.1]">
            Everything Included in <span className="text-blue-600">Emotional Spikes Method</span>
          </h2>
          
          <p className="text-base text-slate-500 font-medium max-w-xl">
            Master all the techniques to create attraction with any woman
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col ${feature.badge ? 'border-blue-200 ring-1 ring-blue-100' : 'border-slate-100 shadow-sm'}`}
            >
              {/* Image Header (If present) */}
              {feature.image && (
                <div className="relative aspect-square overflow-hidden border-b border-slate-100">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge on Image */}
                  {feature.badge && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm z-10">
                      {feature.badge}
                    </div>
                  )}
                </div>
              )}

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col">
                  {/* Badge for Non-Image cards */}
                  {!feature.image && feature.badge && (
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                      {feature.badge}
                    </div>
                  )}
                  
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors shrink-0">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold text-[#323140] leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed font-medium text-sm">
                    {feature.description}
                  </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
