import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });
  const user = session?.user.email;

  return <div className="">{user}</div>;
}
