import { User } from "@/models/auth.model";
import "next-auth";

declare module "next-auth" {
  interface Session {
    jwt: string;
    user: User;
    picture: string;
  }

  interface User {
    jwt: string;
    user: User;
    picture: string;
  }
}
