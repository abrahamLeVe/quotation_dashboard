import { loginUser } from "@/app/services/auth.service";
import { getUserFromApi } from "@/lib/api";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsProviderConfig = {
  name: "Credentials",
  credentials: {
    email: {
      label: "email",
      type: "email",
    },
    password: { label: "Password", type: "password" },
  },
  async authorize(
    credentials: Record<"email" | "password", string> | undefined
  ) {
    try {
      const data = {
        identifier: credentials!.email,
        password: credentials!.password,
      };
      const user = await loginUser(data);
      if (user?.jwt) {
        return user as any;
      }
    } catch (e) {
      console.log("errorNextAuth: ", e);
      return null;
    }
  },
};

export const options: NextAuthOptions = {
  providers: [CredentialsProvider(credentialsProviderConfig)],

  callbacks: {
    async jwt({ token, user, account, profile }) {
      try {
        if (user?.jwt) {
          const userData = await getUserFromApi(user.jwt);
          token.accessToken = user.jwt;
          token.userId = userData?.id;
          token.name = userData?.username;
          token.email = userData?.email;
          token.role = userData?.role.name;
        }
      } catch (error) {
        console.error("Error processing JWT:", error);
      }
      return token;
    },

    async session({ session, token, user }) {
      session.user = token as any;
      return session;
    },
  },

  pages: {
    signIn: "/",
    error: "/",
  },
};
