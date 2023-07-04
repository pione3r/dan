"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import * as S from "./index.styles";

import { Editor } from "./Editor";
import { WrappedReactQuill } from "@/components/@common/atoms/WrappedReactQuill";

export function FeedEdit() {
  const router = useRouter();

  const [feedTitle, setFeedTitle] = useState("");

  const [html, setHtml] = useState("");

  return (
    <S.Wrapper>
      <S.SubWrapper>
        <S.Header>
          <S.FeedTitleInput
            value={feedTitle}
            onChange={(e) => setFeedTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </S.Header>
        <S.Body>
          <S.ColumnLeft>
            <Editor value={html} onChange={setHtml} />
          </S.ColumnLeft>
          <S.ColumnRight>
            <WrappedReactQuill
              className="viewer"
              theme="bubble"
              value={html}
              readOnly
            />
          </S.ColumnRight>
        </S.Body>
        <S.Footer>
          <S.ExitButton onClick={() => router.push("/")}>나가기</S.ExitButton>
          <S.SubmitButton
            onClick={async () => {
              const res = await fetch("/api/feed", {
                method: "post",
                body: JSON.stringify({
                  title: feedTitle,
                  content: html,
                }),
              });

              if (res.status === 201) {
                alert("피드 생성에 성공했습니다.");
                router.push("/");
                router.refresh();
              }

              if (res.status === 401) {
                alert("피드 생성에 실패했습니다.");
                return;
              }
            }}
          >
            작성완료
          </S.SubmitButton>
        </S.Footer>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
