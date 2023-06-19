import * as S from "./index.styles";
import { ExitButtonProps } from "./index.types";

export function ExitButton({ children, ...rest }: ExitButtonProps) {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
}
