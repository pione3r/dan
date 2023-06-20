import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin: 100px auto;

  max-width: 680px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  word-break: keep-all;
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
