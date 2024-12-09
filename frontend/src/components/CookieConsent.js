import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-700">
              Wij gebruiken cookies om uw ervaring op onze website te verbeteren. 
              Door op "Alles accepteren" te klikken, stemt u in met het gebruik van ALLE cookies. 
              U kunt ook alleen de noodzakelijke cookies accepteren of 
              <Link to="/cookie-policy" className="text-blue-600 hover:text-blue-800 ml-1">
                ons cookiebeleid bekijken
              </Link>.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleAcceptNecessary}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
            >
              Alleen noodzakelijk
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
            >
              Alles accepteren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
