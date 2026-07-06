'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Sparkles, Sword, Shield, Target, Zap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlitchBackground } from '@/components/GlitchBackground';

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
  return (
    <div className="relative isolate min-h-screen selection:bg-primary/30 overflow-x-hidden">
      {/* Full Screen Interactive Background */}
      <GlitchBackground />

      {/* Ambient Glows */}
      <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[130px] opacity-20" />
      </div>

      <main className="relative z-10">
        {/* Content sections wrapper with pointer-events-auto for children */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40 min-h-screen pointer-events-none">
          <motion.div 
            {...fadeInUp}
            className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto pointer-events-auto"
          >
            <motion.div variants={fadeInUp} className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                <span className="font-semibold text-primary">Deadlock AI Assistant</span>
                <span className="h-4 w-px bg-white/10" aria-hidden="true" />
                <a href="#" className="flex items-center gap-x-1">
                  Доступна версия 1.0
                  <ChevronRight className="h-3 w-3 text-gray-500" />
                </a>
              </div>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">
              Побеждайте в каждом матче с <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">ИИ-тренером в реальном времени</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-gray-300">
              Хватит гадать, какой предмет купить следующим. Наш ИИ анализирует вашу линию, сборку противника и состояние игры, чтобы мгновенно дать выигрышную стратегию.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-x-6">
              <Link href="/assistant">
                <Button size="lg" className="glow">
                  Запустить ассистента
                </Button>
              </Link>
              <a href="#features" className="text-sm font-semibold leading-6 text-white">
                Узнать больше <span aria-hidden="true">→</span>
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
              <Card className="max-w-[500px] border-primary/20 shadow-2xl relative z-10">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">РЕКОМЕНДАЦИЯ ИИ</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[10px] text-gray-500 font-mono">Abrams vs Grey Talon (Лейн)</p>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                        <div className="w-1 h-1 rounded-full bg-gray-600" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-200 leading-relaxed font-medium">
                      "Тэлон сильно пробивает тебя издалека. Тебе нужно сокращать дистанцию и играть от регена."
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <p className="text-[9px] text-green-500 font-bold uppercase mb-1">Купить сейчас</p>
                      <p className="text-xs text-white font-semibold">Healing Rite</p>
                      <p className="text-[10px] text-gray-400 mt-1 italic">Для выживания</p>
                    </div>
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <p className="text-[9px] text-blue-500 font-bold uppercase mb-1">Купить далее</p>
                      <p className="text-xs text-white font-semibold">Warp Stone</p>
                      <p className="text-[10px] text-gray-400 mt-1 italic">Для мобильности</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield className="w-3 h-3 text-amber-500" />
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Тактика</p>
                    </div>
                    <p className="text-[11px] text-gray-400">
                      Используй рывок только тогда, когда у него нет выстрела скейтом. Не давай ему стакать стрелы.
                    </p>
                  </div>
                </div>
              </Card>
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 pointer-events-none">
          <motion.div 
            {...fadeInUp}
            className="mx-auto max-w-2xl lg:text-center pointer-events-auto"
          >
            <h2 className="text-base font-semibold leading-7 text-primary">Стратегии победы</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
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
                  className="flex flex-col group bg-secondary/10 border border-secondary/20 p-8 rounded-2xl hover:bg-secondary/20 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.05)]"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 ring-1 ring-secondary/30 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-secondary" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto leading-relaxed">{feature.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 relative pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10 pointer-events-auto">
            <div>
              <motion.h2 {...fadeInUp} className="text-3xl font-bold tracking-tight text-white mb-8">
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
                    className="bg-secondary/20 border border-secondary/40 hover:bg-secondary/30 transition-all duration-300 p-6 rounded-2xl shadow-[0_0_50px_rgba(168,85,247,0.1)]"
                  >
                    <dt className="text-base font-bold text-white flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                      {faq.q}
                    </dt>
                    <dd className="mt-3 text-sm text-gray-200 leading-relaxed">
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
              <Card className="border-secondary/30 bg-secondary/5 overflow-hidden">
                <div className="flex items-center gap-2 mb-6 text-secondary">
                  <Target className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-widest">ГЛОБАЛЬНАЯ СТАТИСТИКА</span>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30 text-green-500">
                        <Sword className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">Эффективность</p>
                        <p className="text-lg font-bold text-white">+24% Winrate</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-green-500 font-mono">Анализ билда</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30 text-blue-500">
                        <Shield className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">Выживаемость</p>
                        <p className="text-lg font-bold text-white">1.8x KD Ratio</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-blue-500 font-mono">Контр-закуп</p>
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                    <p className="text-xs text-gray-300 leading-relaxed italic">
                      "Использование ассистента помогает игрокам быстрее адаптироваться к мете и находить оптимальные решения в сложных матчапах."
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-secondary/30 border border-secondary/50" />
                      <p className="text-[10px] text-gray-400 font-bold uppercase">Deadlock Coach Pro</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-12 relative z-10 bg-[#020617]/80 backdrop-blur-md pointer-events-auto">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 relative text-center">
            <p className="text-sm text-gray-400">
              &copy; 2026 Deadlock AI Assistant. Не аффилировано с Valve Corporation. Все права защищены.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
