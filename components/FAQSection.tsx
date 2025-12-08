
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What exactly is the Emotional Spikes Method?",
    answer: "It is a comprehensive digital training system that teaches you how to trigger intense attraction in women using specific psychological formulas. By mixing Flirting (Pull) and Teasing (Push), you create a dopamine-fueled 'emotional rollercoaster' that makes you unforgettable."
  },
  {
    question: "Do I need to be good looking or rich for this to work?",
    answer: "Not at all. The method relies on evolutionary psychology and emotional triggers, not your looks or bank account. It is specifically designed to give 'average' guys an unfair advantage by mastering the art of emotional communication that most men lack."
  },
  {
    question: "Will this work on dating apps like Tinder and Hinge?",
    answer: "Yes. The training includes the 'Anti-Freeze Manual' and specific modules for Online Game. You will learn how to adapt the Emotional Spikes into text messages that stand out from the hundreds of boring 'Hey, how are you?' messages she receives daily."
  },
  {
    question: "How is the content delivered?",
    answer: "You get instant digital access to the member's area immediately after purchase. You can watch the HD video lessons, read the manuals, and access the bonuses on your phone, computer, or tablet from anywhere in the world."
  },
  {
    question: "What if it doesn't work for me?",
    answer: "We offer a 15-day unconditional money-back guarantee. Go through the training, use the lines, and test the method. If you don't see a massive change in how women react to you, simply email us and we'll refund 100% of your money. No questions asked."
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