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
export const raitingEnum = pgEnum('raiting', ['1', '2', '3', '4', '5']);

export const products = pgTable('products', {
  id: serial().primaryKey(),

  title: varchar().notNull(),
  description: varchar().notNull(),

  quantity: integer().notNull(),

  price: integer().notNull(),
  imageUrl: varchar(),

  videoUrl: varchar(),

  specifications: text().notNull(),

  visible: boolean().default(true).notNull(),

  categoryId: integer('category_id').notNull(),
  producesiltId: integer('producesilt_id').notNull(),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export const users = pgTable('users', {
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

export const reviews = pgTable('reviews', {
  id: serial().primaryKey(),
  text: varchar(),
  raiting: raitingEnum(),
  productId: integer('product_id').references(() => products.id),
  userId: integer('user_id').references(() => users.id),
});

export const events = pgTable('events', {
  id: serial().primaryKey(),
  title: varchar().notNull(),
  description: text().notNull(),
  visible: boolean().default(false).notNull(),
  imageUrl: varchar(),
});

export const categories = pgTable('categories', {
  id: serial().primaryKey(),
  title: varchar().notNull(),
  imageUrl: varchar(),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export const producesilts = pgTable('producesilts', {
  id: serial().primaryKey(),

  title: varchar().notNull(),
  description: varchar().notNull(),
  imageUrl: varchar(),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export type InsertUserTable = typeof users.$inferInsert;
export type SelectUserTable = typeof users.$inferSelect;

export type InsertEventsTable = typeof events.$inferInsert;
export type SelectEventsTable = typeof events.$inferSelect;

export type InsertCategoryTable = typeof categories.$inferInsert;
export type SelectCategoryTable = typeof categories.$inferSelect;

export type InsertProducesiltTable = typeof producesilts.$inferInsert;
export type SelectProducesiltTable = typeof producesilts.$inferSelect;

export type InsertProductTable = typeof products.$inferInsert;
export type SelectProductTable = typeof products.$inferSelect;

export const usersRelations = relations(users, ({ many }) => ({
  reviews: many(reviews),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
    relationName: 'category',
  }),
  producesilt: one(producesilts, {
    fields: [products.producesiltId],
    references: [producesilts.id],
    relationName: 'producesilt',
  }),
  reviews: many(reviews),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  user: one(users, {
    fields: [reviews.userId],
    references: [users.id],
    relationName: 'user',
  }),
  product: one(products, {
    fields: [reviews.productId],
    references: [products.id],
    relationName: 'product',
  }),
}));

export const producesiltsRelations = relations(producesilts, ({ many }) => ({
  products: many(products),
}));

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));
