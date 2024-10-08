import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // console.log("token middleware ", token);
      return token?.role === "Authenticated" || token?.role === "Admin";
    },
  },
  pages: {
    signIn: "/?error=CredentialsSignin",
  },
});

export const config = { matcher: ["/panel/:path*"] };
