import styled from "styled-components";

export const Wrapper = styled.button`
  display: none;

  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    gap: 4px;

    margin-left: auto;
    margin-right: 10px;
  }
`;

export const ImageWrapper = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 960px) {
    width: 20px;
    height: 20px;
  }
`;

export const Count = styled.div`
  font-size: 12px;
`;
