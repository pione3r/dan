import { SignInForm } from "@/components/SignInForm";

import { getServerSession } from "next-auth";
import { getCsrfToken } from "next-auth/react";

import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  const csrfToken = await getCsrfToken();

  if (session) redirect("/explore");

  return <SignInForm csrfToken={csrfToken} />;
}
