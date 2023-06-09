"use client";

import * as S from "./index.styles";
import { FormButtonProps } from "./index.types";

export function FormButton({ children, ...rest }: FormButtonProps) {
  return <S.Button {...rest}>{children}</S.Button>;
}
