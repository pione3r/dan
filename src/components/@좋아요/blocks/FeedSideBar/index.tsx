"use client";

import * as S from "./index.styles";

import type { Feed } from "@/types/general";
import { LikeButton } from "../../atoms/LikeButton";

export function FeedSideBar({ feed }: { feed: Feed }) {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <LikeButton feed={feed} />
      </S.SubWrapper>
    </S.Wrapper>
  );
}
