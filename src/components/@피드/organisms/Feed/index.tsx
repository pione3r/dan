"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

import * as S from "./index.styles";
import type { FeedProps } from "./index.types";

import { elapsedTime } from "@/utils/elapsedTime";

import { FeedViewer } from "../../blocks/FeedViewer";
import { CommentButton } from "../../atoms/CommentButton";

export function Feed({ feed }: FeedProps) {
  const router = useRouter();

  const commentRef = useRef<HTMLTextAreaElement>(null);

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
        <S.CommentCount>{`${feed.comments.length}개의 댓글`}</S.CommentCount>
        <S.CommentInput
          ref={commentRef}
          placeholder="댓글을 작성하세요"
          onChange={(e) => {
            e.currentTarget.style.height = e.currentTarget.scrollHeight + "px";
          }}
        />
        <CommentButton
          onClick={async () => {
            const res = await fetch("/api/comment", {
              method: "post",
              body: JSON.stringify({
                feedId: feed.id,
                content: commentRef.current?.value,
              }),
            });

            if (res.status === 201) {
              router.refresh();
            } else {
              alert("댓글 생성에 실패했습니다.");
              return;
            }
          }}
        >
          댓글 작성
        </CommentButton>
        {feed.comments.map((comment) => (
          <S.CommentWrapper key={comment.id}>
            <S.CommentHeader>
              <S.CommentAuthor>{comment.author}</S.CommentAuthor>
              <S.CommentSubWrapper>
                <S.CommentCreatedAt>{`${elapsedTime(
                  comment.createdAt
                )}`}</S.CommentCreatedAt>
                <S.CommentDelete
                  onClick={async () => {
                    const res = await fetch(`/api/comment?id=${comment.id}`, {
                      method: "delete",
                    });

                    if (res.status === 200) {
                      router.refresh();
                    } else {
                      alert("댓글 삭제에 실패했습니다.");
                      return;
                    }
                  }}
                >
                  삭제
                </S.CommentDelete>
              </S.CommentSubWrapper>
            </S.CommentHeader>
            <S.CommentBody>{comment.content}</S.CommentBody>
          </S.CommentWrapper>
        ))}
      </S.Footer>
    </S.Wrapper>
  );
}
