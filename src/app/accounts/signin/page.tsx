import { SignInForm } from "@/components/@로그인-회원가입/organisms/SignInForm";

import { getCsrfToken } from "next-auth/react";

export default async function SignInPage() {
  const csrfToken = await getCsrfToken();

  return <SignInForm csrfToken={csrfToken} />;
}
