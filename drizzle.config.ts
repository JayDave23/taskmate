export default {
    schema: "./db/schema.ts",
    out: "./drizzle", 
    dialect: "postgresql", 
    connectionString: process.env.DATABASE_URL,
    url:  process.env.DATABASE_URL  ,
  } 
