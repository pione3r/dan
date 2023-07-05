"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import { useSession } from "next-auth/react";

import * as S from "./index.styles";
import type { FeedProps } from "./index.types";

import { elapsedTime } from "@/utils/elapsedTime";

import { DeletePopUp } from "../DeletePopUp";
import { WrappedReactQuill } from "@/components/@common/atoms/WrappedReactQuill";
import { useCheckUser } from "@/hooks/useCheckUser";

export function Feed({ feed }: FeedProps) {
  const router = useRouter();

  const session = useSession();

  const [isDeletePopUpOpen, setIsDeletePopUpOpen] = useState(false);

  const isUser = useCheckUser();

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
              <S.DeleteButton
                onClick={() => {
                  setIsDeletePopUpOpen(true);
                  document.body.style.overflow = "hidden";
                }}
              >
                삭제
              </S.DeleteButton>
            )}
            {isUser && (
              <S.LikeButtonWrapper
                onClick={async () => {
                  const res = await fetch(`/api/feed/${feed.id}/like`, {
                    method: "post",
                    body: JSON.stringify({}),
                  });

                  if (res.status === 201) {
                    router.refresh();
                  } else {
                    alert("좋아요 실패");
                    return;
                  }
                }}
              >
                <S.ImageWrapper>
                  {feed.isLike ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 -960 960 960"
                      width="48"
                      fill="red"
                    >
                      <path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="48"
                      viewBox="0 -960 960 960"
                      width="48"
                    >
                      <path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z" />
                    </svg>
                  )}
                </S.ImageWrapper>
                <S.Count>{feed.likes}</S.Count>
              </S.LikeButtonWrapper>
            )}
          </S.ButtonWrapper>
        </S.SubHeader>
      </S.Header>
      <S.Body>
        <WrappedReactQuill
          className="feed-viewer"
          theme="bubble"
          value={feed.content}
          readOnly
        />
      </S.Body>
      {isDeletePopUpOpen && (
        <DeletePopUp
          feedId={feed.id}
          취소={() => setIsDeletePopUpOpen(false)}
        />
      )}
    </S.Wrapper>
  );
}
