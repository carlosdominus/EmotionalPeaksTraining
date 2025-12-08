import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { analyzeStoryImage } from './services/geminiService';
import { GeneratedReply, AnalysisState } from './types';
import { FloatingBubble } from './components/FloatingBubble';
import { AnalysisModal } from './components/AnalysisModal';
import { IntegrationsSection } from './components/IntegrationsSection';
import { ConversationModeSection } from './components/ConversationModeSection';
import { BioGeneratorSection } from './components/BioGeneratorSection';
import { ConversationThermometerSection } from './components/ConversationThermometerSection';
import { ApproachModeSection } from './components/ApproachModeSection';
import { ProfileAnalysisSection } from './components/ProfileAnalysisSection';
import { FeaturesGridSection } from './components/FeaturesGridSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [analysis, setAnalysis] = useState<AnalysisState>({
    isLoading: false,
    error: null,
    result: null,
    imagePreview: null
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Reset state
    setAnalysis({
      isLoading: true,
      error: null,
      result: null,
      imagePreview: URL.createObjectURL(file)
    });
    setIsModalOpen(true);

    try {
      // Convert to base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        try {
          const replies = await analyzeStoryImage(base64String);
          setAnalysis(prev => ({ ...prev, isLoading: false, result: replies }));
        } catch (err) {
          setAnalysis(prev => ({ ...prev, isLoading: false, error: 'Failed to analyze image' }));
        }
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error processing file", error);
      setAnalysis(prev => ({ ...prev, isLoading: false, error: 'Error processing file' }));
    }

    // Reset input so same file can be selected again
    event.target.value = '';
  };

  return (
    <div className="bg-[#050505] text-white selection:bg-blue-500/30">
      
      {/* Top Section Wrapper: Hero with Shared Background */}
      <div className="relative overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
             style={{ backgroundImage: `url("https://framerusercontent.com/images/FAYi3psR2wCxdiS3d7ulhxNVvg.svg")`, backgroundSize: '250px' }}>
        </div>

        {/* Background Gradients (Orbs) */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-3xl pointer-events-none mix-blend-screen"></div>

        {/* HERO SECTION - Always Visible */}
        <div className="animate-fade-in">
          <section className="relative min-h-screen flex flex-col justify-center animate-fade-in-up">
            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24">
              
              {/* Header Logo */}
              <div className="flex justify-center mb-12 animate-fade-in-down">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://i.ibb.co/gbd5x4pr/logo.webp" 
                    alt="ChatDate Logo" 
                    className="w-8 h-8 object-cover rounded-xl"
                  />
                  <span className="font-bold text-gray-200 tracking-tight text-xl">ChatDate</span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Left Column: Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-xl mx-auto lg:mx-0">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                      Stuck on what to reply to her story?
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-md">
                    Just upload a screenshot of the story and ChatDate will give you 3 creative, specific message options for her.
                  </p>

                  <div className="pt-4">
                    <button 
                      onClick={handleButtonClick}
                      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] active:scale-95"
                    >
                      <span>Try It Now</span>
                      <Upload className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                  </div>
                  
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                {/* Right Column: Visual Mockup */}
                <div className="relative w-full max-w-[400px] mx-auto lg:ml-auto h-[600px] lg:h-[700px] flex items-center justify-center">
                  
                  {/* Phone Frame Mockup */}
                  <div className="relative w-full h-full bg-gradient-to-b from-gray-800 to-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden z-0">
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-[#1a1a1a]">
                      <img 
                        src="https://i.ibb.co/DTvB3wQ/q1e-I1kv0-JShx-XFI5f-INuu-GPUQE-1-2.webp" 
                        alt="App Interface" 
                        className="w-full h-full object-cover opacity-80"
                      />
                      
                      {/* Gradient Overlay at bottom of phone */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                  </div>

                  {/* Floating Chat Bubbles - Stacked and Centered */}
                  
                  {/* Bubble 1: Top of stack */}
                  <div className="absolute bottom-[110px] left-1/2 -translate-x-1/2 w-full max-w-[280px] z-10">
                    <FloatingBubble 
                      text="I was going to say you look beautiful, but one thing worried me...🤔"
                      className="w-full animate-float"
                      delay={0}
                    />
                  </div>

                  {/* Bubble 2: Middle of stack */}
                  <div className="absolute bottom-[25px] left-1/2 -translate-x-1/2 w-full max-w-[280px] z-10">
                    <FloatingBubble 
                      text="If Hollywood catches fire again, I know who to blame 🔥👀"
                      className="w-full animate-float-delayed"
                      delay={2}
                    />
                  </div>

                  {/* Bubble 3: Bottom of stack */}
                  <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-full max-w-[280px] z-10">
                    <FloatingBubble 
                      text="Are you there for sightseeing or to steal a famous actress's job? 👀"
                      className="w-full animate-float-slow"
                      delay={4}
                    />
                  </div>

                  {/* Decorative Elements behind phone */}
                  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-blue-600/20 blur-[100px] rounded-full"></div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>

      {/* SECTIONS - Always Visible */}
      <div className="animate-fade-in">
          {/* INTEGRATIONS SECTION */}
          <IntegrationsSection />

          {/* CONVERSATION MODE SECTION */}
          <ConversationModeSection onCtaClick={handleButtonClick} />

          {/* BIO GENERATOR SECTION */}
          <BioGeneratorSection onCtaClick={handleButtonClick} />

          {/* CONVERSATION THERMOMETER SECTION */}
          <ConversationThermometerSection onCtaClick={handleButtonClick} />

          {/* APPROACH MODE SECTION */}
          <ApproachModeSection onCtaClick={handleButtonClick} />

          {/* PROFILE ANALYSIS SECTION */}
          <ProfileAnalysisSection onCtaClick={handleButtonClick} />

          {/* FEATURES GRID SECTION */}
          <FeaturesGridSection />

          {/* BONUS SECTION */}
          <BonusSection onCtaClick={handleButtonClick} />

          {/* PRICING SECTION */}
          <PricingSection />

          {/* FAQ SECTION */}
          <FAQSection />

          {/* FOOTER */}
          <Footer />

          {/* Analysis Modal */}
          <AnalysisModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            isLoading={analysis.isLoading}
            imagePreview={analysis.imagePreview}
            results={analysis.result}
          />
      </div>

    </div>
  );
}