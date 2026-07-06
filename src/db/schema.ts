// Keep the schema entrypoint present so models can define tables and run
// `npx drizzle-kit push` without bootstrapping Drizzle config first.
import { pgTable, serial, text, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const aiLogs = pgTable('ai_logs', {
  id: serial('id').primaryKey(),
  myHero: text('my_hero').notNull(),
  enemyHero: text('enemy_hero').notNull(),
  gameStage: text('game_stage').notNull(),
  problem: text('problem').notNull(),
  response: jsonb('response').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

