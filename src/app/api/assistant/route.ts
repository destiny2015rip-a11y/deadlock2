import { NextRequest, NextResponse } from 'next/server';
import { openai, DEFAULT_MODEL } from '@/lib/openai';
import { SYSTEM_PROMPT, generateUserPrompt } from '@/lib/prompt';
import { AssistantRequest } from '@/types';
import { db } from '@/db';
import { aiLogs } from '@/db/schema';

export async function POST(req: NextRequest) {
  try {
    const body: AssistantRequest = await req.json();

    if (!body.myHero || !body.enemyHero || !body.mainProblem) {
      return NextResponse.json(
        { error: 'Missing required fields: myHero, enemyHero, and mainProblem are required.' },
        { status: 400 }
      );
    }

    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: generateUserPrompt(body) },
      ],
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error('Empty response from AI provider');
    }

    // Некоторые модели могут возвращать JSON обернутым в блоки кода
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    const cleanedContent = jsonMatch ? jsonMatch[0] : content;

    const parsedContent = JSON.parse(cleanedContent);

    // Save to DB
    try {
      await db.insert(aiLogs).values({
        myHero: body.myHero,
        enemyHero: body.enemyHero,
        gameStage: body.gameStage,
        problem: body.mainProblem,
        response: parsedContent,
      });
    } catch (dbError) {
      console.error('Database Logging Error:', dbError);
    }

    return NextResponse.json(parsedContent);
  } catch (error: any) {
    console.error('AI API Error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
