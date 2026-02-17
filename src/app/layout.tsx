import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aviation Alphabet | NATO Phonetic',
  description: 'Learn and practice the NATO phonetic alphabet for clear communication.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
}
