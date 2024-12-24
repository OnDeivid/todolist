import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { prismas } from "./prismas";
export const maxDuration = 60;
export const config = {
  runtime: "edge",
};


const prisma = new PrismaClient();
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  callbacks: {
    async session({ session, token, user }) {

      const userDataCars = await prismas.user.findUnique({
        where: { email: session.user.email },
        select: {
          name: true,
        },
      });
      session.user.userDataCars = userDataCars 
      return session;
    },
  },
})