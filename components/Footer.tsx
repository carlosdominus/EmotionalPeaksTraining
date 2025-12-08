import React from 'react';
import { Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-[#020202] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600/10 rounded-xl border border-blue-600/20">
              <Zap className="w-5 h-5 text-blue-500" strokeWidth={2.5} fill="currentColor" />
            </div>
            <span className="font-bold text-gray-200 tracking-tight text-lg">Emotional Spikes Method</span>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} Emotional Spikes Method. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm font-medium transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm font-medium transition-colors">Terms of Service</a>
            <a href="mailto:support@chatdate.ai" className="text-gray-500 hover:text-blue-400 text-sm font-medium transition-colors">Contact</a>
          </div>

        </div>
      </div>
    </footer>
  );
};