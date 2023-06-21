import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Count = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #212529;
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
