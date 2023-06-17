"use client";

import * as S from "./index.styles";
import type { FeedCardProps } from "./index.types";

import { elapsedTime } from "@/utils/elapsedTime";

import { Viewer } from "../../blocks/Viewer";

export function FeedCard({ feed }: FeedCardProps) {
  return (
    <S.Wrapper>
      <S.CardHeader>
        <S.CreatedAt>Posted by</S.CreatedAt>
        <S.Author>{feed.author}</S.Author>
        <S.CreatedAt>{`${elapsedTime(feed.createdAt)}`}</S.CreatedAt>
      </S.CardHeader>
      <S.Title>{feed.title}</S.Title>
      <S.CardBody>
        <S.MaskedCardBody>
          <S.Content>
            <Viewer value={feed.body} />
          </S.Content>
        </S.MaskedCardBody>
      </S.CardBody>
    </S.Wrapper>
  );
}
