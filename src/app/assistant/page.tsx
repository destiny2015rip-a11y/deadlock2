'use client';

import React, { useState, useEffect } from 'react';
import { AssistantForm } from '@/components/AssistantForm';
import { ResponseDisplay } from '@/components/ResponseDisplay';
import { AssistantRequest, AssistantResponse } from '@/types';
import { Card } from '@/components/ui/Card';
import { ArrowLeft, History, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { InteractiveBackground } from '@/components/InteractiveBackground';
import { SpotlightCard } from '@/components/SpotlightCard';

export default function AssistantPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AssistantResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<AssistantResponse[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('deadlock_assistant_history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Failed to parse history', e);
      }
    }
  }, []);

  const handleSubmit = async (data: AssistantRequest) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const result: AssistantResponse = await res.json();
      setResponse(result);
      
      const newHistory = [result, ...history.slice(0, 4)];
      setHistory(newHistory);
      localStorage.setItem('deadlock_assistant_history', JSON.stringify(newHistory));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative isolate min-h-screen selection:bg-primary/30 overflow-x-hidden">
      {/* High-performance Interactive Trail Background */}
      <InteractiveBackground />

      <main className="relative z-10 pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8 pointer-events-none">
          <div className="flex items-center justify-between pointer-events-auto">
            <Link href="/" className="flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              На главную
            </Link>
            <div className="text-right">
              <h1 className="text-3xl font-bold text-white">ИИ-ассистент Deadlock</h1>
              <p className="text-gray-400 text-sm">Получите стратегический совет за секунды</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-6 pointer-events-auto">
              <Card>
                <h2 className="text-xl font-semibold text-white mb-6">Опишите вашу ситуацию</h2>
                <AssistantForm onSubmit={handleSubmit} isLoading={isLoading} />
              </Card>

              {history.length > 0 && (
                <Card>
                  <div className="flex items-center gap-2 mb-4">
                    <History className="w-5 h-5 text-gray-400" />
                    <h2 className="text-lg font-semibold text-white">История советов</h2>
                  </div>
                  <div className="space-y-3">
                    {history.map((h, i) => (
                      <button
                        key={i}
                        onClick={() => setResponse(h)}
                        className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
                      >
                        <p className="text-sm text-gray-300 line-clamp-2">{h.summary}</p>
                      </button>
                    ))}
                  </div>
                </Card>
              )}
            </div>

            <div className="lg:col-span-7 pointer-events-auto h-full">
              {isLoading ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center space-y-4 glass rounded-2xl">
                  <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                  <p className="text-gray-400 animate-pulse">Анализируем матч...</p>
                </div>
              ) : error ? (
                <Card className="border-red-500/50">
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mb-4">
                      <ArrowLeft className="w-6 h-6 text-red-500 rotate-45" />
                    </div>
                    <h3 className="text-lg font-bold text-white">Ошибка</h3>
                    <p className="text-gray-400 max-w-md mt-2">{error}</p>
                  </div>
                </Card>
              ) : response ? (
                <SpotlightCard className="border-primary/20" spotlightColor="rgba(99, 102, 241, 0.15)">
                  <div className="p-1">
                    <ResponseDisplay response={response} />
                  </div>
                </SpotlightCard>
              ) : (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/10 rounded-2xl glass backdrop-blur-md">
                  <Sparkles className="w-12 h-12 text-gray-600 mb-4" />
                  <h3 className="text-xl font-medium text-gray-400">Ожидание ввода</h3>
                  <p className="text-gray-500 max-w-sm mt-2">
                    Заполните форму слева, чтобы получить экспертный стратегический совет для вашего текущего матча в Deadlock.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
