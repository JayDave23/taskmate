export default {
    schema: "./db/schema.ts",
    out: "./drizzle", 
    dialect: "postgresql", 
    connectionString: process.env.DATABASE_URL,
    url: "postgresql://neondb_owner:npg_7bGJk0ZlmHrL@ep-floral-sound-a8m3nrbk-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"  ,
  } 