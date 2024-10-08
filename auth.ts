import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserById } from "./data/user";
import { getTwoFactorConfimationByUserId } from "./data/two-factor-confirmation";
import { getAccountByUserId } from "./data/account";
export const {
  auth,
  handlers,
  signIn, // signIn & signOut both are available in server actions & sever Components
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(db),
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  //events are asynchronous functions that do not return a response, they used for audit logs.
  events: {
    //The linkAccount event runs when a new account is linked to a user.
    //When a user signs in with a provider (like Google, Facebook, etc.) for the first time
    //and the account is created and linked to their user profile.
    //When an existing user connects an additional authentication provider to their account.
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      // Prevent signIn without email verification
      const existingUser = await getUserById(user.id!);
      if (!existingUser || !existingUser.emailVerified) {
        return false;
      }
      if (existingUser.isTwoFactorEnabled) {
        const twoFactorConfirmation = await getTwoFactorConfimationByUserId(
          existingUser.id
        );

        if (!twoFactorConfirmation) return false;

        //Delete two factor confirmation for next sign in
        await db.twoFactorConfirmation.delete({
          where: { id: twoFactorConfirmation.id },
        });
      }
      return true;
    },
    // callbacks are async functions that we can use control what happens when certain action is performed.
    async session({ token, session }) {
      if (token.sub && session?.user) {
        // adding userId inside the session object
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role;
      }
      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }
      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email!;
        session.user.isOAuth = token.isOAuth as boolean;
      }
      return session;
    },
    async jwt({ token }) {
      // token inside the jwt & session callback are same . if i can change one of them then change in both happens

      if (!token.sub) {
        return token;
      }
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;
      const existingAccount = await getAccountByUserId(existingUser.id);
      token.isOAuth = !!existingAccount;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
      return token;
    },
  },
  session: { strategy: "jwt" }, // with prisma we doesn't have the support of edge so we have to use jwt strategy
  ...authConfig,
});
