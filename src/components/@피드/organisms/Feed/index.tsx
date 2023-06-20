"use client";

import * as S from "./index.styles";
import type { FeedProps } from "./index.types";

import { elapsedTime } from "@/utils/elapsedTime";

import { FeedViewer } from "../../blocks/FeedViewer";
import { CommentButton } from "../../atoms/CommentButton";

export function Feed({ feed }: FeedProps) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{feed.title}</S.Title>
        <S.SubHeader>
          <S.Author>{feed.author}</S.Author>
          <S.Spacer>·</S.Spacer>
          <S.CreatedAt>{`${elapsedTime(feed.createdAt)}`}</S.CreatedAt>
        </S.SubHeader>
      </S.Header>
      <S.Body>
        <FeedViewer value={feed.body} />
      </S.Body>
      <S.Footer>
        <S.CommentCount>{`0개의 댓글`}</S.CommentCount>
        <S.CommentInput
          placeholder="댓글을 작성하세요"
          onChange={(e) => {
            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
          }}
        />
        <CommentButton>댓글 작성</CommentButton>
      </S.Footer>
    </S.Wrapper>
  );
}
