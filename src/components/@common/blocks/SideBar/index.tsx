"use client";

import * as S from "./index.styles";

const topics = ["Home", "Gaming", "Sports"];

export function SideBar() {
  return (
    <S.Wrapper>
      <S.TopicsWrapper>
        <S.Heading>토픽</S.Heading>
        {topics.map((topic, idx) => (
          <S.Topic key={idx} href={`/t/${topic}`}>
            {topic}
          </S.Topic>
        ))}
      </S.TopicsWrapper>
    </S.Wrapper>
  );
}
