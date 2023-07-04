"use client";

import { useRouter } from "next/navigation";

import { useRef, useState } from "react";

import * as S from "./index.styles";
import type { CommentProps } from "./index.types";

import { elapsedTime } from "@/utils/elapsedTime";

export function Comment({ comment }: CommentProps) {
  const router = useRouter();

  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const 입력높이조절 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.currentTarget.style.height = "auto";
    event.currentTarget.style.height =
      event.currentTarget.scrollHeight + 2 + "px";
  };

  const 댓글수정 = async () => {
    const res = await fetch(`/api/comment?id=${comment.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        content: inputRef.current?.value,
      }),
    });

    if (res.status === 201) {
      setIsEditButtonClicked(false);
      router.refresh();
    } else {
      alert("댓글 수정에 실패했습니다.");
      return;
    }
  };

  const 댓글삭제 = async () => {
    const res = await fetch(`/api/comment?id=${comment.id}`, {
      method: "delete",
    });

    if (res.status === 200) {
      router.refresh();
    } else {
      alert("댓글 삭제에 실패했습니다.");
      return;
    }
  };

  return (
    <S.Wrapper>
      <S.Header>
        <S.InfoWrapper>
          <S.Author>{comment.author}</S.Author>
          <S.CreatedAt>{`${elapsedTime(comment.createdAt)}`}</S.CreatedAt>
        </S.InfoWrapper>
        <S.ActionWrapper>
          {!isEditButtonClicked && (
            <S.EditButton
              onClick={() => {
                setIsEditButtonClicked(true);
              }}
            >
              수정
            </S.EditButton>
          )}
          <S.DeleteButton onClick={댓글삭제}>삭제</S.DeleteButton>
        </S.ActionWrapper>
      </S.Header>
      {isEditButtonClicked ? (
        <S.Body>
          <S.Input
            ref={inputRef}
            defaultValue={comment.content}
            onChange={입력높이조절}
          />
          <S.ButtonWrapper>
            <S.Button onClick={() => setIsEditButtonClicked(false)}>
              취소
            </S.Button>
            <S.Button onClick={댓글수정}>댓글 수정</S.Button>
          </S.ButtonWrapper>
        </S.Body>
      ) : (
        <S.Body>{comment.content}</S.Body>
      )}
    </S.Wrapper>
  );
}
