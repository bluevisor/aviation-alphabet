'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { alphabet } from '../data';

export default function Quiz() {
  const [current, setCurrent] = useState(alphabet[0]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    pickRandom();
  }, []);

  const pickRandom = () => {
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    setCurrent(alphabet[randomIndex]);
    setIsFlipped(false);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-neutral-950 text-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <header className="absolute top-8 left-8 right-8 flex justify-between items-center z-10">
        <Link href="/" className="text-sm opacity-50 hover:opacity-100 uppercase tracking-widest transition-opacity">
          Exit Quiz
        </Link>
        <div className="text-sm opacity-30 font-mono">
          {alphabet.length} CARDS
        </div>
      </header>

      <div className="perspective-1000 w-full max-w-md aspect-square relative cursor-pointer group" onClick={handleFlip}>
        <div className={`w-full h-full transition-all duration-500 transform-style-3d relative ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-neutral-900 border border-neutral-800 rounded-3xl flex items-center justify-center shadow-2xl">
            <span className="text-[12rem] font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-500 select-none">
              {current.letter}
            </span>
            <div className="absolute bottom-8 text-neutral-600 text-xs tracking-[0.3em] uppercase">
              Click to reveal
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden bg-white text-black rotate-y-180 rounded-3xl flex flex-col items-center justify-center shadow-2xl">
            <span className="text-6xl font-light tracking-tight mb-4">
              {current.word}
            </span>
            <span className="text-sm font-mono tracking-widest opacity-40 uppercase">
              {current.pronunciation}
            </span>
          </div>

        </div>
      </div>

      <button 
        onClick={(e) => {
          e.stopPropagation();
          pickRandom();
        }}
        className="mt-12 px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm z-10 backdrop-blur-sm"
      >
        Next Card
      </button>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </main>
  );
}
