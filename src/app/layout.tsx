import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

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
            <Link href="/" className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-xs font-black">D</span>
              </div>
              DEADLOCK<span className="text-primary">AI</span>
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
