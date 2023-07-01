import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DropdownArrowImageWrapper = styled.div<{ $isClicked: boolean }>`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;

  transform: ${(props) => props.$isClicked && "rotate(180deg)"};
`;

export const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #ffffff;

  position: absolute;
  top: 60px;
  right: 0px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
`;

export const DropdownButton = styled.div`
  width: 180px;

  font-size: 16px;
  color: #212529;

  padding: 14px 16px;

  &:hover {
    background-color: #f8f9fa;
    font-weight: 600;

    text-decoration: underline;
  }
`;
