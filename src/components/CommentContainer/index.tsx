"use client";

import { useRouter } from "next/navigation";

import { useRef } from "react";

import * as S from "./index.styles";
import type { CommentContainerProps } from "./index.types";

import { Comment } from "./Comment";
import { useCheckUser } from "@/hooks/useCheckUser";

export function CommentContainer({ feedId, comments }: CommentContainerProps) {
  const router = useRouter();

  const inputRef = useRef<HTMLTextAreaElement>(null);

  const 입력높이조절 = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.currentTarget.style.height = "auto";
    event.currentTarget.style.height =
      event.currentTarget.scrollHeight + 2 + "px";
  };

  const 댓글추가 = async () => {
    const res = await fetch("/api/comment", {
      method: "post",
      body: JSON.stringify({
        feedId: feedId,
        content: inputRef.current?.value,
      }),
    });

    if (res.status === 201) {
      router.refresh();
    } else {
      alert("댓글 생성에 실패했습니다.");
      return;
    }
  };

  const isUser = useCheckUser();

  return (
    <S.Wrapper>
      <S.Count>{`${comments.length}개의 댓글`}</S.Count>
      {isUser && (
        <>
          <S.Input
            ref={inputRef}
            placeholder="댓글을 작성하세요"
            rows={1}
            onChange={입력높이조절}
          />
          <S.Button onClick={댓글추가}>댓글 작성</S.Button>
        </>
      )}

      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </S.Wrapper>
  );
}
