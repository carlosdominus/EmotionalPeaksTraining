import React, { useState, useRef } from 'react';
import { Upload, ArrowRight } from 'lucide-react';
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
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { VSLSection } from './components/VSLSection';

export default function App() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [analysis, setAnalysis] = useState<AnalysisState>({
    isLoading: false,
    error: null,
    result: null,
    imagePreview: null
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Updated handler to open checkout directly
  const handleButtonClick = () => {
    window.open("https://go.centerpag.com/PPU38CQ3E3H?src=lead1", "_blank");
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
          <section className="relative flex flex-col justify-center animate-fade-in-up pt-12 pb-16 lg:pt-16 lg:pb-24">
            {/* Main Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
              
              {/* VSL Section - Always Visible */}
              <VSLSection />

              {/* Wrapper for Delayed Content (Hero + Other Sections) */}
              <div className="esconder">
                
                {/* Header Logo - Moved below VSL */}
                <div className="flex justify-center mb-8 animate-fade-in-down">
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-gray-200 tracking-tight text-xl">Emotional Spikes Method</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* Left Column: Text Content */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-xl mx-auto lg:mx-0">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                      <span className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent">
                        Tired of being ignored by women?
                      </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-md">
                      Learn how to create emotional spikes that make any woman addicted to you in less than 5 minutes - even if you're shy, ugly or broke.
                    </p>

                    <div className="pt-2">
                      <button 
                        onClick={handleButtonClick}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] active:scale-95"
                      >
                        <span>Master The Method Now</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
                  <div className="relative w-full max-w-[400px] mx-auto lg:ml-auto flex flex-col items-center justify-center gap-6">
                    
                    {/* Image Container - Reverted */}
                    <div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl z-0 bg-[#0F0F0F] border border-gray-800">
                      <div className="relative w-full aspect-square">
                        <img 
                          src="https://c.tenor.com/rt23AR7cgwUAAAAd/tenor.gif" 
                          alt="Sabrina Carpenter Flirting GIF" 
                          className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>
                    </div>

                    {/* Floating Chat Bubbles - Stacked and Centered Below */}
                    <div className="w-full flex flex-col items-center space-y-3">
                      <div className="w-full max-w-[280px]">
                          <FloatingBubble 
                          text="I had to come say hi... you're stunning 😏"
                          className="w-full animate-float"
                          delay={0}
                          />
                      </div>
                      
                      <div className="w-full max-w-[280px]">
                          <FloatingBubble 
                          text="But I bet you're trouble... I can tell by that smile 🤔"
                          className="w-full animate-float-delayed"
                          delay={2}
                          />
                      </div>

                      <div className="w-full max-w-[280px]">
                          <FloatingBubble 
                          text="Are you always this confident or is today special? 😂"
                          className="w-full animate-float-slow"
                          delay={4}
                          />
                      </div>
                    </div>

                    {/* Decorative Elements behind */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 blur-[100px] rounded-full"></div>
                  </div>

                </div>
              </div>

            </div>
          </section>
        </div>
      </div>

      {/* SECTIONS - Hidden until VSL timer */}
      <div className="animate-fade-in esconder">
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