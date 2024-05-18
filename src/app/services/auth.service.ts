import { login } from "@/lib/api";
import { AuthInterface, loginUserPromps } from "@/models/auth.model";

export async function loginUser(data: loginUserPromps) {
  const res = (await login("/api/auth/local", data)) as AuthInterface;
  return res;
}
