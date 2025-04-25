import { sql } from 'drizzle-orm';
import { integer, pgEnum, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum('role', ['ADMIN', 'USER']);

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  email: varchar().notNull().unique(),
  name: varchar().notNull(),
  inn: varchar().notNull(),
  password: varchar().notNull(),
  phone: integer().notNull(),
  role: roleEnum().default('USER').notNull(),

  verified: timestamp('verified', { mode: 'string', precision: 3 }),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export type InsertUserTable = typeof usersTable.$inferInsert;
export type SelectUserTable = typeof usersTable.$inferSelect;

export const verificationCodeTable = pgTable('verification_code', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  userId: integer('user_id')
    .references(() => usersTable.id, { onDelete: 'cascade' })
    .notNull()
    .unique(),

  code: varchar().unique().notNull(),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
});

export type SelectVerificationCodeTable = typeof verificationCodeTable.$inferSelect;
export type InsertVerificationCodeTable = typeof verificationCodeTable.$inferSelect;

export const forgotPasswordCode = pgTable('forgot_password_code', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  userId: integer('user_id')
    .references(() => usersTable.id, { onDelete: 'cascade' })
    .notNull()
    .unique(),

  code: varchar().unique().notNull(),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
});

export type SelectForgotPasswordCodeTable = typeof forgotPasswordCode.$inferSelect;
export type InsertForgotPasswordCodeTable = typeof forgotPasswordCode.$inferSelect;


