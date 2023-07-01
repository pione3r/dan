import { useState } from "react";
import * as S from "./index.styles";

export function Profile() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <S.Wrapper onClick={() => setIsClicked((prev) => !prev)}>
      <S.ProfileImageWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z" />
        </svg>
      </S.ProfileImageWrapper>
      <S.DropdownArrowImageWrapper $isClicked={isClicked}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M480-360 280-559h400L480-360Z" />
        </svg>
      </S.DropdownArrowImageWrapper>
      {isClicked && (
        <S.DropdownWrapper onClick={(e) => e.stopPropagation()}>
          <S.DropdownButton>내 글 보기</S.DropdownButton>
          <S.DropdownButton>로그아웃</S.DropdownButton>
        </S.DropdownWrapper>
      )}
    </S.Wrapper>
  );
}
