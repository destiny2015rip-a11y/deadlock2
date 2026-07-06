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
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error('Empty response from OpenAI');
    }

    const parsedContent = JSON.parse(content);

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
      // We don't fail the request if logging fails
    }

    return NextResponse.json(parsedContent);
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
