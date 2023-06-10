import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 10px 30px;

  border-bottom: 1px solid #dbdbdb;

  user-select: none;
`;

export const HeaderLogo = styled(Link)`
  font-size: 30px;
  font-weight: 700;
  color: #000000;

  user-select: none;
`;
