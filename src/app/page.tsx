'use client';

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Sparkles, Sword, Shield, Target, Zap, ChevronRight, Layout } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveBackground } from '@/components/InteractiveBackground';
import { SpotlightCard } from '@/components/SpotlightCard';
import { Russo_One, Rajdhani } from 'next/font/google';

const russoOne = Russo_One({ subsets: ['latin', 'cyrillic'], weight: '400' });
const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, margin: "-50px" as const },
  transition: { duration: 1.3, ease: [0.21, 0.47, 0.32, 0.98] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.2 } }
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'patchnotes') {
        setActiveTab('patchnotes');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className={`${russoOne.className} relative isolate min-h-screen selection:bg-primary/30 overflow-x-hidden`}>
      <InteractiveBackground />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Hero Section */}
              <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 min-h-screen pointer-events-none">
                <motion.div 
                  {...fadeInUp}
                  className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto pointer-events-auto"
                >
                  <motion.div variants={fadeInUp} className="flex">
                    <div className="relative flex items-center gap-x-4 glass-panel px-4 py-1.5 text-xs uppercase tracking-widest text-secondary hud-tag">
                      <span className={`${rajdhani.className} font-bold`}>AI PROTOCOL: ACTIVE</span>
                      <span className="h-3 w-px bg-secondary/30" aria-hidden="true" />
                      <a href="#patchnotes" className={`${rajdhani.className} flex items-center gap-x-1 hover:text-white transition-colors`}>
                        v1.1 Patch
                        <ChevronRight className="h-3 w-3" />
                      </a>
                    </div>
                  </motion.div>
                  <motion.h1 
                    variants={fadeInUp} 
                    className="mt-10 text-4xl text-white sm:text-6xl text-balance leading-[1.1] font-black uppercase"
                    style={{ letterSpacing: '0.04em' }}
                  >
                    Побеждайте в каждом матче с <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">ИИ-тренером в реальном времени</span>
                  </motion.h1>
                  <motion.p variants={fadeInUp} className={`${rajdhani.className} mt-6 text-lg leading-7 text-gray-300 font-medium`} style={{ letterSpacing: '0.02em' }}>
                    Хватит гадать, какой предмет купить следующим. Наш ИИ анализирует вашу линию, сборку противника и состояние игры, чтобы мгновенно дать выигрышную стратегию.
                  </motion.p>
                  <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-x-6">
                    <Link href="/assistant">
                      <Button size="lg" className="glow font-bold tracking-tight">
                        Запустить ассистента
                      </Button>
                    </Link>
                    <a 
                      href="#features" 
                      className="hud-button px-6 py-3 rounded-lg text-sm font-bold leading-none text-white transition-all hover:scale-105"
                    >
                      Узнать больше
                    </a>
                  </motion.div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow pointer-events-auto"
                >
                  <div className="relative">
                    <SpotlightCard className="max-w-[500px] border-primary/30 shadow-2xl relative z-10" spotlightColor="rgba(168, 85, 247, 0.25)">
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-6 text-primary">
                          <Sparkles className="w-6 h-6" />
                          <span className="text-sm font-black uppercase tracking-[0.2em]">РЕКОМЕНДАЦИЯ ИИ</span>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <p className={`${rajdhani.className} text-xs text-gray-500 font-bold uppercase tracking-widest`}>Abrams vs Grey Talon (Лейн)</p>
                              <div className="flex gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                              </div>
                            </div>
                            <p className={`${rajdhani.className} text-lg text-gray-100 leading-relaxed font-semibold`}>
                              "Талон сильно пробивает тебя издалека. Тебе нужно сокращать дистанцию и играть от регена."
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                              <p className="text-[10px] text-green-500 font-black uppercase mb-1 tracking-tighter">Купить сейчас</p>
                              <p className="text-sm text-white font-black">Healing Rite</p>
                              <p className={`${rajdhani.className} text-[10px] text-gray-400 mt-1 italic font-bold`}>Для выживания</p>
                            </div>
                            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                              <p className="text-[10px] text-blue-500 font-black uppercase mb-1 tracking-tighter">Купить далее</p>
                              <p className="text-sm text-white font-black">Warp Stone</p>
                              <p className={`${rajdhani.className} text-[10px] text-gray-400 mt-1 italic font-bold`}>Для мобильности</p>
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                              <Shield className="w-4 h-4 text-amber-500" />
                              <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Тактика</p>
                            </div>
                            <p className={`${rajdhani.className} text-sm text-gray-300 leading-snug font-medium`}>
                              Используй рывок только тогда, когда у него нет выстрела скейтом. Не давай ему стакать стрелы.
                            </p>
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10" />
                    <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
                  </div>
                </motion.div>
              </section>

              {/* Features Section */}
              <section id="features" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 pointer-events-none">
                <motion.div {...fadeInUp} className="mx-auto max-w-2xl lg:text-center pointer-events-auto">
                  <h2 className="text-base font-black leading-7 text-primary uppercase tracking-[0.3em]">Стратегии победы</h2>
                  <p className="mt-2 text-4xl font-black tracking-tight text-white sm:text-5xl uppercase">
                    Все, что нужно для доминирования
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true, margin: "-50px" }}
                  className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none pointer-events-auto"
                >
                  <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {[
                      {
                        name: 'Контр-закуп',
                        description: 'Мгновенно узнайте, какие предметы нейтрализуют вашего оппонента на линии и лишат его преимущества.',
                        icon: Sword,
                      },
                      {
                        name: 'Анализ матчапа',
                        description: 'Понимайте сильные и слабые стороны каждого героя в Deadlock благодаря инсайтам от ИИ.',
                        icon: Target,
                      },
                      {
                        name: 'Адаптивность',
                        description: 'Будь то ранняя стадия лайнинга или лейтовые тимфайты, получайте советы, актуальные для текущей ситуации.',
                        icon: Shield,
                      },
                    ].map((feature) => (
                      <motion.div 
                        key={feature.name} 
                        variants={fadeInUp} 
                        className="flex flex-col group glass-panel p-8 rounded-2xl neon-border-hover"
                      >
                        <dt className="flex items-center gap-x-3 text-lg font-black leading-7 text-white uppercase tracking-tight">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 ring-1 ring-secondary/30 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                          </div>
                          {feature.name}
                        </dt>
                        <dd className={`${rajdhani.className} mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300 font-medium`}>
                          <p className="flex-auto leading-relaxed">{feature.description}</p>
                        </dd>
                      </motion.div>
                    ))}
                  </dl>
                </motion.div>
              </section>

              {/* FAQ Section */}
              <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative pointer-events-none pb-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10 pointer-events-auto">
                  <div>
                    <motion.h2 {...fadeInUp} className="text-4xl font-black tracking-tight text-white mb-8 uppercase">
                      Остались вопросы?
                    </motion.h2>
                    <motion.div 
                      variants={staggerContainer}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      className="space-y-6"
                    >
                      {[
                        {
                          q: "Как работает ИИ?",
                          a: "Наш ассистент использует продвинутые нейросети через OpenRouter, обученные на больших объемах данных Deadlock, патчноутах и стратегиях высокоуровневых игроков."
                        },
                        {
                          q: "Это считается читерством?",
                          a: "Нет, это инструмент для обучения. Он помогает лучше понять механики игры и закуп, подобно просмотру гайдов или занятиям с тренером."
                        },
                        {
                          q: "Поддерживаются ли все герои?",
                          a: "Да, мы регулярно обновляем базу данных по всем героям и предметам Deadlock по мере развития игры в стадии плейтеста."
                        }
                      ].map((faq) => (
                        <motion.div 
                          key={faq.q} 
                          variants={fadeInUp} 
                          className="glass-panel neon-border-hover p-6 rounded-2xl"
                        >
                          <dt className="text-base font-black text-white flex items-center gap-3 uppercase tracking-tight">
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                            {faq.q}
                          </dt>
                          <dd className={`${rajdhani.className} mt-3 text-base text-gray-200 leading-relaxed font-medium`}>
                            {faq.a}
                          </dd>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  <motion.div 
                    {...fadeInUp}
                    className="lg:sticky lg:top-40 relative"
                  >
                    <SpotlightCard className="border-secondary/30" spotlightColor="rgba(168,85,247,0.15)">
                      <div className="p-8">
                        <div className="flex items-center gap-2 mb-6 text-secondary">
                          <Target className="w-6 h-6" />
                          <span className="text-sm font-black uppercase tracking-[0.2em]">ГЛОБАЛЬНАЯ СТАТИСТИКА</span>
                        </div>
                        <div className="space-y-6">
                          <div className="flex items-center justify-between p-5 bg-white/5 rounded-xl border border-white/10">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 text-green-500">
                                <Sword className="w-6 h-6" />
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Эффективность</p>
                                <p className="text-xl font-black text-white">+24% Winrate</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-5 bg-white/5 rounded-xl border border-white/10">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-500">
                                <Shield className="w-6 h-6" />
                              </div>
                              <div>
                                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Выживаемость</p>
                                <p className="text-xl font-black text-white">1.8x KD Ratio</p>
                              </div>
                            </div>
                          </div>

                          <div className="p-5 bg-secondary/10 rounded-xl border border-secondary/20">
                            <p className={`${rajdhani.className} text-sm text-gray-300 leading-relaxed italic font-medium`}>
                              "Использование ассистента помогает игрокам быстрее адаптироваться к мете и находить оптимальные решения в сложных матчапах."
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-secondary/30 border border-secondary/50" />
                              <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Coach Pro</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="patchnotes"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="tab-content pt-32 pb-40"
            >
              <div className="patch-card">
                <div className="patch-header">
                  <span className="patch-version">ОБНОВЛЕНИЕ V1.1</span>
                  <h2 className="patch-title">Глобальный редизайн интерфейса</h2>
                </div>
                <p className="patch-description">Мы полностью переработали визуальную составляющую ассистента: убрали баги с версткой, добавили интерактивный рассыпчатый шлейф, перенесли розовое свечение градиента в центр страницы и внедрили официальный киберспортивный логотип.</p>
                
                {/* Блок сравнения картинок */}
                <div className="comparison-container">
                  <div className="comparison-box before">
                    <div className="badge before-badge">Было (До)</div>
                    <img src="/img/before.png" alt="Интерфейс до обновления" />
                  </div>
                  <div className="comparison-box after">
                    <div className="badge after-badge">Стало (Сейчас)</div>
                    <img src="/img/after.png" alt="Интерфейс после обновления" />
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); window.location.hash = ''; }}
                  className="hud-button px-10 py-4 rounded-xl text-sm font-black text-white uppercase inline-flex items-center gap-2 tracking-widest"
                >
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  Вернуться на главную
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 relative z-10 bg-[#020617]/80 backdrop-blur-md pointer-events-auto">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
            <p className={`${rajdhani.className} text-sm text-gray-500 font-bold uppercase tracking-[0.3em]`}>
              &copy; 2026 Deadlock AI Assistant. Все права защищены.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
