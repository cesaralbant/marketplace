import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface OfferPopupProps {
  onClose: () => void;
}

const OfferPopup: React.FC<OfferPopupProps> = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative animate-pulse">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-4 text-red-600">Flash Sale!</h2>
        <p className="text-xl mb-4">Get 50% off on all vegetables when you buy in a group of 5!</p>
        <div className="text-2xl font-bold mb-4">
          Time Left: <span className="text-red-600">{formatTime(timeLeft)}</span>
        </div>
        <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-colors text-lg font-semibold transform hover:scale-105 duration-300">
          Join Group Buy Now!
        </button>
      </div>
    </div>
  );
};

export default OfferPopup;