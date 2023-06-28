import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 10px 30px;

  border-bottom: 1px solid #edeaea;

  background-color: #ffffff;

  user-select: none;

  position: sticky;
  top: 0px;
  left: 0px;

  z-index: 100;
`;

export const HeaderLogo = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  color: #000000;

  user-select: none;
`;

export const Button = styled.button`
  padding: 8px 16px;

  font-size: 16px;
  font-weight: 500;
  color: #000000;

  border-radius: 20px;

  background-color: #ffffff;

  border: 1.5px solid #000000;

  transition: all 0.1s ease-in;

  &:hover {
    background-color: #000000;
    color: #ffffff;

    cursor: pointer;
  }
`;
