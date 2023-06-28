import * as S from "./index.styles";
import { FeedDeleteButtonProps } from "./index.types";

export function FeedDeleteButton({ children, ...rest }: FeedDeleteButtonProps) {
  return <S.Wrapper {...rest}>{children}</S.Wrapper>;
}
