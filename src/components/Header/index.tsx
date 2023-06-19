"use client";

import { useRouter } from "next/navigation";
import * as S from "./index.styles";

export function Header() {
  const router = useRouter();

  return (
    <S.Wrapper>
      <S.HeaderLogo href="/">D&N</S.HeaderLogo>
      <S.Button onClick={() => router.push("/feed/edit")}>새 글 작성</S.Button>
    </S.Wrapper>
  );
}
