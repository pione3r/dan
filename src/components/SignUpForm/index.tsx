"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import * as S from "./index.styles";

import { FormInput } from "../FormInput";
import { FormButton } from "../FormButton";

export function SignUpForm() {
  const router = useRouter();

  const [newUser, setNewUser] = useState({ username: "", password: "" });

  const [passwordCheck, setPasswordCheck] = useState("");

  return (
    <S.Wrapper>
      <S.FormWrapper method="post">
        <S.IdFormInputWrapper>
          <FormInput
            label="아이디"
            type="text"
            name="username"
            onChange={(value) =>
              setNewUser((prev) => ({ ...prev, username: value }))
            }
          />
          <S.IdValidationButton
            type="button"
            onClick={async () => {
              const response = await fetch(
                `/api/accounts/signup?username=${newUser.username}`
              );

              if (response.status === 200) {
                alert("사용 가능한 아이디입니다.");
                return;
              }

              if (response.status === 409) {
                alert("이미 존재하는 아이디입니다.");
                return;
              }
            }}
          >
            아이디 확인
          </S.IdValidationButton>
        </S.IdFormInputWrapper>

        <FormInput
          label="비밀번호"
          type="password"
          name="username"
          onChange={(value) =>
            setNewUser((prev) => ({ ...prev, password: value }))
          }
        />

        <FormInput
          label="비밀번호 확인"
          type="password"
          name="username"
          onChange={(value) => setPasswordCheck(value)}
        />

        <FormButton
          disabled={!newUser.username || !newUser.password || !passwordCheck}
          type="submit"
          onClick={async (event) => {
            event.preventDefault();

            if (passwordCheck !== newUser.password) {
              alert("비밀번호가 다릅니다.");
              return;
            }

            const response = await fetch("/api/accounts/signup", {
              method: "POST",
              body: JSON.stringify(newUser),
            });

            if (response.status === 201) {
              alert("아이디 생성에 성공했습니다.");
              router.push("/");
            } else {
              alert("아이디 생성에 실패했습니다.");
              setNewUser({ username: "", password: "" });
              setPasswordCheck("");
              window.location.reload();
            }
          }}
        >
          가입하기
        </FormButton>
      </S.FormWrapper>
      <S.FooterWrapper>
        계정이 있으신가요?<S.LinkButton href="/accounts/signin">로그인</S.LinkButton>
      </S.FooterWrapper>
    </S.Wrapper>
  );
}
