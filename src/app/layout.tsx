import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin', 'cyrillic'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Deadlock AI Assistant | Win More Games",
  description: "Real-time AI coaching and itemization advice for Deadlock players.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-primary/30">
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b-0">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className={`${oswald.className} text-2xl font-bold tracking-widest text-white flex items-center gap-3 group`}>
              <div className="w-10 h-10 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center transition-transform group-hover:rotate-12">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-secondary fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2ZM12 15.4L8.5 17.5L12 9L15.5 17.5L12 15.4Z"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg">DEADLOCK</span>
                <span className="text-xs text-secondary tracking-[0.3em] font-light">ASSISTANT AI</span>
              </div>
            </Link>
            <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-400">
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Link href="/assistant" className="hover:text-white transition-colors">Ассистент</Link>
              <Link href="#features" className="hover:text-white transition-colors">Возможности</Link>
            </div>
            <Link href="/assistant">
              <Button size="sm">Начать</Button>
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
