"use client";

import { useState } from "react";

import { styled } from "styled-components";

import { Editor } from "@/components/Editor";
import { EditorViewer } from "@/components/EditorViewer";

export default function PostEditPage() {
  const [feedTitle, setFeedTitle] = useState("");

  const [html, setHtml] = useState("");

  return (
    <Wrapper>
      <ColumnLeft>
        <FeedTitle
          value={feedTitle}
          onChange={(e) => setFeedTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <Editor theme="snow" value={html} onChange={setHtml} />
        <ColumnLeftFooter>
          <SubmitButton
            onClick={async () => {
              const res = await fetch("/api/feed", {
                method: "post",
                body: JSON.stringify({
                  title: feedTitle,
                  body: html,
                }),
              });

              if (res.status === 201) {
                alert("피드 생성에 성공했습니다.");
              }

              if (res.status === 401) {
                alert("피드 생성에 실패했습니다.");
                return;
              }
            }}
          >
            작성완료
          </SubmitButton>
        </ColumnLeftFooter>
      </ColumnLeft>
      <ColumnRight>
        <EditorViewer value={html} />
      </ColumnRight>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const ColumnLeft = styled.div`
  width: 100%;
`;

const FeedTitle = styled.input`
  border: none;
  outline: none;

  font-size: 40px;

  padding: 20px;

  width: 100%;
`;

const ColumnLeftFooter = styled.div`
  display: flex;

  background-color: #fbfbfb;

  padding: 16px 30px;
`;

const SubmitButton = styled.button`
  border: none;

  margin-left: auto;

  padding: 10px 20px;

  font-size: 20px;
  font-weight: 500;
  color: #ffffff;

  border-radius: 10px;

  background-color: #000000;

  &:hover {
    cursor: pointer;
  }
`;

const ColumnRight = styled.div`
  width: 100%;

  background-color: #fbfbfb;
`;
