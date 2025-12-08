import React, { useEffect, useRef, memo } from 'react';

interface VSLSectionProps {
  onComplete?: () => void;
}

const VSLSectionComponent: React.FC<VSLSectionProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Keep callback ref updated
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // 1. Settings
    const SECONDS_TO_DISPLAY = 60;
    const STORAGE_KEY = `alreadyElsDisplayed${SECONDS_TO_DISPLAY}`;
    const alreadyDisplayed = localStorage.getItem(STORAGE_KEY);
    const PLAYER_ID = 'ab-691b9271d84e2d824a092e43';

    // If previously watched, show content immediately
    if (alreadyDisplayed) {
      if (onCompleteRef.current) onCompleteRef.current();
    }

    // 2. Load Player Script (Idempotent)
    const scriptUrl = "https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/ab-test/691b9271d84e2d824a092e43/player.js";
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const s = document.createElement("script");
      s.src = scriptUrl;
      s.async = true;
      document.head.appendChild(s);
    }

    // 3. Manual DOM Mounting (Idempotent check prevents duplicates)
    if (containerRef.current) {
        // Only append if it doesn't already exist.
        // This prevents the "Circular structure" error caused by duplicate custom elements in StrictMode
        // and allows us to remove the aggressive cleanup that was deleting the video.
        if (!containerRef.current.querySelector('vturb-smartplayer')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'vsl-wrapper w-full';
            
            const player = document.createElement('vturb-smartplayer');
            player.setAttribute('id', PLAYER_ID);
            player.className = 'block w-full mx-auto';
            
            wrapper.appendChild(player);
            containerRef.current.appendChild(wrapper);
        }
    }

    // 4. Timer / Progress Monitor
    // Clear any existing interval to be safe
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
        try {
            const smartplayer = (window as any).smartplayer;
            if (smartplayer && smartplayer.instances && smartplayer.instances[0]) {
                const instance = smartplayer.instances[0];
                
                // Check time
                if (instance.video.currentTime > SECONDS_TO_DISPLAY) {
                    localStorage.setItem(STORAGE_KEY, "true");
                    if (onCompleteRef.current) onCompleteRef.current();
                    
                    // Stop checking once target reached
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                }
            }
        } catch (e) {
            // Ignore errors
        }
    }, 1000);

    return () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        // Removed containerRef.current.innerHTML = '' to prevent video from disappearing.
        // The check in step 3 prevents duplicates, so we don't need to destroy the DOM here.
    };
  }, []); 

  return (
    <section className="relative w-full pt-8 pb-4 z-50">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] border border-white/10 bg-black/50 backdrop-blur-sm">
          {/* React leaves this div alone after initial render due to memo */}
          <div ref={containerRef} className="w-full min-h-[200px]" />
        </div>
      </div>
    </section>
  );
};

// IMPORTANT: deeply memoize to prevent any re-renders from parent updates
export const VSLSection = memo(VSLSectionComponent, () => true);