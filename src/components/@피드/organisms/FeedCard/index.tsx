"use client";

import * as S from "./index.styles";
import type { FeedCardProps } from "./index.types";

import { elapsedTime } from "@/utils/elapsedTime";

import { CardViewer } from "../../blocks/CardViewer";

export function FeedCard({ feed }: FeedCardProps) {
  return (
    <S.Wrapper href={`/feed/${feed.id}`}>
      <S.CardHeader>
        <S.CreatedAt>Posted by</S.CreatedAt>
        <S.Author>{feed.author}</S.Author>
        <S.Spacer>·</S.Spacer>
        <S.CreatedAt>{`${elapsedTime(feed.createdAt)}`}</S.CreatedAt>
      </S.CardHeader>
      <S.Title>{feed.title}</S.Title>
      <S.CardBody>
        <S.MaskedCardBody>
          <S.Content>
            <CardViewer value={feed.content} />
          </S.Content>
        </S.MaskedCardBody>
      </S.CardBody>
    </S.Wrapper>
  );
}
