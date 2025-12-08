
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How does ChatDate exactly work?",
    answer: "ChatDate uses advanced AI models to analyze your screenshots (Tinder bios, Instagram stories, WhatsApp chats) and generates context-aware, engaging replies or openers tailored to the specific situation."
  },
  {
    question: "Does it work for any dating app?",
    answer: "Yes! While optimized for Instagram, Tinder, Bumble, and Hinge, you can use ChatDate for any messaging platform. Just upload a screenshot of the context, and we'll handle the rest."
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. We use industry-standard encryption and trusted payment processors. We do not store your credit card details."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time directly through your account settings or by contacting our support team. No hidden fees or lock-in contracts."
  },
  {
    question: "Does it support languages other than English?",
    answer: "Yes, ChatDate supports multiple languages. The AI automatically detects the language in your screenshot and can generate replies in that language or English, depending on your preference."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
             <HelpCircle size={16} className="text-blue-400" />
             <span className="text-sm font-bold text-blue-100 tracking-wide">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-white/5 border-blue-500/30' 
                  : 'bg-[#0A0B14] border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-medium transition-colors ${
                  openIndex === index ? 'text-blue-200' : 'text-gray-200'
                }`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${
                  openIndex === index ? 'bg-blue-500/20 text-blue-300' : 'bg-white/5 text-gray-400'
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
