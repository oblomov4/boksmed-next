import { relations, sql } from 'drizzle-orm';
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

export const usersTableRelations = relations(usersTable, ({ many }) => ({
  reviews: many(reviewsTable),
}));

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

export const categoryTableRelations = relations(categoryTable, ({ many }) => ({
  products: many(productTable),
}));

export type InsertCategoryTable = typeof categoryTable.$inferInsert;
export type SelectCategoryTable = typeof categoryTable.$inferSelect;

export const producesiltTable = pgTable('producesilts', {
  id: serial().primaryKey(),

  title: varchar().notNull(),
  description: varchar().notNull(),
  imageUrl: varchar(),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export type InsertProducesiltTable = typeof producesiltTable.$inferInsert;
export type SelectProducesiltTable = typeof producesiltTable.$inferSelect;

export const productTable = pgTable('products', {
  id: serial().primaryKey(),

  title: varchar().notNull(),
  description: varchar().notNull(),

  quantity: integer().notNull(),

  price: integer(),
  imageUrl: varchar(),

  videoUrl: varchar(),

  specifications: text(),

  categoryId: integer('category_id'),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export const productTableRelations = relations(productTable, ({ one, many }) => ({
  category: one(categoryTable, {
    fields: [productTable.categoryId],
    references: [categoryTable.id],
    relationName: 'category',
  }),
  reviews: many(reviewsTable, {
    relationName: 'reviews',
  }),
}));

export const raitingEnum = pgEnum('raiting', ['1', '2', '3', '4', '5']);

export const reviewsTable = pgTable('rewiews', {
  id: serial().primaryKey(),
  name: varchar().notNull(),
  text: varchar().notNull(),
  raiting: raitingEnum(),
  productId: integer('product_id'),
  userId: integer('user_id'),
});

export const reviewsTableRelations = relations(reviewsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [reviewsTable.userId],
    references: [usersTable.id],
    relationName: 'user',
  }),
  product: one(productTable, {
    fields: [reviewsTable.productId],
    references: [productTable.id],
    relationName: 'product',
  }),
}));
