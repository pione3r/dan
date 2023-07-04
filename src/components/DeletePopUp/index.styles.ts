import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100dvh;

  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #78787836;

  backdrop-filter: blur(10px);
`;

export const SubWrapper = styled.div`
  background-color: #ffffff;

  padding: 20px 30px;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Notice = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const DeleteButton = styled.button`
  border: none;

  padding: 10px 20px;

  font-size: 20px;
  font-weight: 500;
  color: #ffffff;

  border-radius: 10px;

  background-color: #000000;

  &:hover {
    cursor: pointer;
  }
`;

export const CancelButton = styled.button`
  border: none;

  padding: 10px 20px;

  font-size: 20px;
  font-weight: 500;
  color: #000000;

  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;
