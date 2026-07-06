import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Sparkles, Sword, Shield, Target, Zap, ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <main>
        {/* Hero Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                <span className="font-semibold text-primary">Deadlock AI Assistant</span>
                <span className="h-4 w-px bg-white/10" aria-hidden="true" />
                <a href="#" className="flex items-center gap-x-1">
                  Доступна версия 1.0
                  <ChevronRight className="h-3 w-3 text-gray-500" />
                </a>
              </div>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl text-balance">
              Побеждайте в каждом матче с <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient">ИИ-тренером в реальном времени</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Хватит гадать, какой предмет купить следующим. Наш ИИ анализирует вашу линию, сборку противника и состояние игры, чтобы мгновенно дать выигрышную стратегию.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/assistant">
                <Button size="lg" className="glow">
                  Запустить ассистента
                </Button>
              </Link>
              <a href="#features" className="text-sm font-semibold leading-6 text-white">
                Узнать больше <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className="relative">
              <Card className="max-w-[500px] border-primary/20 rotate-1 transform-gpu">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm font-bold uppercase tracking-wider">РЕКОМЕНДАЦИЯ ИИ</span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-3/4 bg-white/10 rounded" />
                  <div className="h-2 w-full bg-white/10 rounded" />
                  <div className="h-2 w-5/6 bg-white/10 rounded" />
                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="h-10 bg-green-500/20 rounded border border-green-500/30" />
                    <div className="h-10 bg-blue-500/20 rounded border border-blue-500/30" />
                  </div>
                </div>
              </Card>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">Стратегии победы</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Все, что нужно для доминирования
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
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
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                      <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Часто задаваемые вопросы</h2>
            <div className="mt-10 space-y-8 divide-y divide-white/10">
              {[
                {
                  q: "Как работает ИИ?",
                  a: "Наш ассистент использует продвинутые модели OpenAI, обученные на больших объемах данных Deadlock, патчноутах и стратегиях высокоуровневых игроков."
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
                <div key={faq.q} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                  <dt className="text-base font-semibold leading-7 text-white lg:col-span-5">{faq.q}</dt>
                  <dd className="mt-4 lg:col-span-7 lg:mt-0">
                    <p className="text-base leading-7 text-gray-400">{faq.a}</p>
                  </dd>
                </div>
              ))}
            </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-gray-400">
              &copy; 2026 Deadlock AI Assistant. Не аффилировано с Valve Corporation.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Конфиденциальность</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Условия</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
