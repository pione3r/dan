"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import * as S from "./index.styles";
import type { FeedProps } from "./index.types";

import { elapsedTime } from "@/utils/elapsedTime";

import { FeedViewer } from "../../blocks/FeedViewer";
import { CommentButton } from "../../atoms/CommentButton";

import { useSession } from "next-auth/react";

export function Feed({ feed }: FeedProps) {
  const router = useRouter();

  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  const session = useSession();

  const [isCommentEditButtonClicked, setIsCommentEditButtonClicked] =
    useState(false);

  const commentEditRef = useRef<HTMLTextAreaElement>(null);

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
          ref={commentInputRef}
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
                content: commentInputRef.current?.value,
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
              <S.CommentSubWrapper>
                <S.CommentAuthor>{comment.author}</S.CommentAuthor>
                <S.CommentCreatedAt>{`${elapsedTime(
                  comment.createdAt
                )}`}</S.CommentCreatedAt>
              </S.CommentSubWrapper>
              {(session.data?.user.username === feed.author ||
                session.data?.user.username === comment.author) && (
                <S.CommentModifyWrapper>
                  <S.CommentEdit
                    onClick={() => {
                      setIsCommentEditButtonClicked(true);
                    }}
                  >
                    수정
                  </S.CommentEdit>
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
                </S.CommentModifyWrapper>
              )}
            </S.CommentHeader>
            {isCommentEditButtonClicked ? (
              <>
                <S.CommentInput
                  ref={commentEditRef}
                  defaultValue={comment.content}
                />
                <div
                  style={{ marginLeft: "auto", display: "flex", gap: "10px" }}
                >
                  <CommentButton
                    onClick={() => setIsCommentEditButtonClicked(false)}
                  >
                    취소
                  </CommentButton>
                  <CommentButton
                    onClick={async () => {
                      const res = await fetch(`/api/comment?id=${comment.id}`, {
                        method: "PATCH",
                        body: JSON.stringify({
                          content: commentEditRef.current?.value,
                        }),
                      });

                      if (res.status === 201) {
                        setIsCommentEditButtonClicked(false);
                        router.refresh();
                      } else {
                        alert("댓글 생성에 실패했습니다.");
                        return;
                      }
                    }}
                  >
                    댓글 수정
                  </CommentButton>
                </div>
              </>
            ) : (
              <S.CommentBody>{comment.content}</S.CommentBody>
            )}
          </S.CommentWrapper>
        ))}
      </S.Footer>
    </S.Wrapper>
  );
}
