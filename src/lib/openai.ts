import OpenAI from 'openai';

if (!process.env.OPENROUTER_API_KEY) {
  console.warn('OPENROUTER_API_KEY is not set in environment variables');
}

export const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: process.env.OPENROUTER_API_KEY || 'dummy-key',
  defaultHeaders: {
    'HTTP-Referer': 'https://deadlock-ai-assistant.vercel.app', // Замените на ваш URL
    'X-Title': 'Deadlock AI Assistant',
  },
});

export const DEFAULT_MODEL = process.env.OPENROUTER_MODEL || 'google/gemma-4-26b-a4b-it:free';
