'use client';

import React from 'react';
import { AssistantResponse } from '@/types';
import { Card, CardTitle } from './ui/Card';
import { CheckCircle2, AlertCircle, ShoppingCart, Lightbulb, Zap, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResponseDisplayProps {
  response: AssistantResponse | null;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response }) => {
  if (!response) return null;

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6 pb-12"
    >
      <motion.div variants={item}>
        <Card className="border-l-4 border-l-primary">
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <CardTitle className="mb-2">Анализ ситуации</CardTitle>
              <p className="text-gray-300 leading-relaxed">{response.summary}</p>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={item}>
          <Card className="border-l-4 border-l-green-500">
            <div className="flex items-start gap-4">
              <ShoppingCart className="w-6 h-6 text-green-500 shrink-0 mt-1" />
              <div>
                <CardTitle className="mb-2">Купить сейчас</CardTitle>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {response.buyNow.map((buyItem, i) => (
                    <li key={i}>{buyItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-l-4 border-l-blue-500">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
              <div>
                <CardTitle className="mb-2">Купить далее</CardTitle>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {response.buyNext.map((buyItem, i) => (
                    <li key={i}>{buyItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div variants={item}>
        <Card className="border-l-4 border-l-amber-500">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
            <div>
              <CardTitle className="mb-2">Почему это работает</CardTitle>
              <p className="text-gray-300 leading-relaxed">{response.whyItWorks}</p>
            </div>
          </div>
        </Card>
      </motion.div>

      <motion.div variants={item}>
        <Card className="border-l-4 border-l-purple-500">
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-purple-500 shrink-0 mt-1" />
            <div>
              <CardTitle className="mb-2">Стиль игры</CardTitle>
              <p className="text-gray-300 leading-relaxed">{response.playstyleChanges}</p>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div variants={item}>
          <Card className="border-l-4 border-l-red-500">
            <div className="flex items-start gap-4">
              <ShieldAlert className="w-6 h-6 text-red-500 shrink-0 mt-1" />
              <div>
                <CardTitle className="mb-2">Ошибки, которых следует избегать</CardTitle>
                <p className="text-gray-300 leading-relaxed">{response.mistakesToAvoid}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="border-l-4 border-l-gray-500">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-gray-400 shrink-0 mt-1" />
              <div>
                <CardTitle className="mb-2">Альтернативы</CardTitle>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {response.alternatives.map((altItem, i) => (
                    <li key={i}>{altItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};
