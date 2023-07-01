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

