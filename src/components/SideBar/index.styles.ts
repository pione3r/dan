import styled from "styled-components";

import Link from "next/link";

export const Wrapper = styled.div`
  border-right: 1px solid #edeaea;

  min-width: 280px;
  min-height: 100vh;

  position: fixed;
  top: 0px;
  left: 0px;
`;

export const Heading = styled.div`
  font-size: 14px;
  color: #878a8c;

  padding: 10px 10px 10px 20px;
`;

export const TopicsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 67px;
`;

export const Topic = styled(Link)`
  font-size: 16px;
  color: #1c1c1c;

  padding: 10px 10px 10px 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
