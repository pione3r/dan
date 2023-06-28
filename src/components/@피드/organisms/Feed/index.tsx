"use client";

import * as S from "./index.styles";
import type { FeedProps } from "./index.types";

import { elapsedTime } from "@/utils/elapsedTime";

import { FeedViewer } from "../../blocks/FeedViewer";
import { LikeButton } from "../../atoms/LikeButton";
import { useSession } from "next-auth/react";

export function Feed({ feed }: FeedProps) {
  const session = useSession();
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{feed.title}</S.Title>
        <S.SubHeader>
          <S.Author>{feed.author}</S.Author>
          <S.Spacer>·</S.Spacer>
          <S.CreatedAt>{`${elapsedTime(feed.createdAt)}`}</S.CreatedAt>
          <S.ButtonWrapper>
            {session.data?.user.username === feed.author && (
              <S.DeleteButton>삭제</S.DeleteButton>
            )}
            <LikeButton feed={feed} />
          </S.ButtonWrapper>
        </S.SubHeader>
      </S.Header>
      <S.Body>
        <FeedViewer value={feed.content} />
      </S.Body>
    </S.Wrapper>
  );
}
