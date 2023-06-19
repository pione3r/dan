import styled from "styled-components";

export const InputWrapper = styled.label<{ $isFocus: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 36px;

  cursor: text;

  border: ${(props) =>
    props.$isFocus
      ? "1px solid rgb(168, 168, 168)"
      : "1px solid rgb(219, 219, 219)"};

  background-color: rgb(250, 250, 250);
`;

export const Label = styled.span<{ $isFill: boolean }>`
  display: flex;
  align-items: center;

  height: 100%;

  position: absolute;
  left: 6px;

  font-size: 14px;
  color: rgb(115, 115, 115);

  background-color: transparent;

  user-select: none;

  transition: transform ease-out 0.1s;

  transform-origin: left;

  transform: ${(props) =>
    props.$isFill ? "scale(calc(10 / 12)) translateY(-10px)" : "none"};
`;

export const Input = styled.input<{ $isFill: boolean }>`
  border: none;
  outline: none;

  height: 100%;

  font-size: 16px;

  background-color: transparent;

  padding-left: 6px;

  transform-origin: left;

  transform: ${(props) =>
    props.$isFill ? "scale(calc(10 / 12)) translateY(8px)" : "none"};
`;
