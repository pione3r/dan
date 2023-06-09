import { redirect } from "next/navigation";

import { getServerSession } from "next-auth";
import { getCsrfToken } from "next-auth/react";

import { authOptions } from "@/lib/authOptions";

import { SignInForm } from "@/components/SignInForm";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  const csrfToken = await getCsrfToken();

  if (session) redirect("/explore");

  return <SignInForm csrfToken={csrfToken} />;
}
