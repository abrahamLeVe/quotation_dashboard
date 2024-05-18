import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Page() {
  const session = await getServerSession(options);
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
