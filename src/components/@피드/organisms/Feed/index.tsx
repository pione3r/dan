"use client";

import * as S from "./index.styles";
import type { FeedProps } from "./index.types";

import { elapsedTime } from "@/utils/elapsedTime";

import { FeedViewer } from "../../blocks/FeedViewer";

import { CommentContainer } from "@/components/@댓글/organisms/CommentContainer";

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
        <FeedViewer value={feed.content} />
      </S.Body>
      <S.Footer>
        <CommentContainer feedId={feed.id} comments={feed.comments} />
      </S.Footer>
    </S.Wrapper>
  );
}
