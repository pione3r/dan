"use client";

import * as S from "./index.styles";

import { signOut } from "next-auth/react";

export function Header() {
  return (
    <S.Wrapper>
      <S.HeaderLogo href="/">D&N</S.HeaderLogo>
      <button onClick={() => signOut()}>로그아웃</button>
    </S.Wrapper>
  );
}
