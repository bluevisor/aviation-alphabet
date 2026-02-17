import Link from 'next/link';
// import { alphabet } from './data';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 lg:p-24 text-center">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* Header/Nav placeholder if needed */}
      </div>

      <div className="relative flex place-items-center">
        <h1 className="text-6xl md:text-9xl font-thin tracking-tight mb-8">
          Aviation<br/>Alphabet
        </h1>
      </div>

      <div className="mb-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left gap-4 lg:gap-8 mt-8 lg:mt-16 w-full">
        <Link
          href="/learn"
          className="group rounded-lg border border-neutral-800 px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the full NATO phonetic alphabet list with pronunciation guides.
          </p>
        </Link>

        <Link
          href="/quiz"
          className="group rounded-lg border border-neutral-800 px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Practice{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Test your memory with random flashcards.
          </p>
        </Link>
      </div>
    </main>
  );
}
