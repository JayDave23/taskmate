
const bcrypt = require('bcrypt');
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db"; 
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "email", placeholder: "Enter your mail Id please", required: true },
          name: {label: "Name", type:"text" , placeholder:"enter your name here.." , required: true},
          password: { label: "Password", type: "password", required: true }
        },
        async authorize(credentials: any) {
          const hashedPassword = await bcrypt.hash(credentials.password, 10);
          const existingUser = await db.select().from(users).where(eq(users.email, credentials.email)).then(res => res[0]);
          
          if (existingUser) {
              const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
              if (passwordValidation) {
                
                  return {
                      id: existingUser.id.toString(),
                      name: existingUser.name,
                      email: existingUser.email
                  }
              }
              return null;
          }

          try {
              const user = await db.insert(users).values({
                  id: crypto.randomUUID(),
                  name: credentials.name,
                  email: credentials.email,
                  password: hashedPassword,
                  
              }).returning().then(res => res[0]);
               
          
              return {
                  id: user.id.toString(),
                  name: user.name,
                  email: user.email
              }
          } catch(e) {
              console.error(e);
          }

          return null
        },
      })
  ],
  callbacks: {
    async session({ session, user }: { session: any, user: any }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }: { url: string, baseUrl: string }) {
      
      return baseUrl + "/dashboard";
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
