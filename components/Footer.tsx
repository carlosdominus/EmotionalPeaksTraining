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

          {/* Links - Now just visual text */}
          <div className="flex items-center gap-6">
            <span className="text-gray-500 text-sm font-medium cursor-default">Privacy Policy</span>
            <span className="text-gray-500 text-sm font-medium cursor-default">Terms of Service</span>
            <span className="text-gray-500 text-sm font-medium cursor-default">Contact</span>
          </div>

        </div>
      </div>
    </footer>
  );
};