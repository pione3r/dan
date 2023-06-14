import * as S from "./index.styles";
import { SubmitButtonProps } from "./index.types";

export function SubmitButton({ children, ...rest }: SubmitButtonProps) {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
}
