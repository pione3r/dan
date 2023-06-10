import { SignInForm } from "@/components/SignInForm";

import { getCsrfToken } from "next-auth/react";

export default async function SignInPage() {
  const csrfToken = await getCsrfToken();

  return <SignInForm csrfToken={csrfToken} />;
}
