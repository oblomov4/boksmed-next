import { relations, sql } from 'drizzle-orm';
import {
  boolean,
  integer,
  jsonb,
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

export const ordersCall = pgTable('orders_call', {
  id: serial().primaryKey(),
  name: varchar().notNull(),
  phone: varchar().notNull(),
  message: varchar().notNull(),
});

export const carts = pgTable('carts', {
  id: serial().primaryKey(),

  userId: integer('user_id')
    .unique()
    .references(() => users.id),

  token: text('token').notNull(),

  totalAmount: integer('total_amount').default(0),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export const cartsItems = pgTable('carts_items', {
  id: serial().primaryKey(),

  cartId: integer('cart_id').references(() => carts.id),
  productId: integer('product_id').references(() => products.id),
  quantity: integer('quantity').default(1),

  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export const orderStatusEnum = pgEnum('order_status', ['PENDING', 'PAID', 'CANCELLED']); // Adjust values as needed
export const orderAdminStatusEnum = pgEnum('order_admin_status', ['В ОБРАБОТКЕ', 'ОБРАБОТАН']); // Adjust values as needed

export const orders = pgTable('orders', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  token: text('token').notNull(),
  totalAmount: integer('total_amount').notNull(),
  status: orderStatusEnum('status').notNull(),
  adminStatus: orderAdminStatusEnum().notNull().default('В ОБРАБОТКЕ'),
  trackCode: varchar('track_code'),
  paymentId: text('payment_id'),
  items: jsonb('items').notNull(),
  address: text('address').notNull(),
  createdAt: timestamp('created_at', { mode: 'string', precision: 3 }).defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string', precision: 3 }).$onUpdate(() => sql`now()`),
});

export const futureReviews = pgTable('future_reviews', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id),
  ordersId: integer('orders_id').references(() => orders.id),
});

export type InsertCartsTable = typeof carts.$inferInsert;
export type SelectCartsTable = typeof carts.$inferSelect;

export type InsertOrdersCallTable = typeof ordersCall.$inferInsert;
export type SelectOrdersCallTable = typeof ordersCall.$inferSelect;

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

export const ordersRelations = relations(orders, ({ many, one }) => ({
  futureReviews: many(futureReviews),
  users: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
}));

export const futureReviewsRelations = relations(futureReviews, ({ one }) => ({
  orders: one(orders, {
    fields: [futureReviews.ordersId],
    references: [orders.id],
  }),
}));

export const usersRelations = relations(users, ({ many, one }) => ({
  reviews: many(reviews),
  carts: one(carts),
  orders: many(orders),
}));

export const cartsRelations = relations(carts, ({ one, many }) => ({
  users: one(users, {
    fields: [carts.userId],
    references: [users.id],
  }),
  cartsItems: many(cartsItems),
}));

export const cartsItemsRelations = relations(cartsItems, ({ one }) => ({
  carts: one(carts, {
    fields: [cartsItems.cartId],
    references: [carts.id],
  }),
  products: one(products, {
    fields: [cartsItems.productId],
    references: [products.id],
  }),
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
  cartsItems: many(cartsItems),
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
