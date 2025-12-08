
import React from 'react';
import { GeneratedReply } from '../types';
import { X, Copy, Check, Loader2 } from 'lucide-react';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  imagePreview: string | null;
  results: GeneratedReply[] | null;
}

export const AnalysisModal: React.FC<AnalysisModalProps> = ({ 
  isOpen, 
  onClose, 
  isLoading, 
  imagePreview, 
  results 
}) => {
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#111] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#151515]">
          <h3 className="text-xl font-bold bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent">
            {isLoading ? 'Analyzing Story...' : 'Reply Options'}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Image Preview */}
            {imagePreview && (
              <div className="w-full md:w-1/3 shrink-0">
                <div className="rounded-xl overflow-hidden border border-white/10 aspect-[9/16] relative bg-black">
                  <img 
                    src={imagePreview} 
                    alt="Story Upload" 
                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                  />
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 animate-pulse"></div>
                        <Loader2 className="animate-spin text-blue-400 relative z-10" size={40} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Results Area */}
            <div className="w-full md:w-2/3 space-y-4">
              {isLoading ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-white/10 rounded w-3/4"></div>
                  <div className="h-4 bg-white/10 rounded w-1/2"></div>
                  <div className="h-24 bg-white/5 rounded-xl mt-6 border border-white/5"></div>
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                  <div className="h-24 bg-white/5 rounded-xl border border-white/5"></div>
                </div>
              ) : results ? (
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm mb-4">
                    Here are 3 AI-generated options based on the image:
                  </p>
                  {results.map((reply) => (
                    <div 
                      key={reply.id} 
                      className="group relative p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full uppercase tracking-wider font-bold 
                          ${reply.tone === 'flirty' ? 'bg-pink-500/20 text-pink-300' : 
                            reply.tone === 'funny' ? 'bg-yellow-500/20 text-yellow-300' : 
                            'bg-blue-500/20 text-blue-300'}`}>
                          {reply.tone === 'flirty' ? 'Flirty' : reply.tone === 'funny' ? 'Funny' : 'Casual'}
                        </span>
                        <button 
                          onClick={() => handleCopy(reply.text, reply.id)}
                          className="text-gray-400 hover:text-white transition p-1"
                          title="Copy"
                        >
                          {copiedId === reply.id ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                        </button>
                      </div>
                      <p className="text-lg font-medium text-gray-100 pr-8">
                        "{reply.text}"
                      </p>
                    </div>
                  ))}
                  <button 
                    onClick={onClose}
                    className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-medium transition"
                  >
                    Try another photo
                  </button>
                </div>
              ) : (
                <div className="text-center text-gray-400 py-10">
                  Failed to generate replies. Please try again.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
