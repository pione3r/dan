import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  border-bottom: 1px solid #e9ecef;
  padding-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Author = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const CreatedAt = styled.div`
  font-size: 13px;
  color: #495057;
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 6px;
`;

export const EditButton = styled.button`
  border: none;
  background: none;

  font-size: 13px;
  color: #495057;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background: none;

  font-size: 13px;
  color: #495057;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 18px;
  color: #212529;
  line-height: 27px;

  overflow-wrap: break-word;
`;

export const Input = styled.textarea`
  resize: none;
  outline: none;

  padding: 20px;

  border: 1px solid #dfdfdf;
  border-radius: 4px;

  width: 100%;
  min-height: 100px;

  font-size: 14px;
  line-height: 21px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  margin-left: auto;
`;

export const Button = styled.button`
  appearance: none;
  border: none;

  font-size: 16px;
  font-weight: 500;
  color: #ffffff;

  background-color: rgb(0, 0, 0);

  opacity: 1;

  border-radius: 8px;

  padding: 10px 12px;

  &:hover {
    background-color: rgb(59, 59, 59);
    cursor: pointer;
  }
`;
