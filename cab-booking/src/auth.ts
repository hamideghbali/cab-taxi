import NextAuth from "next-auth";
// import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import Credentials from "next-auth/providers/credentials";
import Password from "@/utils/password";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials: any) => {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // logic to salt and hash password
        const match = Password.match(
          credentials.password,
          user.hashedPassword as string,
          user.salt as string
        );

        if (!match) {
          throw new Error("Email and Password not matched");
        }

        const { hashedPassword, salt, ...rest } = user;
        console.log("rest: ", rest);

        // return user object with the their profile data
        return rest;
      },
    }),
  ],
});