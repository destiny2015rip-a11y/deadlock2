'use client';

import React, { useState } from 'react';
import { AssistantRequest, AssistantResponse } from '@/types';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { Textarea } from './ui/Textarea';
import heroesData from '@/data/heroes.json';
import { Sparkles, Trash2 } from 'lucide-react';

interface AssistantFormProps {
  onSubmit: (data: AssistantRequest) => Promise<void>;
  isLoading: boolean;
}

const STAGES = [
  { label: 'Линия / Ранняя игра', value: 'lane' },
  { label: 'Мид гейм', value: 'mid' },
  { label: 'Лейт гейм', value: 'late' },
];

const QUICK_TEMPLATES = [
  "Не могу убить врага",
  "Меня постоянно контролят",
  "Проигрываю линию",
  "Не хватает урона в файтах",
  "Не выживаю под бурстом",
  "Не знаю, что покупать дальше",
];

export const AssistantForm: React.FC<AssistantFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<AssistantRequest>({
    myHero: '',
    enemyHero: '',
    gameStage: 'lane',
    itemsBought: '',
    mainProblem: '',
    troublesomeAbilities: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTemplateClick = (template: string) => {
    setFormData((prev) => ({ ...prev, mainProblem: template }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleClear = () => {
    setFormData({
      myHero: '',
      enemyHero: '',
      gameStage: 'lane',
      itemsBought: '',
      mainProblem: '',
      troublesomeAbilities: '',
      description: '',
    });
  };

  const heroOptions = heroesData.map((h) => ({ label: h.name, value: h.name }));

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Ваш герой</label>
          <Select
            name="myHero"
            value={formData.myHero}
            onChange={handleChange}
            options={heroOptions}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Герой врага</label>
          <Select
            name="enemyHero"
            value={formData.enemyHero}
            onChange={handleChange}
            options={heroOptions}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Стадия игры</label>
          <Select
            name="gameStage"
            value={formData.gameStage}
            onChange={handleChange}
            options={STAGES}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Уже купленные предметы</label>
          <Input
            name="itemsBought"
            value={formData.itemsBought}
            onChange={handleChange}
            placeholder="Например: Bullet Armor, Healing Rite"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">Быстрые шаблоны</label>
        <div className="flex flex-wrap gap-2">
          {QUICK_TEMPLATES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => handleTemplateClick(t)}
              className="px-3 py-1 text-xs rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">В чем проблема?</label>
        <Input
          name="mainProblem"
          value={formData.mainProblem}
          onChange={handleChange}
          placeholder="Опишите основную трудность"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">Мешающие способности</label>
        <Input
          name="troublesomeAbilities"
          value={formData.troublesomeAbilities}
          onChange={handleChange}
          placeholder="Какие скиллы врага мешают больше всего?"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-400">Дополнительно (опционально)</label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Любые другие детали ситуации"
          rows={3}
        />
      </div>

      <div className="flex gap-4 pt-4">
        <Button type="submit" className="flex-1 glow" isLoading={isLoading}>
          <Sparkles className="w-4 h-4 mr-2" />
          Получить совет ИИ
        </Button>
        <Button type="button" variant="outline" onClick={handleClear} disabled={isLoading}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </form>
  );
};
