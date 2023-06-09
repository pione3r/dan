import styled from "styled-components";

export const Button = styled.button`
  appearance: none;
  border: none;

  font-size: 16px;
  font-weight: 500;
  color: #ffffff;

  background-color: rgb(0, 149, 246);

  opacity: 1;

  border-radius: 8px;

  padding: 6px 12px;

  &:disabled {
    opacity: 0.7;
    pointer-events: none;
  }

  &:not(:disabled):hover {
    background-color: rgb(24, 119, 242);

    cursor: pointer;
  }
`;
