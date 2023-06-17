import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;

export const Body = styled.div`
  display: flex;
`;

export const ColumnLeft = styled.div`
  width: 100%;
`;

export const ColumnRight = styled.div`
  width: 100%;

  background-color: #fbfbfb;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;

  background-color: #fbfbfb;

  padding: 16px 30px;

  border-top: 1px solid #e5e5e5;

  width: 100%;

  position: fixed;
  left: 0px;
  bottom: 0px;

  @media screen and (max-width: 720px) {
    bottom: 0px;
  }
`;
