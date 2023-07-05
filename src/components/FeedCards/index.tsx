"use client";

import { useEffect, useRef } from "react";

import * as S from "./index.styles";
import type { FeedCardProps } from "./index.types";

import { elapsedTime } from "@/utils/elapsedTime";

import { WrappedReactQuill } from "@/components/@common/atoms/WrappedReactQuill";

import { scrollState } from "@/components/FeedCards/scrollState";
import { useRecoilState } from "recoil";

export function FeedCards({ feeds }: FeedCardProps) {
  const cardsRef = useRef<HTMLDivElement>(null);

  const [scroll, setScroll] = useRecoilState(scrollState);

  useEffect(() => {
    if (scroll !== 0) cardsRef.current?.scrollTo({ top: scroll });
  }, [scroll]);

  const sortFeedsByCreatedAt = feeds.sort(
    (b, a) =>
      new Date(a.createdAt).getMilliseconds() -
      new Date(b.createdAt).getMilliseconds()
  );

  return (
    <S.Wrapper ref={cardsRef}>
      {sortFeedsByCreatedAt.map((feed) => (
        <S.CardWrapper
          href={`/feed/${feed.id}`}
          key={feed.id}
          onClick={() => setScroll(cardsRef.current?.scrollTop!)}
        >
          <S.CardHeader>
            <S.CreatedAt>Posted by</S.CreatedAt>
            <S.Author>{feed.author}</S.Author>
            <S.Spacer>·</S.Spacer>
            <S.CreatedAt>{`${elapsedTime(feed.createdAt)}`}</S.CreatedAt>
            <S.LikesWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 -960 960 960"
                width="48"
                fill="#787c7e"
              >
                <path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" />
              </svg>
              {feed.likes}
            </S.LikesWrapper>
          </S.CardHeader>
          <S.Title>{feed.title}</S.Title>
          <S.CardBody>
            <S.MaskedCardBody>
              <S.Content>
                <WrappedReactQuill
                  className="card-viewer"
                  theme="bubble"
                  value={feed.content}
                  readOnly
                />
              </S.Content>
            </S.MaskedCardBody>
          </S.CardBody>
        </S.CardWrapper>
      ))}
    </S.Wrapper>
  );
}
