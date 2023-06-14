"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import { styled } from "styled-components";

import { Editor } from "@/components/피드생성/blocks/Editor";
import { Viewer } from "@/components/피드생성/blocks/Viewer";

import { FeedTitleInput } from "@/components/피드생성/atoms/FeedTitleInput";
import { SubmitButton } from "@/components/피드생성/atoms/SubmitButton";

export default function PostEditPage() {
  const router = useRouter();

  const [feedTitle, setFeedTitle] = useState("");

  const [html, setHtml] = useState("");

  return (
    <Wrapper>
      <Header>
        <FeedTitleInput
          value={feedTitle}
          onChange={(e) => setFeedTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
      </Header>
      <Body>
        <ColumnLeft>
          <Editor value={html} onChange={setHtml} />
        </ColumnLeft>
        <ColumnRight>
          <Viewer value={html} />
        </ColumnRight>
      </Body>
      <Footer>
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
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;

export const Body = styled.div`
  display: flex;
`;

const ColumnLeft = styled.div`
  width: 100%;
`;

const ColumnRight = styled.div`
  width: 100%;

  background-color: #fbfbfb;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

const Footer = styled.div`
  display: flex;

  background-color: #fbfbfb;

  padding: 16px 30px;

  border-top: 1px solid #e5e5e5;

  width: 100%;

  position: fixed;
  left: 0px;
  bottom: 0px;

  @media screen and (max-width: 720px) {
    bottom: 0px;
  }
`;
