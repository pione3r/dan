"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import * as S from "./index.styles";

import { FeedTitleInput } from "../../atoms/FeedTitleInput";
import { SubmitButton } from "../../atoms/SubmitButton";
import { ExitButton } from "../../atoms/ExitButton";

import { Editor } from "../../blocks/Editor";
import { Viewer } from "../../blocks/Viewer";

export function FeedEdit() {
  const router = useRouter();

  const [feedTitle, setFeedTitle] = useState("");

  const [html, setHtml] = useState("");

  return (
    <S.Wrapper>
      <S.Header>
        <FeedTitleInput
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
          <Viewer value={html} />
        </S.ColumnRight>
      </S.Body>
      <S.Footer>
        <ExitButton onClick={() => router.push("/")}>나가기</ExitButton>
        <SubmitButton
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
            }

            if (res.status === 401) {
              alert("피드 생성에 실패했습니다.");
              return;
            }
          }}
        >
          작성완료
        </SubmitButton>
      </S.Footer>
    </S.Wrapper>
  );
}
