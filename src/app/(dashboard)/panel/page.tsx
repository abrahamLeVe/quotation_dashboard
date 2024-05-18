import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

export default async function Page() {
  const session = await getServerSession(options);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
