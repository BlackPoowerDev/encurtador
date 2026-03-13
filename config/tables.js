import { integer, pgTable, varchar,timestamp } from "drizzle-orm/pg-core";

export const shorten = pgTable("shorten", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  id_url: varchar("id_url", { length: 10 }).notNull().unique(),
  url: varchar('url',{length: 255}).notNull(),
  createdat: timestamp('createdat').notNull(),
});
