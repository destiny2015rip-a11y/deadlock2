import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Russo_One, Rajdhani } from 'next/font/google';

const russoOne = Russo_One({ subsets: ['latin', 'cyrillic'], weight: '400' });
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "DEADLOCK AI | Продвинутый игровой ассистент",
  description: "Real-time AI coaching and itemization advice for Deadlock players.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased selection:bg-primary/30">
        <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className={`${russoOne.className} text-xl tracking-tighter text-white flex items-center gap-2 group relative z-[100]`}>
              <div className="relative w-7 h-7 flex items-center justify-center">
                {/* Аккуратный логотип-прицел */}
                <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-secondary stroke-2 transition-all group-hover:rotate-90" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" className="opacity-20" />
                  <path d="M12 2V5M12 19V22M2 12H5M19 12H22" />
                  <circle cx="12" cy="12" r="2" className="fill-secondary" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-black tracking-tight group-hover:text-secondary transition-colors keep-caps">DEADLOCK</span>
                <span className={`${rajdhani.className} text-[8px] text-secondary tracking-[0.2em] font-bold opacity-70`}>Assistant AI</span>
              </div>
            </Link>
            <div className={`${rajdhani.className} hidden sm:flex items-center gap-6 text-sm font-semibold text-gray-300 relative z-[100]`}>
              <Link href="/" className="hover:text-white transition-colors">Главная</Link>
              <Link href="/assistant" className="hover:text-white transition-colors">Ассистент</Link>
              <Link href="#features" className="hover:text-white transition-colors">Возможности</Link>
            </div>
            
            <div className="flex items-center gap-3 relative z-[100]">
              <div className="flex items-center gap-3 border-r border-white/10 pr-3 mr-1">
                <a href="https://t.me/your_telegram_channel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#26A5E4] transition-colors">
                  {/* Официальная иконка Telegram */}
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.43 3.57a1 1 0 0 0-1.07-.11L2.73 11.23a1 1 0 0 0-.1 1.8l4.47 1.89 10.37-6.53c.1-.06.2.07.12.16l-8.4 7.64-.32 4.54a1 1 0 0 0 1.77.68l2.9-2.73 4.6 3.25a1 1 0 0 0 1.57-.6l3.18-16.74a1 1 0 0 0-.46-1.02Z" fill="currentColor"/>
                  </svg>
                </a>
                <a href="https://discord.gg/6DJxfU43T" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#5865F2] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.074 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.074 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
              </div>
              <Link href="/assistant">
                <Button size="sm" className="relative z-[100]">Начать</Button>
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
