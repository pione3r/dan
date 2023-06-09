import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

import { SignUpForm } from "@/components/SignUpForm";

export default async function SignUpPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/explore");

  return <SignUpForm />;
}
