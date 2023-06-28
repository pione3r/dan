import * as S from "./index.styles";
import { CancelButtonProps } from "./index.types";

export function CancelButton({ children, ...rest }: CancelButtonProps) {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
}
