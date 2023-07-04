import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;

  padding: 20px;

  @media screen and (max-width: 1024px) {
    padding: 0px;

    align-items: normal;
    justify-content: normal;
  }
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  box-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.25);

  border-radius: 16px;

  overflow: hidden;

  @media screen and (max-width: 720px) {
    border-radius: 0px;
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;

export const Body = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ColumnLeft = styled.div`
  width: 100%;

  background-color: #ffffff;
`;

export const ColumnRight = styled.div`
  width: 100%;

  background-color: #fbfbfb;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: #fbfbfb;

  padding: 16px 30px;

  border-top: 1px solid #e5e5e5;

  width: 100%;

  left: 0px;
  bottom: 0px;

  @media screen and (max-width: 720px) {
    bottom: 0px;
  }
`;

export const ExitButton = styled.button`
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

export const FeedTitleInput = styled.input`
  border: none;
  outline: none;

  font-size: 40px;

  padding: 16px 20px;

  width: 100%;
`;

export const SubmitButton = styled.button`
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
