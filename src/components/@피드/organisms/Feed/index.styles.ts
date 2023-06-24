import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  word-break: keep-all;

  @media screen and (max-width: 720px) {
    font-size: 30px;
  }
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  font-weight: 500;
`;

export const Author = styled.div``;

export const CreatedAt = styled.div`
  font-size: 14px;
  color: #495057;
`;

export const Spacer = styled.div``;

export const Body = styled.div`
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;

  padding-top: 20px;
  padding-bottom: 20px;

  min-height: 100px;
`;
