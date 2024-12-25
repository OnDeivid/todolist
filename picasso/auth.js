import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from "./app/utils/something"

import Car from "./app/models/Cars";
import mongoose from "mongoose";
// import Users from "./app/models/User";


export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    GitHub
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {

      return token;
    },

    async session({ session, token }) {
      await mongoose.connect("mongodb+srv://tino19950:os4thQQmP80cXplJ@cardupdate.kl88d.mongodb.net/Users?retryWrites=true&w=majority&appName=cardUpdate")

      const data = await Car.findOne()
      session.user.dataHere = data
      console.log(session)

      return session;
    },
  },
});