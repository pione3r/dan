import styled from "styled-components";

export const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const ImageWrapper = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Count = styled.div`
  font-size: 12px;
`;
