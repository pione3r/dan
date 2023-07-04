import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  right: -30px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const SubWrapper = styled.div`
  position: fixed;

  padding: 20px;

  border-radius: 12px;

  background-color: #f8f9fa;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LikeButtonWrapper = styled.button`
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
