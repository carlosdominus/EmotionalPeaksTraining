import React, { useEffect, useRef } from 'react';

// Declare smartplayer as any to access the global variable injected by the script
declare global {
  interface Window {
    smartplayer: any;
  }
}

export const VSLSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptUrl = "https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/693a4826b14056e2ac8d39e1/v4/player.js";
    const playerId = "vid-693a4826b14056e2ac8d39e1";

    // 1. Load Script (Idempotent)
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const s = document.createElement("script");
      s.src = scriptUrl;
      s.async = true;
      document.head.appendChild(s);
    }

    // 2. Mount Player (Idempotent)
    if (containerRef.current && !containerRef.current.querySelector(`#${playerId}`)) {
        const player = document.createElement('vturb-smartplayer');
        player.id = playerId;
        // Styles from prompt
        player.style.display = 'block';
        player.style.margin = '0 auto';
        player.style.width = '100%';
        player.style.maxWidth = '400px';
        
        containerRef.current.appendChild(player);
    }

    // 3. VSL Delay Logic
    const runDelayLogic = () => {
        /* ALTERE O VALOR 10 PARA OS SEGUNDOS EM QUE AS SEÇÕES VÃO APARECER */
        var SECONDS_TO_DISPLAY = 1410;
        var CLASS_TO_DISPLAY = ".esconder";
        /* DAQUI PARA BAIXO NAO PRECISA ALTERAR */
        var EXPIRATION_DAYS = 14;
        var alreadyDisplayedKey = "alreadyElsDisplayed" + SECONDS_TO_DISPLAY;
        var elsHidden = document.querySelectorAll<HTMLElement>(CLASS_TO_DISPLAY);
        var elsDisplayed = false;
        var attempts = 0;

        class StorageHandler {
            static expiryTime = EXPIRATION_DAYS * 86400000;
            static set(key: string, value: any) {
                localStorage.setItem(
                    key,
                    JSON.stringify({ value, expiry: Date.now() + this.expiryTime })
                );
            }
            static get(key: string) {
                var item = localStorage.getItem(key);
                if (!item) return null;
                var { value, expiry } = JSON.parse(item);
                if (Date.now() > expiry) {
                    localStorage.removeItem(key);
                    return null;
                }
                return value;
            }
        }

        var alreadyElsDisplayed = StorageHandler.get(alreadyDisplayedKey);

        var showHiddenElements = function () {
            elsDisplayed = true;
            // Removed direct 'block' style setting to avoid breaking flex/grid layouts
            // Instead we can remove the class or set visibility.
            // However, sticking to the provided script logic which uses display="block", 
            // but since we are using 'esconder' on wrapper divs that are block-level, this is safe.
            elsHidden.forEach((e) => e.style.display = "block");
            StorageHandler.set(alreadyDisplayedKey, true);
        };

        var startWatchVideoProgress = function () {
            // Check for window.smartplayer global variable
            const sp = (window as any).smartplayer;
            if (typeof sp === 'undefined' || !(sp.instances && sp.instances.length)) {
                if (attempts >= 10) return;
                attempts++;
                return setTimeout(startWatchVideoProgress, 1000);
            }
            sp.instances[0].on('timeupdate', () => {
                if (elsDisplayed || sp.instances[0].smartAutoPlay) return;
                if (sp.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;
                showHiddenElements();
            });
        };

        if (alreadyElsDisplayed) {
            setTimeout(showHiddenElements, 100);
        } else {
            startWatchVideoProgress();
        }
    };

    runDelayLogic();

  }, []); 

  return (
    <div className="w-full mb-10 relative z-20">
      <div ref={containerRef} className="w-full" />
    </div>
  );
};