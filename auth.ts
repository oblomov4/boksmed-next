import { SelectUserTable } from './db/schema';
import { compare } from 'bcrypt';
import NextAuth, { DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { db } from './db';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      lastName: string;
      phone: number;
      role: string;
      inn: string;
    } & DefaultSession['user'];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const findUser: SelectUserTable | undefined = await db.query.users.findFirst({
          where: (users, { eq }) => eq(users.email, credentials.email as string),
        });

        if (!findUser) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password as string, findUser.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: String(findUser.id),
          email: findUser.email,
          name: findUser.name,
          phone: findUser.phone,
          lastName: findUser.lastName,
          role: findUser.role,
          inn: findUser.inn,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      if (!token.email) {
        return token;
      }

      const findUser: SelectUserTable | undefined = await db.query.users.findFirst({
        where: (users, { eq }) => eq(users.email, token.email as string),
      });

      if (findUser) {
        token.id = String(findUser.id);
        token.email = findUser.email;
        token.name = findUser.name;
        token.phone = findUser.phone;
        token.role = findUser.role;
        token.inn = findUser.inn;
        token.lastName = findUser.lastName;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.user.phone = token.phone as number;
        session.user.role = token.role as string;
        session.user.inn = token.inn as string;
        session.user.lastName = token.lastName as string;
      }
      return session;
    },
  },
});
