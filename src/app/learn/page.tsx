import Link from 'next/link';
import { alphabet } from '../data';

export default function Learn() {
  return (
    <main className="min-h-screen p-8 lg:p-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex justify-between items-end">
          <h1 className="text-4xl lg:text-6xl font-thin tracking-tight">
            Learn
          </h1>
          <Link href="/" className="text-lg opacity-50 hover:opacity-100 transition-opacity">
            Home
          </Link>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {alphabet.map((item) => (
            <div 
              key={item.letter}
              className="border border-white/10 p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group cursor-default"
            >
              <div className="text-4xl font-bold mb-2 group-hover:text-amber-200 transition-colors">
                {item.letter}
              </div>
              <div className="text-xl uppercase tracking-widest font-light opacity-80 mb-1">
                {item.word}
              </div>
              <div className="text-sm opacity-40 font-mono">
                {item.pronunciation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
