import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  left: -120px;
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

export const LikeButton = styled.button`
  background: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Count = styled.div`
  font-size: 12px;
  padding-right: 1px;
`;
