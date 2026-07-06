import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  console.warn('OPENAI_API_KEY is not set in environment variables');
}

export const openai = new OpenAI({
baseURL: "https://openrouter.ai",
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key',
});

export const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'meta-llama/llama-3-8b-instruct:free';
