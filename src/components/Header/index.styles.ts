import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding: 10px 30px;

  border-bottom: 1px solid #edeaea;

  background-color: #ffffff;

  user-select: none;

  position: fixed;
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
