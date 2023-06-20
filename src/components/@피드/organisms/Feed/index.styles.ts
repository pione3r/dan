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

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CommentCount = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #212529;
`;

export const CommentInput = styled.textarea`
  resize: none;
  outline: none;

  padding: 20px;

  border: 1px solid #dfdfdf;
  border-radius: 4px;

  width: 100%;
  min-height: 100px;

  font-size: 14px;
  line-height: 21px;

  overflow: hidden;
`;
