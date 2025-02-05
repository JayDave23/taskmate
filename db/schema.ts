import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: varchar("id", { length: 255 }).primaryKey(),
    name: text("name"),
    email: text("email").unique().notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    password:text("password"),
  });
  export const tasks = pgTable("tasks", {
    id: varchar("id", { length: 255 }).primaryKey(),
    title: text("title").notNull(),
    description: text("description"),
    status: text("status"), 
    dueDate: text("due_date"),
    userId: varchar("user_id", { length: 255 }).references(() => users.id, { onDelete: "cascade" }).notNull(),
  });
