"use client";

import { useRouter } from "next/navigation";
import * as S from "./index.styles";

import { Profile } from "../../atoms/Profile";

export function Header() {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.HeaderLogo href="/">D&N</S.HeaderLogo>
      <S.SubWrapper>
        <S.Button onClick={() => router.push("/feed/edit")}>
          새 글 작성
        </S.Button>
        <Profile />
      </S.SubWrapper>
    </S.Wrapper>
  );
}
