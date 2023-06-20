import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  margin: 150px auto;

  max-width: 680px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  border-bottom: 1px solid #e9ecef;

  padding-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 40px;
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

export const Body = styled.div`
  border-bottom: 1px solid #e9ecef;

  padding-bottom: 20px;
`;
