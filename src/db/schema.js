import { pgTable, serial, text, integer, timestamp, pgEnum, jsonb, varchar } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const matchStatus = pgEnum('match_status', ['scheduled', 'live', 'finished']);

export const matches = pgTable('matches', {
  id: serial('id').primaryKey(),
  sport: varchar('sport', { length: 50 }).notNull(),
  homeTeam: varchar('home_team', { length: 100 }).notNull(),
  awayTeam: varchar('away_team', { length: 100 }).notNull(),
  status: matchStatus('status').notNull().default('scheduled'),
  startTime: timestamp('start_time').notNull(),
  endTime: timestamp('end_time'),
  homeScore: integer('home_score').notNull().default(0),
  awayScore: integer('away_score').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const commentary = pgTable('commentary', {
  id: serial('id').primaryKey(),
  matchId: integer('match_id').references(() => matches.id).notNull(),
  minute: integer('minute'),
  sequence: integer('sequence'),
  period: varchar('period', { length: 30 }),
  eventType: varchar('event_type', { length: 60 }),
  actor: varchar('actor', { length: 100 }),
  team: varchar('team', { length: 50 }),
  message: text('message'),
  metadata: jsonb('metadata').default(sql`'{}'::jsonb`),
  tags: jsonb('tags').default(sql`'[]'::jsonb`),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const schema = {
  matchStatus,
  matches,
  commentary,
};
