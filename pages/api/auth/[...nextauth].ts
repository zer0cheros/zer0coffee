import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import prisma from '../../../lib/prisma'
import { Session } from "@prisma/client";

interface Options {
  clientId: string
  clientSecret: string
  user: string
}

const authHandler: NextApiHandler<Options> = (req, res) => NextAuth(req, res, options);
export default authHandler;


const options = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
  callbacks: {
    session: async (session:Session) => {
      session.userId = session.user.id;
          
      return Promise.resolve(session);
    }
  }
};