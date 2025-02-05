import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

const sql = neon("postgresql://neondb_owner:npg_7bGJk0ZlmHrL@ep-floral-sound-a8m3nrbk-pooler.eastus2.azure.neon.tech/neondb?sslmode=require");  

export const db = drizzle(sql, { schema }); // Ensure schema is passed
