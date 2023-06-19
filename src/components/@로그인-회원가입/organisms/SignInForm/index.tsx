"use client";

import { useState } from "react";

import { signIn } from "next-auth/react";

import * as S from "./index.styles";

import { FormInput } from "../../atoms/FormInput";
import { FormButton } from "../../atoms/FormButton";

export function SignInForm({ csrfToken }: { csrfToken: string | undefined }) {
  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <S.Wrapper>
      <S.FormWrapper method="post">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

        <FormInput
          label="아이디"
          type="text"
          name="username"
          onChange={(value) =>
            setUser((prev) => ({ ...prev, username: value }))
          }
        />

        <FormInput
          label="비밀번호"
          type="password"
          name="username"
          onChange={(value) =>
            setUser((prev) => ({ ...prev, password: value }))
          }
        />

        <FormButton
          disabled={!user.username || !user.password}
          type="submit"
          onClick={() => signIn("credentials", { ...user })}
        >
          로그인
        </FormButton>
      </S.FormWrapper>

      <S.FooterWrapper>
        계정이 없으신가요?
        <S.LinkButton href="/accounts/signup">가입하기</S.LinkButton>
      </S.FooterWrapper>
    </S.Wrapper>
  );
}
