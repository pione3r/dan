import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: relative;
  min-width: 620px;
  max-height: calc(100dvh - 124px);

  overflow-y: scroll;

  padding-right: 20px;

  &::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #000000; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent; /* 스크롤바 뒷 배경 색상 */

    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece:end {
    background-color: rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar-track-piece:start {
    background-color: rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }

  @media screen and (max-width: 720px) {
    min-width: 0px;
  }
`;

export const CardWrapper = styled(Link).attrs({ prefetch: false })`
  background-color: #ffffff;

  border: 1px solid #d9d9d9;
  border-radius: 16px;

  padding: 20px;

  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;

  transition: transform 0.1s ease-in;

  &:hover {
    transform: translateY(-4px);

    cursor: pointer;
  }
`;

export const CardHeader = styled.div`
  border-bottom: 1px solid #cccfd2;

  padding-bottom: 4px;

  font-size: 13px;
  line-height: 13px;
  color: #787c7e;

  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Author = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`;

export const CreatedAt = styled.div``;

export const Spacer = styled.div``;

export const CardBody = styled.div`
  height: 200px;

  @media screen and (max-width: 720px) {
    height: 100px;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;

  padding: 10px 0px;
`;

export const MaskedCardBody = styled.div`
  overflow: hidden;

  height: 100%;
  max-height: 100%;

  mask-image: linear-gradient(180deg, #000 60%, transparent);
  -webkit-mask-image: linear-gradient(180deg, #000 60%, transparent);
`;

export const Content = styled.div``;

export const LikesWrapper = styled.div`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  gap: 2px;

  margin-left: auto;
  margin-right: 10px;
`;
