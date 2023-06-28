import * as S from "./index.styles";

import { CancelButton } from "../../atoms/CancelButton";
import { FeedDeleteButton } from "../../atoms/FeedDeleteButton";
import { useRouter } from "next/navigation";

export function DeletePopUp({
  feedId,
  취소,
}: {
  feedId: string;
  취소: () => void;
}) {
  const router = useRouter();

  return (
    <S.Wrapper onClick={취소}>
      <S.SubWrapper onClick={(e) => e.stopPropagation()}>
        <S.Notice>정말로 삭제하시겠습니까?</S.Notice>
        <S.ButtonWrapper>
          <CancelButton onClick={취소}>취소</CancelButton>
          <FeedDeleteButton
            onClick={async () => {
              const res = await fetch(`/api/feed/${feedId}`, {
                method: "delete",
              });

              if (res.status === 200) {
                document.body.removeAttribute("style");
                router.replace("/");
                router.refresh();
              } else {
                alert("피드 삭제에 실패했습니다.");
                return;
              }
            }}
          >
            삭제하기
          </FeedDeleteButton>
        </S.ButtonWrapper>
      </S.SubWrapper>
    </S.Wrapper>
  );
}
