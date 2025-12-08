
import React from 'react';

const icons = {
  header: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-full h-full">
      <path d="M220,169.09l-92,53.65L36,169.09A8,8,0,0,0,28,182.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,169.09Z" opacity="0.5"></path>
      <path d="M220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09Z" opacity="0.8"></path>
      <path d="M28,86.91l96,56a8,8,0,0,0,8.06,0l96-56a8,8,0,0,0,0-13.82l-96-56a8,8,0,0,0-8.06,0l-96,56a8,8,0,0,0,0,13.82Z"></path>
    </svg>
  ),
  conversation: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-8 h-8">
      <path d="M232,64V192a16,16,0,0,1-16,16H83l-32.6,28.16-.09.07A15.89,15.89,0,0,1,40,240a16.05,16.05,0,0,1-6.79-1.52A15.84,15.84,0,0,1,24,224V64A16,16,0,0,1,40,48H216A16,16,0,0,1,232,64Z"></path>
    </svg>
  ),
  bio: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-8 h-8">
      <path d="M224,128a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM112,72H216a8,8,0,0,0,0-16H112a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM72,144a8,8,0,0,0,8-8V56a8,8,0,0,0-13.66-5.66l-40,40a8,8,0,0,0,0,11.32l40,40A8,8,0,0,0,72,144Z"></path>
    </svg>
  ),
  profile: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-8 h-8">
      <path d="M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"></path>
    </svg>
  ),
  thermometer: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-8 h-8">
      <path d="M152,146.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM136,56H104V40a16,16,0,0,1,32,0Zm41.3,24.77a8,8,0,0,1,2.33-11.07c15-9.79,26.87-4.75,35.51-1.06C223,72,227.76,74,235.63,68.89a8,8,0,0,1,8.74,13.41C237.88,86.53,232,88,226.69,88c-7,0-12.92-2.54-17.83-4.63C201,80,196.24,78,188.37,83.11A8,8,0,0,1,177.3,80.77Zm69.4,22.46a8,8,0,0,1-2.33,11.07C237.88,118.53,232,120,226.69,120c-7,0-12.92-2.54-17.83-4.63-7.87-3.36-12.62-5.38-20.49-.25a8,8,0,0,1-8.74-13.41c15-9.79,26.87-4.75,35.51-1.06,7.87,3.36,12.62,5.39,20.49.25A8,8,0,0,1,246.7,103.23Z"></path>
    </svg>
  ),
  smile: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="w-8 h-8">
      <path d="M132,24A100.11,100.11,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100,100,0,0,0,0-200ZM88,140a12,12,0,1,1,12-12A12,12,0,0,1,88,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,132,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,176,140Z"></path>
    </svg>
  )
};

const features = [
  {
    title: "Conversation Mode",
    description: "Generate the perfect personalized message for the woman you're talking to",
    icon: icons.conversation
  },
  {
    title: "Bio Generator",
    description: "Don't settle for a generic bio, stand out with a catchy one",
    icon: icons.bio
  },
  {
    title: "Profile Analysis",
    description: "Find out how your profile looks and learn how to improve it",
    icon: icons.profile
  },
  {
    title: "Conversation Thermometer",
    description: "Find out if she's really interested or just being polite",
    icon: icons.thermometer
  },
  {
    title: "Closing Mode",
    description: "Set up the date or reject her gently",
    icon: icons.smile
  },
  {
    title: "Approach Mode",
    description: "Never run out of things to say to a woman during the day",
    icon: icons.smile
  }
];

export const FeaturesGridSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F7F9FF] relative overflow-hidden">
      {/* Background Gradients from snippet suggestion */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F7F9FF] border border-[#BDD1FF] shadow-[0_0_0_2px_rgba(241,242,251,0.5)]">
            <div className="w-5 h-5 text-[#395BC7]">
              {icons.header}
            </div>
            <span className="text-sm font-bold text-[#395BC7] tracking-wide">Tools</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#323140] tracking-tight leading-[1.1]">
            All ChatDate Modes
          </h2>
          
          <p className="text-base text-slate-500 font-medium">
            Explore all ChatDate features
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[#585961] group-hover:text-blue-600 transition-colors shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#323140] group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-slate-500 leading-relaxed font-medium text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
