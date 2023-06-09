import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        username: { label: "아이디", type: "text", placeholder: "이름" },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials) {
        const { username, password } = credentials!;

        if (!username || !password) return null;

        const user = await prisma.user.findFirst({
          where: {
            username,
            password,
          },
        });

        if (user) return user;

        return Promise.reject(new Error());
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
    updateAge: 2 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, username: user.username };
      }
      return { ...token };
    },
    async session({ session, token }) {
      return { ...session, user: { ...token } };
    },
  },
  pages: {
    signIn: "/accounts/signin",
  },
};
