"use client";

import * as S from "./index.styles";
import { CommentButtonProps } from "./index.types";

export function CommentButton({ children, ...rest }: CommentButtonProps) {
  return <S.Button {...rest}>{children}</S.Button>;
}
