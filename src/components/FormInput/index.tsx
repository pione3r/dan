"use client";

import { useState } from "react";

import * as S from "./index.styles";
import type { FormInputProps } from "./index.types";

export function FormInput({ label, type, name, onChange }: FormInputProps) {
  const [value, setValue] = useState("");

  const [isFocus, setIsFocus] = useState(false);

  return (
    <S.InputWrapper $isFocus={isFocus}>
      <S.Label $isFill={value !== ""}>{label}</S.Label>
      <S.Input
        $isFill={value !== ""}
        aria-label={label}
        type={type}
        name={name}
        value={value}
        onChange={(event) => {
          const value = event.target.value;
          setValue(value);
          onChange(value);
        }}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        autoComplete="false"
      />
    </S.InputWrapper>
  );
}
