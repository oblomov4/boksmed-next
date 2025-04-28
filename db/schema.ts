import { sql } from 'drizzle-orm';
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum('role', ['ADMIN', 'USER']);

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar().notNull().unique(),
  name: varchar().notNull(),
  lastName: varchar().notNull(),
  inn: varchar().notNull(),
  password: varchar().notNull(),
  phone: varchar().notNull(),
  role: roleEnum().default('USER').notNull(),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export type InsertUserTable = typeof usersTable.$inferInsert;
export type SelectUserTable = typeof usersTable.$inferSelect;

export const eventsTable = pgTable('events', {
  id: serial().primaryKey(),
  title: varchar().notNull(),
  description: text().notNull(),
  visible: boolean().default(false).notNull(),
  imageUrl: varchar(),
});

export type InsertEventsTable = typeof eventsTable.$inferInsert;
export type SelectEventsTable = typeof eventsTable.$inferSelect;

export const categoryTable = pgTable('categories', {
  id: serial().primaryKey(),
  title: varchar().notNull(),
  imageUrl: varchar(),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export type InsertCategoryTable = typeof categoryTable.$inferInsert;
export type SelectCategoryTable = typeof categoryTable.$inferSelect;
