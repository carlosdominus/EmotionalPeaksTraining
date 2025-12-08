
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-[#020202] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.ibb.co/gbd5x4pr/logo.webp" 
              alt="ChatDate Logo" 
              className="w-8 h-8 object-cover rounded-xl grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            <span className="font-bold text-gray-400 tracking-tight text-lg">ChatDate</span>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} ChatDate. All rights reserved.
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
